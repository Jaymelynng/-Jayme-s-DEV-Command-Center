import type { Project, ProjectGroup } from "../types";

// =============================================================================
// GitHub Repository Data -- ~140 repos from account "Jaymelynng"
// Organized into 13 groups based on function/category
// Tier ratings: 1 = Production/Live, 2 = Strong distinct idea, 3 = Good seed,
//               4 = Prototype iteration, 5 = Personal/misc/placeholder
// =============================================================================

// --- EVENT & CALENDAR TOOLS ---
const ghEventCalendarProjects: Project[] = [
  { id: "github-1", platform: "github", name: "master-events-calendarMASTER", url: "https://github.com/Jaymelynng/master-events-calendarMASTER", tier: 1, purpose: "PRODUCTION -- Enterprise event management for 10 gymnastics facilities across TX, AZ, CA. Real-time calendar, automated sync from iClassPro, bulk JSON import, admin portal. Live at teamcalendar.mygymtools.com.", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-2", platform: "github", name: "master-events-calendar", url: "https://github.com/Jaymelynng/master-events-calendar", tier: 4, purpose: "Earlier version of the master events calendar for 10 gymnastics facilities. Same codebase structure as MASTER version.", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-3", platform: "github", name: "Master-Calendar-2", url: "https://github.com/Jaymelynng/Master-Calendar-2", tier: 4, purpose: "Second fork/copy of the master events calendar repo. Likely a working backup or branched experiment.", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-4", platform: "github", name: "gym-event-flow", url: "https://github.com/Jaymelynng/gym-event-flow", tier: 4, purpose: "Gym event workflow/planning tool built with Lovable (React/TypeScript/Tailwind).", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-5", platform: "github", name: "gym-event-syncer", url: "https://github.com/Jaymelynng/gym-event-syncer", tier: 4, purpose: "Gym event syncing tool (115 commits) -- connects iClassPro events to another system. Built with Lovable.", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-6", platform: "github", name: "sync-it-strong", url: "https://github.com/Jaymelynng/sync-it-strong", tier: 4, purpose: "Another gym event/data sync tool built with Lovable (19 commits).", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-7", platform: "github", name: "gym-event-harvester", url: "https://github.com/Jaymelynng/gym-event-harvester", tier: 4, purpose: "Tool for harvesting/importing gym event data, built with Lovable (14 commits).", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-8", platform: "github", name: "april-event-organizer", url: "https://github.com/Jaymelynng/april-event-organizer", tier: 4, purpose: "April event organizer for gymnastics -- built with Lovable + Supabase (65 commits).", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-9", platform: "github", name: "april-event-organizer-92", url: "https://github.com/Jaymelynng/april-event-organizer-92", tier: 4, purpose: "Second iteration of the April event organizer (42 commits).", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-10", platform: "github", name: "eventformatter", url: "https://github.com/Jaymelynng/eventformatter", tier: 4, purpose: "Gymnastics email generator based on event data -- built with Lovable (22 commits).", group: "gh-event-calendar", repoVisibility: "public" },
  { id: "github-11", platform: "github", name: "NEWYEARBALLDROP", url: "https://github.com/Jaymelynng/NEWYEARBALLDROP", tier: 5, purpose: "New Year animation for an email hero, built with Google AI Studio/Gemini.", group: "gh-event-calendar", repoVisibility: "public" },
];

// --- EMAIL TOOLS ---
const ghEmailProjects: Project[] = [
  { id: "github-12", platform: "github", name: "EmailMentorPro", url: "https://github.com/Jaymelynng/EmailMentorPro", tier: 3, purpose: "One-click email generator that customizes HTML templates for gymnastics facilities using Supabase data. Includes viral marketing tools like countdown timers.", group: "gh-email", repoVisibility: "public" },
  { id: "github-13", platform: "github", name: "emailhubversion3", url: "https://github.com/Jaymelynng/emailhubversion3", tier: 1, purpose: "Email Template Analyzer -- imports campaigns from ActiveCampaign, retrieves HTML content, stores in Supabase, and provides preview interface with open/click/bounce rates. Most technically advanced email tool.", group: "gh-email", repoVisibility: "public" },
  { id: "github-14", platform: "github", name: "emailhelperversion1", url: "https://github.com/Jaymelynng/emailhelperversion1", tier: 4, purpose: "First version of the email helper tool (289 commits). Built with Lovable.", group: "gh-email", repoVisibility: "private" },
  { id: "github-15", platform: "github", name: "emailhelperversion1-84", url: "https://github.com/Jaymelynng/emailhelperversion1-84", tier: 4, purpose: "Another branch/version of the email helper (243 commits). Built with Lovable.", group: "gh-email", repoVisibility: "private" },
  { id: "github-16", platform: "github", name: "Email-Hub", url: "https://github.com/Jaymelynng/Email-Hub", tier: 4, purpose: "Email hub created with StackBlitz -- initial single-commit build, a basic email management shell.", group: "gh-email", repoVisibility: "public" },
  { id: "github-17", platform: "github", name: "Email-Hubbb", url: "https://github.com/Jaymelynng/Email-Hubbb", tier: 4, purpose: "A StackBlitz-created email hub -- private, single initial commit, likely an abandoned start.", group: "gh-email", repoVisibility: "private" },
  { id: "github-18", platform: "github", name: "EMAIL-HUB-FROM-V0", url: "https://github.com/Jaymelynng/EMAIL-HUB-FROM-V0", tier: 4, purpose: "Email hub created from StackBlitz/V0 -- single commit, basic email management shell.", group: "gh-email", repoVisibility: "public" },
  { id: "github-19", platform: "github", name: "emailcloner", url: "https://github.com/Jaymelynng/emailcloner", tier: 4, purpose: "Email cloning tool -- no README, minimal description available.", group: "gh-email", repoVisibility: "private" },
  { id: "github-20", platform: "github", name: "email-link-verifyer", url: "https://github.com/Jaymelynng/email-link-verifyer", tier: 2, purpose: "Link verification options tool -- v0.app auto-synced project for verifying links in emails. Deployed to Vercel.", group: "gh-email", repoVisibility: "public" },
  { id: "github-21", platform: "github", name: "email-variables", url: "https://github.com/Jaymelynng/email-variables", tier: 4, purpose: "Image analysis / email variables tool -- v0.dev auto-synced project.", group: "gh-email", repoVisibility: "public" },
  { id: "github-22", platform: "github", name: "Email-Planner-Pal", url: "https://github.com/Jaymelynng/Email-Planner-Pal", tier: 5, purpose: "Email planning assistant -- empty repo with no files yet committed.", group: "gh-email", repoVisibility: "public" },
  { id: "github-23", platform: "github", name: "email-enchant", url: "https://github.com/Jaymelynng/email-enchant", tier: 4, purpose: "Email template tool with template selection and summer camp schedule layout features (28 commits). Built with Lovable.", group: "gh-email", repoVisibility: "public" },
  { id: "github-24", platform: "github", name: "gym-email-catalog", url: "https://github.com/Jaymelynng/gym-email-catalog", tier: 4, purpose: "Gym email catalog/library tool (36 commits) -- organizes and stores email templates by gym. Built with Lovable + Supabase.", group: "gh-email", repoVisibility: "public" },
  { id: "github-25", platform: "github", name: "teamemailbuilder-knowledgephase-44", url: "https://github.com/Jaymelynng/teamemailbuilder-knowledgephase-44", tier: 4, purpose: "Team email builder in knowledge-phase (137 commits) -- extensive iteration on email builder functionality.", group: "gh-email", repoVisibility: "private" },
  { id: "github-26", platform: "github", name: "EmailApprovalHub", url: "https://github.com/Jaymelynng/EmailApprovalHub", tier: 3, purpose: "Email approval workflow tool for Kim and Jayme (two-person review process) -- built with Lovable + Supabase. Deployed to Vercel.", group: "gh-email", repoVisibility: "public" },
  { id: "github-27", platform: "github", name: "gym-email-approval-hub", url: "https://github.com/Jaymelynng/gym-email-approval-hub", tier: 4, purpose: "Gym email approval hub -- built with Lovable (Vite/TypeScript/React/shadcn).", group: "gh-email", repoVisibility: "public" },
];

// --- LINK MANAGEMENT ---
const ghLinkMgmtProjects: Project[] = [
  { id: "github-28", platform: "github", name: "Bulk-Link-PRO", url: "https://github.com/Jaymelynng/Bulk-Link-PRO", tier: 1, purpose: "PRODUCTION -- Stores all gym links, contact info, registration URLs, and program data for 10 locations. Bulk copy or open links. Live at bulklinkpro.mygymtools.com.", group: "gh-link-mgmt", repoVisibility: "public" },
  { id: "github-29", platform: "github", name: "Jaymes-Link-Factory", url: "https://github.com/Jaymelynng/Jaymes-Link-Factory", tier: 5, purpose: "v0.dev auto-synced 'database' project connected to Vercel -- early link management experiment.", group: "gh-link-mgmt", repoVisibility: "public" },
  { id: "github-30", platform: "github", name: "gym-link-finder", url: "https://github.com/Jaymelynng/gym-link-finder", tier: 4, purpose: "Gym link finder tool (24 commits) -- searches/finds links across gym platforms. Built with Lovable.", group: "gh-link-mgmt", repoVisibility: "private" },
  { id: "github-31", platform: "github", name: "gym-link-explorer", url: "https://github.com/Jaymelynng/gym-link-explorer", tier: 4, purpose: "Gym link explorer (16 commits) -- includes SSL certificate handling fixes. Built with Lovable.", group: "gh-link-mgmt", repoVisibility: "private" },
  { id: "github-32", platform: "github", name: "gym-link-magic", url: "https://github.com/Jaymelynng/gym-link-magic", tier: 4, purpose: "Gym link magic tool (24 commits) -- another link management variant. Built with Lovable + Supabase.", group: "gh-link-mgmt", repoVisibility: "public" },
  { id: "github-33", platform: "github", name: "link-inspect-hub", url: "https://github.com/Jaymelynng/link-inspect-hub", tier: 4, purpose: "Link inspection/preview tool -- fixes preview loading and fallback states (12 commits). Built with Lovable.", group: "gh-link-mgmt", repoVisibility: "private" },
  { id: "github-34", platform: "github", name: "oasis-link-bloom", url: "https://github.com/Jaymelynng/oasis-link-bloom", tier: 4, purpose: "Oasis Gymnastics linktree-style page -- HTML linktree file for bio/social links. Built with Lovable.", group: "gh-link-mgmt", repoVisibility: "private" },
];

// --- MARKETING COMMUNICATION ---
const ghMarketingCommProjects: Project[] = [
  { id: "github-35", platform: "github", name: "Marketing-Communication-Hub", url: "https://github.com/Jaymelynng/Marketing-Communication-Hub", tier: 4, purpose: "Marketing communication hub -- connected to a Vercel app. Minimal description.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-36", platform: "github", name: "MarketingCommunicationfinalphase", url: "https://github.com/Jaymelynng/MarketingCommunicationfinalphase", tier: 4, purpose: "Final phase iteration of the marketing communication app -- no README.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-37", platform: "github", name: "Marketingcommunication", url: "https://github.com/Jaymelynng/Marketingcommunication", tier: 4, purpose: "Marketing communication app -- created with StackBlitz.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-38", platform: "github", name: "marketingcommunicationfromstackblitz", url: "https://github.com/Jaymelynng/marketingcommunicationfromstackblitz", tier: 4, purpose: "Marketing communication app from StackBlitz -- v0.dev auto-synced.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-39", platform: "github", name: "MarketingCommunicationMANUS", url: "https://github.com/Jaymelynng/MarketingCommunicationMANUS", tier: 5, purpose: "Marketing communication tool imported from Manus AI -- minimal content.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-40", platform: "github", name: "Communication-Hub-Admin-View-From-Bolt", url: "https://github.com/Jaymelynng/Communication-Hub-Admin-View-From-Bolt", tier: 4, purpose: "Marketing communication admin view -- created with StackBlitz/Bolt.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-41", platform: "github", name: "Marketing-Communication-From-Stackblitz-to-Replit", url: "https://github.com/Jaymelynng/Marketing-Communication-From-Stackblitz-to-Replit", tier: 4, purpose: "Marketing communication migrated from StackBlitz to Replit -- single commit.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-42", platform: "github", name: "New-Marketing-Communication-Structurte", url: "https://github.com/Jaymelynng/New-Marketing-Communication-Structurte", tier: 3, purpose: "'Organizing content' -- v0.dev synced project for marketing content structure. Updated Feb 2026.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-43", platform: "github", name: "New-Marketing-Communication-Structurte-ls", url: "https://github.com/Jaymelynng/New-Marketing-Communication-Structurte-ls", tier: 4, purpose: "'Next.js UI Freeze' -- another v0.dev marketing structure iteration.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-44", platform: "github", name: "Content-Tools-With-Cool-Layout-Concept", url: "https://github.com/Jaymelynng/Content-Tools-With-Cool-Layout-Concept", tier: 3, purpose: "'Organizing content' with a unique layout concept -- v0.dev synced project.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-45", platform: "github", name: "manus.marketing.app", url: "https://github.com/Jaymelynng/manus.marketing.app", tier: 5, purpose: "Marketing app created via Manus AI -- no README.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-46", platform: "github", name: "drag-and-drop-marketing-ideas", url: "https://github.com/Jaymelynng/drag-and-drop-marketing-ideas", tier: 4, purpose: "Drag-and-drop board for organizing marketing ideas -- created with StackBlitz/Bolt.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-47", platform: "github", name: "ADMINDASHBOARD", url: "https://github.com/Jaymelynng/ADMINDASHBOARD", tier: 5, purpose: "Admin dashboard -- created with StackBlitz, includes docs/lib/src folders and Supabase migrations.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-48", platform: "github", name: "Weekly-Marketing-Plan-from-V0", url: "https://github.com/Jaymelynng/Weekly-Marketing-Plan-from-V0", tier: 4, purpose: "Weekly marketing plan app from V0 -- minimal description.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-49", platform: "github", name: "marketing-dashboard-clarity", url: "https://github.com/Jaymelynng/marketing-dashboard-clarity", tier: 4, purpose: "Marketing dashboard with daily view toggling feature (32 commits). Built with Lovable.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-50", platform: "github", name: "marketing-habit-tracker-2025", url: "https://github.com/Jaymelynng/marketing-habit-tracker-2025", tier: 4, purpose: "Marketing habit tracker for 2025 -- built with Lovable + Supabase (26 commits).", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-51", platform: "github", name: "gym-marketing-magic", url: "https://github.com/Jaymelynng/gym-marketing-magic", tier: 3, purpose: "Most-developed marketing tool (319 commits, starred) -- includes social media form component. Built with Lovable.", group: "gh-marketing-comm", repoVisibility: "private" },
  { id: "github-52", platform: "github", name: "GymMarketingApp", url: "https://github.com/Jaymelynng/GymMarketingApp", tier: 4, purpose: "Early gym marketing app -- created with CodeSandbox, private, single initial commit.", group: "gh-marketing-comm", repoVisibility: "private" },
  { id: "github-53", platform: "github", name: "MarketingAppRedesign", url: "https://github.com/Jaymelynng/MarketingAppRedesign", tier: 4, purpose: "Redesign of the gym marketing app -- created with CodeSandbox, 2 commits.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-54", platform: "github", name: "marketingappphase1", url: "https://github.com/Jaymelynng/marketingappphase1", tier: 4, purpose: "Phase 1 of the gym marketing app -- created with CodeSandbox, 2 commits.", group: "gh-marketing-comm", repoVisibility: "public" },
  { id: "github-55", platform: "github", name: "Marketing-Project-I-think-origional-one-li-like-", url: "https://github.com/Jaymelynng/Marketing-Project-I-think-origional-one-li-like-", tier: 5, purpose: "Possibly the original marketing project -- created with CodeSandbox, single commit.", group: "gh-marketing-comm", repoVisibility: "public" },
];

// --- CONTENT & SOCIAL MEDIA ---
const ghContentSocialProjects: Project[] = [
  { id: "github-56", platform: "github", name: "julycontentguide", url: "https://github.com/Jaymelynng/julycontentguide", tier: 3, purpose: "July content guide -- monthly content calendar for the gymnastics marketing team.", group: "gh-content-social", repoVisibility: "public" },
  { id: "github-57", platform: "github", name: "AugustContent", url: "https://github.com/Jaymelynng/AugustContent", tier: 3, purpose: "August content guide -- monthly content calendar for the gymnastics marketing team.", group: "gh-content-social", repoVisibility: "public" },
  { id: "github-58", platform: "github", name: "GymVisionContentTracker", url: "https://github.com/Jaymelynng/GymVisionContentTracker", tier: 3, purpose: "Content tracker -- 'new ambassador view but for me to track.' Deployed to Vercel. Built with Lovable + Supabase.", group: "gh-content-social", repoVisibility: "public" },
  { id: "github-59", platform: "github", name: "tracksocialmediaposts", url: "https://github.com/Jaymelynng/tracksocialmediaposts", tier: 5, purpose: "Track social media posts -- early social tracking attempt, no README.", group: "gh-content-social", repoVisibility: "private" },
  { id: "github-60", platform: "github", name: "v0-social-media-post-optimization", url: "https://github.com/Jaymelynng/v0-social-media-post-optimization", tier: 4, purpose: "Social media post optimization tool -- v0.dev auto-synced project.", group: "gh-content-social", repoVisibility: "private" },
  { id: "github-61", platform: "github", name: "social-schedule-harmony", url: "https://github.com/Jaymelynng/social-schedule-harmony", tier: 4, purpose: "Social media scheduling tool with Supabase integration (52 commits). Built with Lovable.", group: "gh-content-social", repoVisibility: "private" },
  { id: "github-62", platform: "github", name: "gym-content-hub", url: "https://github.com/Jaymelynng/gym-content-hub", tier: 3, purpose: "Gym content hub -- built with Lovable (Vite/TypeScript/React/shadcn).", group: "gh-content-social", repoVisibility: "public" },
  { id: "github-63", platform: "github", name: "Content-Vision-with-panels", url: "https://github.com/Jaymelynng/Content-Vision-with-panels", tier: 3, purpose: "Content vision tool with panel-based layout -- includes ambassador role features. Built with Lovable + Supabase.", group: "gh-content-social", repoVisibility: "public" },
  { id: "github-64", platform: "github", name: "gymvsionproambassitor", url: "https://github.com/Jaymelynng/gymvsionproambassitor", tier: 4, purpose: "GymVision Pro Ambassador tracker (50 commits) -- for tracking ambassador content. Built with Lovable + Supabase.", group: "gh-content-social", repoVisibility: "public" },
  { id: "github-65", platform: "github", name: "scrollix-gen", url: "https://github.com/Jaymelynng/scrollix-gen", tier: 4, purpose: "Scroll/content generator tool (13 commits). Built with Lovable.", group: "gh-content-social", repoVisibility: "private" },
  { id: "github-66", platform: "github", name: "idea-pulse-planner", url: "https://github.com/Jaymelynng/idea-pulse-planner", tier: 5, purpose: "Idea and content pulse/planner (17 commits) -- built with Lovable + Supabase.", group: "gh-content-social", repoVisibility: "private" },
];

// --- SALES TOOLS ---
const ghSalesProjects: Project[] = [
  { id: "github-67", platform: "github", name: "SalesGenius", url: "https://github.com/Jaymelynng/SalesGenius", tier: 1, purpose: "Full CRM and lead re-engagement system for Oasis Gymnastics. Drop report (352 inactive accounts), voicemail campaign manager (85.91% success rate on 362 real calls), camp telethon system, scripts library, and analytics.", group: "gh-sales", repoVisibility: "public" },
  { id: "github-68", platform: "github", name: "sales-tool-kit", url: "https://github.com/Jaymelynng/sales-tool-kit", tier: 3, purpose: "Comprehensive sales management platform for multi-location gymnastics. Centralized lead tracking, performance monitoring, scripts, and resources. Built with React/TypeScript/Supabase.", group: "gh-sales", repoVisibility: "public" },
  { id: "github-69", platform: "github", name: "sales-specialist-prescreen", url: "https://github.com/Jaymelynng/sales-specialist-prescreen", tier: 1, purpose: "Voice memo app for pre-screening sales specialist candidates. Records answers to 5 prompts, tracks behavioral data (time-to-speak, retakes, playback count). Admin dashboard with A/B/C scoring. Genuinely novel.", group: "gh-sales", repoVisibility: "private" },
  { id: "github-70", platform: "github", name: "salesmastery-toolkit", url: "https://github.com/Jaymelynng/salesmastery-toolkit", tier: 3, purpose: "Sales mastery toolkit (7 commits) -- training platform designed to train staff organically during live calls. Built with Lovable.", group: "gh-sales", repoVisibility: "public" },
  { id: "github-71", platform: "github", name: "sales-dashboard-with-toolkit", url: "https://github.com/Jaymelynng/sales-dashboard-with-toolkit", tier: 4, purpose: "Sales dashboard with toolkit features -- created with StackBlitz, single initial commit.", group: "gh-sales", repoVisibility: "public" },
  { id: "github-72", platform: "github", name: "lead-hub-zerk", url: "https://github.com/Jaymelynng/lead-hub-zerk", tier: 4, purpose: "Lead management hub (83 commits, fully deployment-ready). Built with Lovable.", group: "gh-sales", repoVisibility: "private" },
  { id: "github-73", platform: "github", name: "winter-camp-sales-changetoallsales", url: "https://github.com/Jaymelynng/winter-camp-sales-changetoallsales", tier: 3, purpose: "Camp sales tracker -- started as winter camp, expanded to all sales (70 commits, Lovable + Supabase).", group: "gh-sales", repoVisibility: "public" },
  { id: "github-74", platform: "github", name: "peak-pulse-platform", url: "https://github.com/Jaymelynng/peak-pulse-platform", tier: 4, purpose: "Sales/performance platform (88 commits) -- built with Lovable + Supabase.", group: "gh-sales", repoVisibility: "public" },
  { id: "github-75", platform: "github", name: "painpoint-detective", url: "https://github.com/Jaymelynng/painpoint-detective", tier: 4, purpose: "Tool for identifying customer pain points and sales objections (16 commits). Built with Lovable.", group: "gh-sales", repoVisibility: "public" },
];

// --- APPROVAL WORKFLOWS ---
const ghApprovalProjects: Project[] = [
  { id: "github-76", platform: "github", name: "gym-approval-nexus", url: "https://github.com/Jaymelynng/gym-approval-nexus", tier: 4, purpose: "Gym approval workflow hub -- built with Lovable (Vite/TypeScript/React/shadcn).", group: "gh-approval", repoVisibility: "private" },
  { id: "github-77", platform: "github", name: "gym-approval-hub-fresh", url: "https://github.com/Jaymelynng/gym-approval-hub-fresh", tier: 4, purpose: "Fresh version of the gym approval hub -- no README.", group: "gh-approval", repoVisibility: "private" },
  { id: "github-78", platform: "github", name: "sleek-approval-portal", url: "https://github.com/Jaymelynng/sleek-approval-portal", tier: 4, purpose: "Sleek approval portal -- private, no README, Lovable-based.", group: "gh-approval", repoVisibility: "private" },
];

// --- GYM MANAGEMENT & DATA ---
const ghGymDataProjects: Project[] = [
  { id: "github-79", platform: "github", name: "my-gym-tools-main-hub", url: "https://github.com/Jaymelynng/my-gym-tools-main-hub", tier: 3, purpose: "Main hub for the mygymtools.com suite -- private Lovable project connecting all gym tools (65 commits). Live at mygymtools.com.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-80", platform: "github", name: "Variable-Command-Center", url: "https://github.com/Jaymelynng/Variable-Command-Center", tier: 1, purpose: "Manages ActiveCampaign personalization variables (%gym_name%) across 10 gym accounts plus central HQ. Syncs tags, values, and lists in bulk. Unusually thorough documentation.", group: "gh-gym-data", repoVisibility: "public" },
  { id: "github-81", platform: "github", name: "variables4activecampaign", url: "https://github.com/Jaymelynng/variables4activecampaign", tier: 4, purpose: "ActiveCampaign variables management tool (104 commits). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-82", platform: "github", name: "waiver-viewer-web", url: "https://github.com/Jaymelynng/waiver-viewer-web", tier: 1, purpose: "PRODUCTION -- Waiver and policy viewer for 10 gyms, with per-gym theming, PDF download, and admin editor. Live at waiverhub.mygymtools.com.", group: "gh-gym-data", repoVisibility: "public" },
  { id: "github-83", platform: "github", name: "tuition-calculator", url: "https://github.com/Jaymelynng/tuition-calculator", tier: 2, purpose: "Drag-and-drop tuition quote builder for gymnastics academies -- prorated tuition, sibling discounts, share-by-link. React/TypeScript/Supabase.", group: "gh-gym-data", repoVisibility: "public" },
  { id: "github-84", platform: "github", name: "gym-completion-dashboard", url: "https://github.com/Jaymelynng/gym-completion-dashboard", tier: 4, purpose: "Gym task/event completion dashboard -- v0.app auto-synced project.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-85", platform: "github", name: "gym-status-tracker", url: "https://github.com/Jaymelynng/gym-status-tracker", tier: 5, purpose: "Gym status tracker -- empty repo (no files committed yet).", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-86", platform: "github", name: "gym-status-tracker-d5c490cc", url: "https://github.com/Jaymelynng/gym-status-tracker-d5c490cc", tier: 4, purpose: "Gym status tracker (45 commits, connected to Supabase). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-87", platform: "github", name: "gym-extract-alchemy", url: "https://github.com/Jaymelynng/gym-extract-alchemy", tier: 4, purpose: "Gym data extraction tool (20 commits, Supabase-backed). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-88", platform: "github", name: "multi-gym-metrics-hub", url: "https://github.com/Jaymelynng/multi-gym-metrics-hub", tier: 4, purpose: "Multi-gym metrics/analytics hub (17 commits). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-89", platform: "github", name: "gym-comm-connectivity", url: "https://github.com/Jaymelynng/gym-comm-connectivity", tier: 4, purpose: "Gym communication connectivity tool (2 commits). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-90", platform: "github", name: "gym-connectivity-hub", url: "https://github.com/Jaymelynng/gym-connectivity-hub", tier: 4, purpose: "Gym connectivity hub (19 commits, restructured layout). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-91", platform: "github", name: "gymnastic-comm-link", url: "https://github.com/Jaymelynng/gymnastic-comm-link", tier: 4, purpose: "Gymnastics communication link tool (17 commits). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-92", platform: "github", name: "master-gym-blueprint", url: "https://github.com/Jaymelynng/master-gym-blueprint", tier: 4, purpose: "Master gym blueprint -- category-based view for gym operations (40 commits). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-93", platform: "github", name: "gym-identity-forge", url: "https://github.com/Jaymelynng/gym-identity-forge", tier: 4, purpose: "Gym brand identity tool (6 commits). Built with Lovable + Supabase.", group: "gh-gym-data", repoVisibility: "private" },
  { id: "github-94", platform: "github", name: "Gymnastics-Magic-Data-Base", url: "https://github.com/Jaymelynng/Gymnastics-Magic-Data-Base", tier: 5, purpose: "Gymnastics data base -- public, empty (no files committed).", group: "gh-gym-data", repoVisibility: "public" },
  { id: "github-95", platform: "github", name: "taskify-gym-connector", url: "https://github.com/Jaymelynng/taskify-gym-connector", tier: 4, purpose: "Task management connector for gyms (17 commits, Supabase). Built with Lovable.", group: "gh-gym-data", repoVisibility: "private" },
];

// --- GYM CONNECT & DASHBOARDS ---
const ghGymConnectProjects: Project[] = [
  { id: "github-96", platform: "github", name: "ourgymconnect", url: "https://github.com/Jaymelynng/ourgymconnect", tier: 4, purpose: "Main gym connect platform (213 commits, public) -- calendar/scheduling with day-click functionality. Built with Lovable.", group: "gh-gym-connect", repoVisibility: "public" },
  { id: "github-97", platform: "github", name: "ourgymconnect-21", url: "https://github.com/Jaymelynng/ourgymconnect-21", tier: 4, purpose: "ourgymconnect version 21 (281 commits) -- the most-iterated version of this platform. Built with Lovable.", group: "gh-gym-connect", repoVisibility: "public" },
  { id: "github-98", platform: "github", name: "collaborative-vision-hub", url: "https://github.com/Jaymelynng/collaborative-vision-hub", tier: 4, purpose: "Collaborative vision hub (65 commits) -- content planning platform with card layout. Built with Lovable.", group: "gh-gym-connect", repoVisibility: "private" },
  { id: "github-99", platform: "github", name: "collaborative-vision-hub-64", url: "https://github.com/Jaymelynng/collaborative-vision-hub-64", tier: 4, purpose: "Collaborative vision hub version 64 (90 commits) -- adds stages with content items. Built with Lovable.", group: "gh-gym-connect", repoVisibility: "private" },
  { id: "github-100", platform: "github", name: "collaborative-vision-hub-07", url: "https://github.com/Jaymelynng/collaborative-vision-hub-07", tier: 4, purpose: "Collaborative vision hub version 07 (75 commits, Supabase-backed). Built with Lovable.", group: "gh-gym-connect", repoVisibility: "private" },
  { id: "github-101", platform: "github", name: "gymnastics-class-connect", url: "https://github.com/Jaymelynng/gymnastics-class-connect", tier: 4, purpose: "Gymnastics class connection platform (18 commits). Built with Lovable.", group: "gh-gym-connect", repoVisibility: "private" },
  { id: "github-102", platform: "github", name: "limitless-docs-keeper", url: "https://github.com/Jaymelynng/limitless-docs-keeper", tier: 4, purpose: "Document storage and keeper app (21 commits, with authentication). Built with Lovable.", group: "gh-gym-connect", repoVisibility: "private" },
  { id: "github-103", platform: "github", name: "roundrock", url: "https://github.com/Jaymelynng/roundrock", tier: 4, purpose: "Round Rock gym-specific platform (44 commits) -- includes Instagram feed mock data and visual effects. Built with Lovable.", group: "gh-gym-connect", repoVisibility: "private" },
];

// --- BRAND & DESIGN TOOLS ---
const ghBrandDesignProjects: Project[] = [
  { id: "github-104", platform: "github", name: "Brand-Kits-and-more", url: "https://github.com/Jaymelynng/Brand-Kits-and-more", tier: 2, purpose: "Brand kit management tool -- built with Lovable (Vite/TypeScript/React/shadcn). Listed as 'Coming Soon' on mygymtools.com.", group: "gh-brand-design", repoVisibility: "public" },
  { id: "github-105", platform: "github", name: "brand-hub-display", url: "https://github.com/Jaymelynng/brand-hub-display", tier: 4, purpose: "Brand hub display tool -- no README.", group: "gh-brand-design", repoVisibility: "private" },
  { id: "github-106", platform: "github", name: "hue-harmony-toolkit", url: "https://github.com/Jaymelynng/hue-harmony-toolkit", tier: 4, purpose: "Color/brand hue harmony toolkit (3 commits, Supabase-connected). Built with Lovable.", group: "gh-brand-design", repoVisibility: "private" },
  { id: "github-107", platform: "github", name: "color-dance", url: "https://github.com/Jaymelynng/color-dance", tier: 4, purpose: "Visual color representation tool (2 commits). Actually contains Winter Camp Sales Toolkit with stats cards and lead tables.", group: "gh-brand-design", repoVisibility: "private" },
  { id: "github-108", platform: "github", name: "dual-face-logo", url: "https://github.com/Jaymelynng/dual-face-logo", tier: 5, purpose: "Dual-face logo creator/viewer -- a logo animation experiment. Built with Lovable.", group: "gh-brand-design", repoVisibility: "private" },
  { id: "github-109", platform: "github", name: "Bio_Page_Manager", url: "https://github.com/Jaymelynng/Bio_Page_Manager", tier: 2, purpose: "Bio page (linktree-style) manager -- built with Lovable. Marked as 'Ready' on mygymtools.com.", group: "gh-brand-design", repoVisibility: "public" },
];

// --- CAMP TOOLS ---
const ghCampProjects: Project[] = [
  { id: "github-110", platform: "github", name: "Camp-Database-5.19.25", url: "https://github.com/Jaymelynng/Camp-Database-5.19.25", tier: 4, purpose: "Camp database -- v0.dev auto-synced project dated May 19, 2025.", group: "gh-camp", repoVisibility: "private" },
  { id: "github-111", platform: "github", name: "campiverse-ninja-gymnastics", url: "https://github.com/Jaymelynng/campiverse-ninja-gymnastics", tier: 4, purpose: "Ninja gymnastics camp platform (7 commits). Built with Lovable.", group: "gh-camp", repoVisibility: "private" },
];

// --- NON-GYM PROJECTS ---
const ghNonGymProjects: Project[] = [
  { id: "github-112", platform: "github", name: "orderbuddylandingpage", url: "https://github.com/Jaymelynng/orderbuddylandingpage", tier: 4, purpose: "Order Buddy landing page (3 commits). Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-113", platform: "github", name: "orderbuddylandingpage-83", url: "https://github.com/Jaymelynng/orderbuddylandingpage-83", tier: 4, purpose: "Order Buddy landing page version 83 (5 commits). Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-114", platform: "github", name: "mocklandingcaprr", url: "https://github.com/Jaymelynng/mocklandingcaprr", tier: 4, purpose: "Mock landing page for Capital Gymnastics Round Rock (29 commits). Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-115", platform: "github", name: "JaymesMagic", url: "https://github.com/Jaymelynng/JaymesMagic", tier: 3, purpose: "Document management system -- grid/list views, real-time search, category management, file upload, export to Markdown/Text/JSON. Built with React/TypeScript/Supabase.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-116", platform: "github", name: "everything-everything", url: "https://github.com/Jaymelynng/everything-everything", tier: 5, purpose: "Private repo -- empty, no README. Likely a catch-all or staging repo.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-117", platform: "github", name: "-Jayme-s-DEV-Command-Center", url: "https://github.com/Jaymelynng/-Jayme-s-DEV-Command-Center", tier: 3, purpose: "Interactive searchable dashboard to track all deployed website recommendations. Built with Manus AI -- created Feb 2026.", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-118", platform: "github", name: "Manus", url: "https://github.com/Jaymelynng/Manus", tier: 5, purpose: "Manus AI project -- public, no README or description.", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-119", platform: "github", name: "browser-use", url: "https://github.com/Jaymelynng/browser-use", tier: 5, purpose: "Forked from browser-use/browser-use -- 'Make websites accessible for AI agents.' Open-source Python library, not your own work.", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-120", platform: "github", name: "ask-my-media", url: "https://github.com/Jaymelynng/ask-my-media", tier: 3, purpose: "'Ask my media' AI tool -- built with Lovable.", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-121", platform: "github", name: "Jaymes-GPT-Prompts-Transcripts", url: "https://github.com/Jaymelynng/Jaymes-GPT-Prompts-Transcripts", tier: 5, purpose: "GPT prompts and transcripts archive -- empty repo, no files committed.", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-122", platform: "github", name: "vision-gym-creator-78", url: "https://github.com/Jaymelynng/vision-gym-creator-78", tier: 4, purpose: "Gym vision/content creator tool (8 commits, 404 page fix). Built with Lovable.", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-123", platform: "github", name: "gym-story-forge", url: "https://github.com/Jaymelynng/gym-story-forge", tier: 4, purpose: "Gym story/content forge -- private, 34 commits. Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-124", platform: "github", name: "cloudy-cartwheel-fun", url: "https://github.com/Jaymelynng/cloudy-cartwheel-fun", tier: 4, purpose: "Gymnastics-themed content tool (38 commits, counter functionality). Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-125", platform: "github", name: "cloudy-cartwheel-fun-8a942feb", url: "https://github.com/Jaymelynng/cloudy-cartwheel-fun-8a942feb", tier: 4, purpose: "Extended version of cloudy-cartwheel-fun (95 commits, UI overlap fixes). Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-126", platform: "github", name: "story-weaver", url: "https://github.com/Jaymelynng/story-weaver", tier: 2, purpose: "'Story Bridge' -- family reading app where the same fairy tale adapts to 4 reading levels (Toddler/Early/Chapter/Adult). Three full fairy tales written. Completely novel concept with no direct competitor.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-127", platform: "github", name: "scene-weaver", url: "https://github.com/Jaymelynng/scene-weaver", tier: 3, purpose: "Scene weaver creative tool -- built with Lovable (Vite/TypeScript/React/shadcn).", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-128", platform: "github", name: "custom-boss-battles-gemcraft", url: "https://github.com/Jaymelynng/custom-boss-battles-gemcraft", tier: 5, purpose: "Gemcraft game -- custom boss battles with wand abilities/damage mechanics (27 commits). Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-129", platform: "github", name: "plan-c-cannabis-connect", url: "https://github.com/Jaymelynng/plan-c-cannabis-connect", tier: 3, purpose: "Podcast/creator landing page with Hero, LatestEpisode, About, SocialLinks, and Footer components. Built with Lovable.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-130", platform: "github", name: "dance-studio-organizer-pro", url: "https://github.com/Jaymelynng/dance-studio-organizer-pro", tier: 3, purpose: "Dance studio organizer -- same operational toolkit concept as mygymtools but for dance studios. Expandable market.", group: "gh-non-gym", repoVisibility: "public" },
  { id: "github-131", platform: "github", name: "hoa-voices-collective", url: "https://github.com/Jaymelynng/hoa-voices-collective", tier: 2, purpose: "HOA community voting tool -- residents propose improvements, vote (one vote per household via magic link auth), track proposals. Clean code, large potential market.", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-132", platform: "github", name: "legal-evidence-navigator", url: "https://github.com/Jaymelynng/legal-evidence-navigator", tier: 2, purpose: "Full case management dashboard with sidebar nav, Documents view, Timeline view, AI Chat interface, search. Most complex UI outside gym tools (62 commits).", group: "gh-non-gym", repoVisibility: "private" },
  { id: "github-133", platform: "github", name: "Degage-Classical-Conservatory", url: "https://github.com/Jaymelynng/Degage-Classical-Conservatory", tier: 5, purpose: "Classical conservatory (dance/music school) tool -- empty repo, no files.", group: "gh-non-gym", repoVisibility: "public" },
];

// --- PERSONAL / MISC / IMPORT ---
const ghPersonalProjects: Project[] = [
  { id: "github-134", platform: "github", name: "TRACKER-ATTEMPT", url: "https://github.com/Jaymelynng/TRACKER-ATTEMPT", tier: 5, purpose: "Tracker attempt -- no README, no description.", group: "gh-personal", repoVisibility: "public" },
  { id: "github-135", platform: "github", name: "import", url: "https://github.com/Jaymelynng/import", tier: 5, purpose: "Import tool -- public, 2 commits with uploaded files. No description.", group: "gh-personal", repoVisibility: "public" },
  { id: "github-136", platform: "github", name: "Jaymegethub", url: "https://github.com/Jaymelynng/Jaymegethub", tier: 5, purpose: "Empty private repo -- only 1 file (.gitattributes), created Feb 2024.", group: "gh-personal", repoVisibility: "private" },
  { id: "github-137", platform: "github", name: "REPLACE_WITH_GITHUB_REPOSITORY_URL", url: "https://github.com/Jaymelynng/REPLACE_WITH_GITHUB_REPOSITORY_URL", tier: 5, purpose: "Placeholder repo -- literally named 'REPLACE_WITH_GITHUB_REPOSITORY_URL.' Empty.", group: "gh-personal", repoVisibility: "public" },
  { id: "github-138", platform: "github", name: "https-github.com-Jaymelynng-ourgymconnect", url: "https://github.com/Jaymelynng/https-github.com-Jaymelynng-ourgymconnect", tier: 5, purpose: "Incorrectly named repo (URL-as-name) -- public, empty, no files.", group: "gh-personal", repoVisibility: "public" },
  { id: "github-139", platform: "github", name: "https-github.com-Jaymelynng-gymnect-dashboard", url: "https://github.com/Jaymelynng/https-github.com-Jaymelynng-gymnect-dashboard", tier: 5, purpose: "Incorrectly named repo (URL-as-name) -- public, empty, no files.", group: "gh-personal", repoVisibility: "public" },
  { id: "github-140", platform: "github", name: "https-github.com-Jaymelynng-gymnastics-class-connect", url: "https://github.com/Jaymelynng/https-github.com-Jaymelynng-gymnastics-class-connect", tier: 5, purpose: "Incorrectly named repo (URL-as-name) -- public, empty, no files.", group: "gh-personal", repoVisibility: "public" },
];

// =============================================================================
// Export grouped data
// =============================================================================
export const githubGroups: ProjectGroup[] = [
  {
    id: "gh-event-calendar",
    name: "Event & Calendar Tools",
    description: "Event management, calendar sync, and scheduling tools for multi-location gymnastics operations",
    platform: "github",
    projects: ghEventCalendarProjects,
  },
  {
    id: "gh-email",
    name: "Email Tools",
    description: "Email template builders, analyzers, approval workflows, and ActiveCampaign integrations",
    platform: "github",
    projects: ghEmailProjects,
  },
  {
    id: "gh-link-mgmt",
    name: "Link Management",
    description: "Bulk link management, link validation, and linktree-style bio pages for gym operations",
    platform: "github",
    projects: ghLinkMgmtProjects,
  },
  {
    id: "gh-marketing-comm",
    name: "Marketing Communication",
    description: "Marketing communication hubs, dashboards, habit trackers, and content organization tools",
    platform: "github",
    projects: ghMarketingCommProjects,
  },
  {
    id: "gh-content-social",
    name: "Content & Social Media",
    description: "Content calendars, social media optimization, ambassador tracking, and content vision tools",
    platform: "github",
    projects: ghContentSocialProjects,
  },
  {
    id: "gh-sales",
    name: "Sales Tools",
    description: "CRM systems, lead management, sales pre-screening, and sales training toolkits",
    platform: "github",
    projects: ghSalesProjects,
  },
  {
    id: "gh-approval",
    name: "Approval Workflows",
    description: "Email and content approval workflow portals for multi-person review processes",
    platform: "github",
    projects: ghApprovalProjects,
  },
  {
    id: "gh-gym-data",
    name: "Gym Management & Data",
    description: "Core gym tools suite including waivers, tuition calculator, variable management, metrics, and data extraction",
    platform: "github",
    projects: ghGymDataProjects,
  },
  {
    id: "gh-gym-connect",
    name: "Gym Connect & Dashboards",
    description: "Gym connectivity platforms, collaborative vision hubs, and location-specific dashboards",
    platform: "github",
    projects: ghGymConnectProjects,
  },
  {
    id: "gh-brand-design",
    name: "Brand & Design Tools",
    description: "Brand kit management, color tools, bio page managers, and logo experiments",
    platform: "github",
    projects: ghBrandDesignProjects,
  },
  {
    id: "gh-camp",
    name: "Camp Tools",
    description: "Camp database management and camp-specific platforms",
    platform: "github",
    projects: ghCampProjects,
  },
  {
    id: "gh-non-gym",
    name: "Non-Gym Projects",
    description: "Story Bridge reading app, HOA voting tool, legal evidence navigator, dance studio organizer, and other non-gymnastics projects",
    platform: "github",
    projects: ghNonGymProjects,
  },
  {
    id: "gh-personal",
    name: "Personal/Misc/Import",
    description: "Empty shells, placeholder repos, misconfigured clones, and personal utility repos",
    platform: "github",
    projects: ghPersonalProjects,
  },
];
