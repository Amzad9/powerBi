export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 text-sm font-bold text-white shadow-sm">
            RH
          </span>
          <div className="leading-tight">
            <span className="block text-base font-semibold tracking-tight">
              Reporting Hub
            </span>
            <span className="block text-xs font-medium text-slate-400">
              For Power BI teams
            </span>
          </div>
        </a>
        {/* Desktop nav */}
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 sm:flex">
          <a href="/#features" className="hover:text-white">
            Features
          </a>
          <a href="/#use-cases" className="hover:text-white">
            Use cases
          </a>
          <a href="/#security" className="hover:text-white">
            Security
          </a>
          <a href="/#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="/#faq" className="hover:text-white">
            FAQ
          </a>
          <a
            href="/signin"
            className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:border-indigo-400 hover:text-white"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:from-indigo-400 hover:to-purple-400"
          >
            Start free trial
          </a>
        </div>
      </div>
      {/* Mobile quick actions */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 pb-3 pt-2 text-xs sm:hidden">
        <div className="flex gap-3">
          <a href="/#features" className="text-slate-300 hover:text-white">
            Features
          </a>
          <a href="/#pricing" className="text-slate-300 hover:text-white">
            Pricing
          </a>
          <a href="/#faq" className="text-slate-300 hover:text-white">
            FAQ
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href="/signin"
            className="rounded-full border border-white/15 px-3 py-1 font-semibold text-slate-100"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 font-semibold text-white"
          >
            Start
          </a>
        </div>
      </div>
    </nav>
  );
}


