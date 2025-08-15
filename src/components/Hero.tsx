export default function Hero() {
    const badges = ["REPs Accredited", "Form-first Coaching", "Online & In-person"];
    const stats = [
        { k: "250+", v: "Clients coached" },
        { k: "12kg", v: "Avg. fat loss (12w)" },
        { k: "94%", v: "Satisfaction" },
    ];

    return (
        <section className="relative overflow-hidden">
            {/* Soft background glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-20 lg:py-24 grid items-center gap-10 lg:grid-cols-2">
                {/* Copy */}
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-sm text-slate-700 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        New clients onboarding this month
                    </span>

                    <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        Stronger in <span className="text-indigo-600">12 weeks</span>. Healthier for{" "}
                        <span className="text-indigo-600">life</span>.
                    </h1>

                    <p className="mt-4 max-w-xl text-lg text-slate-600">
                        High-impact 1:1 coaching with custom programming and nutrition that fits your routine.
                        Efficient, evidence-based, results you can feel.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-xl border border-indigo-600 bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                        >
                            Book a Free Consult
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                        >
                            See Services
                        </a>
                    </div>

                    {/* Trust badges */}
                    <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                        {badges.map((b) => (
                            <li key={b} className="flex items-center gap-2">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">✓</span>
                                {b}
                            </li>
                        ))}
                    </ul>

                    {/* Stats */}
                    <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4">
                        {stats.map((s) => (
                            <div key={s.k} className="rounded-2xl border bg-white/70 p-4 text-center backdrop-blur">
                                <dt className="text-2xl font-extrabold text-slate-900">{s.k}</dt>
                                <dd className="mt-1 text-xs text-slate-500">{s.v}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Visual */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl border shadow-lg">
                        <div
                            className="aspect-video w-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop')",
                            }}
                            role="img"
                            aria-label="Client training with coach in a modern gym"
                        />
                    </div>

                    {/* Single floating card */}
                    <div className="absolute -bottom-5 -left-5 w-56 rounded-xl border bg-white p-4 shadow-md">
                        <p className="text-xs text-slate-500">Weekly Plan</p>
                        <p className="mt-1 font-semibold">Upper / Lower / Conditioning</p>
                        <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                            <div className="h-2 w-2/3 rounded-full bg-indigo-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
