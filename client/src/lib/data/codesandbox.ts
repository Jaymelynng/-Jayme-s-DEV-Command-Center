import type { Project, ProjectGroup } from "../types";

// =============================================================================
// CodeSandbox Data -- 19 items from account inventory
// Organized into 3 groups:
//   "cs-repos"      — 3 GitHub-linked repositories
//   "cs-sandboxes"  — 10 sandboxes and devboxes
//   "cs-drafts"     — 6 draft items
// =============================================================================

// --- GITHUB-LINKED REPOSITORIES (3) ---
const csRepoProjects: Project[] = [
  { id: "codesandbox-1", platform: "codesandbox", name: "Email-Hubbb", url: "https://codesandbox.io/p/github/Jaymelynng/Email-Hubbb", githubConnected: true, githubUrl: "https://github.com/Jaymelynng/Email-Hubbb", purpose: "Email hub project linked to GitHub for branch-based development in CodeSandbox.", group: "cs-repos" },
  { id: "codesandbox-2", platform: "codesandbox", name: "gym-email-approval-hub", url: "https://codesandbox.io/p/github/Jaymelynng/gym-email-approval-hub", githubConnected: true, githubUrl: "https://github.com/Jaymelynng/gym-email-approval-hub", purpose: "Gym email approval workflow hub linked to GitHub for branch-based development.", group: "cs-repos" },
  { id: "codesandbox-3", platform: "codesandbox", name: "scrollix-gen", url: "https://codesandbox.io/p/github/Jaymelynng/scrollix-gen", githubConnected: true, githubUrl: "https://github.com/Jaymelynng/scrollix-gen", purpose: "Scrollix generator project linked to GitHub for branch-based development.", group: "cs-repos" },
];

// --- SANDBOXES & DEVBOXES (10) ---
const csSandboxProjects: Project[] = [
  { id: "codesandbox-4", platform: "codesandbox", name: "Jayme's Magic Phase 1 Marketing App", url: "https://codesandbox.io/p/sandbox/jaymes-magic-phase-1-marketing-app-2cll3r", githubConnected: false, purpose: "Early Phase 1 marketing app experiment built as a sandbox. Created ~1 year ago.", group: "cs-sandboxes" },
  { id: "codesandbox-5", platform: "codesandbox", name: "Jaymes Marketing Project 1", url: "https://codesandbox.io/p/devbox/jaymes-marketing-project-1-ksfsqt", githubConnected: false, purpose: "First marketing project devbox. Created ~1 year ago.", group: "cs-sandboxes" },
  { id: "codesandbox-6", platform: "codesandbox", name: "Oasis Tuition Calculator", url: "https://codesandbox.io/p/devbox/oasis-tuition-calculator-8d5kc9", githubConnected: false, purpose: "Tuition calculator for Oasis Gymnastics programs -- calculates fees and enrollment costs. Worth keeping.", group: "cs-sandboxes" },
  { id: "codesandbox-7", platform: "codesandbox", name: "Marketing Project", url: "https://codesandbox.io/p/devbox/marketing-project-3pylgp", githubConnected: false, purpose: "Generic marketing project devbox. Created ~1 year ago.", group: "cs-sandboxes" },
  { id: "codesandbox-8", platform: "codesandbox", name: "Jayme's Marketing Project", url: "https://codesandbox.io/p/devbox/jaymes-marketing-project-3w3jyr", githubConnected: false, purpose: "Named marketing project devbox. Created ~1 year ago.", group: "cs-sandboxes" },
  { id: "codesandbox-9", platform: "codesandbox", name: "Jaymes Marketing Project 1 (copy)", url: "https://codesandbox.io/p/devbox/jaymes-marketing-project-1-yqyxf2", githubConnected: false, purpose: "Second copy of Jaymes Marketing Project 1 devbox. Obvious duplicate.", group: "cs-sandboxes" },
  { id: "codesandbox-10", platform: "codesandbox", name: "JaymesMarketing Project 1", url: "https://codesandbox.io/p/devbox/jaymesmarketing-project-1-x8kmnm", githubConnected: false, purpose: "Another variation of the marketing project devbox with slightly different naming.", group: "cs-sandboxes" },
  { id: "codesandbox-11", platform: "codesandbox", name: "Jaymes marketing Project Test 1", url: "https://codesandbox.io/p/devbox/jaymes-marketing-project-test-1-r9sqrr", githubConnected: false, purpose: "Test version of the marketing project devbox. Created ~1 year ago.", group: "cs-sandboxes" },
  { id: "codesandbox-12", platform: "codesandbox", name: "Jaymes Marketing Dashboard Test 2", url: "https://codesandbox.io/p/devbox/jaymes-marketing-dashboard-test-2-xdl8jl", githubConnected: false, purpose: "Second test of a marketing dashboard devbox. Created ~1 year ago.", group: "cs-sandboxes" },
  { id: "codesandbox-13", platform: "codesandbox", name: "Jaymes Marketing Project Test 1 (copy)", url: "https://codesandbox.io/p/devbox/jaymes-marketing-project-test-1-xvj6sn", githubConnected: false, purpose: "Second copy of the marketing project test devbox. Obvious duplicate.", group: "cs-sandboxes" },
];

