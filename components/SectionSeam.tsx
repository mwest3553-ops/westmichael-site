/**
 * A soft gold hairline used at light↔dark section boundaries so transitions
 * read as intentional seams rather than hard cuts. Purely decorative.
 */
export default function SectionSeam() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent"
    />
  );
}
