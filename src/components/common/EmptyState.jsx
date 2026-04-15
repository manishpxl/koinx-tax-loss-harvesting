function EmptyState({
  title = "No data found",
  message = "Try changing your search or filters.",
}) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.03] px-6 text-center">
      <div className="mb-4 text-4xl">🔍</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{message}</p>
    </div>
  );
}

export default EmptyState;