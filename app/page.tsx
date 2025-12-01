const stats = [
  { label: "Dashboards launched", value: "2k+" },
  { label: "Viewers served", value: "120k+" },
  { label: "Avg. setup time", value: "< 1 day" },
  { label: "License savings", value: "60%+" },
];

const personas = [
  {
    title: "Agencies & consultants",
    desc: "Package your Power BI expertise as a premium analytics product for every client.",
    badge: "Multi‑tenant ready",
  },
  {
    title: "Enterprises",
    desc: "Give internal and external stakeholders a beautiful, secure BI experience.",
    badge: "Enterprise security",
  },
  {
    title: "Product teams",
    desc: "Embed analytics in your SaaS without rebuilding your data stack.",
    badge: "Embed anywhere",
  },
];

const useCases = [
  "Client reporting portals",
  "Board & investor dashboards",
  "Customer‑facing analytics",
  "Partner & vendor portals",
  "Franchise / branch performance",
  "Embedded product analytics",
];

function FeatureIcon({ label }: { label: string }) {
  const baseCircle =
    "h-9 w-9 rounded-2xl flex items-center justify-center bg-gradient-to-br";

  if (label === "1") {
    // Branding
    return (
      <div className={`${baseCircle} from-indigo-500 to-purple-500`}>
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="3"
            className="fill-white/10"
          />
          <path
            d="M8 9h8M8 12h4"
            className="stroke-white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (label === "2") {
    // Users
    return (
      <div className={`${baseCircle} from-sky-500 to-indigo-500`}>
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="9"
            cy="9"
            r="3"
            className="stroke-white"
            strokeWidth="1.6"
          />
          <path
            d="M4.5 17.5C5.5 15.5 7 14 9 14s3.5 1.5 4.5 3.5"
            className="stroke-white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle
            cx="17"
            cy="9"
            r="2"
            className="stroke-white/70"
            strokeWidth="1.4"
          />
        </svg>
      </div>
    );
  }

  if (label === "3") {
    // No-code
    return (
      <div className={`${baseCircle} from-emerald-500 to-teal-500`}>
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="5"
            y="6"
            width="14"
            height="11"
            rx="2"
            className="stroke-white"
            strokeWidth="1.6"
          />
          <path
            d="M8 9h4M8 12h2.5"
            className="stroke-white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (label === "4") {
    // Portals
    return (
      <div className={`${baseCircle} from-fuchsia-500 to-indigo-500`}>
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="3"
            className="stroke-white"
            strokeWidth="1.6"
          />
          <path
            d="M8 10h8M8 13h5"
            className="stroke-white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (label === "5") {
    // Security
    return (
      <div className={`${baseCircle} from-emerald-500 to-sky-500`}>
        <svg
          aria-hidden="true"
          className="h-4 w-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 4 6 6v5c0 3.2 2.1 6.1 6 7 3.9-.9 6-3.8 6-7V6l-6-2Z"
            className="stroke-white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 12.5 12 14l2.5-2.5"
            className="stroke-white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // Monetization
  return (
    <div className={`${baseCircle} from-amber-400 to-orange-500`}>
      <svg
        aria-hidden="true"
        className="h-4 w-4 text-white"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="6"
          className="stroke-white"
          strokeWidth="1.6"
        />
        <path
          d="M12 9v6M10.5 10.5c.5-.5 1.1-.8 1.8-.8 1 0 1.7.6 1.7 1.4 0 .9-.5 1.3-1.6 1.5-.9.1-1.6.5-1.6 1.4 0 .8.7 1.5 1.7 1.5.6 0 1.1-.2 1.5-.6"
          className="stroke-white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Radial background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
          <div className="flex items-center gap-2">
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
          </div>
          {/* Desktop nav */}
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#use-cases" className="hover:text-white">
              Use cases
            </a>
            <a href="#security" className="hover:text-white">
              Security
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white">
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
            <a href="#features" className="text-slate-300 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="text-slate-300 hover:text-white">
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

      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-0 lg:py-20">
          {/* Left: copy */}
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/15 px-4 py-1.5 text-xs font-medium text-indigo-100 shadow-sm shadow-indigo-500/30">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500/70 text-[9px]">
                ●
              </span>
              Microsoft‑first white‑label Power BI platform
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
              Turn Power BI into your own{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                revenue‑driving analytics product
              </span>
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Launch a fully branded analytics portal on top of your existing Power BI
              dashboards. No extra licenses for viewers, no extra dev team required.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-400 sm:text-base">
              Your data stack stays in Power BI.{" "}
              <span className="text-indigo-300">We handle the experience, access, and scale.</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/30 hover:from-indigo-400 hover:to-purple-400"
              >
                Start free trial
                <span className="ml-2 text-xs text-indigo-100">No credit card</span>
              </a>
              <a
                href="#auth"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/60 px-7 py-3 text-sm font-semibold text-slate-100 hover:border-indigo-400"
              >
                Book live demo
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Trusted by analytics teams worldwide
              </div>
              <span className="h-3 w-px bg-slate-700" />
              <span>Unlimited viewers on every plan</span>
              <span className="h-3 w-px bg-slate-700" />
              <span>Hosted on Microsoft Azure</span>
            </div>
          </div>

          {/* Right: dashboard preview */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-indigo-500/60 via-sky-500/40 to-purple-500/40 opacity-60 blur-xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl shadow-slate-900/90">
                {/* Window header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span className="h-2 w-16 rounded-full bg-slate-800" />
                    <span className="h-5 w-14 rounded-full bg-slate-800/80" />
                  </div>
                </div>

                {/* Top cards */}
                <div className="mb-4 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-slate-900/70 p-3.5">
                    <div className="h-1.5 w-12 rounded-full bg-slate-700" />
                    <div className="mt-3 h-9 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500" />
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-3.5">
                    <div className="h-1.5 w-14 rounded-full bg-slate-700" />
                    <div className="mt-3 flex h-9 items-end gap-1.5">
                      <div className="flex-1 rounded-md bg-indigo-500/50" style={{ height: "45%" }} />
                      <div className="flex-1 rounded-md bg-indigo-400/70" style={{ height: "75%" }} />
                      <div className="flex-1 rounded-md bg-sky-400" style={{ height: "100%" }} />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-3.5">
                    <div className="h-1.5 w-10 rounded-full bg-slate-700" />
                    <div className="mt-3 flex h-9 items-center justify-between">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                    </div>
                  </div>
                </div>

                {/* Main chart */}
                <div className="rounded-2xl bg-slate-900/80 p-3.5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-2 w-24 rounded-full bg-slate-700" />
                      <div className="h-2 w-16 rounded-full bg-slate-800" />
                    </div>
                    <div className="flex gap-2">
                      <span className="h-5 w-10 rounded-full bg-slate-800" />
                      <span className="h-5 w-10 rounded-full bg-slate-800" />
                    </div>
                  </div>
                  <div className="h-28 rounded-lg bg-gradient-to-r from-indigo-500/40 via-sky-400/40 to-purple-500/40" />
                </div>

                {/* Mini user list */}
                <div className="mt-4 grid grid-cols-[1.4fr,1fr] gap-3">
                  <div className="rounded-2xl bg-slate-900/80 p-3.5">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-2 w-20 rounded-full bg-slate-700" />
                      <div className="h-2 w-12 rounded-full bg-slate-800" />
                    </div>
                    <div className="space-y-1.5">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-2">
                            <span className="h-5 w-5 rounded-full bg-slate-700" />
                            <span className="h-2 w-16 rounded-full bg-slate-700" />
                          </div>
                          <span className="h-2 w-8 rounded-full bg-slate-800" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 p-3.5">
                    <div className="h-2 w-16 rounded-full bg-slate-700" />
                    <div className="mt-3 flex flex-wrap gap-1.5 text-[9px]">
                      {["Viewer", "Admin", "Client", "Partner"].map((role) => (
                        <span
                          key={role}
                          className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-2 py-0.5 text-indigo-100"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-white/5 bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-7 text-sm text-slate-300 sm:px-6 lg:px-0">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              POWER BI‑NATIVE
            </p>
            <p className="max-w-xs text-xs">
              Built for agencies, enterprises and product teams who live in Power BI.
            </p>
          </div>
          <div className="grid flex-1 min-w-[230px] grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950/90 p-4 shadow-sm shadow-slate-900/70"
              >
                <p className="text-lg font-semibold text-slate-50">{item.value}</p>
                <p className="mt-1 text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos / social proof */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-400 sm:px-6 lg:px-0">
          <p className="text-center text-xs uppercase tracking-[0.16em] text-slate-500">
            TRUSTED BY DATA‑DRIVEN TEAMS
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 text-[11px] text-slate-400 sm:grid-cols-4">
            {[
              "Analytics agencies",
              "B2B SaaS",
              "Manufacturing",
              "Financial services",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center justify-center rounded-xl border border-white/5 bg-slate-900/60 px-4 py-2.5"
              >
                <span className="bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-b border-white/5 bg-slate-950 px-4 py-14 sm:px-6 lg:px-0"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Everything you need to productize your Power BI
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              From white‑label branding to enterprise‑grade access control, Reporting Hub is
              the missing layer between Power BI and your audience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                label: "1",
                title: "White‑label experience",
                points: [
                  "Your logo, colors, fonts & custom domain",
                  "Branded login, emails and notifications",
                  "Multi‑brand support for agencies",
                  "Granular theme presets per client",
                ],
              },
              {
                label: "2",
                title: "Unlimited viewer access",
                points: [
                  "Share dashboards with unlimited viewers",
                  "No Power BI Pro license required for viewers",
                  "Role‑based access & user groups",
                  "Single‑sign‑on (SSO) ready",
                ],
              },
              {
                label: "3",
                title: "No‑code deployment",
                points: [
                  "Connect your Power BI workspace in minutes",
                  "Organize reports into client‑friendly portals",
                  "Drag‑and‑drop navigation builder",
                  "Automatic refresh & versioning",
                ],
              },
              {
                label: "4",
                title: "Secure client portals",
                points: [
                  "Dedicated spaces per client or segment",
                  "Multi‑tenant architecture with isolation",
                  "Private dashboards, folders and collections",
                  "Audit trails and access logs",
                ],
              },
              {
                label: "5",
                title: "Enterprise security",
                points: [
                  "Row‑Level Security (RLS) respected end‑to‑end",
                  "Hosted on Microsoft Azure",
                  "Encryption in transit & at rest",
                  "GDPR / SOC / ISO ready posture",
                ],
              },
              {
                label: "6",
                title: "Monetization & billing",
                points: [
                  "Create subscription plans in a few clicks",
                  "Per‑client or per‑workspace billing",
                  "Stripe, Razorpay & PayPal ready",
                  "Self‑serve client onboarding flows",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-md shadow-slate-950/60 hover:border-indigo-400/70 hover:shadow-indigo-500/30"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <FeatureIcon label={card.label} />
                    <div className="text-left">
                      <h3 className="text-base font-semibold text-slate-50">
                        {card.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-400">
                        0{card.label} · Core capability
                      </p>
                    </div>
                  </div>
                  <span className="hidden h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[11px] font-medium text-slate-300 sm:flex">
                    0{card.label}
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1.5 text-sm text-slate-300">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases & personas */}
      <section
        id="use-cases"
        className="border-b border-white/5 bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 sm:px-6 lg:px-0"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-start">
            {/* Use cases list */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Built for the way modern analytics teams work
              </h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Whether you serve internal stakeholders or hundreds of external clients, Reporting
                Hub gives you a polished product around the Power BI work you already do.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-xs text-slate-200"
                  >
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personas */}
            <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                WHO IT&apos;S FOR
              </p>
              <div className="space-y-3">
                {personas.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-50">{p.title}</h3>
                      <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-100">
                        {p.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-300">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/5 bg-slate-950 px-4 py-16 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Launch in days, not months
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Keep Power BI as your engine. Use Reporting Hub for everything your stakeholders
              actually touch.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Connect your workspace",
                desc: "Link your Power BI workspace and pick the reports you want to expose.",
              },
              {
                step: "Step 2",
                title: "Design the portal",
                desc: "Group dashboards into client‑ready portals with your own navigation & copy.",
              },
              {
                step: "Step 3",
                title: "Invite & monetize",
                desc: "Invite users, apply access rules and optionally plug in billing.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-sm shadow-slate-900/80"
              >
                <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-slate-950 ring-1 ring-white/10" />
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/80 text-xs font-semibold text-white shadow-sm shadow-indigo-600/40">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & integrations */}
      <section
        id="security"
        className="border-b border-white/5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-0"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.15fr,1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Enterprise‑grade security,{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                  built on Microsoft Azure
                </span>
              </h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Reporting Hub is designed to respect your existing Power BI security model. Your
                data never leaves your control, and Row‑Level Security rules stay intact.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Row‑Level Security (RLS) honored end‑to‑end",
                  "SSO / Azure AD & popular identity providers",
                  "Fine‑grained role & group based permissions",
                  "Detailed access logs and audit events",
                ].map((item) => (
                  <div key={item} className="flex gap-2 text-xs text-slate-200">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-emerald-400/40 bg-slate-950/80 p-5 shadow-sm shadow-emerald-500/20">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                INTEGRATIONS
              </p>
              <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
                {[
                  "Power BI Service & Embedded",
                  "Azure AD & major IdPs",
                  "Stripe, Razorpay, PayPal",
                  "CRMs, ERPs & data warehouses",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-900/60 px-3 py-3 text-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Need something custom? Use our REST API and webhooks to sync users, permissions,
                and events with your stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-b border-white/5 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-16 text-white sm:px-6 lg:px-0"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Simple, scalable pricing for every stage
            </h2>
            <p className="mt-3 text-sm text-indigo-100 sm:text-base">
              Start small, grow to thousands of users. All plans include unlimited viewers and
              white‑label branding.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
            <div className="relative rounded-3xl border border-white/25 bg-slate-950/45 p-7 shadow-xl shadow-slate-900/60">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-medium text-emerald-100">
                Recommended for agencies
              </div>
              <h3 className="mt-4 text-lg font-semibold">Growth</h3>
              <p className="mt-1 text-sm text-indigo-100">
                For teams who want to monetize client‑facing analytics.
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-4xl font-bold leading-none">XXX</span>
                <span className="text-xs text-indigo-100">/month</span>
              </div>
              <p className="mt-1 text-xs text-indigo-100">
                Includes up to N workspaces & generous viewer limits.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-indigo-50">
                {[
                  "Unlimited viewer accounts",
                  "Up to N client portals / workspaces",
                  "Full white‑label branding",
                  "RLS, SSO, and audit logging",
                  "Email support with onboarding help",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-slate-50">
                Talk to sales
              </button>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/20 bg-slate-950/35 p-6">
              <h3 className="text-sm font-semibold">Just exploring?</h3>
              <p className="mt-1 text-sm text-indigo-100">
                Get a fully‑featured sandbox environment with your own branding and demo datasets.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-indigo-50">
                {[
                  "14‑day free trial",
                  "No credit card required",
                  "Guided onboarding call available",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-xl border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Start free trial
              </button>
              <p className="mt-3 text-[11px] text-indigo-100">
                Need custom pricing for hundreds of workspaces or strict compliance requirements?
                Our team can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-white/5 bg-slate-950 px-4 py-16 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Teams are turning reports into products
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "We went from emailing static PDFs to running a full‑fledged analytics portal in under a month. Our clients now expect this level of experience.",
                name: "Founder, Digital Analytics Agency",
              },
              {
                quote:
                  "Reporting Hub turned our internal Power BI reports into a polished product our sales team can confidently show to prospects.",
                name: "Head of BI, B2B SaaS company",
              },
              {
                quote:
                  "License costs stopped being a blocker. We can finally roll out dashboards broadly without complicated seat negotiations.",
                name: "Analytics Lead, Global Manufacturer",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-sm text-slate-200 shadow-sm shadow-slate-900/80"
              >
                <p className="mb-4 text-sm leading-relaxed sm:text-base">&ldquo;{t.quote}&rdquo;</p>
                <figcaption className="mt-2 text-sm font-semibold text-slate-50">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-b border-white/5 bg-slate-950 px-4 py-16 text-slate-50 sm:px-6 lg:px-0"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {[
              {
                q: "Do my clients need Power BI licenses?",
                a: "No. Reporting Hub allows sharing without Power BI Pro or Premium viewer licenses. Your organization keeps the necessary Power BI capacity, your viewers access through Reporting Hub.",
              },
              {
                q: "Where is my data hosted?",
                a: "Your data stays in your existing Power BI and data infrastructure. Reporting Hub sits on top, hosted on Microsoft Azure, and respects your existing security model.",
              },
              {
                q: "Can I use my own domain and branding?",
                a: "Yes. You can fully white‑label the portal with your own domain, colors, logos, and email templates.",
              },
              {
                q: "Can I charge clients for access?",
                a: "Absolutely. You can create paid plans, connect Stripe / Razorpay / PayPal, and manage client access from one place.",
              },
              {
                q: "Do I need to write code?",
                a: "No. Everything from portal setup to user management can be done without code. Developers can optionally extend via APIs and webhooks.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-lg border border-white/10 bg-slate-900/80 px-4 py-3"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                  <span>{item.q}</span>
                  <span className="text-slate-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-200">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Contact */}
      <section className="bg-slate-950 px-4 py-16 text-slate-50 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[1.15fr,0.85fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                Ready to launch your own BI SaaS portal?
              </h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Share a few details about your use case and we&apos;ll show you exactly how to
                turn your existing Power BI work into a product your stakeholders love.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/30 hover:from-indigo-400 hover:to-purple-400">
                  Book a 30‑min strategy call
                </button>
                <button className="rounded-full border border-white/15 bg-slate-950 px-7 py-3 text-sm font-semibold text-slate-100 hover:border-indigo-400">
                  Explore interactive demo
                </button>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Typical go‑live: under 4 weeks. Most teams start with just one champion and a
                handful of dashboards.
              </p>
            </div>

            {/* Simple contact form mockup */}
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm font-semibold text-slate-50">Tell us about your use case</p>
              <p className="mt-1 text-[11px] text-slate-400">
                No pressure, no hard sales. Just a quick look at how Reporting Hub could fit.
              </p>
              <div className="mt-4 space-y-3 text-xs">
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Work email
                  </label>
                  <div className="mt-1 h-9 rounded-lg border border-white/15 bg-slate-900/80" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Company / organization
                  </label>
                  <div className="mt-1 h-9 rounded-lg border border-white/15 bg-slate-900/80" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    How are you using Power BI today?
                  </label>
                  <div className="mt-1 h-20 rounded-lg border border-white/15 bg-slate-900/80" />
                </div>
              </div>
              <button className="mt-5 w-full rounded-full bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white hover:bg-indigo-400">
                Submit inquiry
              </button>
              <p className="mt-2 text-[10px] text-slate-500">
                By submitting you agree to be contacted about Reporting Hub. We won&apos;t share
                your details with third parties.
              </p>
            </div>
          </div>

          <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Reporting Hub. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="hover:text-slate-200">Privacy</button>
              <button className="hover:text-slate-200">Security</button>
              <button className="hover:text-slate-200">Status</button>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
