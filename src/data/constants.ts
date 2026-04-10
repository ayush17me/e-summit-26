import {
  Trophy, Mic, MessageSquare, Video, Briefcase, Rocket,
  Brain, HelpCircle, Palette, Wrench, Gavel, Search,
  Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe,
} from "lucide-react";

// ── Navigation ──
export const NAV_LINKS = [
  { label: "Competitions", href: "/competitions" },
  { label: "Event", href: "/networking" },
  // { label: "Creators", href: "/creators" },
  { label: "Startup-Expo", href: "/internship" },
  { label: "Team", href: "/team" },
];

// ── About Stats ──
export const STATS = [
  { label: "Attendees", value: 7000, suffix: "+" },
  { label: "Startups & Investors", value: 50, suffix: "+" },
  { label: "Speakers", value: 10, suffix: "+" },
];

// ── Bento Grid Tracks ──
export const TRACKS = [
  { title: "Competitions", description: "Envisage, Disrupt, QR Hunt, Hackstart & more — test your entrepreneurial mettle.", icon: Trophy, href: "/competitions", span: "col-span-2 row-span-2" },
  { title: "Keynote Sessions", description: "Industry leaders sharing vision on AI, startups & Women empowerment.", icon: Mic, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Panel Discussions", description: "Debates on AI, Ethics, and the future of entrepreneurship.", icon: MessageSquare, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Creators Conclave", description: "Digital influencers & content creators come together.", icon: Video, href: "/networking", span: "col-span-1 row-span-2" },
  { title: "Fair & Expo", description: "Internship Fair, Startup Expo, Drone & Auto Expo — all under one roof.", icon: Briefcase, href: "/internship", span: "col-span-1 row-span-1" },
  { title: "Workshops", description: "Hands-on sessions to build real skills in tech and business.", icon: Wrench, href: "/networking", span: "col-span-1 row-span-1" },
];

// ── Past Speakers ──
export const SPEAKERS = [
  { name: "Shruti Reddy", title: "Founder & CEO, Anthyesti Funeral Services", image: "" },
  { name: "Debarya Dutta", title: "Founder-CEO, Upraised", image: "" },
  { name: "Ranjan Mistry", title: "Social Entrepreneur", image: "" },
  { name: "Swaroop Prasad Ghosh", title: "Director, MAKAIAS", image: "" },
  { name: "Aaqib Hussain", title: "Founding Partner, Freeflow Venture Builders", image: "" },
  { name: "Ankit Prasad", title: "Founder & CEO, Bobble AI", image: "" },
  { name: "Tanya Khanijow", title: "Travel Vlogger", image: "" },
  { name: "Sumit Gupta", title: "Co-Founder, Infimonk", image: "" },
  { name: "Ranjan Das", title: "Chairman, The Strategy Academy", image: "" },
  { name: "Kiran Verma", title: "Founder, Simply Blood", image: "" },
];

// ── Sponsors ──
export const CURRENT_SPONSORS = [
  { name: "NASSCOM 10000 Startups", logo: "" },
  { name: "CoinDCX", logo: "" },
  { name: "RedBull", logo: "https://tse1.mm.bing.net/th/id/OIP.JE5lQeQFTIDRx7xOAWzt6QHaEK?pid=Api&P=0&h=180" },
  { name: "Freeflow", logo: "" },
];

export const PAST_SPONSORS = [
  { name: "Xelp", logo: "https://placehold.co/160x60/333/999?text=Xelp" },
  { name: "Simoco", logo: "https://placehold.co/160x60/333/999?text=Simoco" },
  { name: "ACE Money", logo: "https://placehold.co/160x60/333/999?text=ACE+Money" },
  { name: "Engineering Academy", logo: "https://placehold.co/160x60/333/999?text=Engg+Academy" },
  { name: "ISOEH", logo: "https://placehold.co/160x60/333/999?text=ISOEH" },
  { name: "Enliqui", logo: "https://placehold.co/160x60/333/999?text=Enliqui" },
  { name: "SquashCODE", logo: "https://placehold.co/160x60/333/999?text=SquashCODE" },
  { name: "WOW!", logo: "https://placehold.co/160x60/333/999?text=WOW!" },
  { name: "Paharpur", logo: "https://placehold.co/160x60/333/999?text=Paharpur" },
  { name: "Think India", logo: "https://placehold.co/160x60/333/999?text=Think+India" },
];

