// DEV Command Center — Shared Type System
// Supports 6 platforms: Manus, GitHub, Lovable, Bolt.new, v0.app, CodeSandbox

export type Platform = "manus" | "github" | "lovable" | "bolt" | "v0" | "codesandbox";

export type Recommendation = "Keep" | "Delete" | "Combine";
export type PolishLevel = "Polished" | "Draft/WIP" | "Blank/Error";

export interface Project {
  id: string;                        // Namespaced: "manus-1", "github-42", "lovable-abc123"
  platform: Platform;
  name: string;
  url: string;                       // Primary URL (deployed URL, repo URL, etc.)
  dateCreated?: string;              // "May 18, 2025" format
  status?: "Public" | "Published" | "Private" | "Deployed" | "Draft";
  polishLevel?: PolishLevel;
  recommendation?: Recommendation;   // Optional — untriaged if missing
  purpose: string;                   // Description text
  group: string;                     // Group ID within the platform
  // Optional platform-specific fields
  thumbnail?: string;                // CDN URL (Manus has these)
  githubUrl?: string;                // For Lovable/Bolt projects connected to GitHub
  githubConnected?: boolean;         // Is this linked to a GitHub repo?
  tier?: number;                     // For GitHub: 1-5 tier rating
  deploymentUrl?: string;            // Separate live URL (e.g., Vercel deploy)
  repoVisibility?: "public" | "private";
  sourceType?: "project" | "chat";   // For v0: project vs chat
}

export interface ProjectGroup {
  id: string;
  name: string;
  description: string;
  platform: Platform;
  projects: Project[];
}

export interface PlatformConfig {
  label: string;
  icon: string;    // Lucide icon name
  emoji: string;   // Fallback emoji
  color: string;   // Accent color for platform
}

export interface PlatformStats {
  platform: Platform;
  total: number;
  keep: number;
  delete: number;
  combine: number;
  untriaged: number;
}
