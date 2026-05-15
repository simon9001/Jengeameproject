import { Globe, Smartphone, Server, Palette, Database, Sparkles } from "lucide-react";

export const SERVICES = [
  {
    id: "web-dev",
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge frameworks. From landing pages to complex web platforms.",
    tags: ["React", "Next.js", "Vite", "Tailwind CSS", "TypeScript", "HTML/CSS"],
  },
  {
    id: "mobile-dev",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps that work seamlessly on iOS and Android with a single codebase.",
    tags: ["Flutter", "Dart", "REST APIs", "State Management", "Play Store / App Store"],
  },
  {
    id: "backend-dev",
    icon: <Server className="w-6 h-6" />,
    title: "Backend & API Development",
    description: "Scalable, secure server-side systems and RESTful APIs that power your applications reliably.",
    tags: ["Django", "Python", "Node.js", "Hono", "REST API", "JWT Auth"],
  },
  {
    id: "ui-ux",
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces designed for conversion and engagement — from wireframes to polished prototypes.",
    tags: ["Figma", "Responsive Design", "Accessibility", "Design Systems", "User Research"],
  },
  {
    id: "db-cloud",
    icon: <Database className="w-6 h-6" />,
    title: "Database & Cloud",
    description: "Efficient database design and cloud deployment for performance, reliability, and scalability.",
    tags: ["PostgreSQL", "MySQL", "Firebase", "Vercel", "Cloud Hosting", "Data Modeling"],
  },
  {
    id: "ai-auto",
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI & Automation",
    description: "Intelligent solutions that automate workflows and add smart capabilities to your business systems.",
    tags: ["Python ML", "OpenCV", "Face Recognition", "Data Analysis", "Process Automation"],
  },
];

export const PROJECTS = [
  {
    category: "Property Tech",
    title: "RENT_ME_A_KEJA",
    desc: "Full-stack property rental platform enabling landlords to list properties and tenants to search, book, and manage rentals.",
    tags: ["React", "Vite", "Django", "REST API", "PostgreSQL"],
    links: [{ type: "code", href: "https://github.com/simon9001/rent-me-a-keja" }],
  },
  {
    category: "Management System",
    title: "Car Rental Management System",
    desc: "Web-based system for managing vehicle listings, bookings, customers, and availability with a clean admin dashboard.",
    tags: ["Django", "Python", "Bootstrap", "PostgreSQL"],
    links: [{ type: "code", href: "https://github.com/simon9001/car-rental-system" }],
  },
  {
    category: "Civic Tech",
    title: "Online Voting System",
    desc: "Secure online voting platform with user authentication, vote integrity checks, and real-time result tallying.",
    tags: ["Django", "React", "JWT", "System Security"],
    links: [{ type: "code", href: "https://github.com/simon9001/online-voting-system" }],
  },
  {
    category: "AI / Computer Vision",
    title: "Face Recognition Attendance",
    desc: "AI-powered attendance system using face recognition to automatically log attendance for institutions.",
    tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    links: [{ type: "code", href: "https://github.com/simon9001/face-recognition-attendance" }],
  },
  {
    category: "AgriTech",
    title: "Agriculture Advisory Platform",
    desc: "Digital platform providing farmers with advisory content, consultation booking, and service access.",
    tags: ["React", "Hono", "API Design", "AgriTech"],
    links: [{ type: "code", href: "https://github.com/simon9001/agri-advisory-platform" }],
  },
  {
    category: "Mobile App",
    title: "Mobile App Prototype",
    desc: "Flutter-based mobile application prototype focused on clean UI, reusable components, and API-driven data flow.",
    tags: ["Flutter", "Dart", "Mobile Development", "REST APIs"],
    links: [{ type: "code", href: "https://github.com/simon9001/flutter-app" }],
  },
];

export const PRICING = [
  {
    plan: "Starter",
    price: "From $250",
    desc: "Perfect for landing pages and simple business sites.",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Contact Form",
      "Basic SEO Setup",
      "1 Month Support",
    ],
    recommended: false,
  },
  {
    plan: "Professional",
    price: "From $800",
    desc: "Ideal for growing businesses and E-commerce sites.",
    features: [
      "Custom Web Application",
      "CMS Integration",
      "E-commerce Ready",
      "Advanced SEO",
      "3 Months Support",
    ],
    recommended: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    desc: "For complex systems, mobile apps and AI solutions.",
    features: [
      "Full System Architecture",
      "Mobile App (Flutter)",
      "AI/Automation Logic",
      "Priority Support",
      "Dedicated Team",
    ],
    recommended: false,
  },
];

