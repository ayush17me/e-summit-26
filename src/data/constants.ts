import {
  Trophy, Mic, MessageSquare, Video, Briefcase, Rocket,
  Brain, HelpCircle, Palette, Wrench, Gavel, Search,
  Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe,
} from "lucide-react";

// ── Navigation ──
export const NAV_LINKS = [
  { label: "Competitions", href: "/competitions" },
  { label: "Events", href: "/networking" },
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
  { title: "Creators Conclave", description: "Digital influencers & content creators come together.", icon: Video, href: "/creators", span: "col-span-1 row-span-2" },
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
      "id": "bec84-pitch",
      "title": "BEC 84 Investor Pitch",
      "tagline": "Pitch your tech startup idea & win funding up to ₹8 Lakhs",
      "description": "The flagship business idea competition under BEC84 Angel Fund Scheme where IIEST students pitch innovative technology-driven startup ideas to secure funding, mentorship, and incubation support.",
      "teamSize": "2-4 members",
      "eligibility": [
        "Only IIEST Students",
        "UG (1st–3rd Year)",
        "PG (1st Year)",
        "PhD (1st–3rd Year)"
      ],
      "themes": [
        "Sustainability & Green Tech",
        "Smart Cities",
        "HealthTech",
        "EdTech",
        "FinTech",
        "Open Innovation"
      ],
      "rounds": [
        "Round 1: Online PPT Submission (5+1 slides)",
        "Round 2: Pitching at E-Summit",
        "Round 3: Progress Report + Final Selection"
      ],
      "features": [
        "Funding up to ₹8 Lakhs",
        "Mentorship under BEC84",
        "Incubation at TCGTBI",
        "Real Investor Exposure"
      ],
      "submission": [
        "5+1 Slide Pitch Deck",
        "Problem, Solution, Market, Business Model"
      ],
      "deadline": "12 April, 11:59 PM",
      "prize": "Up to ₹8,00,000 funding + incubation",
      "status": "active"
    },
    {
      "id": "vibe-build",
      "title": "VibeBuild – AI Product Challenge",
      "tagline": "Build a SaaS product in 6 hours using AI Agents",
      "description": "A high-intensity AI product development competition focused on Agentic AI workflows. Participants design, build, and deploy a SaaS solution using modern AI tools like Gemini, Claude, Stitch, and Antigravity.",
      "teamSize": "2-3 members",
      "eligibility": "to be updated",
      "rounds": [
        "Round 1: Idea Abstract + 3-min Video",
        "Screening Round",
        "Round 2: 6-hour Offline Build Sprint"
      ],
      "features": [
        "AI-first development (no manual coding focus)",
        "Agent orchestration workflows",
        "Rapid SaaS prototyping",
        "Live deployment & demo"
      ],
      "toolsAllowed": [
        "Google Stitch",
        "Google Antigravity IDE",
        "Gemini",
        "Claude"
      ],
      "evaluationCriteria": [
        "Execution speed",
        "AI usage efficiency",
        "Working prototype",
        "System design"
      ],
      "constraints": [
        "Must build SaaS product",
        "Use AI agents effectively"
      ],
      "deadline": "to be updated",
      "prize": "₹10,000",
      "status": "active"
    },
    {
      "id": "campus-creator",
      "title": "Campus Creator Championship",
      "tagline": "Create viral content & collaborate with influencers",
      "description": "A high-engagement digital content competition where participants create reels/videos to boost brand interaction and visibility. Opportunity to collaborate with influencers and showcase creativity.",
      "teamSize": "Individual / Team (to be updated)",
      "eligibility": "Open to all participants",
      "features": [
        "Reel/Video Creation",
        "Influencer Collaboration",
        "Social Media Exposure",
        "Creative Branding"
      ],
      "judgingCriteria": [
        "Creativity",
        "Engagement",
        "Originality",
        "Execution"
      ],
      "submission": [
        "Instagram Reel / Video Content"
      ],
      "deadline": "to be updated",
      "prize": "₹7,000",
      "status": "active"
    },
    {
      "id": "case-x",
      "title": "CaseX – Case Study Competition",
      "tagline": "Solve real-world business problems & win internships",
      "description": "A case study competition where participants work on real company problems, analyze data, and propose strategic solutions. Top performers may receive internship opportunities.",
      "teamSize": "to be updated",
      "eligibility": "Open to students",
      "features": [
        "Real Company Case Studies",
        "Business Strategy Development",
        "Presentation to Judges",
        "Internship Opportunities"
      ],
      "rounds": [
        "Case Release",
        "Analysis & Solution Submission",
        "Final Presentation"
      ],
      "judgingCriteria": [
        "Problem Understanding",
        "Solution Quality",
        "Feasibility",
        "Presentation"
      ],
      "deadline": "to be updated",
      "prize": "₹7,000 + Internship Opportunities",
      "status": "active"
    }
  ];


