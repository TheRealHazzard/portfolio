export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="font-mono text-sm text-teal">{index}.</span>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
