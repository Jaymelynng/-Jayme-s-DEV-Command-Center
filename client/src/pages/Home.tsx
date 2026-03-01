/*
 * DEV Command Center — Multi-Platform Dashboard
 * ROSE / STONE DIMENSION SYSTEM
 * Layer 0 (Stage):     #2F2E2E
 * Layer 1 (Container): #B58F8F
 * Layer 2 (Panel):     #D4B7B7
 * Layer 3 (Card):      #E9DFDF
 * Accent:              #8187A2
 */

import { useState, useMemo, useCallback, memo } from "react";
import {
  Search, ExternalLink, CheckCircle2, Trash2, GitMerge,
  ChevronDown, ChevronRight, Globe, Lock, Megaphone,
  Copy, Check, X, Monitor, LayoutGrid, BookmarkCheck, Bookmark,
  Zap, Heart, Github, Triangle, Box, HelpCircle,
  CheckSquare, Square, ListChecks, ExternalLink as OpenIcon,
} from "lucide-react";
import { toast } from "sonner";

import type { Platform, Recommendation, Project, ProjectGroup as PGroup } from "@/lib/types";
import {
  PLATFORM_CONFIG, PLATFORMS, allGroupsByPlatform, allGroups, allProjects,
  getStats, GROUP_ICONS,
} from "@/lib/data";
import { useProjectFilters, type RecFilter } from "@/hooks/useProjectFilters";
import { useBulkSelect } from "@/hooks/useBulkSelect";
import { useDecisions } from "@/hooks/useDecisions";

// ─── Platform icon map ───────────────────────────────────────────────────────
const PLATFORM_ICONS: Record<Platform, React.ReactNode> = {
  manus: <Monitor className="w-3.5 h-3.5" />,
  github: <Github className="w-3.5 h-3.5" />,
  lovable: <Heart className="w-3.5 h-3.5" />,
  bolt: <Zap className="w-3.5 h-3.5" />,
  v0: <Triangle className="w-3.5 h-3.5" />,
  codesandbox: <Box className="w-3.5 h-3.5" />,
};

