export type Project = {
  name: string;
  tagline: string;
  role: string;
  description: string;
  stack: string[];
  live: string;
  repo: string;
};

export const projects: Project[] = [
  {
    name: "SiteLeads",
    tagline: "A lead pipeline for web design agencies",
    role: "Solo builder — idea, product spec, full stack, deployment",
    description:
      "Web design agencies and freelancers waste hours finding local businesses that don't have a website, then lose track of who they've called. SiteLeads is a lead-pipeline tool: an agency owner adds or imports leads, assigns them to callers, and tracks every one from first contact to a signed deal. Includes role-based access (owner vs. caller), a map view of leads by status, and a dashboard of conversion rates.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase (Postgres, Auth, RLS, Edge Functions)",
      "Leaflet",
      "Vitest",
      "Vercel",
    ],
    live: "https://siteleads.vercel.app",
    repo: "https://github.com/Paul280-cloud/siteleads",
  },
  {
    name: "FixMyKasi",
    tagline: "Report and track municipal faults in South African communities",
    role: "Tech Lead — a 4-person team capstone",
    description:
      "Residents report potholes, burst pipes and broken streetlights, but reports get lost between call centres and WhatsApp groups. FixMyKasi gives every fault one public record: anyone can see what was reported, who's responsible for fixing it, and whether it was actually done. As Tech Lead, I built the log-in and sign-up flow, the ward admin's fault queue, the welcome screen, and led the production deploy.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase (Postgres, Auth, Storage)",
      "GitHub Actions CI",
      "Vercel",
    ],
    live: "https://fixmykasi.vercel.app",
    repo: "https://github.com/Paul280-cloud/fixmykasi",
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    items: [
      "Supabase (Postgres, Auth, Row-Level Security, Edge Functions)",
      "SQL",
    ],
  },
  {
    title: "Testing & tooling",
    items: [
      "Vitest",
      "React Testing Library",
      "ESLint",
      "GitHub Actions CI",
      "Git / pull-request workflow",
    ],
  },
  {
    title: "Deployment",
    items: ["Vercel", "Environment config & secrets management"],
  },
];

export const contact = {
  github: "https://github.com/Paul280-cloud",
  email: "buthelezipaul9@gmail.com",
  phone: "0791715990",
};