// --- DRAFTS (6) ---
const csDraftProjects: Project[] = [
  { id: "codesandbox-14", platform: "codesandbox", name: "patient-brook", url: "https://codesandbox.io/p/devbox/patient-brook-73cntn", githubConnected: false, purpose: "Auto-named CodeSandbox devbox draft. Created ~6 months ago. Likely a throwaway experiment.", group: "cs-drafts" },
  { id: "codesandbox-15", platform: "codesandbox", name: "Email builder", url: "https://codesandbox.io/p/sandbox/email-builder-cdv3vj", githubConnected: false, purpose: "Email builder sandbox draft. Created ~9 months ago. Worth keeping -- descriptive name suggesting intentional work.", group: "cs-drafts" },
  { id: "codesandbox-16", platform: "codesandbox", name: "event calendar", url: "https://codesandbox.io/p/sandbox/event-calendar-9p7qvt", githubConnected: false, purpose: "Event calendar sandbox draft. Created ~11 months ago. Worth keeping -- core gym functionality concept.", group: "cs-drafts" },
  { id: "codesandbox-17", platform: "codesandbox", name: "romantic-haibt", url: "https://codesandbox.io/p/devbox/romantic-haibt-vq99hz", githubConnected: false, purpose: "Auto-named CodeSandbox devbox draft. Created ~11 months ago. Likely a throwaway experiment.", group: "cs-drafts" },
  { id: "codesandbox-18", platform: "codesandbox", name: "Email approval", url: "https://codesandbox.io/p/devbox/email-approval-873phf", githubConnected: false, purpose: "Email approval devbox draft. Created ~1 year ago. Early prototype of email approval workflow.", group: "cs-drafts" },
  { id: "codesandbox-19", platform: "codesandbox", name: "Gym Marketing App", url: "https://codesandbox.io/p/devbox/gym-marketing-app-wn7cn9", githubConnected: false, purpose: "Gym marketing app devbox draft. Created ~1 year ago. Worth keeping -- core concept.", group: "cs-drafts" },
];

// =============================================================================
// CodeSandbox Group Definitions
// =============================================================================

export const codesandboxGroups: ProjectGroup[] = [
  {
    id: "cs-repos",
    name: "GitHub-Linked Repos",
    description: "3 CodeSandbox projects connected to GitHub repositories for branch-based development.",
    platform: "codesandbox",
    projects: csRepoProjects,
  },
  {
    id: "cs-sandboxes",
    name: "Sandboxes & Devboxes",
    description: "10 sandbox and devbox experiments, including several obvious duplicates of marketing project iterations.",
    platform: "codesandbox",
    projects: csSandboxProjects,
  },
  {
    id: "cs-drafts",
    name: "Drafts",
    description: "6 draft items including 2 auto-named throwaway experiments and 4 intentional project drafts.",
    platform: "codesandbox",
    projects: csDraftProjects,
  },
];
