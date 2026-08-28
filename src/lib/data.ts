export const profile = {
  name: "Robin Thomas",
  role: "Senior Software Engineer",
  roles: [
    "Senior Software Engineer",
    "React & TypeScript Specialist",
    "Enterprise UI Architect",
    "Front-End Systems Builder",
  ],
  blurb:
    "I build fast, scalable front-ends for products that real businesses run on. 5+ years turning ambiguous requirements into interfaces that hold up under enterprise-scale load.",
  email: "rj1447@hotmail.com",
  linkedin: "https://www.linkedin.com/in/robin-thomas-rj1447/",
  github: "https://github.com/TheRealHazzard",
};

export const stats = [
  { label: "Years of experience", value: "5+" },
  { label: "Promotions at Tekion", value: "4" },
  { label: "VIT CGPA", value: "9.09" },
  { label: "Daily active users shipped for", value: "1000+" },
];

export const experience = [
  {
    year: "2021",
    title: "Software Engineer Intern",
    detail: "React.js, Ant Design",
  },
  {
    year: "2021 – 2022",
    title: "Associate Software Engineer",
    detail: "CRM systems, UX",
  },
  {
    year: "2022 – 2023",
    title: "Software Engineer I",
    detail: "Access control, security",
  },
  {
    year: "2023 – 2026",
    title: "Software Engineer II",
    detail: "Micro-frontends, team leadership",
  },
  {
    year: "2026 – Present",
    title: "Senior Software Engineer",
    detail: "Architecture, mentoring",
  },
];

export const caseStudies = [
  {
    tag: "Platform Rebuild",
    title: "Rebuilding a Core Platform from the Ground Up",
    problem:
      "A legacy configuration system had become the bottleneck for every new feature: every change meant a code deploy, and the team spent more time firefighting than shipping.",
    action:
      "Led a from-scratch rebuild into a self-serve, configuration-driven platform with proper data indexing, then re-architected the API layer into a routing system that could absorb three subsequent platform migrations without breaking consumers.",
    impact: [
      "Non-engineers can now configure behavior that used to require a deploy",
      "Survived 3 platform migrations with zero breaking changes to consumers",
      "Became the foundation other teams now build on top of",
    ],
    stack: ["React", "TypeScript", "Architecture"],
  },
  {
    tag: "Migration",
    title: "Monolith to Micro-Frontends",
    problem:
      "All team-owned applications lived in a single monolithic front-end. One team's change could block every other team's release, and deploys were slow, risky, all-or-nothing events.",
    action:
      "Led the migration of every team-owned core application to a micro-frontend architecture powered by Module Federation, decoupling ownership boundaries and release cycles.",
    impact: [
      "Independent deployments, no more shared release trains",
      "Teams ship on their own schedule without coordinating a big-bang release",
      "Cleaner ownership boundaries across a multi-team codebase",
    ],
    stack: ["Module Federation", "React", "Architecture"],
  },
  {
    tag: "Performance",
    title: "Cutting Load Times in Half",
    problem:
      "A bootstrap-heavy enterprise application was taking 12 seconds to become interactive, long enough that users were opening tickets about it.",
    action:
      "Profiled the bootstrap path, restructured it around lazy loading and deferred calls, and cut out synchronous work that didn't need to block first paint.",
    impact: [
      "Load time dropped from 12 seconds to 5 seconds",
      "No feature regressions, same functionality, less blocking work",
      "Became the reference approach other teams copied",
    ],
    stack: ["React", "Performance", "Bundling"],
  },
  {
    tag: "Product Feature",
    title: "Redesigning Contact History for a CRM",
    problem:
      "Users needed complete contact history to do their jobs, but the existing view was paginated and slow to navigate, taking too many clicks to find what they needed.",
    action:
      "Engineered a new infinite-scroll contact history view with an improved information layout, built for the way users actually searched through history.",
    impact: [
      "22% increase in measured user productivity",
      "Fewer clicks required to reach the information users needed",
      "Shipped to production with no increase in support tickets",
    ],
    stack: ["React", "UX", "Product"],
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Tailwind CSS", "Jest"],
  Tools: ["Git", "Webpack", "Jira", "Confluence"],
  Leadership: ["Team Management", "Mentoring", "Code Review", "Delegation"],
};
