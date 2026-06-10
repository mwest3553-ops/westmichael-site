import { skills } from "@/lib/experience";

export default function SkillsTagList() {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {skills.map((skill) => (
        <li
          key={skill.label}
          className="rounded-sm border border-border-strong bg-surface px-3 py-1.5 text-meta text-ink"
        >
          {skill.label}
          {skill.certified && (
            <span className="ml-1.5 text-xs text-accent">★ Certified</span>
          )}
        </li>
      ))}
    </ul>
  );
}
