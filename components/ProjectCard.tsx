import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-md border border-border bg-surface p-5 md:p-6">
      <h3 className="text-h3 font-semibold text-ink">{project.name}</h3>
      <p className="mt-2 text-body text-muted">{project.description}</p>
    </article>
  );
}
