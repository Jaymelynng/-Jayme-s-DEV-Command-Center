// Design: Precision Ops Dashboard — Dark Mode Intelligence
// Dark slate (#0d1117) background, emerald Keep, red Delete, amber Combine
// JetBrains Mono for URLs, Inter for content, sidebar with live counts

import { useState, useMemo } from "react";
import { siteGroups, allSites, stats, type Recommendation, type SiteGroup, type Site } from "@/lib/siteData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ExternalLink,
  CheckCircle2,
  Trash2,
  GitMerge,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
  Globe,
  Lock,
  Megaphone,
  Copy,
  Check,
} from "lucide-react";
import { toast } from "sonner";

const REC_CONFIG: Record<Recommendation, { label: string; color: string; bg: string; icon: React.ReactNode; dot: string }> = {
  Keep: {
    label: "Keep",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    dot: "bg-emerald-400",
  },
  Delete: {
    label: "Delete",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/30",
    icon: <Trash2 className="w-3.5 h-3.5" />,
    dot: "bg-red-400",
  },
  Combine: {
    label: "Combine",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    icon: <GitMerge className="w-3.5 h-3.5" />,
    dot: "bg-amber-400",
  },
};

const GROUP_ICONS: Record<string, React.ReactNode> = {
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

function RecommendationBadge({ rec }: { rec: Recommendation }) {
  const cfg = REC_CONFIG[rec];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${cfg.color} ${cfg.bg}`}
    >
      {cfg.icon}
      {cfg.label}
    </span>
  );
}

function StatusBadge({ status }: { status: Site["status"] }) {
  if (status === "Published") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
        <Megaphone className="w-3 h-3" /> Published
      </span>
    );
  }
  if (status === "Public") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
        <Globe className="w-3 h-3" /> Public
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-700/30 text-slate-500 border border-slate-600/20">
      <Lock className="w-3 h-3" /> Private
    </span>
  );
}

function CopyUrlButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("URL copied!");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-slate-700 text-slate-500 hover:text-slate-300"
      title="Copy URL"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

function SiteRow({ site }: { site: Site }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = REC_CONFIG[site.recommendation];
  return (
    <>
      <tr
        className={`group border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors cursor-pointer`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Left accent bar */}
        <td className="w-1 p-0">
          <div className={`w-0.5 h-full min-h-[52px] ${cfg.dot} opacity-60`} />
        </td>
        <td className="py-3 px-4 text-sm text-slate-200 font-medium max-w-[220px]">
          <div className="flex items-center gap-2">
            <span className="truncate">{site.name}</span>
          </div>
        </td>
        <td className="py-3 px-4 max-w-[200px]">
          <div className="flex items-center gap-1">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono text-xs text-slate-400 hover:text-blue-400 transition-colors truncate max-w-[160px]"
              title={site.url}
            >
              {site.url.replace("https://", "").replace("/?code=ZSwYMXKBsJHp6xeoUQwp6e", "")}
            </a>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-blue-400 flex-shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <CopyUrlButton url={site.url} />
          </div>
        </td>
        <td className="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">{site.dateDeployed}</td>
        <td className="py-3 px-4">
          <StatusBadge status={site.status} />
        </td>
        <td className="py-3 px-4">
          <RecommendationBadge rec={site.recommendation} />
        </td>
        <td className="py-3 px-4 text-slate-600">
          {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </td>
      </tr>
      {expanded && (
        <tr className="bg-slate-900/60 border-b border-slate-800/50">
          <td className="w-1 p-0">
            <div className={`w-0.5 h-full min-h-[40px] ${cfg.dot} opacity-30`} />
          </td>
          <td colSpan={6} className="py-3 px-4">
            <p className="text-sm text-slate-400 leading-relaxed">{site.purpose}</p>
          </td>
        </tr>
      )}
    </>
  );
}

function GroupSection({
  group,
  isExpanded,
  onToggle,
  filteredSites,
}: {
  group: SiteGroup;
  isExpanded: boolean;
  onToggle: () => void;
  filteredSites: Site[];
}) {
  const keepCount = filteredSites.filter((s) => s.recommendation === "Keep").length;
  const deleteCount = filteredSites.filter((s) => s.recommendation === "Delete").length;

  if (filteredSites.length === 0) return null;

  return (
    <div className="mb-4 rounded-xl border border-slate-800 overflow-hidden">
      {/* Group header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 bg-slate-900/80 hover:bg-slate-800/60 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{GROUP_ICONS[group.id] || "📁"}</span>
          <div>
            <h3 className="text-sm font-semibold text-slate-100">{group.name}</h3>
            <p className="text-xs text-slate-500 mt-0.5 max-w-md">{group.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            {keepCount > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                {keepCount} Keep
              </span>
            )}
            {deleteCount > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-medium">
                {deleteCount} Delete
              </span>
            )}
            <span className="text-xs text-slate-500">{filteredSites.length} sites</span>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-500" />
          )}
        </div>
      </button>

      {/* Table */}
      {isExpanded && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/40">
                <th className="w-1" />
                <th className="py-2 px-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th className="py-2 px-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">URL</th>
                <th className="py-2 px-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Deployed</th>
                <th className="py-2 px-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-2 px-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                <th className="w-8" />
              </tr>
            </thead>
            <tbody>
              {filteredSites.map((site) => (
                <SiteRow key={site.id} site={site} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [recFilter, setRecFilter] = useState<Recommendation | "All">("All");
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(siteGroups.map((g) => g.id))
  );

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
          return matchesSearch && matchesRec;
        }),
      }))
      .filter((d) => d.sites.length > 0);
  }, [search, recFilter, activeGroup]);

  const filteredTotal = filteredData.reduce((acc, d) => acc + d.sites.length, 0);

  const groupCounts = useMemo(() => {
    return siteGroups.reduce(
      (acc, g) => {
        acc[g.id] = g.sites.length;
        return acc;
      },
      {} as Record<string, number>
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-800 flex flex-col sticky top-0 h-screen overflow-y-auto">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <LayoutGrid className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-100 leading-tight">Site Cleanup</h1>
              <p className="text-xs text-slate-500">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 py-4 border-b border-slate-800">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-medium">Overview</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Total Sites</span>
              <span className="text-sm font-bold text-slate-100">{stats.total}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Keep
              </span>
              <span className="text-sm font-bold text-emerald-400">{stats.keep}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-red-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" /> Delete
              </span>
              <span className="text-sm font-bold text-red-400">{stats.delete}</span>
            </div>
            {stats.combine > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" /> Combine
                </span>
                <span className="text-sm font-bold text-amber-400">{stats.combine}</span>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex rounded-full overflow-hidden h-2 bg-slate-800">
              <div
                className="bg-emerald-500 transition-all"
                style={{ width: `${(stats.keep / stats.total) * 100}%` }}
              />
              <div
                className="bg-red-500 transition-all"
                style={{ width: `${(stats.delete / stats.total) * 100}%` }}
              />
              {stats.combine > 0 && (
                <div
                  className="bg-amber-500 transition-all"
                  style={{ width: `${(stats.combine / stats.total) * 100}%` }}
                />
              )}
            </div>
            <p className="text-xs text-slate-600 mt-1.5">
              {Math.round((stats.delete / stats.total) * 100)}% can be deleted
            </p>
          </div>
        </div>

        {/* Group navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 px-2 font-medium">Project Groups</p>
          <button
            onClick={() => setActiveGroup("all")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors mb-1 ${
              activeGroup === "all"
                ? "bg-blue-600/20 text-blue-400 border border-blue-500/20"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>🗂️</span>
              <span>All Groups</span>
            </span>
            <span className="text-xs bg-slate-700 text-slate-400 px-1.5 py-0.5 rounded-full">{allSites.length}</span>
          </button>
          {siteGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors mb-1 ${
                activeGroup === group.id
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              <span className="flex items-center gap-2 min-w-0">
                <span className="flex-shrink-0">{GROUP_ICONS[group.id] || "📁"}</span>
                <span className="truncate text-left">{group.name}</span>
              </span>
              <span className="text-xs bg-slate-700 text-slate-400 px-1.5 py-0.5 rounded-full flex-shrink-0 ml-1">
                {groupCounts[group.id]}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-[#0d1117]/95 backdrop-blur border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, URL, or description..."
                className="pl-9 bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-600 focus-visible:ring-blue-500/50 h-9"
              />
            </div>

            {/* Recommendation filter chips */}
            <div className="flex items-center gap-2">
              {(["All", "Keep", "Delete", "Combine"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRecFilter(r)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                    recFilter === r
                      ? r === "All"
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : r === "Keep"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : r === "Delete"
                        ? "bg-red-500/20 text-red-300 border-red-500/40"
                        : "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      : "bg-transparent text-slate-500 border-slate-800 hover:border-slate-700 hover:text-slate-300"
                  }`}
                >
                  {r === "Keep" && <span className="mr-1">✓</span>}
                  {r === "Delete" && <span className="mr-1">✕</span>}
                  {r === "Combine" && <span className="mr-1">⊕</span>}
                  {r}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-600 whitespace-nowrap">
              {filteredTotal} of {allSites.length} sites
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 px-6 py-6 overflow-y-auto">
          {filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Search className="w-10 h-10 text-slate-700 mb-4" />
              <p className="text-slate-500 text-sm">No sites match your search or filter.</p>
              <button
                onClick={() => { setSearch(""); setRecFilter("All"); setActiveGroup("all"); }}
                className="mt-3 text-xs text-blue-400 hover:text-blue-300 underline"
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
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
