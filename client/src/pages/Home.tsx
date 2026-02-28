/*
 * ROSE / STONE DIMENSION SYSTEM
 * Layer 0 (Stage):     #2F2E2E  — outer background, makes everything lift
 * Layer 1 (Container): #B58F8F  — sidebar, main wrapper
 * Layer 2 (Panel):     #D4B7B7  — group section headers, inner panels
 * Layer 3 (Card):      #E9DFDF  — table rows, cards
 * Layer 4 (Micro):     buttons, badges
 * Text on dark:        #F6F2F2
 * Text on light:       #1E1E1E
 * Cool Accent:         #8187A2
 */

import { useState, useMemo, useCallback } from "react";
import { siteGroups, allSites, stats, type Recommendation, type SiteGroup, type Site } from "@/lib/siteData";
import { THUMBNAILS } from "@/lib/thumbnails";
import {
  Search,
  ExternalLink,
  CheckCircle2,
  Trash2,
  GitMerge,
  ChevronDown,
  ChevronRight,
  Globe,
  Lock,
  Megaphone,
  Copy,
  Check,
  X,
  Monitor,
  LayoutGrid,
  BookmarkCheck,
  Bookmark,
} from "lucide-react";
import { toast } from "sonner";

// ─── localStorage helpers ─────────────────────────────────────────────────────
const STORAGE_KEY = "site-cleanup-marked";

function loadMarked(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as number[]);
  } catch {
    return new Set();
  }
}

function saveMarked(marked: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(marked)));
}

// ─── Recommendation config ────────────────────────────────────────────────────
const REC_CONFIG: Record<Recommendation, {
  label: string;
  badgeClass: string;
  dotColor: string;
  accentBar: string;
  icon: React.ReactNode;
}> = {
  Keep: {
    label: "Keep",
    badgeClass: "badge-keep",
    dotColor: "#4a7c59",
    accentBar: "bg-[#4a7c59]",
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
  },
  Delete: {
    label: "Delete",
    badgeClass: "badge-delete",
    dotColor: "#8B3A3A",
    accentBar: "bg-[#8B3A3A]",
    icon: <Trash2 className="w-3.5 h-3.5" />,
  },
  Combine: {
    label: "Combine",
    badgeClass: "badge-combine",
    dotColor: "#8a6a2e",
    accentBar: "bg-[#8a6a2e]",
    icon: <GitMerge className="w-3.5 h-3.5" />,
  },
};

const GROUP_ICONS: Record<string, string> = {
  "summer-camp": "🏕️",
  "sales-training": "🎯",
  "content-hub": "📦",
  "email-hub": "✉️",
  "lead-management": "📊",
  "camp-hub": "🏅",
  gymvision: "👁️",
  other: "⚡",
  "blank-error": "🚫",
};

