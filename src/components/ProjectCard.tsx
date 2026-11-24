import type { Project } from "../data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
        <p className="text-slate-600">{project.tagline}</p>
        <p className="text-sm text-indigo-700 font-medium mt-1">
          {project.role}
        </p>
      </div>

      <p className="text-slate-700 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="text-xs bg-slate-100 text-slate-700 rounded-full px-2.5 py-1"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-2">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-indigo-700 hover:underline"
          >
            Live site ↗
          </a>
        )}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-indigo-700 hover:underline"
        >
          Code on GitHub ↗
        </a>
      </div>
    </article>
  );
}
