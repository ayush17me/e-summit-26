import {
  Trophy, Mic, MessageSquare, Video, Briefcase, Rocket,
  Brain, HelpCircle, Palette, Wrench, Gavel, Search,
  Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe,
} from "lucide-react";

// ── Navigation ──
export const NAV_LINKS = [
  { label: "Competitions", href: "/competitions" },
  { label: "Networking", href: "/networking" },
  { label: "Creators", href: "/creators" },
  { label: "Fair & Expo", href: "/internship" },
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
  { title: "Competitions", description: "Envisage, Disrupt, QR Hunt, Hackstart & more - test your entrepreneurial mettle.", icon: Trophy, href: "/competitions", span: "col-span-2 row-span-2" },
  { title: "Keynote Sessions", description: "Industry leaders sharing vision on AI, startups & Women empowerment.", icon: Mic, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Panel Discussions", description: "Debates on AI, Ethics, and the future of entrepreneurship.", icon: MessageSquare, href: "/networking", span: "col-span-1 row-span-1" },
  { title: "Creators Conclave", description: "Digital influencers & content creators come together.", icon: Video, href: "/creators", span: "col-span-1 row-span-2" },
  { title: "Fair & Expo", description: "Internship Fair, Startup Expo, Drone & Auto Expo - all under one roof.", icon: Briefcase, href: "/internship", span: "col-span-1 row-span-1" },
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

// ── Competitions ──
export const COMPETITIONS = [
  {
    id: "pitching-idea",
    title: "Pitching Idea",
    description:
      "The flagship B-Plan competition where visionary founders pitch their startup ideas to a panel of venture capitalists and industry leaders. Stand a chance to win funding, expert mentorship, and recognition.",
    icon: Brain,
    team: "Team of 2-4",
    features: [
      "Startup B-Plan Pitch",
      "VC & Industry Panel Evaluation",
      "Funding Opportunities",
      "Mentorship Support"
    ],
    poster: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=1200&fit=crop",
    detailedDescription: "Envisage is the flagship B-Plan competition of E-Summit'26 where aspiring entrepreneurs present their groundbreaking startup ideas to a distinguished panel of venture capitalists, angel investors, and industry experts. This is your opportunity to transform your vision into reality with funding, mentorship, and invaluable networking opportunities. Whether you're building the next AI unicorn or solving a critical social problem, Envisage is your launchpad to success.",
    rules: [
      "Teams must consist of 2-4 members from any college/university",
      "Each team gets 10 minutes for presentation + 5 minutes Q&A",
      "Presentations must include problem statement, solution, market analysis, business model, and financial projections",
      "Original ideas only - no plagiarism will be tolerated",
      "Preliminary round submissions via pitch deck (max 15 slides)",
      "Top 10 teams advance to final pitch in front of investors"
    ],
    prizes: "₹1,00,000 in cash prizes + Seed funding opportunities + Mentorship",
    deadline: "March 15, 2026",
    rulebookUrl: "/ruleBooks/pitching-idea-rulebook.pdf"
  },
  {
    id: "branding-comp",
    title: "Branding Comp",
    description:
      "A dynamic strategy-based auction where teams compete to acquire and build the most valuable startup asset portfolio. Smart decisions and sharp negotiation are the keys to victory.",
    icon: Gavel,
    team: "Team of 2-4",
    features: [
      "Strategic Auction Rounds",
      "Asset Portfolio Building",
      "Competitive Bidding",
      "High-Intensity Gameplay"
    ],
    poster: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=1200&fit=crop",
    detailedDescription: "Disrupt is a high-stakes strategic auction game where teams compete to build the most valuable startup asset portfolio. Through multiple rounds of bidding, negotiation, and strategic decision-making, teams must acquire assets like technology, talent, market access, and funding to create a winning combination. It's a test of business acumen, strategic thinking, and risk management.",
    rules: [
      "Teams of 2-4 participants required",
      "Each team starts with virtual capital of ₹10 Crores",
      "Multiple auction rounds with different asset categories",
      "Teams must build a balanced portfolio across technology, talent, market, and capital",
      "Final portfolio value determined by judges based on synergy and strategic fit",
      "No physical currency - all transactions are digital"
    ],
    prizes: "₹50,000 in cash prizes + Corporate goodies",
    deadline: "March 18, 2026",
    rulebookUrl: "/ruleBooks/branding-comp-rulebook.pdf"
  },
  {
    id: "proto-build",
    title: "proto-Build",
    description:
      "An exciting campus-wide innovation hunt that blends entrepreneurship, problem-solving, and adventure. Decode clues, scan QR codes, and race against time to reach the finish line.",
    icon: Search,
    team: "Team of 2-3",
    features: [
      "QR Code Challenges",
      "Startup & Business Clues",
      "Campus Exploration",
      "Fast-Paced Competition"
    ],
    poster: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=1200&fit=crop",
    detailedDescription: "QR Hunt is an exhilarating campus-wide treasure hunt that combines entrepreneurship knowledge with problem-solving and adventure. Teams navigate through the IIEST campus, scanning QR codes at various locations to unlock clues related to startups, business strategies, and innovation. Each clue leads to the next location, testing both your entrepreneurial knowledge and your ability to think on your feet.",
    rules: [
      "Teams of 2-3 members allowed",
      "Smartphones with QR scanner required (one per team)",
      "All clues must be answered correctly to get next location",
      "Teams must stay within designated campus boundaries",
      "First 3 teams to reach final destination win",
      "No external help or internet searches allowed during the hunt"
    ],
    prizes: "₹30,000 in cash prizes + E-Summit merchandise",
    deadline: "March 20, 2026",
    rulebookUrl: "/ruleBooks/proto-build-rulebook.pdf"
  },
  {
    id: "quiz",
    title: "Quiz",
    description:
      "Test your knowledge of startups, business trends, and the entrepreneurial ecosystem in this fast-paced quiz battle. Compete with the brightest minds and prove your business IQ.",
    icon: Wrench,
    team: "Team of 3-5",
    features: [
      "Startup & Business Trivia",
      "Rapid-Fire Rounds",
      "Elimination Stages",
      "Team-Based Challenge"
    ],
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=1200&fit=crop",
    detailedDescription: "Hackstart is an intensive buildathon where teams race against time to develop innovative solutions to real-world problems. From ideation to working prototype, you'll have 36 hours to build something amazing. With mentorship from industry experts, access to APIs and tools, and a competitive environment, Hackstart pushes you to your creative and technical limits.",
    rules: [
      "Teams of 3-5 members required",
      "36-hour continuous hackathon format",
      "Problem statements revealed at start of event",
      "All code must be written during the hackathon",
      "Open source libraries and APIs allowed",
      "Final submission: working prototype + presentation + code repository",
      "Judging based on innovation, technical implementation, and business viability"
    ],
    prizes: "₹75,000 in cash prizes + Internship opportunities",
    deadline: "March 10, 2026",
    rulebookUrl: "/ruleBooks/quiz-rulebook.pdf"
  },
  {
    id: "auction",
    title: "Auction",
    description:
      "The ultimate creative branding sprint. Design a complete brand identity from scratch - including logo, tagline, and pitch deck - within 24 hours and present your vision to judges.",
    icon: Palette,
    team: "Team of 2-3",
    features: [
      "Brand Identity Creation",
      "Logo & Tagline Design",
      "Pitch Deck Presentation",
      "24-Hour Creative Sprint"
    ],
    poster: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop",
    detailedDescription: "Build With US is the ultimate 24-hour branding challenge where creativity meets strategy. Teams are given a product/service concept and must create a complete brand identity from scratch - including logo, color palette, typography, tagline, brand guidelines, and a compelling pitch deck. This competition tests your design thinking, marketing acumen, and ability to tell a brand story.",
    rules: [
      "Teams of 2-3 members (at least one with design skills recommended)",
      "24-hour time limit from brief to final submission",
      "Deliverables: Logo, Brand Guidelines, Tagline, Pitch Deck (10 slides max)",
      "All design work must be original - no stock logos or templates",
      "Digital submission only - formats: PDF, PNG, PPT",
      "Judging criteria: Creativity, Brand Coherence, Market Fit, Presentation"
    ],
    prizes: "₹40,000 in cash prizes + Design tool subscriptions",
    deadline: "March 22, 2026",
    rulebookUrl: "/ruleBooks/auction-rulebook.pdf"
  },
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
    description: "Debate: 'AI Ethics - Where Do We Draw the Line?' with experts from academia and industry.", 
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
    description: "Discussion: 'Women Founders - Breaking the Glass Ceiling in Tech'.", 
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
  address: "Entrepreneurship Development Cell, IIEST Shibpur, Howrah, West Bengal - 711101",
};
// ── Team Structure ──
export const TEAM_STRUCTURE = [
  {
    role: "Secretary",
    members: {
      "4th": [
        { name: "Shreyansh", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "3rd": [],
      "2nd": [],
    },
  },
  {
    role: "MC",
    members: {
      "4th": [
        { name: "Agarwal Abhash", image: "https://images.unsplash.com/photo-1539571696357-5a69c006ae3e?w=400&h=400&fit=crop" },
      ],
      "3rd": [],
      "2nd": [],
    },
  },
  {
    role: "JC",
    members: {
      "4th": [],
      "3rd": [
        { name: "Surya", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
        { name: "Yash", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
        { name: "Keshav", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Finance Team",
    members: {
      "4th": [
        { name: "Ranjan", image: "https://images.unsplash.com/photo-1534308983496-4d93bc592d78?w=400&h=400&fit=crop" },
        { name: "Vikash", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "3rd": [
        { name: "Anshika", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
        { name: "Arnav", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Sponsor Team",
    members: {
      "4th": [
        { name: "Muskan", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
        { name: "Shreyansh", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "3rd": [
        { name: "Sneha Mosha", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
        { name: "Yash", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
        { name: "Keshav", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Event Team",
    members: {
      "4th": [
        { name: "Ujjwal", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
        { name: "Khushi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
        { name: "Shreyansh", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "3rd": [
        { name: "Shiv", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
        { name: "Nitya", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
        { name: "Himanshu", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Publicity Team",
    members: {
      "4th": [
        { name: "Ranjan", image: "https://images.unsplash.com/photo-1534308983496-4d93bc592d78?w=400&h=400&fit=crop" },
        { name: "Naincy", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
      ],
      "3rd": [
        { name: "Yasharth", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Design Team",
    members: {
      "4th": [
        { name: "Amritesh", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
        { name: "Naincy", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
      ],
      "3rd": [
        { name: "Gunn", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Travel & Logistics",
    members: {
      "4th": [
        { name: "Aryan", image: "https://images.unsplash.com/photo-1534308983496-4d93bc592d78?w=400&h=400&fit=crop" },
        { name: "Kaushal", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      ],
      "3rd": [
        { name: "Sajjan", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
      ],
      "2nd": [],
    },
  },
  {
    role: "Treasurer",
    members: {
      "4th": [],
      "3rd": [],
      "2nd": [
        { name: "Arnav", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
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
