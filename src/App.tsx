import { projects, smallerProjects, skillGroups, contact } from "./data";
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
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-7 h-7 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xs">
              BB
            </span>
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
        <section className="py-16 md:py-24 rounded-3xl mt-6 px-6 md:px-10 bg-gradient-to-br from-indigo-700 via-indigo-600 to-slate-900 text-white">
          <p className="text-indigo-200 font-semibold mb-2 tracking-wide uppercase text-xs">
            Full-stack developer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Bheki Buthelezi
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            I build full-stack web apps end to end — product spec, database
            design, frontend, and deployment. Tech Lead on a 4-person team
            capstone (FixMyKasi), and solo builder of SiteLeads, a lead
            pipeline tool for web design agencies.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-white text-indigo-700 font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity"
            >
              See my projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-indigo-700" />
            About
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-2xl">
            I'm a capstone student building production-style apps from scratch:
            product requirements, a Postgres schema with row-level security,
            a tested React frontend, and a live deployment with CI. I care
            about shipping something real rather than a tutorial clone — both
            of my projects solve an actual problem for an actual kind of user.
          </p>
        </section>

        <section id="projects" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-indigo-700" />
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <h3 className="text-lg font-bold mt-10 mb-4">Other projects</h3>
          <p className="text-sm text-slate-600 mb-4">
            Smaller exercises and practice projects from coursework.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {smallerProjects.map((p) => (
              <a
                key={p.name}
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-slate-900">{p.name}</p>
                <p className="text-sm text-slate-600 mt-1">{p.description}</p>
                <p className="text-xs text-indigo-700 font-medium mt-2">
                  Code on GitHub ↗
                </p>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-indigo-700" />
            Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-white rounded-xl shadow p-4">
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-indigo-700" />
            Contact
          </h2>
          <p className="text-slate-700 mb-5">
            Want to work together, or have a question about one of these
            projects? Reach out.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-shadow"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                GitHub
              </p>
              <p className="text-indigo-700 font-semibold text-sm break-words">
                {contact.github.replace("https://", "")}
              </p>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-shadow"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                Email
              </p>
              <p className="text-indigo-700 font-semibold text-sm break-words">
                {contact.email}
              </p>
            </a>
            <a
              href={`tel:+27${contact.phone.slice(1)}`}
              className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-shadow"
            >
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                Phone
              </p>
              <p className="text-indigo-700 font-semibold text-sm">
                {contact.phone}
              </p>
            </a>
          </div>
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