// ─── Recommendation config ───────────────────────────────────────────────────
const REC_CONFIG: Record<string, {
  label: string; badgeClass: string; dotColor: string; accentBar: string; icon: React.ReactNode;
}> = {
  Keep:      { label: "Keep",      badgeClass: "badge-keep",      dotColor: "#4a7c59", accentBar: "bg-[#4a7c59]", icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
  Delete:    { label: "Delete",    badgeClass: "badge-delete",    dotColor: "#8B3A3A", accentBar: "bg-[#8B3A3A]", icon: <Trash2 className="w-3.5 h-3.5" /> },
  Combine:   { label: "Combine",   badgeClass: "badge-combine",   dotColor: "#8a6a2e", accentBar: "bg-[#8a6a2e]", icon: <GitMerge className="w-3.5 h-3.5" /> },
  Untriaged: { label: "Untriaged", badgeClass: "badge-untriaged", dotColor: "#737373", accentBar: "bg-[#737373]", icon: <HelpCircle className="w-3.5 h-3.5" /> },
};

// ─── Badges ──────────────────────────────────────────────────────────────────

function RecommendationBadge({ rec }: { rec?: Recommendation }) {
  const key = rec || "Untriaged";
  const cfg = REC_CONFIG[key];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shadow-micro ${cfg.badgeClass}`}
      style={{ letterSpacing: "-0.2px" }}>
      {cfg.icon}{cfg.label}
    </span>
  );
}

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (!status) return null;
  if (status === "Published" || status === "Deployed") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-semibold shadow-micro"
        style={{ background: "linear-gradient(135deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.12)" }}>
        <Megaphone className="w-3 h-3" /> {status}
      </span>
    );
  }
  if (status === "Public") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-semibold shadow-micro"
        style={{ background: "#737373", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.1)" }}>
        <Globe className="w-3 h-3" /> Public
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-medium"
      style={{ background: "#B58F8F", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.15)" }}>
      <Lock className="w-3 h-3" /> {status}
    </span>
  );
}

function PlatformBadge({ platform }: { platform: Platform }) {
  const cfg = PLATFORM_CONFIG[platform];
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-semibold shadow-micro"
      style={{ background: cfg.color, color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.12)" }}>
      {PLATFORM_ICONS[platform]} {cfg.label}
    </span>
  );
}

function GitHubConnectionBadge({ connected, githubUrl }: { connected?: boolean; githubUrl?: string }) {
  if (connected === undefined) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs">
      <span className={`connection-dot ${connected ? "connection-dot-connected" : "connection-dot-disconnected"}`} />
      {connected ? (
        githubUrl ? (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
            className="text-[#4a7c59] hover:underline font-medium" onClick={(e) => e.stopPropagation()}>
            Connected
          </a>
        ) : <span className="text-[#4a7c59] font-medium">Connected</span>
      ) : (
        <span className="text-[#737373]">Not connected</span>
      )}
    </span>
  );
}

// ─── Mark Toggle ─────────────────────────────────────────────────────────────
function MarkToggle({ projectId, isMarked, onToggle }: {
  projectId: string; isMarked: boolean; onToggle: (id: string) => void;
}) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle(projectId); }}
      title={isMarked ? "Marked — click to unmark" : "Click to mark for deletion"}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-micro"
      style={isMarked
        ? { background: "linear-gradient(135deg,#8B3A3A,#6e2d2d)", color: "#fce8e8", border: "1px solid rgba(255,255,255,0.12)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.35)" }
        : { background: "#D4B7B7", color: "#737373", border: "1px solid rgba(0,0,0,0.12)" }
      }
    >
      {isMarked ? <><BookmarkCheck className="w-3.5 h-3.5" /> Marked</> : <><Bookmark className="w-3.5 h-3.5" /> Mark</>}
    </button>
  );
}

// ─── Copy URL Button ─────────────────────────────────────────────────────────
function CopyUrlButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); e.stopPropagation();
        navigator.clipboard.writeText(url);
        setCopied(true);
        toast.success("URL copied!");
        setTimeout(() => setCopied(false), 2000);
      }}
      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-black/10"
      title="Copy URL"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-[#4a7c59]" /> : <Copy className="w-3.5 h-3.5 text-[#737373]" />}
    </button>
  );
}

// ─── Thumbnail Modal ─────────────────────────────────────────────────────────
function ThumbnailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(47,46,46,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden shadow-stage"
        style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.2)" }}
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 shadow-lift"
          style={{ background: "#D4B7B7", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div className="flex items-center gap-3">
            {PLATFORM_ICONS[project.platform]}
            <div>
              <p className="text-sm font-semibold text-[#1E1E1E]" style={{ letterSpacing: "-0.3px" }}>{project.name}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#8187A2] hover:text-[#6C718C] flex items-center gap-1 font-mono">
                {project.url.replace("https://", "").slice(0, 50)} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PlatformBadge platform={project.platform} />
            <RecommendationBadge rec={project.recommendation} />
            <button onClick={onClose}
              className="p-1.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-micro"
              style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.12)" }}>
              <X className="w-4 h-4 text-[#1E1E1E]" />
            </button>
          </div>
        </div>
        {/* Screenshot */}
        <div style={{ background: "#E9DFDF" }}>
          {project.thumbnail
            ? <img src={project.thumbnail} alt={`Screenshot of ${project.name}`}
                className="w-full object-cover object-top" style={{ maxHeight: "68vh" }} />
            : <div className="flex flex-col items-center justify-center h-64 text-[#737373]">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-panel"
                  style={{ background: PLATFORM_CONFIG[project.platform].color }}>
                  {PLATFORM_ICONS[project.platform]}
                </div>
                <p className="text-sm">No screenshot available</p>
              </div>
          }
        </div>
        {/* Description */}
        <div className="px-5 py-4" style={{ background: "#D4B7B7", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <p className="text-sm text-[#1E1E1E] leading-relaxed">{project.purpose}</p>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#8187A2] hover:underline flex items-center gap-1 mt-2">
              <Github className="w-3 h-3" /> {project.githubUrl.replace("https://github.com/", "")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Project Row (memoized) ──────────────────────────────────────────────────
const ProjectRow = memo(function ProjectRow({
  project, isEven, isMarked, onToggleMark, selectMode, isSelected, onToggleSelect, showPlatform,
}: {
  project: Project; isEven: boolean; isMarked: boolean; onToggleMark: (id: string) => void;
  selectMode: boolean; isSelected: boolean; onToggleSelect: (id: string) => void; showPlatform: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const recKey = project.recommendation || "Untriaged";
  const cfg = REC_CONFIG[recKey];

  const rowBg = isMarked ? "rgba(139,58,58,0.08)" : isSelected ? "rgba(129,135,162,0.12)" : isEven ? "#E9DFDF" : "#EDE3E3";

  return (
    <>
      {modalOpen && <ThumbnailModal project={project} onClose={() => setModalOpen(false)} />}
      <tr className="group row-lift border-b" style={{ background: rowBg, borderColor: "rgba(0,0,0,0.08)" }}>
        {/* Select checkbox */}
        {selectMode && (
          <td className="py-2.5 px-2 w-[40px]">
            <button onClick={(e) => { e.stopPropagation(); onToggleSelect(project.id); }}
              className={`select-checkbox ${isSelected ? "select-checkbox-active" : ""}`}>
              {isSelected && <Check className="w-3 h-3 text-white" />}
            </button>
          </td>
        )}
        {/* Accent bar */}
        <td className="w-1 p-0">
          <div className={`w-1 h-full min-h-[72px] ${cfg.accentBar} rounded-r`} />
        </td>
        {/* Thumbnail */}
        <td className="py-2.5 px-3 w-[100px]">
          <button onClick={() => setModalOpen(true)}
            className="relative w-20 h-12 rounded-lg overflow-hidden flex-shrink-0 block transition-all hover:-translate-y-1 shadow-card hover:shadow-lift"
            style={{ border: "1.5px solid rgba(0,0,0,0.14)", background: "#D4B7B7" }}
            title="Click to preview">
            {project.thumbnail
              ? <img src={project.thumbnail} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
              : <div className="w-full h-full flex items-center justify-center"
                  style={{ background: `${PLATFORM_CONFIG[project.platform].color}22` }}>
                  {PLATFORM_ICONS[project.platform]}
                </div>
            }
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              style={{ background: "rgba(129,135,162,0.3)" }}>
              <ExternalLink className="w-3 h-3 text-white" />
            </div>
          </button>
        </td>
        {/* Name + description */}
        <td className="py-3 px-3">
          <span className="text-sm font-semibold text-[#1E1E1E] block" style={{ letterSpacing: "-0.2px" }}>
            {project.name}
          </span>
          <p className="text-xs text-[#737373] mt-1 leading-relaxed max-w-sm line-clamp-2">{project.purpose}</p>
        </td>
        {/* URL */}
        <td className="py-3 px-3 w-[180px]">
          <div className="flex items-center gap-1">
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-[#737373] hover:text-[#8187A2] transition-colors truncate max-w-[140px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              title={project.url}>
              {project.url.replace("https://", "").split("/").slice(0, 2).join("/")}
            </a>
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8187A2] flex-shrink-0">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <CopyUrlButton url={project.url} />
          </div>
          {/* GitHub connection for Lovable/Bolt */}
          {project.githubConnected !== undefined && (
            <div className="mt-1">
              <GitHubConnectionBadge connected={project.githubConnected} githubUrl={project.githubUrl} />
            </div>
          )}
        </td>
        {/* Platform badge (when viewing "All") */}
        {showPlatform && (
          <td className="py-3 px-3"><PlatformBadge platform={project.platform} /></td>
        )}
        {/* Date */}
        <td className="py-3 px-3 text-xs text-[#737373] whitespace-nowrap">{project.dateCreated || "—"}</td>
        {/* Status */}
        <td className="py-3 px-3"><StatusBadge status={project.status} /></td>
        {/* Recommendation */}
        <td className="py-3 px-3"><RecommendationBadge rec={project.recommendation} /></td>
        {/* Mark toggle */}
        <td className="py-3 px-3">
          <MarkToggle projectId={project.id} isMarked={isMarked} onToggle={onToggleMark} />
        </td>
      </tr>
      {/* Marked indicator row */}
      {isMarked && (
        <tr style={{ background: "rgba(139,58,58,0.06)", borderBottom: "1px solid rgba(139,58,58,0.15)" }}>
          {selectMode && <td className="w-1 p-0" />}
          <td className="w-1 p-0"><div className="w-1 h-full min-h-[28px] bg-[#8B3A3A] rounded-r opacity-60" /></td>
          <td colSpan={showPlatform ? 9 : 8} className="py-1.5 px-4">
            <p className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#8B3A3A" }}>
              <BookmarkCheck className="w-3.5 h-3.5" />
              Marked for deletion. Visit the platform to remove it.
            </p>
          </td>
        </tr>
      )}
    </>
  );
});

// ─── Group Section ───────────────────────────────────────────────────────────
function GroupSection({
  group, isExpanded, onToggle, filteredProjects, markedSet, onToggleMark,
  selectMode, selectedIds, onToggleSelect, showPlatform,
}: {
  group: PGroup; isExpanded: boolean; onToggle: () => void;
  filteredProjects: Project[]; markedSet: Set<string>; onToggleMark: (id: string) => void;
  selectMode: boolean; selectedIds: Set<string>; onToggleSelect: (id: string) => void; showPlatform: boolean;
}) {
  const keepCount      = filteredProjects.filter((p) => p.recommendation === "Keep").length;
  const deleteCount    = filteredProjects.filter((p) => p.recommendation === "Delete").length;
  const combineCount   = filteredProjects.filter((p) => p.recommendation === "Combine").length;
  const untriagedCount = filteredProjects.filter((p) => !p.recommendation).length;
  const markedCount    = filteredProjects.filter((p) => markedSet.has(p.id)).length;

  if (filteredProjects.length === 0) return null;

  return (
    <div className="mb-5 rounded-2xl overflow-hidden shadow-container glow-overlay"
      style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.15)" }}>
      {/* Header */}
      <button onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-all hover:brightness-105 shadow-lift"
        style={{ background: "#D4B7B7", borderBottom: isExpanded ? "1px solid rgba(0,0,0,0.1)" : "none" }}>
        <div className="flex items-center gap-3">
          <span className="text-xl">{GROUP_ICONS[group.id] || "📁"}</span>
          <div>
            <h3 className="text-sm font-bold text-[#1E1E1E]" style={{ letterSpacing: "-0.4px" }}>{group.name}</h3>
            <p className="text-xs text-[#737373] mt-0.5 max-w-md">{group.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-4 flex-wrap justify-end">
          {keepCount > 0 && <span className="badge-keep text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> {keepCount}</span>}
          {deleteCount > 0 && <span className="badge-delete text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1"><Trash2 className="w-3 h-3" /> {deleteCount}</span>}
          {combineCount > 0 && <span className="badge-combine text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1"><GitMerge className="w-3 h-3" /> {combineCount}</span>}
          {untriagedCount > 0 && <span className="badge-untriaged text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1"><HelpCircle className="w-3 h-3" /> {untriagedCount}</span>}
          {markedCount > 0 && <span className="text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1" style={{ background: "linear-gradient(135deg,#8B3A3A,#6e2d2d)", color: "#fce8e8", border: "1px solid rgba(255,255,255,0.1)" }}><BookmarkCheck className="w-3 h-3" /> {markedCount}</span>}
          <span className="text-xs font-medium px-2.5 py-1 rounded-full shadow-micro"
            style={{ background: "#B58F8F", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.12)" }}>
            {filteredProjects.length} projects
          </span>
          {isExpanded ? <ChevronDown className="w-4 h-4 text-[#737373]" /> : <ChevronRight className="w-4 h-4 text-[#737373]" />}
        </div>
      </button>
      {/* Table */}
      {isExpanded && (
        <div className="overflow-x-auto" style={{ background: "#B58F8F" }}>
          <table className="w-full">
            <thead>
              <tr style={{ background: "#C9A8A8", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                {selectMode && <th className="w-[40px]" />}
                <th className="w-1" />
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70 w-[100px]">Preview</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Name &amp; Description</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70 w-[180px]">URL</th>
                {showPlatform && <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Platform</th>}
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Date</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Status</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Recommendation</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">My Decision</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((p, i) => (
                <ProjectRow key={p.id} project={p} isEven={i % 2 === 0}
                  isMarked={markedSet.has(p.id)} onToggleMark={onToggleMark}
                  selectMode={selectMode} isSelected={selectedIds.has(p.id)} onToggleSelect={onToggleSelect}
                  showPlatform={showPlatform} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Bulk Actions Bar ────────────────────────────────────────────────────────
function BulkActionsBar({
  selectedCount, onCopyUrls, onOpenAll, onClearSelection, onExitSelectMode,
}: {
  selectedCount: number; onCopyUrls: () => void; onOpenAll: () => void;
  onClearSelection: () => void; onExitSelectMode: () => void;
}) {
  if (selectedCount === 0) return null;
  return (
    <div className="bulk-actions-bar">
      <span className="text-sm font-bold text-[#F6F2F2]">{selectedCount} selected</span>
      <button onClick={onCopyUrls} className="btn-primary text-xs flex items-center gap-1.5">
        <Copy className="w-3.5 h-3.5" /> Copy URLs
      </button>
      <button onClick={onOpenAll} className="btn-primary text-xs flex items-center gap-1.5">
        <ExternalLink className="w-3.5 h-3.5" /> Open All
      </button>
      <button onClick={onClearSelection} className="btn-secondary text-xs">Clear</button>
      <button onClick={onExitSelectMode} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
        <X className="w-4 h-4 text-[#F6F2F2]" />
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════

export default function Home() {
  const decisions = useDecisions();
  const filters = useProjectFilters(decisions.markedIds);
  const bulk = useBulkSelect();
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => {
    // Default: expand all if total < 50, collapse if more
    if (filters.totalCount <= 50) {
      return new Set(filters.currentGroups.map((g) => g.id));
    }
    return new Set();
  });

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const showPlatform = filters.activePlatform === "all";
  const platformStats = getStats(filters.activePlatform === "all" ? undefined : filters.activePlatform);

  return (
    <div className="min-h-screen flex" style={{ background: "#2F2E2E" }}>

      {/* ── Sidebar ── */}
      <aside className="w-64 flex-shrink-0 flex flex-col sticky top-0 h-screen overflow-y-auto shadow-container glow-overlay"
        style={{ background: "#B58F8F", borderRight: "1px solid rgba(0,0,0,0.18)" }}>
        {/* Logo */}
        <div className="px-5 py-5 shadow-lift" style={{ background: "#D4B7B7", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-micro"
              style={{ background: "linear-gradient(145deg,#8187A2,#6C718C)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <LayoutGrid className="w-4 h-4 text-[#F6F2F2]" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#1E1E1E]" style={{ letterSpacing: "-0.5px" }}>DEV Command</h1>
              <p className="text-xs text-[#737373]">Center</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-3 mt-4 rounded-xl p-4 shadow-panel"
          style={{ background: "#D4B7B7", border: "1px solid rgba(0,0,0,0.1)" }}>
          <p className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-3">
            {filters.activePlatform === "all" ? "All Platforms" : PLATFORM_CONFIG[filters.activePlatform].label}
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#1E1E1E] opacity-70">Total Projects</span>
              <span className="text-base font-bold text-[#1E1E1E]">{platformStats.total}</span>
            </div>
            {platformStats.keep > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#4a7c59" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#4a7c59" }} /> Keep
                </span>
                <span className="text-sm font-bold" style={{ color: "#4a7c59" }}>{platformStats.keep}</span>
              </div>
            )}
            {platformStats.delete > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#8B3A3A" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#8B3A3A" }} /> Delete
                </span>
                <span className="text-sm font-bold" style={{ color: "#8B3A3A" }}>{platformStats.delete}</span>
              </div>
            )}
            {platformStats.untriaged > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#737373" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#737373" }} /> Untriaged
                </span>
                <span className="text-sm font-bold" style={{ color: "#737373" }}>{platformStats.untriaged}</span>
              </div>
            )}
          </div>
          {/* Progress bar */}
          {(platformStats.keep > 0 || platformStats.delete > 0) && (
            <div className="mt-4">
              <div className="flex rounded-full overflow-hidden h-2.5 shadow-micro" style={{ background: "rgba(0,0,0,0.12)" }}>
                <div style={{ width: `${(platformStats.keep / platformStats.total) * 100}%`, background: "#4a7c59" }} />
                <div style={{ width: `${(platformStats.delete / platformStats.total) * 100}%`, background: "#8B3A3A" }} />
                <div style={{ width: `${(platformStats.untriaged / platformStats.total) * 100}%`, background: "#737373" }} />
              </div>
            </div>
          )}
        </div>

        {/* Group nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-2 px-2">Groups</p>
          <button onClick={() => filters.setActiveGroup("all")}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all mb-1 shadow-micro"
            style={filters.activeGroup === "all"
              ? { background: "linear-gradient(145deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.12)" }
              : { background: "#C9A8A8", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.08)" }}>
            <span className="flex items-center gap-2 font-medium"><span>🗂️</span><span>All Groups</span></span>
            <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(0,0,0,0.12)" }}>
              {filters.totalCount}
            </span>
          </button>
          {filters.currentGroups.map((group) => (
            <button key={group.id} onClick={() => filters.setActiveGroup(group.id)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all mb-1 shadow-micro"
              style={filters.activeGroup === group.id
                ? { background: "linear-gradient(145deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.12)" }
                : { background: "#C9A8A8", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.08)" }}>
              <span className="flex items-center gap-2 min-w-0 font-medium">
                <span className="flex-shrink-0">{GROUP_ICONS[group.id] || "📁"}</span>
                <span className="truncate text-left">{group.name}</span>
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 ml-1"
                style={{ background: "rgba(0,0,0,0.12)" }}>
                {group.projects.length}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 min-w-0 flex flex-col">

        {/* Platform tabs */}
        <div className="px-6 pt-4 pb-0" style={{ background: "#2F2E2E" }}>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => { filters.setActivePlatform("all"); setExpandedGroups(new Set()); }}
              className={`platform-tab ${filters.activePlatform === "all" ? "platform-tab-active" : ""}`}>
              🌐 All <span className="ml-1 opacity-70">{allProjects.length}</span>
            </button>
            {PLATFORMS.map((p) => {
              const cfg = PLATFORM_CONFIG[p];
              const count = allGroupsByPlatform[p].flatMap((g) => g.projects).length;
              return (
                <button key={p}
                  onClick={() => {
                    filters.setActivePlatform(p);
                    setExpandedGroups(new Set(count <= 50 ? allGroupsByPlatform[p].map((g) => g.id) : []));
                  }}
                  className={`platform-tab ${filters.activePlatform === p ? "platform-tab-active" : ""}`}>
                  {cfg.emoji} {cfg.label} <span className="ml-1 opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Top bar */}
        <header className="sticky top-0 z-10 px-6 py-4 shadow-container glow-overlay"
          style={{ background: "#B58F8F", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
              <input value={filters.search} onChange={(e) => filters.setSearch(e.target.value)}
                placeholder="Search by name, URL, or description..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none transition-all shadow-micro"
                style={{ background: "#D4B7B7", border: "1px solid rgba(0,0,0,0.12)", color: "#1E1E1E" }}
                onFocus={(e) => { e.target.style.boxShadow = "0 0 0 3px rgba(129,135,162,0.35), 0 6px 12px rgba(0,0,0,0.25)"; }}
                onBlur={(e) => { e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.25)"; }} />
            </div>

            {/* Rec filter chips */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {(["All", "Keep", "Delete", "Untriaged"] as RecFilter[]).map((r) => {
                const isActive = filters.recFilter === r;
                const styles = isActive
                  ? r === "All" ? { background: "linear-gradient(145deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.15)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                    : r === "Keep" ? { background: "linear-gradient(135deg,#4a7c59,#3a6347)", color: "#e8f5ec", border: "1px solid rgba(255,255,255,0.12)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                    : r === "Delete" ? { background: "linear-gradient(135deg,#8B3A3A,#6e2d2d)", color: "#fce8e8", border: "1px solid rgba(255,255,255,0.1)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                    : { background: "linear-gradient(135deg,#737373,#5c5c5c)", color: "#E9DFDF", border: "1px solid rgba(255,255,255,0.08)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                  : { background: "#D4B7B7", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.1)" };
                return (
                  <button key={r} onClick={() => filters.setRecFilter(r)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-micro"
                    style={styles}>
                    {r}
                  </button>
                );
              })}
            </div>

            {/* Select mode toggle */}
            <button onClick={() => bulk.selectMode ? bulk.exitSelectMode() : bulk.setSelectMode(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-micro flex items-center gap-1.5 ${bulk.selectMode ? "platform-tab-active" : ""}`}
              style={bulk.selectMode
                ? { background: "linear-gradient(145deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.15)" }
                : { background: "#D4B7B7", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.1)" }}>
              <ListChecks className="w-3.5 h-3.5" />
              {bulk.selectMode ? "Exit Select" : "Select"}
            </button>

            <span className="text-xs font-medium ml-auto" style={{ color: "#737373" }}>
              {filters.filteredCount} of {filters.totalCount} projects
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ background: "#2F2E2E" }}>
          {filters.filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl shadow-container mx-auto max-w-sm"
              style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.15)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-panel" style={{ background: "#D4B7B7" }}>
                <Search className="w-6 h-6 text-[#737373]" />
              </div>
              <p className="text-sm font-semibold text-[#1E1E1E]">No projects match your filters.</p>
              <button
                onClick={() => { filters.setSearch(""); filters.setRecFilter("All"); filters.setActiveGroup("all"); filters.setMarkedFilter("all"); }}
                className="mt-4 btn-primary text-xs">
                Clear all filters
              </button>
            </div>
          ) : (
            filters.filteredData.map(({ group, projects }) => (
              <GroupSection key={group.id} group={group}
                isExpanded={expandedGroups.has(group.id)} onToggle={() => toggleGroup(group.id)}
                filteredProjects={projects} markedSet={decisions.markedIds} onToggleMark={decisions.toggleMark}
                selectMode={bulk.selectMode} selectedIds={bulk.selectedIds} onToggleSelect={bulk.toggleSelect}
                showPlatform={showPlatform} />
            ))
          )}
        </div>
      </main>

      {/* Bulk actions floating bar */}
      {bulk.selectMode && (
        <BulkActionsBar
          selectedCount={bulk.selectedCount}
          onCopyUrls={() => bulk.copyUrls(filters.filteredProjects)}
          onOpenAll={() => bulk.openAll(filters.filteredProjects)}
          onClearSelection={bulk.clearSelection}
          onExitSelectMode={bulk.exitSelectMode}
        />
      )}
    </div>
  );
}
