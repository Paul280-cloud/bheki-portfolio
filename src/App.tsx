import { projects, skillGroups, contact } from "./data";
import ProjectCard from "./components/ProjectCard";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur border-b border-slate-200">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#top" className="font-bold text-lg">
            Bheki Buthelezi
          </a>
          <div className="flex gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 hover:text-indigo-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top" className="max-w-4xl mx-auto px-6">
        <section className="py-16 md:py-24">
          <p className="text-indigo-700 font-semibold mb-2">
            Full-stack developer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Bheki Buthelezi
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">
            I build full-stack web apps end to end — product spec, database
            design, frontend, and deployment. Tech Lead on a 4-person team
            capstone (FixMyKasi), and solo builder of SiteLeads, a lead
            pipeline tool for web design agencies.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-indigo-700 text-white font-semibold text-sm"
            >
              See my projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-slate-300 font-semibold text-sm"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-slate-700 leading-relaxed max-w-2xl">
            I'm a capstone student building production-style apps from scratch:
            product requirements, a Postgres schema with row-level security,
            a tested React frontend, and a live deployment with CI. I care
            about shipping something real rather than a tutorial clone — both
            of my projects solve an actual problem for an actual kind of user.
          </p>
        </section>

        <section id="projects" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {group.title}
                </h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-slate-700 mb-4">
            Want to work together, or have a question about one of these
            projects? Reach out.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-700 font-medium hover:underline"
              >
                GitHub: {contact.github.replace("https://", "")}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="text-indigo-700 font-medium hover:underline"
              >
                Email: {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+27${contact.phone.slice(1)}`}
                className="text-indigo-700 font-medium hover:underline"
              >
                Phone: {contact.phone}
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 mt-8">
        <p className="max-w-4xl mx-auto px-6 text-sm text-slate-500">
          © {year} Bheki Buthelezi
        </p>
      </footer>
    </div>
  );
}
