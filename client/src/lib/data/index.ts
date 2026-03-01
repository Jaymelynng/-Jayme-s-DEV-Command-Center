// DEV Command Center — Data Aggregator
// Combines all 6 platforms into unified exports

import { manusGroups } from "./manus";
import { githubGroups } from "./github";
import { lovableGroups } from "./lovable";
import { boltGroups } from "./bolt";
import { v0Groups } from "./v0";
import { codesandboxGroups } from "./codesandbox";
import type { Platform, PlatformConfig, PlatformStats, ProjectGroup, Project } from "../types";

// ─── Platform Configuration ──────────────────────────────────────────────────

export const PLATFORM_CONFIG: Record<Platform, PlatformConfig> = {
  manus: {
    label: "Manus",
    icon: "monitor",
    emoji: "🖥️",
    color: "#B58F8F",
  },
  github: {
    label: "GitHub",
    icon: "github",
    emoji: "🐙",
    color: "#8187A2",
  },
  lovable: {
    label: "Lovable",
    icon: "heart",
    emoji: "💜",
    color: "#9b59b6",
  },
  bolt: {
    label: "Bolt.new",
    icon: "zap",
    emoji: "⚡",
    color: "#f39c12",
  },
  v0: {
    label: "v0.app",
    icon: "triangle",
    emoji: "▲",
    color: "#e74c3c",
  },
  codesandbox: {
    label: "CodeSandbox",
    icon: "box",
    emoji: "📦",
    color: "#2ecc71",
  },
};

export const PLATFORMS: Platform[] = ["manus", "github", "lovable", "bolt", "v0", "codesandbox"];

// ─── Grouped Data by Platform ────────────────────────────────────────────────

export const allGroupsByPlatform: Record<Platform, ProjectGroup[]> = {
  manus: manusGroups,
  github: githubGroups,
  lovable: lovableGroups,
  bolt: boltGroups,
  v0: v0Groups,
  codesandbox: codesandboxGroups,
};

// ─── Flattened Collections ───────────────────────────────────────────────────

export const allGroups: ProjectGroup[] = PLATFORMS.flatMap(
  (p) => allGroupsByPlatform[p]
);

export const allProjects: Project[] = allGroups.flatMap((g) => g.projects);

// ─── Statistics ──────────────────────────────────────────────────────────────

export function getStats(platform?: Platform): PlatformStats {
  const projects = platform
    ? allGroupsByPlatform[platform].flatMap((g) => g.projects)
    : allProjects;

  return {
    platform: platform || ("all" as Platform),
    total: projects.length,
    keep: projects.filter((p) => p.recommendation === "Keep").length,
    delete: projects.filter((p) => p.recommendation === "Delete").length,
    combine: projects.filter((p) => p.recommendation === "Combine").length,
    untriaged: projects.filter((p) => !p.recommendation).length,
  };
}

export function getAllPlatformStats(): Record<Platform | "all", PlatformStats> {
  const result: Record<string, PlatformStats> = {};
  for (const p of PLATFORMS) {
    result[p] = getStats(p);
  }
  result.all = getStats();
  return result as Record<Platform | "all", PlatformStats>;
}

// ─── Group Icons (extended from original) ────────────────────────────────────

export const GROUP_ICONS: Record<string, string> = {
  // Manus groups
  "summer-camp": "🏕️",
  "sales-training": "🎯",
  "content-hub": "📦",
  "email-hub": "✉️",
  "lead-management": "📊",
  "camp-hub": "🏅",
  gymvision: "👁️",
  other: "⚡",
  "blank-error": "🚫",
  // GitHub groups
  "gh-event-calendar": "📅",
  "gh-email": "✉️",
  "gh-link-mgmt": "🔗",
  "gh-marketing-comm": "📢",
  "gh-content-social": "📱",
  "gh-sales": "💰",
  "gh-approval": "✅",
  "gh-gym-data": "🏋️",
  "gh-gym-connect": "🔌",
  "gh-brand-design": "🎨",
  "gh-camp": "🏕️",
  "gh-non-gym": "🌐",
  "gh-personal": "👤",
  // Lovable groups
  "lovable-connected": "🔗",
  "lovable-unconnected": "⚠️",
  // Bolt groups
  "bolt-gym-ops": "🏋️",
  "bolt-email": "✉️",
  "bolt-calendar": "📅",
  "bolt-brand": "🎨",
  "bolt-sales": "💰",
  "bolt-content": "📱",
  "bolt-camp": "🏕️",
  "bolt-marketing": "📢",
  "bolt-games": "🎮",
  "bolt-misc": "🔧",
  // v0 groups
  "v0-production": "🚀",
  "v0-projects": "📐",
  "v0-chats": "💬",
  // CodeSandbox groups
  "cs-repos": "🔗",
  "cs-sandboxes": "📦",
  "cs-drafts": "📝",
};
