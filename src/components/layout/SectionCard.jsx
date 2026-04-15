function SectionCard({ title, subtitle, action, children, className = "" }) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 ${className}`}
    >
      {(title || subtitle || action) && (
        <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {title ? <h2 className="text-xl font-semibold text-white">{title}</h2> : null}
            {subtitle ? (
              <p className="mt-1 text-sm leading-6 text-slate-300">{subtitle}</p>
            ) : null}
          </div>

          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      )}

      {children}
    </section>
  );
}

export default SectionCard;