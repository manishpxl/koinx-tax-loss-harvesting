import Button from "../../../components/common/Button";

function HoldingsToolbar({
  search,
  onSearchChange,
  selectedCount = 0,
  onClearSelection,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-1">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Search Holdings
        </label>

        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by coin or asset name..."
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-blue-500/40"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Selected</p>
          <p className="mt-1 text-lg font-semibold text-white">{selectedCount}</p>
        </div>

        <Button
          variant="ghost"
          onClick={onClearSelection}
          disabled={selectedCount === 0}
        >
          Clear Selection
        </Button>
      </div>
    </div>
  );
}

export default HoldingsToolbar;