// ─── Recommendation Badge ─────────────────────────────────────────────────────
function RecommendationBadge({ rec }: { rec: Recommendation }) {
  const cfg = REC_CONFIG[rec];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shadow-micro ${cfg.badgeClass}`}
      style={{ letterSpacing: "-0.2px" }}
    >
      {cfg.icon}
      {cfg.label}
    </span>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Site["status"] }) {
  if (status === "Published") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-semibold shadow-micro"
        style={{ background: "linear-gradient(135deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.12)" }}>
        <Megaphone className="w-3 h-3" /> Published
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
      <Lock className="w-3 h-3" /> Private
    </span>
  );
}

// ─── Mark for Deletion Toggle ─────────────────────────────────────────────────
function MarkToggle({ siteId, isMarked, onToggle }: {
  siteId: number;
  isMarked: boolean;
  onToggle: (id: number) => void;
}) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle(siteId); }}
      title={isMarked ? "Marked for deletion — click to unmark" : "Click to mark for deletion"}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-micro"
      style={isMarked
        ? {
            background: "linear-gradient(135deg,#8B3A3A,#6e2d2d)",
            color: "#fce8e8",
            border: "1px solid rgba(255,255,255,0.12)",
            transform: "translateY(-1px)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.35)",
          }
        : {
            background: "#D4B7B7",
            color: "#737373",
            border: "1px solid rgba(0,0,0,0.12)",
          }
      }
    >
      {isMarked
        ? <><BookmarkCheck className="w-3.5 h-3.5" /> Marked</>
        : <><Bookmark className="w-3.5 h-3.5" /> Mark to Delete</>
      }
    </button>
  );
}

// ─── Copy URL Button ──────────────────────────────────────────────────────────
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
      {copied
        ? <Check className="w-3.5 h-3.5 text-[#4a7c59]" />
        : <Copy className="w-3.5 h-3.5 text-[#737373]" />}
    </button>
  );
}

// ─── Thumbnail Preview Modal ──────────────────────────────────────────────────
function ThumbnailModal({ site, onClose }: { site: Site; onClose: () => void }) {
  const thumb = THUMBNAILS[site.id];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(47,46,46,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden shadow-stage"
        style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-4 shadow-lift"
          style={{ background: "#D4B7B7", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div className="flex items-center gap-3">
            <Monitor className="w-4 h-4 text-[#737373]" />
            <div>
              <p className="text-sm font-semibold text-[#1E1E1E]" style={{ letterSpacing: "-0.3px" }}>{site.name}</p>
              <a href={site.url} target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#8187A2] hover:text-[#6C718C] flex items-center gap-1 font-mono">
                {site.url.replace("https://", "")} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RecommendationBadge rec={site.recommendation} />
            <button onClick={onClose}
              className="p-1.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-micro"
              style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.12)" }}>
              <X className="w-4 h-4 text-[#1E1E1E]" />
            </button>
          </div>
        </div>
        {/* Screenshot */}
        <div style={{ background: "#E9DFDF" }}>
          {thumb
            ? <img src={thumb} alt={`Screenshot of ${site.name}`}
                className="w-full object-cover object-top" style={{ maxHeight: "68vh" }} />
            : <div className="flex items-center justify-center h-64 text-[#737373]">
                <Monitor className="w-8 h-8 opacity-40" />
              </div>
          }
        </div>
        {/* Description footer */}
        <div className="px-5 py-4" style={{ background: "#D4B7B7", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <p className="text-sm text-[#1E1E1E] leading-relaxed">{site.purpose}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Site Row ─────────────────────────────────────────────────────────────────
function SiteRow({
  site, isEven, isMarked, onToggleMark,
}: {
  site: Site;
  isEven: boolean;
  isMarked: boolean;
  onToggleMark: (id: number) => void;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const cfg = REC_CONFIG[site.recommendation];
  const thumb = THUMBNAILS[site.id];

  const rowBg = isMarked
    ? "rgba(139,58,58,0.08)"
    : isEven ? "#E9DFDF" : "#EDE3E3";

  return (
    <>
      {modalOpen && <ThumbnailModal site={site} onClose={() => setModalOpen(false)} />}

      {/* Main row */}
      <tr
        className="group row-lift border-b"
        style={{ background: rowBg, borderColor: "rgba(0,0,0,0.08)" }}
      >
        {/* Accent bar */}
        <td className="w-1 p-0">
          <div className={`w-1 h-full min-h-[72px] ${cfg.accentBar} rounded-r`} />
        </td>

        {/* Thumbnail */}
        <td className="py-2.5 px-3 w-[100px]">
          <button
            onClick={() => setModalOpen(true)}
            className="relative w-20 h-12 rounded-lg overflow-hidden flex-shrink-0 block transition-all hover:-translate-y-1 shadow-card hover:shadow-lift"
            style={{ border: "1.5px solid rgba(0,0,0,0.14)", background: "#D4B7B7" }}
            title="Click to preview"
          >
            {thumb
              ? <img src={thumb} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
              : <div className="w-full h-full flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-[#737373] opacity-50" />
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
            {site.name}
          </span>
          <p className="text-xs text-[#737373] mt-1 leading-relaxed max-w-sm line-clamp-2">
            {site.purpose}
          </p>
        </td>

        {/* URL */}
        <td className="py-3 px-3 w-[160px]">
          <div className="flex items-center gap-1">
            <a href={site.url} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-[#737373] hover:text-[#8187A2] transition-colors truncate max-w-[120px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              title={site.url}>
              {site.url.replace("https://", "").split("/")[0]}
            </a>
            <a href={site.url} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-[#8187A2] flex-shrink-0">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <CopyUrlButton url={site.url} />
          </div>
        </td>

        {/* Date */}
        <td className="py-3 px-3 text-xs text-[#737373] whitespace-nowrap">{site.dateDeployed}</td>

        {/* Status */}
        <td className="py-3 px-3"><StatusBadge status={site.status} /></td>

        {/* Recommendation */}
        <td className="py-3 px-3"><RecommendationBadge rec={site.recommendation} /></td>

        {/* Mark for deletion toggle */}
        <td className="py-3 px-3">
          <MarkToggle siteId={site.id} isMarked={isMarked} onToggle={onToggleMark} />
        </td>
      </tr>

      {/* Marked indicator row */}
      {isMarked && (
        <tr style={{ background: "rgba(139,58,58,0.06)", borderBottom: "1px solid rgba(139,58,58,0.15)" }}>
          <td className="w-1 p-0">
            <div className="w-1 h-full min-h-[28px] bg-[#8B3A3A] rounded-r opacity-60" />
          </td>
          <td colSpan={7} className="py-1.5 px-4">
            <p className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#8B3A3A" }}>
              <BookmarkCheck className="w-3.5 h-3.5" />
              You have marked this site for deletion. Go to Manus → Settings → Data Controls → Deployed Websites to delete it.
            </p>
          </td>
        </tr>
      )}
    </>
  );
}

// ─── Group Section ────────────────────────────────────────────────────────────
function GroupSection({
  group, isExpanded, onToggle, filteredSites, markedIds, onToggleMark,
}: {
  group: SiteGroup;
  isExpanded: boolean;
  onToggle: () => void;
  filteredSites: Site[];
  markedIds: Set<number>;
  onToggleMark: (id: number) => void;
}) {
  const keepCount    = filteredSites.filter((s) => s.recommendation === "Keep").length;
  const deleteCount  = filteredSites.filter((s) => s.recommendation === "Delete").length;
  const combineCount = filteredSites.filter((s) => s.recommendation === "Combine").length;
  const markedCount  = filteredSites.filter((s) => markedIds.has(s.id)).length;

  if (filteredSites.length === 0) return null;

  return (
    <div className="mb-5 rounded-2xl overflow-hidden shadow-container glow-overlay"
      style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.15)" }}>

      {/* Group header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-all hover:brightness-105 shadow-lift"
        style={{ background: "#D4B7B7", borderBottom: isExpanded ? "1px solid rgba(0,0,0,0.1)" : "none" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{GROUP_ICONS[group.id] || "📁"}</span>
          <div>
            <h3 className="text-sm font-bold text-[#1E1E1E]" style={{ letterSpacing: "-0.4px" }}>
              {group.name}
            </h3>
            <p className="text-xs text-[#737373] mt-0.5 max-w-md">{group.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-4 flex-wrap justify-end">
          {keepCount > 0 && (
            <span className="badge-keep text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> {keepCount} Keep
            </span>
          )}
          {deleteCount > 0 && (
            <span className="badge-delete text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1">
              <Trash2 className="w-3 h-3" /> {deleteCount} Delete
            </span>
          )}
          {combineCount > 0 && (
            <span className="badge-combine text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1">
              <GitMerge className="w-3 h-3" /> {combineCount} Combine
            </span>
          )}
          {markedCount > 0 && (
            <span className="text-xs px-2.5 py-1 rounded-full font-semibold shadow-micro inline-flex items-center gap-1"
              style={{ background: "linear-gradient(135deg,#8B3A3A,#6e2d2d)", color: "#fce8e8", border: "1px solid rgba(255,255,255,0.1)" }}>
              <BookmarkCheck className="w-3 h-3" /> {markedCount} Marked
            </span>
          )}
          <span className="text-xs font-medium px-2.5 py-1 rounded-full shadow-micro"
            style={{ background: "#B58F8F", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.12)" }}>
            {filteredSites.length} sites
          </span>
          {isExpanded
            ? <ChevronDown className="w-4 h-4 text-[#737373]" />
            : <ChevronRight className="w-4 h-4 text-[#737373]" />}
        </div>
      </button>

      {/* Table */}
      {isExpanded && (
        <div className="overflow-x-auto" style={{ background: "#B58F8F" }}>
          <table className="w-full">
            <thead>
              <tr style={{ background: "#C9A8A8", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <th className="w-1" />
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70 w-[100px]">Preview</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Name &amp; Description</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70 w-[160px]">URL</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Deployed</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Status</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">Recommendation</th>
                <th className="py-2.5 px-3 text-left text-xs font-bold text-[#1E1E1E] uppercase tracking-wider opacity-70">My Decision</th>
              </tr>
            </thead>
            <tbody>
              {filteredSites.map((site, i) => (
                <SiteRow
                  key={site.id}
                  site={site}
                  isEven={i % 2 === 0}
                  isMarked={markedIds.has(site.id)}
                  onToggleMark={onToggleMark}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function Home() {
  const [search, setSearch] = useState("");
  const [recFilter, setRecFilter] = useState<Recommendation | "All">("All");
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [markedFilter, setMarkedFilter] = useState<"all" | "marked" | "unmarked">("all");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(siteGroups.map((g) => g.id))
  );
  const [markedIds, setMarkedIds] = useState<Set<number>>(loadMarked);

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const toggleMark = useCallback((id: number) => {
    setMarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.info("Unmarked site.");
      } else {
        next.add(id);
        toast.success("Marked for deletion!");
      }
      saveMarked(next);
      return next;
    });
  }, []);

  const totalMarked = markedIds.size;

  const filteredData = useMemo(() => {
    return siteGroups
      .filter((g) => activeGroup === "all" || g.id === activeGroup)
      .map((group) => ({
        group,
        sites: group.sites.filter((site) => {
          const matchesSearch =
            search === "" ||
            site.name.toLowerCase().includes(search.toLowerCase()) ||
            site.url.toLowerCase().includes(search.toLowerCase()) ||
            site.purpose.toLowerCase().includes(search.toLowerCase());
          const matchesRec = recFilter === "All" || site.recommendation === recFilter;
          const matchesMarked =
            markedFilter === "all" ||
            (markedFilter === "marked" && markedIds.has(site.id)) ||
            (markedFilter === "unmarked" && !markedIds.has(site.id));
          return matchesSearch && matchesRec && matchesMarked;
        }),
      }))
      .filter((d) => d.sites.length > 0);
  }, [search, recFilter, activeGroup, markedFilter, markedIds]);

  const filteredTotal = filteredData.reduce((acc, d) => acc + d.sites.length, 0);

  return (
    <div className="min-h-screen flex" style={{ background: "#2F2E2E" }}>

      {/* ── Sidebar ── */}
      <aside
        className="w-64 flex-shrink-0 flex flex-col sticky top-0 h-screen overflow-y-auto shadow-container glow-overlay"
        style={{ background: "#B58F8F", borderRight: "1px solid rgba(0,0,0,0.18)" }}
      >
        {/* Logo */}
        <div className="px-5 py-5 shadow-lift" style={{ background: "#D4B7B7", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-micro"
              style={{ background: "linear-gradient(145deg,#8187A2,#6C718C)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <LayoutGrid className="w-4 h-4 text-[#F6F2F2]" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#1E1E1E]" style={{ letterSpacing: "-0.5px" }}>Site Cleanup</h1>
              <p className="text-xs text-[#737373]">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-3 mt-4 rounded-xl p-4 shadow-panel"
          style={{ background: "#D4B7B7", border: "1px solid rgba(0,0,0,0.1)" }}>
          <p className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-3">Overview</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#1E1E1E] opacity-70">Total Sites</span>
              <span className="text-base font-bold text-[#1E1E1E]">{stats.total}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#4a7c59" }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#4a7c59" }} /> Keep
              </span>
              <span className="text-sm font-bold" style={{ color: "#4a7c59" }}>{stats.keep}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#8B3A3A" }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#8B3A3A" }} /> Delete
              </span>
              <span className="text-sm font-bold" style={{ color: "#8B3A3A" }}>{stats.delete}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#8B3A3A" }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#8B3A3A" }} /> Marked by You
              </span>
              <span className="text-sm font-bold" style={{ color: "#8B3A3A" }}>{totalMarked}</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex rounded-full overflow-hidden h-2.5 shadow-micro"
              style={{ background: "rgba(0,0,0,0.12)" }}>
              <div style={{ width: `${(stats.keep / stats.total) * 100}%`, background: "#4a7c59" }} />
              <div style={{ width: `${(stats.delete / stats.total) * 100}%`, background: "#8B3A3A" }} />
            </div>
            <p className="text-xs mt-1.5" style={{ color: "#737373" }}>
              {Math.round((stats.delete / stats.total) * 100)}% recommended for deletion
            </p>
          </div>
        </div>

        {/* My Deletion Progress */}
        {totalMarked > 0 && (
          <div className="mx-3 mt-3 rounded-xl p-3 shadow-micro"
            style={{ background: "rgba(139,58,58,0.15)", border: "1px solid rgba(139,58,58,0.25)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "#8B3A3A" }}>
              <BookmarkCheck className="w-3.5 h-3.5 inline mr-1" />
              My Deletion List
            </p>
            <p className="text-xs" style={{ color: "#737373" }}>
              {totalMarked} site{totalMarked !== 1 ? "s" : ""} marked · {stats.delete - totalMarked} remaining
            </p>
            <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.12)" }}>
              <div className="h-full rounded-full transition-all"
                style={{ width: `${(totalMarked / stats.delete) * 100}%`, background: "#8B3A3A" }} />
            </div>
          </div>
        )}

        {/* Group nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-2 px-2">Project Groups</p>

          <button
            onClick={() => setActiveGroup("all")}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all mb-1 shadow-micro"
            style={activeGroup === "all"
              ? { background: "linear-gradient(145deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.12)" }
              : { background: "#C9A8A8", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <span className="flex items-center gap-2 font-medium"><span>🗂️</span><span>All Groups</span></span>
            <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold" style={{ background: "rgba(0,0,0,0.12)", color: "inherit" }}>
              {allSites.length}
            </span>
          </button>

          {siteGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all mb-1 shadow-micro"
              style={activeGroup === group.id
                ? { background: "linear-gradient(145deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.12)" }
                : { background: "#C9A8A8", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <span className="flex items-center gap-2 min-w-0 font-medium">
                <span className="flex-shrink-0">{GROUP_ICONS[group.id] || "📁"}</span>
                <span className="truncate text-left">{group.name}</span>
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 ml-1"
                style={{ background: "rgba(0,0,0,0.12)", color: "inherit" }}>
                {group.sites.length}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 min-w-0 flex flex-col">

        {/* Top bar */}
        <header
          className="sticky top-0 z-10 px-6 py-4 shadow-container glow-overlay"
          style={{ background: "#B58F8F", borderBottom: "1px solid rgba(0,0,0,0.15)" }}
        >
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, URL, or description..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none transition-all shadow-micro"
                style={{ background: "#D4B7B7", border: "1px solid rgba(0,0,0,0.12)", color: "#1E1E1E" }}
                onFocus={(e) => { e.target.style.boxShadow = "0 0 0 3px rgba(129,135,162,0.35), 0 6px 12px rgba(0,0,0,0.25)"; }}
                onBlur={(e) => { e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.25)"; }}
              />
            </div>

            {/* Rec filter chips */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {(["All", "Keep", "Delete"] as const).map((r) => {
                const isActive = recFilter === r;
                return (
                  <button
                    key={r}
                    onClick={() => setRecFilter(r)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-micro"
                    style={isActive
                      ? r === "All"
                        ? { background: "linear-gradient(145deg,#8187A2,#6C718C)", color: "#F6F2F2", border: "1px solid rgba(255,255,255,0.15)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                        : r === "Keep"
                        ? { background: "linear-gradient(135deg,#4a7c59,#3a6347)", color: "#e8f5ec", border: "1px solid rgba(255,255,255,0.12)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                        : { background: "linear-gradient(135deg,#8B3A3A,#6e2d2d)", color: "#fce8e8", border: "1px solid rgba(255,255,255,0.1)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                      : { background: "#D4B7B7", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.1)" }
                    }
                  >
                    {r === "Keep" && "✓ "}
                    {r === "Delete" && "✕ "}
                    {r}
                  </button>
                );
              })}
            </div>

            {/* Marked filter */}
            <div className="flex items-center gap-1.5">
              {(["all", "marked", "unmarked"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setMarkedFilter(f)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-micro capitalize"
                  style={markedFilter === f
                    ? { background: "linear-gradient(135deg,#8B3A3A,#6e2d2d)", color: "#fce8e8", border: "1px solid rgba(255,255,255,0.1)", transform: "translateY(-1px)", boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }
                    : { background: "#D4B7B7", color: "#1E1E1E", border: "1px solid rgba(0,0,0,0.1)" }
                  }
                >
                  {f === "marked" && <BookmarkCheck className="w-3 h-3 inline mr-1" />}
                  {f === "all" ? "All" : f === "marked" ? "My Marked" : "Unmarked"}
                </button>
              ))}
            </div>

            <span className="text-xs font-medium ml-auto" style={{ color: "#737373" }}>
              {filteredTotal} of {allSites.length} sites
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 px-6 py-6 overflow-y-auto" style={{ background: "#2F2E2E" }}>
          {filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl shadow-container mx-auto max-w-sm"
              style={{ background: "#B58F8F", border: "1px solid rgba(0,0,0,0.15)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-panel"
                style={{ background: "#D4B7B7" }}>
                <Search className="w-6 h-6 text-[#737373]" />
              </div>
              <p className="text-sm font-semibold text-[#1E1E1E]">No sites match your filters.</p>
              <button
                onClick={() => { setSearch(""); setRecFilter("All"); setActiveGroup("all"); setMarkedFilter("all"); }}
                className="mt-4 btn-primary text-xs"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredData.map(({ group, sites }) => (
              <GroupSection
                key={group.id}
                group={group}
                isExpanded={expandedGroups.has(group.id)}
                onToggle={() => toggleGroup(group.id)}
                filteredSites={sites}
                markedIds={markedIds}
                onToggleMark={toggleMark}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