// ============================================================
// BLOG POSTS — Add your blog entries here
// Each post needs: id, title, excerpt, category, date, author, readTime, tags, content
// The "content" field supports simple paragraphs as an array of strings.
// ============================================================
export const BLOG_POSTS = [
  {
    id: "why-nextjs-for-business",
    title: "Why Next.js Is the Best Choice for Business Websites in 2025",
    excerpt:
      "Discover why Next.js has become the go-to framework for building fast, SEO-friendly, and scalable business websites.",
    category: "Web Development",
    date: "2025-05-10",
    author: "Simon Gatungo",
    readTime: "5 min read",
    tags: ["Next.js", "React", "SEO", "Performance"],
    content: [
      "Next.js has evolved from a React framework into a full-stack powerhouse. With features like server-side rendering (SSR), static site generation (SSG), and the new App Router, it offers unmatched flexibility for business websites.",
      "For businesses, page load speed and SEO are critical. Next.js delivers both out of the box — pages are pre-rendered for search engines, and the built-in image optimization ensures fast load times even on slow connections.",
      "At Jengeame, we use Next.js for the majority of our client projects because it scales effortlessly. Whether you need a simple landing page or a complex web application, Next.js adapts to your needs without forcing a rewrite later.",
      "The developer experience is also exceptional. Hot module replacement, TypeScript support, and a massive ecosystem of plugins mean we can build faster and deliver higher quality products to our clients.",
    ],
  },
  {
    id: "flutter-vs-react-native",
    title: "Flutter vs React Native: Which One Should You Pick in 2025?",
    excerpt:
      "A practical comparison of Flutter and React Native for mobile app development — performance, developer experience, and real-world results.",
    category: "Mobile Development",
    date: "2025-04-28",
    author: "Simon Gatungo",
    readTime: "7 min read",
    tags: ["Flutter", "React Native", "Mobile Apps", "Cross-Platform"],
    content: [
      "Choosing the right mobile framework can make or break your project timeline and budget. Both Flutter and React Native are excellent choices, but they serve different needs.",
      "Flutter, backed by Google, uses Dart and compiles to native ARM code. This gives it a performance edge, especially for animation-heavy apps and custom UIs. The widget system is incredibly powerful — you can build pixel-perfect designs without fighting platform constraints.",
      "React Native, backed by Meta, leverages JavaScript and a bridge architecture. It's ideal if your team already knows React, and the ecosystem of third-party libraries is massive. However, the bridge can introduce performance bottlenecks for complex interactions.",
      "At Jengeame, we primarily use Flutter for our mobile projects. The single codebase approach, combined with Dart's type safety and Flutter's rich widget library, allows us to deliver polished apps faster. That said, we recommend React Native when a client's team is heavily invested in the JavaScript ecosystem.",
    ],
  },
  {
    id: "api-design-best-practices",
    title: "REST API Design: 5 Best Practices Every Developer Should Follow",
    excerpt:
      "Build APIs that are clean, consistent, and easy to consume. These five principles will level up your backend development.",
    category: "Backend",
    date: "2025-04-15",
    author: "Simon Gatungo",
    readTime: "6 min read",
    tags: ["REST API", "Backend", "Django", "Best Practices"],
    content: [
      "A well-designed API is the backbone of any modern application. Whether you're building for a web app, mobile app, or third-party integration, these five principles will make your APIs more reliable and easier to maintain.",
      "1. Use nouns for endpoints, not verbs. Instead of /getUsers, use /users. The HTTP method (GET, POST, PUT, DELETE) already describes the action. This keeps your API predictable and RESTful.",
      "2. Version your API from day one. Use /api/v1/users so you can introduce breaking changes in v2 without disrupting existing clients. This is especially important for public-facing APIs.",
      "3. Use proper HTTP status codes. Return 201 for created resources, 404 for not found, 422 for validation errors, and 500 for server errors. Don't return 200 for everything — it makes debugging a nightmare.",
      "4. Implement pagination for list endpoints. Returning thousands of records in a single response is a performance killer. Use cursor-based or offset pagination to keep responses fast and predictable.",
      "5. Document everything. Use tools like Swagger/OpenAPI to auto-generate interactive API docs. Your future self (and your clients) will thank you.",
    ],
  },
];