export const COMPETITIONS = [
  {
    id: "bec84-pitch",
    name: "BEC 84 Investor Pitch",
    tagline: "Pitch your tech startup idea & win funding up to ₹8 Lakhs",
    description:
      "The flagship business idea competition under BEC84 Angel Fund Scheme where IIEST students pitch innovative technology-driven startup ideas to secure funding, mentorship, and incubation support.",

    teamSize: "2–4 members",
    prizePool: "Up to ₹8,00,000 funding + incubation",
    deadline: "12 April, 11:59 PM",

    rulebookLink: "https://drive.google.com/file/d/1n867dz5majF5ZJV2VSh9FZclsVzYDMj2/view?usp=sharing",
    registrationLink: "https://forms.gle/537NoKVGQCZqa1DG6",

    keyFeatures: [
      "Funding up to ₹8 Lakhs",
      "Mentorship under BEC84",
      "Incubation at TCGTBI",
      "Real Investor Exposure"
    ],

    rulesDescription:
      "Participants must submit a concise pitch deck outlining their startup idea including problem, solution, market opportunity, and business model. Shortlisted teams will present their ideas during E-Summit and selected teams will undergo further evaluation based on execution potential and progress. Only eligible IIEST students can participate and team size must be strictly followed.",

    mainImage:
      "/bec84.png",
    bannerImage:
      "/bec84.png"
  },

  {
    id: "vibe-build",
    name: "VibeBuild – AI Product Challenge",
    tagline: "Build a SaaS product in 6 hours using AI Agents",
    description:
      "A high-intensity AI product development competition focused on Agentic AI workflows. Participants design, build, and deploy a SaaS solution using modern AI tools like Gemini, Claude, Stitch, and Antigravity.",

    teamSize: "2–3 members",
    prizePool: "₹10,000",
    deadline: "To Be Announced",

    rulebookLink: "",

    keyFeatures: [
      "AI-first development",
      "Agent orchestration workflows",
      "Rapid SaaS prototyping",
      "Live deployment & demo"
    ],

    rulesDescription:
      "Teams must build a functional SaaS product within a limited time using AI tools and agent-based workflows. Manual coding should be minimal, with emphasis on leveraging AI platforms effectively. Judging will be based on execution speed, working prototype, and system design. All teams must adhere to tool constraints and complete development within the given time window.",

    mainImage:
      "/Vibebuild.png",
    bannerImage:
      "/vibebuild-banner.png"
  },

  {
    id: "campus-creator",
    name: "Campus Creator Championship",
    tagline: "Content Creation Competition (Reels)",
    description:
      "Campus Creator Championship is a real-time content creation competition conducted during the E-Summit. Participants are required to conceptualize, shoot, edit, and publish short-form video content (Instagram Reels) within the event duration.",

    teamSize: "Individual / Team",
    prizePool: "₹7,000",
    deadline: "Throughout E-Summit (Full Day)",

    rulebookLink: "",

    keyFeatures: [
      "Real-time Reel Production",
      "Brand & Expo Integration",
      "Live Event Storytelling",
      "Engagement Driven"
    ],

    rulesDescription:
      "Campus Creator Championship is designed to evaluate participants on creativity, storytelling, and their ability to generate engagement under time constraints using live event environments.\n\nEvent Structure:\n1. Briefing Session: Participants will be briefed regarding rules, themes, and submission process.\n2. Content Creation Phase: Participants will create content during the event. All footage must be captured within E-Summit premises. Editing must be completed within the event duration.\n3. Submission Guidelines: Content must be uploaded as a Reel by the communicated deadline.\n\nRules & Regulations:\n• Content must be original and created during the event.\n• Use of pre-recorded or previously published content is strictly prohibited.\n• Any form of plagiarism or copyright violation will lead to disqualification.\n• The decision of the judging panel will be final and binding.",

    submission: [
      "Content must be uploaded on Instagram as a Reel",
      "Integrate the brand mention or expo company assigned to you in the storyline",
      "Tag the official E-Summit Instagram handle",
      "Tag all designated sponsor handles (mandatory)",
      "Use the designated event hashtag",
      "Submission deadline will be communicated during the briefing"
    ],

    evaluationCriteria: [
      "Engagement Metrics: Views, likes, shares, and overall reach",
      "Creativity: Originality and uniqueness of the concept",
      "Brand Integration: Inclusion and effective representation of sponsors/expo stalls",
      "Relevance: Alignment with event theme and environment",
      "Execution Quality: Editing, storytelling, and presentation"
    ],

    constraints: [
      "All footage must be captured within the E-Summit premises",
      "Editing must be completed within the event duration",
      "Entries submitted after the deadline will not be considered"
    ],

    mainImage:
      "/creatorCompetition.png",
    bannerImage:
      "/campus-creator-banner.png"
  },

  {
    id: "case-x",
    name: "CaseX – Case Study Competition",
    tagline: "Simulate real-world consulting problem solving",
    description:
      "CaseX is designed to simulate real-world consulting problem solving, where student teams analyze a business problem and propose structured, actionable solutions. We aim to collaborate with your organization by curating a case problem statement based on your industry, allowing participants to work on practical challenges with real-world relevance.",

    teamSize: "To Be Announced",
    prizePool: "₹7,000 + Internship Opportunities",
    deadline: "To Be Announced",

    rulebookLink: "",

    keyFeatures: [
      "Real-world consulting simulation",
      "Industry-specific problem statements",
      "Structured analysis and presentation",
      "Actionable solution proposals"
    ],
    
    submission: [
      "Problem Understanding & Context - Clear articulation of the problem and key challenges",
      "Market & Industry Analysis - Market overview, trends, and competitor landscape",
      "Customer Segmentation & Insights - Target users and key pain points",
      "Root Cause Analysis - Identifying underlying issues driving the problem",
      "Solution Strategy - Clear, actionable recommendations",
      "Implementation Plan - Strategic roadmap with execution steps",
      "Business Model & Impact - Revenue model, expected outcomes",
      "Risk & Mitigation - Potential challenges and contingency plans"
    ],

    rulesDescription:
      "Sample Problem Statement:\nPlastic packaging waste remains a critical environmental challenge in India, with a significant portion ending up in landfills or as unmanaged waste. While multiple solutions exist, reuse-based packaging systems are emerging as a promising pathway toward circularity.\n\nWith evolving regulatory frameworks such as the Plastic Waste Management Rules, brands are now required to meet defined reuse targets, particularly for rigid packaging.\n\nHowever, despite its potential, large-scale adoption of reusable packaging systems remains limited due to challenges in logistics, consumer behavior, cost structures, and operational feasibility.\n\nYour Challenge - As a consulting team, design a scalable, economically viable, and consumer-friendly reuse system for plastic packaging in India.",

    evaluationCriteria: [
      "Problem understanding and clarity",
      "Structured and logical approach",
      "Depth of analysis",
      "Feasibility and practicality of solutions",
      "Creativity and innovation",
      "Clarity of presentation"
    ],

    mainImage:
      "/caseX.png",
    bannerImage:
      "/caseX-banner.png"
  }
];