// ── Networking Events ──
export const NETWORKING_EVENTS = [
  { 
    id: "keynote-1",
    title: "Keynote Session 1", 
    type: "Keynote",
    description: "Opening keynote on 'The Future of Women in AI' by leading industry voices.", 
    fullDescription: "Join us for an inspiring opening keynote where industry pioneers discuss the transformative role of women in the AI revolution. Learn about breakthrough technologies, career opportunities, and how AI is reshaping the entrepreneurial landscape.",
    time: "10:00 AM", 
    day: "Day 1",
    duration: "45 minutes",
    speakers: [
      { name: "Dr. Priya Sharma", title: "AI Researcher & Entrepreneur", company: "TechVenture Labs" },
      { name: "Aisha Patel", title: "Women in Tech Leader", company: "Global Tech Initiative" }
    ],
    venue: "Main Auditorium, IIEST Shibpur",
    capacity: "500 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  { 
    id: "panel-1",
    title: "Panel Discussion 1", 
    type: "Panel Discussion",
    description: "Debate: 'AI Ethics — Where Do We Draw the Line?' with experts from academia and industry.", 
    fullDescription: "A thought-provoking panel discussion featuring ethicists, technologists, and policymakers debating the critical questions around AI ethics, privacy, and responsible innovation. Engage with leaders shaping the future of ethical AI.",
    time: "2:00 PM", 
    day: "Day 1",
    duration: "60 minutes",
    speakers: [
      { name: "Prof. Rajesh Kumar", title: "Ethics Professor", company: "IIEST Shibpur" },
      { name: "Vikram Singh", title: "AI Policy Expert", company: "Tech Policy Foundation" },
      { name: "Elena Rodriguez", title: "AI Researcher", company: "Innovation Lab" }
    ],
    venue: "Conference Hall A, IIEST Shibpur",
    capacity: "300 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  { 
    id: "keynote-2",
    title: "Keynote Session 2", 
    type: "Keynote",
    description: "Closing keynote on 'Building Billion-Dollar Startups from Tier-2 Cities'.", 
    fullDescription: "Learn from successful entrepreneurs who have built billion-dollar companies from non-metro cities. Discover strategies for leveraging local advantages, accessing global markets, and scale operations with limited resources.",
    time: "10:00 AM", 
    day: "Day 2",
    duration: "45 minutes",
    speakers: [
      { name: "Arjun Mehta", title: "Founder & CEO", company: "StartupXYZ (Unicorn)" },
      { name: "Neha Gupta", title: "Venture Capitalist", company: "Tier-2 VC Fund" }
    ],
    venue: "Main Auditorium, IIEST Shibpur",
    capacity: "500 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  { 
    id: "panel-2",
    title: "Panel Discussion 2", 
    type: "Panel Discussion",
    description: "Discussion: 'Women Founders — Breaking the Glass Ceiling in Tech'.", 
    fullDescription: "Celebrating women founders who are breaking barriers and building successful tech companies. Hear their stories of challenges, triumphs, and lessons learned on the path to building billion-dollar enterprises.",
    time: "2:00 PM", 
    day: "Day 2",
    duration: "60 minutes",
    speakers: [
      { name: "Deepika Rao", title: "Founder & CEO", company: "WomenTech Innovations" },
      { name: "Priya Sharma", title: "Investor", company: "Female Founders Fund" },
      { name: "Amrita Singh", title: "Tech Leader", company: "TechGuru Solutions" }
    ],
    venue: "Conference Hall A, IIEST Shibpur",
    capacity: "300 attendees",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  { 
    id: "expo",
    title: "Startup Expo & Drone/Auto Expo", 
    type: "Exhibition",
    description: "Exhibition hall where 50+ startups showcase products alongside drone and auto exhibitions.", 
    fullDescription: "Explore an exclusive exhibition featuring 50+ innovative startups, cutting-edge drone technologies, and autonomous vehicle showcases. Network with founders, investors, and industry leaders all in one place.",
    time: "All Day", 
    day: "Day 1 & 2",
    duration: "Full Event",
    speakers: [],
    venue: "Exhibition Grounds, IIEST Shibpur",
    capacity: "Unlimited",
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
  phone2: { name: "Arnav Aarit", number: "+91 90602 27813" },
  address: "Entrepreneurship Development Cell, IIEST Shibpur, Howrah, West Bengal — 711101",
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
        { name: "Shivintya", dept: "ME" },
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
      "4th": [],
      "3rd": [
        { name: "Yasharth Shukla", dept: "CST" },
        { name: "Shivintya", dept: "ME" },
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
