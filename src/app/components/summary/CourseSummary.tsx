import TrailerMedia from './TrailerMedia';

export default function CourseSummary() {
  return (
    <aside className="sticky top-20 flex flex-col gap-6 max-w-sm">
      <TrailerMedia />
      {/* ⬇ add later: price box, CTA, etc. */}
    </aside>
  );
}
