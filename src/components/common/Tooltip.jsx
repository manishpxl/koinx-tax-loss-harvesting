import { useId, useState } from "react";

function Tooltip({ content, children, position = "top" }) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  const positions = {
    top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
    left: "right-full top-1/2 mr-3 -translate-y-1/2",
    right: "left-full top-1/2 ml-3 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span aria-describedby={open ? tooltipId : undefined}>{children}</span>

      {open ? (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute z-30 w-72 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-xs leading-5 text-slate-200 shadow-2xl shadow-black/40 ${positions[position]}`}
        >
          {content}
        </div>
      ) : null}
    </div>
  );
}

export default Tooltip;