// ── Event Schedule ──
export const NETWORKING_EVENTS = [
  // ── Day 1 ──
  {
    id: "inauguration",
    title: "Inauguration",
    type: "Ceremony",
    description: "Grand opening ceremony of E-Summit'26 — setting the stage for two days of innovation and entrepreneurship.",
    fullDescription: "The official inauguration of E-Summit'26 at IIEST Shibpur. Join us as we kick off two days of competitions, keynotes, panels, and networking with a grand opening ceremony featuring distinguished guests and dignitaries.",
    time: "11:00 AM",
    day: "Day 1",
    duration: "1 hour",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "All attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "keynote-sessions",
    title: "Keynote Sessions",
    type: "Keynote",
    description: "Industry leaders sharing insights on the future of startups, AI, and entrepreneurship.",
    fullDescription: "Insightful keynote sessions featuring industry pioneers who share their vision on AI, startups, and the entrepreneurial landscape. Gain actionable takeaways and be inspired by leaders shaping tomorrow.",
    time: "12:00 Noon",
    day: "Day 1",
    duration: "30–45 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "500 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "bec84-pitch-event",
    title: "BEC 84 Business Competition Pitch",
    type: "Competition",
    description: "The flagship startup pitch competition under the BEC84 Angel Fund Scheme.",
    fullDescription: "Shortlisted teams pitch their innovative tech-driven startup ideas to a panel of investors and mentors. Compete for funding up to ₹8 Lakhs, incubation support, and mentorship under the BEC84 Angel Fund Scheme.",
    time: "2:00 PM – 3:30 PM",
    day: "Day 1",
    duration: "90 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "300 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "workshop-1",
    title: "Workshop 1",
    type: "Workshop",
    description: "Hands-on workshop to build real skills in tech and business.",
    fullDescription: "A focused, hands-on workshop session designed to equip attendees with practical skills in technology or business. Engage with industry experts and learn by doing.",
    time: "3:30 PM – 4:15 PM",
    day: "Day 1",
    duration: "45 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "200 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "panel-discussion-1",
    title: "Panel Discussion 1",
    type: "Panel Discussion",
    description: "Experts from academia and industry debate pressing topics in AI, ethics, and entrepreneurship.",
    fullDescription: "A thought-provoking panel discussion featuring experts from diverse backgrounds debating critical questions around AI, ethics, innovation, and the future of entrepreneurship.",
    time: "4:30 PM – 5:30 PM",
    day: "Day 1",
    duration: "1 hour",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "300 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "sharktank",
    title: "Shark Tank",
    type: "Competition",
    description: "Pitch your startup ideas to a panel of investors in a high-stakes Shark Tank format.",
    fullDescription: "Experience the thrill of pitching your business idea in a live Shark Tank-style session. Face tough questions from a panel of investors and entrepreneurs, and compete for investment, mentorship, and recognition.",
    time: "6:15 PM – 7:45 PM",
    day: "Day 1",
    duration: "90 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "500 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  // ── Day 2 ──
  {
    id: "masterclass",
    title: "Masterclass",
    type: "Workshop",
    description: "An exclusive masterclass session with industry experts sharing deep insights.",
    fullDescription: "A premium masterclass session where industry veterans share in-depth knowledge, strategies, and frameworks. Get actionable insights from the best in the business.",
    time: "10:30 AM – 11:30 AM",
    day: "Day 2",
    duration: "45 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "300 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "alumni-panel",
    title: "Alumni Panel Discussion",
    type: "Panel Discussion",
    description: "Distinguished alumni share their journeys, insights, and advice with current students.",
    fullDescription: "A special panel discussion featuring distinguished IIEST alumni. Hear their career journeys, entrepreneurial experiences, and invaluable advice for current students entering the professional world.",
    time: "11:30 AM – 12:30 PM",
    day: "Day 2",
    duration: "1 hour",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "300 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "casex-event",
    title: "CaseX",
    type: "Competition",
    description: "Real-world consulting case study competition — analyze, strategize, and present.",
    fullDescription: "CaseX is a case study competition that simulates real-world consulting problem solving. Teams analyze a business problem, develop structured solutions, and present their findings to a panel of judges.",
    time: "12:30 PM – 2:00 PM",
    day: "Day 2",
    duration: "75 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "200 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "vibebuild-demo",
    title: "VibeBuild Demonstration",
    type: "Showcase",
    description: "Live demonstration of AI-powered SaaS products built during the VibeBuild challenge.",
    fullDescription: "Watch teams demonstrate the SaaS products they built during the VibeBuild AI Product Challenge. See first-hand how AI agents and modern development tools are used to rapidly prototype and deploy innovative products.",
    time: "2:30 PM – 3:30 PM",
    day: "Day 2",
    duration: "60 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "300 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "startup-roundtable",
    title: "Startup Roundtable",
    type: "Networking",
    description: "Intimate roundtable discussions with startup founders, mentors, and investors.",
    fullDescription: "An interactive roundtable format bringing together startup founders, mentors, and investors for focused discussions on growth strategies, fundraising, scaling, and the startup ecosystem.",
    time: "4:00 PM – 5:30 PM",
    day: "Day 2",
    duration: "60 mins",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "150 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "creator-conclave",
    title: "Creator Conclave",
    type: "Summit",
    description: "Digital influencers and content creators come together for an immersive conclave.",
    fullDescription: "The Creator Conclave brings together digital influencers, content creators, and brand partners for an immersive session covering content strategy, monetization, audience growth, and the evolving creator economy.",
    time: "5:30 PM – 7:30 PM",
    day: "Day 2",
    duration: "2 hours",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "400 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "main-speaker",
    title: "Main Speaker",
    type: "Keynote",
    description: "The headline keynote address to close E-Summit'26 on an inspiring note.",
    fullDescription: "The headline keynote session featuring a distinguished speaker addressing the audience with insights, inspiration, and a powerful closing message for E-Summit'26.",
    time: "7:30 PM – 8:30 PM",
    day: "Day 2",
    duration: "1 hour",
    speakers: [],
    venue: "IIEST Shibpur",
    capacity: "500 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  }
];

// ── Creators ──
export const FEATURED_CREATORS = [
  { name: "Ankita Roy", handle: "@ankitaroy", followers: "1.2M", platform: "Instagram", image: "https://i.pravatar.cc/300?img=20" },
  { name: "Sahil Tech", handle: "@sahiltech", followers: "800K", platform: "YouTube", image: "https://i.pravatar.cc/300?img=12" },
  { name: "Nisha Verma", handle: "@nishaverma", followers: "2.5M", platform: "Instagram", image: "https://i.pravatar.cc/300?img=23" },
  { name: "Dev Diaries", handle: "@devdiaries", followers: "500K", platform: "YouTube", image: "https://i.pravatar.cc/300?img=15" },
];

export const CREATOR_EVENTS = [
  {
    id: "creator-workshop-1",
    title: "Content Creation Masterclass",
    type: "Workshop",
    description: "Learn the secrets of creating viral content from top creators and social media strategists.",
    fullDescription: "An in-depth masterclass on creating engaging, viral content across different platforms. Learn about trending formats, audience psychology, and monetization strategies from creators who have built audiences of millions.",
    time: "11:00 AM",
    day: "Day 1",
    duration: "3 hours",
    speakers: [
      { name: "Ankita Roy", title: "Content Creator", company: "1.2M+ Followers" },
      { name: "Social Media Expert", title: "Strategy Consultant", company: "Creator Academy" }
    ],
    venue: "Creator Workshop Hall, IIEST Shibpur",
    capacity: "200 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "creator-networking",
    title: "Creators Networking Lounge",
    type: "Networking",
    description: "Connect, collaborate, and build partnerships with fellow content creators and brands.",
    fullDescription: "An exclusive networking event where creators meet fellow content specialists, potential collaborators, and brand representatives. Discuss collaborations, sponsorships, and growth strategies in a relaxed atmosphere.",
    time: "3:00 PM",
    day: "Day 1",
    duration: "2 hours",
    speakers: [
      { name: "Industry Panels", title: "Moderators", company: "Various Platforms" }
    ],
    venue: "Networking Lounge, IIEST Shibpur",
    capacity: "Unlimited",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "monetization-summit",
    title: "Creator Monetization Summit",
    type: "Summit",
    description: "Explore diverse revenue streams and monetization strategies for content creators.",
    fullDescription: "Discover multiple ways to monetize your content - from YouTube AdSense and Patreon to brand sponsorships, affiliate marketing, and launching your own products. Learn from successful creators sharing their revenue models.",
    time: "10:00 AM",
    day: "Day 2",
    duration: "4 hours",
    speakers: [
      { name: "Tech Creator", title: "Million Subscriber YouTuber", company: "CreatorEconomics" },
      { name: "Monetization Expert", title: "Revenue Strategist", company: "Platform Advisory" }
    ],
    venue: "Main Hall, IIEST Shibpur",
    capacity: "400 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: "creator-expo",
    title: "Creator Tools & Brands Expo",
    type: "Exhibition",
    description: "Discover the latest tools, software, and brand partnerships for content creators.",
    fullDescription: "Browse and interact with the latest content creation tools, software, and equipment. Meet brands looking for creator partnerships and sponsorship opportunities. Explore agencies and network with industry professionals.",
    time: "All Day",
    day: "Day 2",
    duration: "Full Event",
    speakers: [],
    venue: "Expo Grounds, IIEST Shibpur",
    capacity: "Unlimited",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  }
];

// ── Fair & Expo Companies ──
export const FAIR_COMPANIES = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Razorpay",
  "Zerodha", "PhonePe", "Ola", "Swiggy", "CRED",
  "Tata Digital", "Infosys", "TCS", "Wipro", "HCL",
];

export const EXPO_BENEFITS = [
  "Inground Visibility",
  "Investors Trail",
  "Networking Arena",
  "Drone & Auto Expo",
  "Startup Showcase",
];

export const INTERNSHIP_STEPS = [
  { step: 1, title: "Register Online", description: "Sign up on our portal with your resume and preferred companies." },
  { step: 2, title: "Profile Screening", description: "Our team reviews your profile and matches you with relevant companies." },
  { step: 3, title: "Get Your Slot", description: "Receive your interview schedule and company assignments." },
  { step: 4, title: "Attend the Fair", description: "Visit booths, give interviews, and network with recruiters." },
  { step: 5, title: "Get Hired!", description: "Receive offers on the spot or within a week of the fair." },
];

// ── Contact / Social ──
export const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/edc.iiests", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/edc-iiests", color: "hover:text-blue-400" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/edc_iiests", color: "hover:text-sky-400" },
  { name: "Website", icon: Globe, href: "https://edc-iiests.in", color: "hover:text-primary" },
  { name: "Email", icon: Mail, href: "mailto:iiests.edc@gmail.com", color: "hover:text-primary" },
];

