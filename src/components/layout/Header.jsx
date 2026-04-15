function Header() {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <span className="inline-flex w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          KoinX Assignment
        </span>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tax Loss Harvesting Dashboard
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            Review your FY 2024-25 capital gains, select assets to harvest losses,
            and instantly see the post-harvest impact on your effective gains.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;