function SortButton({ active = false, direction = "none", children, onClick }) {
  function getArrow() {
    if (direction === "asc") return "↑";
    if (direction === "desc") return "↓";
    return "↕";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg px-2 py-1 text-left text-xs font-semibold uppercase tracking-wide transition ${
        active
          ? "bg-blue-500/15 text-blue-300"
          : "text-slate-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span>{children}</span>
      <span className="text-sm">{getArrow()}</span>
    </button>
  );
}

export default SortButton;