export const CONTACT_INFO = {
  email: "iiests.edc@gmail.com",
  phone1: { name: "Shreyansh", number: "+91 84780 90242" },
  phone2: { name: "Abhash Jain", number: "+91 7906988259" },
  address: "Entrepreneurship Development Cell, IIEST Shibpur, Howrah, West Bengal — 711103",
};
// ── Team Structure ──
export const TEAM_STRUCTURE = [
  {
    role: "Secretary",
    members: {
      "4th": [
        { name: "Shreyansh Srivastava", dept: "CST" },
      ],
      "3rd": [],
      "2nd": [],
    },
  },
  {
    role: "Main Coordinators",
    members: {
      "4th": [
        { name: "Abhash Jain", dept: "IT" },
        { name: "Vikash Gopalak", dept: "IT" },
      ],
      "3rd": [],
      "2nd": [],
    },
  },
  {
    role: "Finance",
    members: {
      "4th": [
        { name: "Harsh Agarwal", dept: "MME" },
        { name: "Harsh Ranjan", dept: "IT" },
      ],
      "3rd": [],
      "2nd": [],
    },
  },
  {
    role: "Joint Finance",
    members: {
      "4th": [],
      "3rd": [
        { name: "Shivnitya", dept: "ME" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Joint Coordinators",
    members: {
      "4th": [],
      "3rd": [
        { name: "Yash Mahajan", dept: "CST" },
        { name: "Surya Pratap Singh", dept: "IT" },
        { name: "Shivnitya", dept: "ME" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Event",
    members: {
      "4th": [
        { name: "Rima Muskan", dept: "ETC" },
      ],
      "3rd": [
        { name: "Preeti Bhargava", dept: "EE" },
        { name: "Ankita Kumari", dept: "ME" },
      ],
      "2nd": [
        { name: "Akriti Singh", dept: "CST" },
        { name: "Anushka Rawlani", dept: "IT" },
        { name: "Ishlavath Rajkumar", dept: "ME" },
      ],
    },
  },
  {
    role: "Speaker Acquisition and Management",
    members: {
      "4th": [{ name: "Amritesh Kumar", dept: "IT" },],
      "3rd": [
        { name: "Yasharth Shukla", dept: "CST" },
        { name: "Shivnitya", dept: "ME" },
      ],
      "2nd": [
        { name: "Vishal Kumar Swain", dept: "CST" },
        { name: "Aditya Singh", dept: "CST" },
        { name: "Mohak Bharadwaj", dept: "Civil" },
      ],
    },
  },
  {
    role: "Sponsorship",
    members: {
      "4th": [],
      "3rd": [
        { name: "Arnav Aarit", dept: "Civil" },
      ],
      "2nd": [
        { name: "Shabd Srivastava", dept: "IT" },
        { name: "Ritesh Kumar Singh", dept: "IT" },
        { name: "BV Shree Keshav", dept: "IT" },
        { name: "Sristi Batsal", dept: "Civil" },
      ],
    },
  },
  {
    role: "Publicity",
    members: {
      "4th": [],
      "3rd": [
        { name: "Keshav Bhagat", dept: "EE" },
        { name: "Ankita Hore", dept: "CST" },
      ],
      "2nd": [
        { name: "Lakshita Paradkar", dept: "Mining" },
        { name: "Joyon Rudra Pal", dept: "EE" },
      ],
    },
  },
  {
    role: "Graphic Designing Head",
    members: {
      "4th": [],
      "3rd": [
        { name: "Gunn Gupta", dept: "CST" },
      ],
      "2nd": [
        { name: "Ayush Mishra", dept: "IT" },
        { name: "Drisana Chatterjee", dept: "MME" },
      ],
    },
  },
  {
    role: "Expo and Workshop Head",
    members: {
      "4th": [],
      "3rd": [
        { name: "Himanshu Kumar", dept: "IT" },
        { name: "Sumit Kumar", dept: "EE" },
      ],
      "2nd": [
        { name: "Anusree Chowdhury", dept: "CST" },
        { name: "Nipun Sachin Pandkar", dept: "ME" },
      ],
    },
  },
  {
    role: "Web Development and Technical",
    members: {
      "4th": [],
      "3rd": [
        { name: "Sneha Mishra", dept: "ME" },
      ],
      "2nd": [
        { name: "Bodh Prakash", dept: "Civil" },
        { name: "Bikramjeet Dasgupta", dept: "EE" },
      ],
    },
  },
  {
    role: "Videography",
    members: {
      "4th": [],
      "3rd": [
        { name: "Anshika Gupta", dept: "IT" },
      ],
      "2nd": [
        { name: "Anupam Kumar Chauhan", dept: "IT" },
      ],
    },
  },
];
// ── Gallery ──
export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5f9cf1da241d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop",
];
