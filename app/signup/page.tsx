import Navbar from "../components/Navbar";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 right-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col px-4 pb-10 pt-10 sm:px-6 lg:px-0">
        <div className="grid flex-1 gap-10 md:grid-cols-[1.15fr,0.85fr] md:items-center">
          {/* Left: copy */}
          <section>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
              START FREE TRIAL
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Create your Reporting Hub workspace
            </h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Turn your existing Power BI reports into a branded analytics portal. No credit
              card required, full access to core features for 14 days.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Unlimited viewer accounts during trial</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Connect your own Power BI workspace or use sample data</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Guided onboarding resources included</span>
              </li>
            </ul>
          </section>

          {/* Right: signup form */}
          <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-900/70">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-50">
                  Sign up to start your trial
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  We&apos;ll set up a workspace and send you a verification email.
                </p>
              </div>
              <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-100 sm:flex">
                14‑day
              </span>
            </div>

            <form className="mt-6 space-y-4 text-xs">
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-200">
                    First name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-200">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Company / organization
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-400">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 h-3.5 w-3.5 rounded border border-white/20 bg-slate-900 text-indigo-500"
                />
                <span>
                  I agree to the{" "}
                  <button type="button" className="underline underline-offset-2">
                    Terms
                  </button>{" "}
                  and{" "}
                  <button type="button" className="underline underline-offset-2">
                    Privacy Policy
                  </button>
                  .
                </span>
              </div>
              <button
                type="button"
                className="mt-1 w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/30 hover:from-indigo-400 hover:to-purple-400"
              >
                Sign up and start trial
              </button>
            </form>

            <p className="mt-4 text-[11px] text-slate-400">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-semibold text-indigo-300 hover:text-indigo-200"
              >
                Sign in instead
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="mt-10 border-t border-white/5 pt-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Reporting Hub. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}


