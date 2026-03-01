import type { Project, ProjectGroup } from "../types";

// ────────────────────────────────────────────────────────────────
// Bolt.new Projects — Complete inventory (~192 projects)
// ────────────────────────────────────────────────────────────────

const boltProjects: Project[] = [
  // 1
  {
    id: "bolt-1",
    platform: "bolt",
    name: "Gymnastics Admin Dashboard Implementation",
    url: "https://bolt.new/p/34883405",
    purpose: "Implementation of an administrative dashboard for managing gymnastics operations.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 2
  {
    id: "bolt-2",
    platform: "bolt",
    name: "Marketing Planner Bullet Journal (forked)",
    url: "https://bolt.new/p/45780477",
    purpose: "Forked version of a bullet-journal-style marketing planner for organizing campaigns.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 3
  {
    id: "bolt-3",
    platform: "bolt",
    name: "Gym Policy Rollout Tracker",
    url: "https://bolt.new/p/63562483",
    purpose: "Tracks the rollout and adoption of new policies across gym locations.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 4
  {
    id: "bolt-4",
    platform: "bolt",
    name: "Gymnastics Brain OS System",
    url: "https://bolt.new/p/63439079",
    purpose: "An operating-system-style hub for organizing all gymnastics business knowledge and workflows.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 5
  {
    id: "bolt-5",
    platform: "bolt",
    name: "Elite Gymnastics Coaching AI",
    url: "https://bolt.new/p/63438678",
    purpose: "AI-powered coaching assistant for elite gymnastics training programs.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 6
  {
    id: "bolt-6",
    platform: "bolt",
    name: "GymFX Studio SaaS Platform",
    url: "https://bolt.new/p/63078981",
    purpose: "SaaS platform for gymnastics studio management and operations.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 7
  {
    id: "bolt-7",
    platform: "bolt",
    name: "Arizona Legal Research Mock Judge",
    url: "https://bolt.new/p/62614130",
    purpose: "Mock judge tool for Arizona legal research and case analysis.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 8
  {
    id: "bolt-8",
    platform: "bolt",
    name: "Multi-Gym Branded Email Generator",
    url: "https://bolt.new/p/61693092",
    purpose: "Generates branded email templates customized for multiple gym locations.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 9
  {
    id: "bolt-9",
    platform: "bolt",
    name: "My Gym Tools Hub Setup",
    url: "https://bolt.new/p/61186934",
    purpose: "Central hub setup for accessing all gym management tools in one place.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 10
  {
    id: "bolt-10",
    platform: "bolt",
    name: "Double-Sided 3D Logo Spin",
    url: "https://bolt.new/p/59902531",
    purpose: "Interactive 3D spinning logo animation with double-sided rendering.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 11
  {
    id: "bolt-11",
    platform: "bolt",
    name: "Create Oasis Gym Link Tree",
    url: "https://bolt.new/p/41426553",
    purpose: "Link-tree-style landing page for Oasis Gym social media and web links.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 12
  {
    id: "bolt-12",
    platform: "bolt",
    name: "Ellie's Magical Treasure Hunt Game (dup)",
    url: "https://bolt.new/p/59179846",
    purpose: "Duplicate of a magical treasure hunt game built for kids.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 13
  {
    id: "bolt-13",
    platform: "bolt",
    name: "Gym Data Source-of-Truth Link Validation",
    url: "https://bolt.new/p/58504246",
    purpose: "Validates and maintains the source-of-truth links across gym data systems.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 14
  {
    id: "bolt-14",
    platform: "bolt",
    name: "Create Gym Social Media Content Planner (forked)",
    url: "https://bolt.new/p/37015226",
    purpose: "Forked social media content planner tailored for gym marketing.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 15
  {
    id: "bolt-15",
    platform: "bolt",
    name: "Integrate Admin Dashboard Component",
    url: "https://bolt.new/p/37154866",
    purpose: "Integration of reusable admin dashboard components into the main app.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 16
  {
    id: "bolt-16",
    platform: "bolt",
    name: "content ideas total, using, love like",
    url: "https://bolt.new/p/37005559",
    purpose: "Content ideation tracker for organizing and rating social media ideas.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 17
  {
    id: "bolt-17",
    platform: "bolt",
    name: "Create Content Organizer",
    url: "https://bolt.new/p/41494019",
    purpose: "Tool for organizing and categorizing content assets across platforms.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 18
  {
    id: "bolt-18",
    platform: "bolt",
    name: "Set up gym content review application",
    url: "https://bolt.new/p/38652143",
    purpose: "Application for reviewing and approving gym content before publication.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 19
  {
    id: "bolt-19",
    platform: "bolt",
    name: "Create Gym Management System",
    url: "https://bolt.new/p/44050623",
    purpose: "Comprehensive management system for gym operations and administration.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 20
  {
    id: "bolt-20",
    platform: "bolt",
    name: "Multi-Gym Email Template Audit",
    url: "https://bolt.new/p/58152077",
    purpose: "Audit tool for reviewing email templates across multiple gym locations.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 21
  {
    id: "bolt-21",
    platform: "bolt",
    name: "Multi-Gym Email Template Optimization",
    url: "https://bolt.new/p/58146571",
    purpose: "Optimizes email templates for consistency and performance across gym brands.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 22
  {
    id: "bolt-22",
    platform: "bolt",
    name: "Gym Email Template Master Source",
    url: "https://bolt.new/p/57623989",
    purpose: "Master source repository for all gym email templates and designs.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 23
  {
    id: "bolt-23",
    platform: "bolt",
    name: "Gym Email Template Customization",
    url: "https://bolt.new/p/57591530",
    purpose: "Customization interface for tailoring gym email templates per location.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 24
  {
    id: "bolt-24",
    platform: "bolt",
    name: "Rhythm Rookie Drum Adventure",
    url: "https://bolt.new/p/57589547",
    purpose: "Interactive rhythm and drumming adventure game for kids.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 25
  {
    id: "bolt-25",
    platform: "bolt",
    name: "Gym Brand Kit Database",
    url: "https://bolt.new/p/57520514",
    purpose: "Database for storing and managing brand kit assets across gym locations.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 26
  {
    id: "bolt-26",
    platform: "bolt",
    name: "Gym Brand Kit Dashboard",
    url: "https://bolt.new/p/57558487",
    purpose: "Dashboard for visualizing and managing gym brand kit elements.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 27
  {
    id: "bolt-27",
    platform: "bolt",
    name: "Setting up the Brand System App (dup)",
    url: "https://bolt.new/p/57380933",
    purpose: "Duplicate of the brand system app setup for gym brand management.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 28
  {
    id: "bolt-28",
    platform: "bolt",
    name: "Blank (duplicated)",
    url: "https://bolt.new/p/57296248",
    purpose: "Blank duplicated project used as a starting template.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 29
  {
    id: "bolt-29",
    platform: "bolt",
    name: "Gym Email Template Manager",
    url: "https://bolt.new/p/56944885",
    purpose: "Management interface for organizing and editing gym email templates.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 30
  {
    id: "bolt-30",
    platform: "bolt",
    name: "Active Campaign HTML Email Builder",
    url: "https://bolt.new/p/56835447",
    purpose: "HTML email builder designed for ActiveCampaign integration.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 31
  {
    id: "bolt-31",
    platform: "bolt",
    name: "AI-Powered Gymnastics Email Marketing Platform",
    url: "https://bolt.new/p/56763018",
    purpose: "AI-driven platform for creating and automating gymnastics email marketing campaigns.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 32
  {
    id: "bolt-32",
    platform: "bolt",
    name: "Comprehensive Gymnastics Event Data Scraper",
    url: "https://bolt.new/p/56437042",
    purpose: "Web scraper for collecting gymnastics event data from various sources.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 33
  {
    id: "bolt-33",
    platform: "bolt",
    name: "Aug Social Media Content",
    url: "https://bolt.new/p/52150081",
    purpose: "August social media content planning and scheduling tool.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 34
  {
    id: "bolt-34",
    platform: "bolt",
    name: "Professional Gym Email Calendar Generator",
    url: "https://bolt.new/p/55781419",
    purpose: "Generates a calendar-based schedule for gym email marketing campaigns.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 35
  {
    id: "bolt-35",
    platform: "bolt",
    name: "Implement Sales Toolkit",
    url: "https://bolt.new/p/36500901",
    purpose: "Sales toolkit implementation with tools for lead tracking and conversions.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 36
  {
    id: "bolt-36",
    platform: "bolt",
    name: "Gym Email Collection Management System",
    url: "https://bolt.new/p/55302919",
    purpose: "System for managing email list collection and subscriber data across gyms.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 37
  {
    id: "bolt-37",
    platform: "bolt",
    name: "Image to Printable Sheet Optimization Tool",
    url: "https://bolt.new/p/55113572",
    purpose: "Converts images into optimized printable sheet layouts.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 38
  {
    id: "bolt-38",
    platform: "bolt",
    name: "ActiveCampaign Email Template Management System",
    url: "https://bolt.new/p/55043717",
    purpose: "Management system for ActiveCampaign email templates and automation workflows.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 39
  {
    id: "bolt-39",
    platform: "bolt",
    name: "Gym Email Data Collection Form",
    url: "https://bolt.new/p/54956028",
    purpose: "Data collection form for gathering gym email marketing information.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 40
  {
    id: "bolt-40",
    platform: "bolt",
    name: "Business Opportunity Research & Validation Tool",
    url: "https://bolt.new/p/54626158",
    purpose: "Tool for researching and validating new business opportunities.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 41
  {
    id: "bolt-41",
    platform: "bolt",
    name: "Gymnastics Content Management System",
    url: "https://bolt.new/p/54589392",
    purpose: "CMS for managing gymnastics-related content across digital channels.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 42
  {
    id: "bolt-42",
    platform: "bolt",
    name: "July Social Media Content Planner (Final)",
    url: "https://bolt.new/p/49917188",
    purpose: "Final version of the July social media content planning tool.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 43
  {
    id: "bolt-43",
    platform: "bolt",
    name: "Sales Genius App - Lead Management Dashboard",
    url: "https://bolt.new/p/50184367",
    purpose: "Lead management dashboard for tracking sales pipeline and conversions.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 44
  {
    id: "bolt-44",
    platform: "bolt",
    name: "Interactive Content Tracking Dashboard (dup)",
    url: "https://bolt.new/p/53995355",
    purpose: "Duplicate of an interactive dashboard for tracking content performance.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 45
  {
    id: "bolt-45",
    platform: "bolt",
    name: "Interactive Content Tracking Dashboard",
    url: "https://bolt.new/p/52972153",
    purpose: "Interactive dashboard for tracking content creation and engagement metrics.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 46
  {
    id: "bolt-46",
    platform: "bolt",
    name: "Create Supabase tables for content mgmt (dup)",
    url: "https://bolt.new/p/53914232",
    purpose: "Duplicate setup of Supabase database tables for content management.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 47
  {
    id: "bolt-47",
    platform: "bolt",
    name: "Integrate Sales Dashboard",
    url: "https://bolt.new/p/41600633",
    purpose: "Integration of a sales performance dashboard into the main application.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 48
  {
    id: "bolt-48",
    platform: "bolt",
    name: "Gymnastics Video Frame & Graphics Designer",
    url: "https://bolt.new/p/53674494",
    purpose: "Design tool for creating video frames and graphics for gymnastics content.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 49
  {
    id: "bolt-49",
    platform: "bolt",
    name: "Jayme's Magic Document Management System",
    url: "https://bolt.new/p/53434780",
    purpose: "Personal document management system for organizing files and records.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 50
  {
    id: "bolt-50",
    platform: "bolt",
    name: "Refactored Tuition Calculator",
    url: "https://bolt.new/p/34795158",
    purpose: "Refactored calculator for computing gymnastics tuition and pricing.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 51
  {
    id: "bolt-51",
    platform: "bolt",
    name: "Video Editing Laptop Comparison App",
    url: "https://bolt.new/p/53155432",
    purpose: "Comparison tool for evaluating laptops suited for video editing.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 52
  {
    id: "bolt-52",
    platform: "bolt",
    name: "Complete Gymnastics Events Management Dashboard",
    url: "https://bolt.new/p/50642984",
    purpose: "Full-featured dashboard for managing gymnastics events and competitions.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 53
  {
    id: "bolt-53",
    platform: "bolt",
    name: "Email Sorcery Studio - AI Visual Email Builder",
    url: "https://bolt.new/p/52838692",
    purpose: "AI-powered visual email builder for crafting stunning email campaigns.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 54
  {
    id: "bolt-54",
    platform: "bolt",
    name: "Interactive Resident Ledger",
    url: "https://bolt.new/p/52782925",
    purpose: "Interactive ledger application for tracking resident accounts and records.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 55
  {
    id: "bolt-55",
    platform: "bolt",
    name: "Gym Social Media Performance Analyzer",
    url: "https://bolt.new/p/52705407",
    purpose: "Analytics tool for measuring gym social media performance across platforms.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 56
  {
    id: "bolt-56",
    platform: "bolt",
    name: "July Social Media Content Planner",
    url: "https://bolt.new/p/49892197",
    purpose: "Content planner for scheduling and organizing July social media posts.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 57
  {
    id: "bolt-57",
    platform: "bolt",
    name: "Flexible Content Template Builder",
    url: "https://bolt.new/p/52446961",
    purpose: "Builder for creating flexible, reusable content templates.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 58
  {
    id: "bolt-58",
    platform: "bolt",
    name: "Enhanced Events Dashboard with Supabase",
    url: "https://bolt.new/p/52007106",
    purpose: "Enhanced events management dashboard powered by Supabase backend.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 59
  {
    id: "bolt-59",
    platform: "bolt",
    name: "Document Analysis Platform for Coaching Campaign",
    url: "https://bolt.new/p/51969594",
    purpose: "Platform for analyzing coaching campaign documents and extracting insights.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 60
  {
    id: "bolt-60",
    platform: "bolt",
    name: "Revolutionary Coach Development Framework Website",
    url: "https://bolt.new/p/51909620",
    purpose: "Website showcasing a coach development framework for gymnastics professionals.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 61
  {
    id: "bolt-61",
    platform: "bolt",
    name: "Gymnastics Social Media Content Tracker",
    url: "https://bolt.new/p/51329270",
    purpose: "Tracker for monitoring gymnastics social media content across channels.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 62
  {
    id: "bolt-62",
    platform: "bolt",
    name: "Gymnastics Events Management System w/ Supabase",
    url: "https://bolt.new/p/50726548",
    purpose: "Events management system for gymnastics with Supabase database integration.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 63
  {
    id: "bolt-63",
    platform: "bolt",
    name: "Complete Gymnastics Skill Selector App",
    url: "https://bolt.new/p/51245851",
    purpose: "App for selecting and tracking gymnastics skills by level and apparatus.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 64
  {
    id: "bolt-64",
    platform: "bolt",
    name: "Complete Gymnastics Events Database",
    url: "https://bolt.new/p/51221421",
    purpose: "Complete database of gymnastics events, meets, and competition data.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 65
  {
    id: "bolt-65",
    platform: "bolt",
    name: "Bolt.new App Interface",
    url: "https://bolt.new/p/51207935",
    purpose: "Generic Bolt.new app interface scaffold for rapid prototyping.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 66
  {
    id: "bolt-66",
    platform: "bolt",
    name: "Comprehensive Gymnastics Market Analysis App",
    url: "https://bolt.new/p/51192093",
    purpose: "Market analysis application for evaluating gymnastics industry trends.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 67
  {
    id: "bolt-67",
    platform: "bolt",
    name: "Interactive Guess Who Game",
    url: "https://bolt.new/p/51186041",
    purpose: "Interactive digital version of the classic Guess Who game for kids.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 68
  {
    id: "bolt-68",
    platform: "bolt",
    name: "Rainbow Adventure Board Game",
    url: "https://bolt.new/p/51103443",
    purpose: "Colorful digital board game adventure designed for children.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 69
  {
    id: "bolt-69",
    platform: "bolt",
    name: "Complete Supabase Backend for Events Dashboard",
    url: "https://bolt.new/p/50919954",
    purpose: "Complete Supabase backend setup for the gymnastics events dashboard.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 70
  {
    id: "bolt-70",
    platform: "bolt",
    name: "Drag & Drop Image Template Interface",
    url: "https://bolt.new/p/50815204",
    purpose: "Drag-and-drop interface for arranging images into printable templates.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 71
  {
    id: "bolt-71",
    platform: "bolt",
    name: "Complete Gymnastics Content Database",
    url: "https://bolt.new/p/50191413",
    purpose: "Database for storing and organizing all gymnastics content assets.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 72
  {
    id: "bolt-72",
    platform: "bolt",
    name: "Enhanced Gymnastics Events Mgmt Dashboard",
    url: "https://bolt.new/p/50642853",
    purpose: "Enhanced version of the gymnastics events management dashboard.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 73
  {
    id: "bolt-73",
    platform: "bolt",
    name: "Node.js Express API with Supabase Database",
    url: "https://bolt.new/p/50368681",
    purpose: "Backend API built with Node.js Express and Supabase database.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 74
  {
    id: "bolt-74",
    platform: "bolt",
    name: "Interactive Ambassador Content Guide",
    url: "https://bolt.new/p/49820905",
    purpose: "Interactive guide for brand ambassadors with content creation resources.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 75
  {
    id: "bolt-75",
    platform: "bolt",
    name: "Enhanced Gymnastics Camp Promo Codes Manager",
    url: "https://bolt.new/p/49442801",
    purpose: "Manager for creating and tracking promotional codes for gymnastics camps.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 76
  {
    id: "bolt-76",
    platform: "bolt",
    name: "Gymnastics Sales Training System",
    url: "https://bolt.new/p/49644590",
    purpose: "Training system for developing gymnastics sales team skills and techniques.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 77
  {
    id: "bolt-77",
    platform: "bolt",
    name: "Marketing Communication Hub w/ Supabase",
    url: "https://bolt.new/p/49222471",
    purpose: "Central marketing communication hub with Supabase-powered backend.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 78
  {
    id: "bolt-78",
    platform: "bolt",
    name: "Gymnastics Admin Dashboard (forked)",
    url: "https://bolt.new/p/47131717",
    purpose: "Forked version of the gymnastics admin dashboard for iterative development.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 79
  {
    id: "bolt-79",
    platform: "bolt",
    name: "Content Calendar Ideas",
    url: "https://bolt.new/p/48715240",
    purpose: "Idea repository for populating content calendars with post concepts.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 80
  {
    id: "bolt-80",
    platform: "bolt",
    name: "Marketing Ideas Storage System",
    url: "https://bolt.new/p/49088977",
    purpose: "Storage system for saving and organizing marketing campaign ideas.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 81
  {
    id: "bolt-81",
    platform: "bolt",
    name: "Set up gym location pages",
    url: "https://bolt.new/p/42849407",
    purpose: "Setup of individual web pages for each gym location.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 82
  {
    id: "bolt-82",
    platform: "bolt",
    name: "Summer Camp Database Application",
    url: "https://bolt.new/p/48877399",
    purpose: "Database application for managing summer camp registrations and data.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 83
  {
    id: "bolt-83",
    platform: "bolt",
    name: "Summer Camp Schedules 2025 Website",
    url: "https://bolt.new/p/48861116",
    purpose: "Website displaying summer camp schedules and session information for 2025.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 84
  {
    id: "bolt-84",
    platform: "bolt",
    name: "Gymnastics Events Calendar",
    url: "https://bolt.new/p/48353887",
    purpose: "Calendar view for tracking upcoming gymnastics events and competitions.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 85
  {
    id: "bolt-85",
    platform: "bolt",
    name: "Setting up the Brand System App (forked)",
    url: "https://bolt.new/p/47595899",
    purpose: "Forked version of the brand system app setup process.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 86
  {
    id: "bolt-86",
    platform: "bolt",
    name: "Gym Brand Kit Display System",
    url: "https://bolt.new/p/47595745",
    purpose: "Display system for showcasing gym brand kit colors, fonts, and assets.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 87
  {
    id: "bolt-87",
    platform: "bolt",
    name: "Gym Brand Kit Manager",
    url: "https://bolt.new/p/46522094",
    purpose: "Management tool for organizing and updating gym brand kit assets.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 88
  {
    id: "bolt-88",
    platform: "bolt",
    name: "Create Oasis Gym Link Tree (forked)",
    url: "https://bolt.new/p/47534005",
    purpose: "Forked link-tree page for Oasis Gym web and social media links.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 89
  {
    id: "bolt-89",
    platform: "bolt",
    name: "Gymnastics Calendar Application",
    url: "https://bolt.new/p/47492933",
    purpose: "Calendar application for scheduling gymnastics classes and events.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 90
  {
    id: "bolt-90",
    platform: "bolt",
    name: "Create Oasis Gym Link Tree (forked)",
    url: "https://bolt.new/p/47494147",
    purpose: "Another forked iteration of the Oasis Gym link-tree page.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 91
  {
    id: "bolt-91",
    platform: "bolt",
    name: "Create Oasis Gym Link Tree (forked)",
    url: "https://bolt.new/p/47492448",
    purpose: "Additional forked iteration of the Oasis Gym link-tree page.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 92
  {
    id: "bolt-92",
    platform: "bolt",
    name: "Customized Gym Events Calendar System (forked)",
    url: "https://bolt.new/p/47388846",
    purpose: "Forked customized calendar system for managing gym events.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 93
  {
    id: "bolt-93",
    platform: "bolt",
    name: "Customized Gym Events Calendar System",
    url: "https://bolt.new/p/47370809",
    purpose: "Custom calendar system for organizing and displaying gym events.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 94
  {
    id: "bolt-94",
    platform: "bolt",
    name: "Create Gym Events Manager",
    url: "https://bolt.new/p/39591750",
    purpose: "Event manager for creating and tracking gym events and meets.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 95
  {
    id: "bolt-95",
    platform: "bolt",
    name: "Gymnastics Admin Dashboard (forked)",
    url: "https://bolt.new/p/47129637",
    purpose: "Another forked iteration of the gymnastics admin dashboard.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 96
  {
    id: "bolt-96",
    platform: "bolt",
    name: "Deploy Master Gym Event Calendar to Netlify",
    url: "https://bolt.new/p/47126333",
    purpose: "Deployment configuration for publishing the gym event calendar to Netlify.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 97
  {
    id: "bolt-97",
    platform: "bolt",
    name: "Car Finder Application for Nissan Armada",
    url: "https://bolt.new/p/46693471",
    purpose: "Search application for finding Nissan Armada vehicles by criteria.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 98
  {
    id: "bolt-98",
    platform: "bolt",
    name: "Setting up the Brand System App",
    url: "https://bolt.new/p/38729828",
    purpose: "Initial setup of the brand system app for gym brand management.",
    group: "bolt-brand",
    githubConnected: false,
  },
  // 99
  {
    id: "bolt-99",
    platform: "bolt",
    name: "Simulation-Based Training App for Gym Managers",
    url: "https://bolt.new/p/45836061",
    purpose: "Simulation training app for developing gym manager decision-making skills.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 100
  {
    id: "bolt-100",
    platform: "bolt",
    name: "keep Marketing Communication App",
    url: "https://bolt.new/p/45765203",
    purpose: "Marketing communication app for managing outreach and messaging.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 101
  {
    id: "bolt-101",
    platform: "bolt",
    name: "Gymnastics Camp Content Calendar",
    url: "https://bolt.new/p/45772777",
    purpose: "Content calendar specifically for gymnastics camp marketing materials.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 102
  {
    id: "bolt-102",
    platform: "bolt",
    name: "Create Email Approval Dashboard",
    url: "https://bolt.new/p/45702409",
    purpose: "Dashboard for reviewing and approving email campaigns before sending.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 103
  {
    id: "bolt-103",
    platform: "bolt",
    name: "Set up AI collaboration app",
    url: "https://bolt.new/p/45688859",
    purpose: "Setup of an AI-powered collaboration application for team workflows.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 104
  {
    id: "bolt-104",
    platform: "bolt",
    name: "Convert HTML template to React component",
    url: "https://bolt.new/p/45448539",
    purpose: "Conversion of an HTML email template into a reusable React component.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 105
  {
    id: "bolt-105",
    platform: "bolt",
    name: "Create Marketing Plan for April 14-19",
    url: "https://bolt.new/p/45441307",
    purpose: "Weekly marketing plan generator for the April 14-19 campaign period.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 106
  {
    id: "bolt-106",
    platform: "bolt",
    name: "Create Email Approval System",
    url: "https://bolt.new/p/45377673",
    purpose: "Approval workflow system for email campaigns requiring sign-off.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 107
  {
    id: "bolt-107",
    platform: "bolt",
    name: "Create Gym Calendar with Supabase",
    url: "https://bolt.new/p/45327495",
    purpose: "Gym calendar application with Supabase backend for event storage.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 108
  {
    id: "bolt-108",
    platform: "bolt",
    name: "Implement Gymnastics Events Calendar",
    url: "https://bolt.new/p/45273305",
    purpose: "Implementation of a gymnastics events calendar with filtering and views.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 109
  {
    id: "bolt-109",
    platform: "bolt",
    name: "Create Marketing Ideas Repository",
    url: "https://bolt.new/p/45085755",
    purpose: "Repository for storing and organizing marketing ideas and concepts.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 110
  {
    id: "bolt-110",
    platform: "bolt",
    name: "Create Gymnastics Program Manager",
    url: "https://bolt.new/p/45003292",
    purpose: "Manager for overseeing gymnastics program structures and class offerings.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 111
  {
    id: "bolt-111",
    platform: "bolt",
    name: "Create Marketing Plan Interface",
    url: "https://bolt.new/p/44939708",
    purpose: "Interface for building and visualizing marketing plans and timelines.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 112
  {
    id: "bolt-112",
    platform: "bolt",
    name: "Create Marketing Team Dashboard",
    url: "https://bolt.new/p/44937038",
    purpose: "Team dashboard for marketing task management and collaboration.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 113
  {
    id: "bolt-113",
    platform: "bolt",
    name: "Build project for production",
    url: "https://bolt.new/p/44850545",
    purpose: "Production build configuration and deployment setup for a project.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 114
  {
    id: "bolt-114",
    platform: "bolt",
    name: "Create Email Approval System",
    url: "https://bolt.new/p/44033632",
    purpose: "Email approval system for managing review workflows before sending.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 115
  {
    id: "bolt-115",
    platform: "bolt",
    name: "Create Email Approval Hub",
    url: "https://bolt.new/p/42061041",
    purpose: "Centralized hub for email approval workflows and status tracking.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 116
  {
    id: "bolt-116",
    platform: "bolt",
    name: "Start Next.js development server",
    url: "https://bolt.new/p/44011098",
    purpose: "Next.js development server setup and configuration.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 117
  {
    id: "bolt-117",
    platform: "bolt",
    name: "Start Next.js development server",
    url: "https://bolt.new/p/44005956",
    purpose: "Another Next.js development server startup configuration.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 118
  {
    id: "bolt-118",
    platform: "bolt",
    name: "Add admin page with animations",
    url: "https://bolt.new/p/43996320",
    purpose: "Admin page implementation with animated UI transitions and effects.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 119
  {
    id: "bolt-119",
    platform: "bolt",
    name: "Vitejs - Vite (forked)",
    url: "https://bolt.new/p/43995746",
    purpose: "Forked Vite.js project template for frontend development.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 120
  {
    id: "bolt-120",
    platform: "bolt",
    name: "Create Video Thumbnail Generator",
    url: "https://bolt.new/p/43944448",
    purpose: "Tool for generating custom video thumbnails for social media content.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 121
  {
    id: "bolt-121",
    platform: "bolt",
    name: "Set up Marketing Dashboard",
    url: "https://bolt.new/p/40111361",
    purpose: "Setup of a marketing performance dashboard with key metrics.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 122
  {
    id: "bolt-122",
    platform: "bolt",
    name: "Create Gym Management Application",
    url: "https://bolt.new/p/43606365",
    purpose: "Full gym management application for daily operations and admin tasks.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 123
  {
    id: "bolt-123",
    platform: "bolt",
    name: "Create Summer Camps Website",
    url: "https://bolt.new/p/43321010",
    purpose: "Website for showcasing summer camp programs and registration info.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 124
  {
    id: "bolt-124",
    platform: "bolt",
    name: "Create Summer Camp Management System",
    url: "https://bolt.new/p/43319865",
    purpose: "Management system for organizing summer camp sessions and enrollments.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 125
  {
    id: "bolt-125",
    platform: "bolt",
    name: "Create referral program landing page",
    url: "https://bolt.new/p/43237035",
    purpose: "Landing page for a gym referral program to drive member sign-ups.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 126
  {
    id: "bolt-126",
    platform: "bolt",
    name: "Create Admin Dashboard Application",
    url: "https://bolt.new/p/37198619",
    purpose: "General-purpose admin dashboard application for gym management.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 127
  {
    id: "bolt-127",
    platform: "bolt",
    name: "Set up marketing plan management system",
    url: "https://bolt.new/p/43005053",
    purpose: "System for creating, managing, and tracking marketing plans.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 128
  {
    id: "bolt-128",
    platform: "bolt",
    name: "Create Summer Camp Email Template",
    url: "https://bolt.new/p/42647521",
    purpose: "Email template designed for summer camp promotions and communications.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 129
  {
    id: "bolt-129",
    platform: "bolt",
    name: "Implement Gymnastics Challenge App",
    url: "https://bolt.new/p/42486072",
    purpose: "Challenge app for gymnasts to track skill progressions and achievements.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 130
  {
    id: "bolt-130",
    platform: "bolt",
    name: "Create Email Template Builder",
    url: "https://bolt.new/p/42459609",
    purpose: "Visual builder for creating and customizing email templates.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 131
  {
    id: "bolt-131",
    platform: "bolt",
    name: "Integrate Dashboard Components (forked)",
    url: "https://bolt.new/p/42056603",
    purpose: "Forked project for integrating dashboard UI components.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 132
  {
    id: "bolt-132",
    platform: "bolt",
    name: "Integrate Dashboard Components (forked)",
    url: "https://bolt.new/p/42055930",
    purpose: "Another forked iteration for dashboard component integration.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 133
  {
    id: "bolt-133",
    platform: "bolt",
    name: "Integrate Dashboard Components",
    url: "https://bolt.new/p/42050187",
    purpose: "Original project for integrating reusable dashboard components.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 134
  {
    id: "bolt-134",
    platform: "bolt",
    name: "Create Gymnastics Marketing App",
    url: "https://bolt.new/p/42039594",
    purpose: "Marketing application tailored for gymnastics business promotion.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 135
  {
    id: "bolt-135",
    platform: "bolt",
    name: "Set up authentication and task management",
    url: "https://bolt.new/p/41968656",
    purpose: "Authentication system setup with integrated task management features.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 136
  {
    id: "bolt-136",
    platform: "bolt",
    name: "Create Email Template Generator",
    url: "https://bolt.new/p/41791255",
    purpose: "Generator tool for producing email templates from predefined patterns.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 137
  {
    id: "bolt-137",
    platform: "bolt",
    name: "Document Analysis Application Setup",
    url: "https://bolt.new/p/36897085",
    purpose: "Setup of a document analysis application for extracting insights.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 138
  {
    id: "bolt-138",
    platform: "bolt",
    name: "Set up Supabase environment variables",
    url: "https://bolt.new/p/38254187",
    purpose: "Configuration of Supabase environment variables for backend connectivity.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 139
  {
    id: "bolt-139",
    platform: "bolt",
    name: "Create Email Template Generator",
    url: "https://bolt.new/p/41523786",
    purpose: "Another email template generator for producing styled email layouts.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 140
  {
    id: "bolt-140",
    platform: "bolt",
    name: "Create Supabase tables for content management",
    url: "https://bolt.new/p/37166110",
    purpose: "Database table creation in Supabase for content management features.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 141
  {
    id: "bolt-141",
    platform: "bolt",
    name: "Create Voice Notes App with Auto-categorization",
    url: "https://bolt.new/p/41318892",
    purpose: "Voice notes application with automatic categorization and tagging.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 142
  {
    id: "bolt-142",
    platform: "bolt",
    name: "Initial Setup for Jayme's Marketing Platform",
    url: "https://bolt.new/p/34921752",
    purpose: "Initial bootstrapping of Jayme's personal marketing platform.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 143
  {
    id: "bolt-143",
    platform: "bolt",
    name: "Create Camp Management App",
    url: "https://bolt.new/p/40546835",
    purpose: "Management app for organizing camp sessions, schedules, and registrations.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 144
  {
    id: "bolt-144",
    platform: "bolt",
    name: "Create Gym Camp Management App",
    url: "https://bolt.new/p/40375902",
    purpose: "Gym-specific camp management app for summer and seasonal programs.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 145
  {
    id: "bolt-145",
    platform: "bolt",
    name: "Create Social Media Content Tracker",
    url: "https://bolt.new/p/40195077",
    purpose: "Tracker for monitoring social media content creation and publishing status.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 146
  {
    id: "bolt-146",
    platform: "bolt",
    name: "Create Gym Caption Manager",
    url: "https://bolt.new/p/40186404",
    purpose: "Caption manager for organizing and reusing gym social media captions.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 147
  {
    id: "bolt-147",
    platform: "bolt",
    name: "Create Email Template",
    url: "https://bolt.new/p/39876000",
    purpose: "Creation of a styled email template for gym communications.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 148
  {
    id: "bolt-148",
    platform: "bolt",
    name: "Create Gymnastics Scoring Application",
    url: "https://bolt.new/p/39874342",
    purpose: "Scoring application for tracking gymnastics competition results.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 149
  {
    id: "bolt-149",
    platform: "bolt",
    name: "Convert Marketing Hub components to TypeScript",
    url: "https://bolt.new/p/39745158",
    purpose: "Migration of Marketing Hub components from JavaScript to TypeScript.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 150
  {
    id: "bolt-150",
    platform: "bolt",
    name: "Create airplane game with visible airplane",
    url: "https://bolt.new/p/39742389",
    purpose: "Fun airplane flying game with visible airplane graphics for kids.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 151
  {
    id: "bolt-151",
    platform: "bolt",
    name: "Create Facebook Meta Data Tracker",
    url: "https://bolt.new/p/39653312",
    purpose: "Tracker for monitoring Facebook and Meta advertising data and metrics.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 152
  {
    id: "bolt-152",
    platform: "bolt",
    name: "Create Content Presentation App",
    url: "https://bolt.new/p/39391881",
    purpose: "Application for presenting content in engaging visual formats.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 153
  {
    id: "bolt-153",
    platform: "bolt",
    name: "Create gymnastics benefits database",
    url: "https://bolt.new/p/39063149",
    purpose: "Database of gymnastics benefits for marketing and informational use.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 154
  {
    id: "bolt-154",
    platform: "bolt",
    name: "Create email template",
    url: "https://bolt.new/p/39042345",
    purpose: "Basic email template creation for gym marketing communications.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 155
  {
    id: "bolt-155",
    platform: "bolt",
    name: "Create Half Sheet Component",
    url: "https://bolt.new/p/38499191",
    purpose: "Reusable half-sheet UI component for mobile-friendly bottom panels.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 156
  {
    id: "bolt-156",
    platform: "bolt",
    name: "Format Gymnastics Email",
    url: "https://bolt.new/p/38489355",
    purpose: "Formatting tool for styling gymnastics email content and layouts.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 157
  {
    id: "bolt-157",
    platform: "bolt",
    name: "Implement Interactive Image Carousel (forked)",
    url: "https://bolt.new/p/38354853",
    purpose: "Forked interactive image carousel for showcasing gym photos.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 158
  {
    id: "bolt-158",
    platform: "bolt",
    name: "Implement Interactive Image Carousel (forked)",
    url: "https://bolt.new/p/38354327",
    purpose: "Another forked iteration of the interactive image carousel.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 159
  {
    id: "bolt-159",
    platform: "bolt",
    name: "Implement Interactive Image Carousel (forked)",
    url: "https://bolt.new/p/38353905",
    purpose: "Additional forked version of the interactive image carousel.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 160
  {
    id: "bolt-160",
    platform: "bolt",
    name: "Implement Interactive Image Carousel (forked)",
    url: "https://bolt.new/p/38353839",
    purpose: "Yet another forked iteration of the interactive image carousel.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 161
  {
    id: "bolt-161",
    platform: "bolt",
    name: "Implement Interactive Image Carousel",
    url: "https://bolt.new/p/38340061",
    purpose: "Original interactive image carousel implementation for gym content.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 162
  {
    id: "bolt-162",
    platform: "bolt",
    name: "Implement Interactive Image Carousel (forked)",
    url: "https://bolt.new/p/38350617",
    purpose: "Forked version of the image carousel with customization changes.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 163
  {
    id: "bolt-163",
    platform: "bolt",
    name: "Implement Interactive Image Carousel (forked)",
    url: "https://bolt.new/p/38349864",
    purpose: "Another forked version of the image carousel component.",
    group: "bolt-content",
    githubConnected: false,
  },
  // 164
  {
    id: "bolt-164",
    platform: "bolt",
    name: "Create Gym Schedule Management System",
    url: "https://bolt.new/p/38050652",
    purpose: "Schedule management system for organizing gym classes and sessions.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 165
  {
    id: "bolt-165",
    platform: "bolt",
    name: "Set up Interactive Class Schedule",
    url: "https://bolt.new/p/37886061",
    purpose: "Interactive class schedule setup for displaying gym timetables.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 166
  {
    id: "bolt-166",
    platform: "bolt",
    name: "Email Communication Tracking System",
    url: "https://bolt.new/p/37195455",
    purpose: "System for tracking email communications and engagement metrics.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 167
  {
    id: "bolt-167",
    platform: "bolt",
    name: "Implement Email Generator Application",
    url: "https://bolt.new/p/37185188",
    purpose: "Email generator application for producing templated gym emails.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 168
  {
    id: "bolt-168",
    platform: "bolt",
    name: "Gym Template Generator Implementation",
    url: "https://bolt.new/p/34852990",
    purpose: "Implementation of a template generator for gym marketing materials.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 169
  {
    id: "bolt-169",
    platform: "bolt",
    name: "Set up Gym Marketing Hub structure",
    url: "https://bolt.new/p/37060971",
    purpose: "Structural setup of the centralized gym marketing hub application.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 170
  {
    id: "bolt-170",
    platform: "bolt",
    name: "Create Marketing App",
    url: "https://bolt.new/p/37020536",
    purpose: "General marketing application for campaign planning and execution.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 171
  {
    id: "bolt-171",
    platform: "bolt",
    name: "Implement drag and drop file upload",
    url: "https://bolt.new/p/36921840",
    purpose: "Drag-and-drop file upload component implementation.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 172
  {
    id: "bolt-172",
    platform: "bolt",
    name: "Create Gym Template Generator",
    url: "https://bolt.new/p/36717006",
    purpose: "Template generator for creating gym promotional and operational materials.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 173
  {
    id: "bolt-173",
    platform: "bolt",
    name: "Create ChatGPT Export Analyzer",
    url: "https://bolt.new/p/36660341",
    purpose: "Analyzer for parsing and visualizing ChatGPT conversation exports.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 174
  {
    id: "bolt-174",
    platform: "bolt",
    name: "Create a fun animal matching game for kids",
    url: "https://bolt.new/p/36585985",
    purpose: "Fun animal matching memory game designed for children.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 175
  {
    id: "bolt-175",
    platform: "bolt",
    name: "Spin",
    url: "https://bolt.new/p/36329255",
    purpose: "Spin-the-wheel interactive promotional game component.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 176
  {
    id: "bolt-176",
    platform: "bolt",
    name: "Interactive Spin-the-Wheel Promotion App",
    url: "https://bolt.new/p/36246521",
    purpose: "Interactive spin-the-wheel app for gym promotional events.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 177
  {
    id: "bolt-177",
    platform: "bolt",
    name: "RBA Spin The Wheel Promotion",
    url: "https://bolt.new/p/36345292",
    purpose: "RBA-branded spin-the-wheel promotional game for engagement.",
    group: "bolt-sales",
    githubConnected: false,
  },
  // 178
  {
    id: "bolt-178",
    platform: "bolt",
    name: "Improved Email Template Structure",
    url: "https://bolt.new/p/36354105",
    purpose: "Improved structural layout for gym email templates.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 179
  {
    id: "bolt-179",
    platform: "bolt",
    name: "Winter Gymnastics Game Implementation",
    url: "https://bolt.new/p/36157546",
    purpose: "Winter-themed gymnastics game implementation for seasonal engagement.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 180
  {
    id: "bolt-180",
    platform: "bolt",
    name: "basic calendar",
    url: "https://bolt.new/p/36048155",
    purpose: "Basic calendar component for displaying dates and events.",
    group: "bolt-calendar",
    githubConnected: false,
  },
  // 181
  {
    id: "bolt-181",
    platform: "bolt",
    name: "Lucas's Magical Treasure Quest Game",
    url: "https://bolt.new/p/36102691",
    purpose: "Magical treasure quest adventure game built for kids.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 182
  {
    id: "bolt-182",
    platform: "bolt",
    name: "Smart Enrollment Ecosystem for Gymnastics",
    url: "https://bolt.new/p/36027837",
    purpose: "Smart enrollment system for managing gymnastics class sign-ups and billing.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 183
  {
    id: "bolt-183",
    platform: "bolt",
    name: "Clean up HTML structure",
    url: "https://bolt.new/p/35847417",
    purpose: "HTML structure cleanup and code quality improvements.",
    group: "bolt-misc",
    githubConnected: false,
  },
  // 184
  {
    id: "bolt-184",
    platform: "bolt",
    name: "Summer Camp Management Dashboard Setup",
    url: "https://bolt.new/p/35778723",
    purpose: "Dashboard setup for managing summer camp operations and logistics.",
    group: "bolt-camp",
    githubConnected: false,
  },
  // 185
  {
    id: "bolt-185",
    platform: "bolt",
    name: "Gymnastics Marketing Material Generator",
    url: "https://bolt.new/p/35138163",
    purpose: "Generator for creating gymnastics marketing materials and collateral.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 186
  {
    id: "bolt-186",
    platform: "bolt",
    name: "Email Template Generator for Gym Facilities",
    url: "https://bolt.new/p/35501076",
    purpose: "Email template generator tailored for gym facility communications.",
    group: "bolt-email",
    githubConnected: false,
  },
  // 187
  {
    id: "bolt-187",
    platform: "bolt",
    name: "Restructure Dashboard into Components",
    url: "https://bolt.new/p/34828485",
    purpose: "Refactoring of a monolithic dashboard into modular reusable components.",
    group: "bolt-gym-ops",
    githubConnected: false,
  },
  // 188
  {
    id: "bolt-188",
    platform: "bolt",
    name: "Marketing Planner Bullet Journal",
    url: "https://bolt.new/p/35072569",
    purpose: "Bullet-journal-style marketing planner for organizing campaign tasks.",
    group: "bolt-marketing",
    githubConnected: false,
  },
  // 189
  {
    id: "bolt-189",
    platform: "bolt",
    name: "Create Ellie's Treasure Trove Dashboard",
    url: "https://bolt.new/p/34839413",
    purpose: "Dashboard for Ellie's treasure trove collection and reward tracking.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 190
  {
    id: "bolt-190",
    platform: "bolt",
    name: "Ellie's Magical Treasure Hunt Game",
    url: "https://bolt.new/p/34794863",
    purpose: "Original magical treasure hunt adventure game built for kids.",
    group: "bolt-games",
    githubConnected: false,
  },
  // 191
  {
    id: "bolt-191",
    platform: "bolt",
    name: "Enhanced Math Magic Game with Celebrations",
    url: "https://bolt.new/p/34830336",
    purpose: "Enhanced math game with magical themes and celebration animations for kids.",
    group: "bolt-games",
    githubConnected: false,
  },
];

// ────────────────────────────────────────────────────────────────
// Helper: filter projects by group
// ────────────────────────────────────────────────────────────────
const byGroup = (groupId: string) =>
  boltProjects.filter((p) => p.group === groupId);

// ────────────────────────────────────────────────────────────────
// Exported ProjectGroup array
// ────────────────────────────────────────────────────────────────
export const boltGroups: ProjectGroup[] = [
  {
    id: "bolt-gym-ops",
    name: "Gym Management & Admin",
    description:
      "Gymnastics business dashboards, admin tools, scheduling, scoring, and operational systems.",
    platform: "bolt",
    projects: byGroup("bolt-gym-ops"),
  },
  {
    id: "bolt-email",
    name: "Email Tools",
    description:
      "Email template builders, generators, approval systems, and ActiveCampaign integrations.",
    platform: "bolt",
    projects: byGroup("bolt-email"),
  },
  {
    id: "bolt-calendar",
    name: "Events & Calendar",
    description:
      "Gymnastics event calendars, event management dashboards, and Supabase-backed scheduling.",
    platform: "bolt",
    projects: byGroup("bolt-calendar"),
  },
  {
    id: "bolt-brand",
    name: "Brand Kit & Design",
    description:
      "Brand kit databases, dashboards, display systems, and 3D logo tools.",
    platform: "bolt",
    projects: byGroup("bolt-brand"),
  },
  {
    id: "bolt-sales",
    name: "Sales Tools",
    description:
      "Sales toolkits, lead management, referral pages, spin-the-wheel promotions, and market analysis.",
    platform: "bolt",
    projects: byGroup("bolt-sales"),
  },
  {
    id: "bolt-content",
    name: "Content & Social Media",
    description:
      "Social media planners, content trackers, image carousels, video tools, and link-tree pages.",
    platform: "bolt",
    projects: byGroup("bolt-content"),
  },
  {
    id: "bolt-camp",
    name: "Camp & Summer Programs",
    description:
      "Summer camp websites, management systems, promo code tools, and camp content calendars.",
    platform: "bolt",
    projects: byGroup("bolt-camp"),
  },
  {
    id: "bolt-marketing",
    name: "Marketing Plans",
    description:
      "Marketing planners, idea repositories, dashboards, communication hubs, and campaign tools.",
    platform: "bolt",
    projects: byGroup("bolt-marketing"),
  },
  {
    id: "bolt-games",
    name: "Kids Games",
    description:
      "Treasure hunts, board games, matching games, drumming adventures, and math games for kids.",
    platform: "bolt",
    projects: byGroup("bolt-games"),
  },
  {
    id: "bolt-misc",
    name: "Miscellaneous",
    description:
      "Utility projects, dev scaffolds, document tools, and one-off experiments that don't fit other groups.",
    platform: "bolt",
    projects: byGroup("bolt-misc"),
  },
];
