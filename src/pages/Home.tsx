import PrimaryButton from "../components/ui/PrimaryButton";

/* ---------------- HERO ---------------- */
function Hero() {
    return (
        <section className="relative isolate">
            {/* Background */}
            <div
                className="h-[78vh] min-h-[560px] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/heroimage.jpg')" }}
                aria-hidden="true"
            />
            {/* overlay: darker on small, lighter on md+ */}
            <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
            {/* right red vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_75%_35%,rgba(198,40,40,0.35),transparent_60%)]" />
            {/* subtle grain (optional) */}
            <div
                className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
                style={{ backgroundImage: "url('/assets/images/noise.png')" }}
            />

            {/* Content */}
            <div className="absolute inset-0">
                <div className="mx-auto max-w-6xl h-full px-4 flex flex-col items-start justify-center text-white">
                    <div className="mb-4 inline-flex items-center gap-3">
                        <span className="h-9 w-9 rounded-md bg-[#C62828]" />
                        <span className="text-sm tracking-widest text-white/80">
                            PROJECT KIZZLE
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                        No excuses. <span className="text-[#C62828]">Just results.</span>
                    </h1>

                    <p className="mt-4 max-w-xl text-lg text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                        Personal Training in Manchester—evidence-based coaching for strength,
                        fat loss & confidence.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <PrimaryButton as="a" href="#book">Book Free Consultation</PrimaryButton>
                        <a
                            href="https://wa.me/447000000000"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold
                         border border-white/70 text-white hover:bg-white/10
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/60"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className="mt-6 inline-block bg-[#C62828] px-4 py-2 rounded-md">
                        <span className="text-xs md:text-sm font-bold tracking-widest text-white">
                            NO EXCUSES. JUST RESULTS.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* -------------- TRUST BAR -------------- */
function TrustBar() {
    return (
        <section className="py-6 border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-center gap-8 text-slate-600">
                <span className="text-xs tracking-widest uppercase">CIMSPA Registered</span>
                <span className="text-xs tracking-widest uppercase">REPs Certified</span>
                <span className="text-xs tracking-widest uppercase">Google ★★★★★</span>
                <span className="text-xs tracking-widest uppercase">Ancoats • Deansgate • NQ</span>
            </div>
        </section>
    );
}

/* -------------- SERVICES -------------- */
function Services() {
    const data = [
        { title: "1:1 Personal Training", bullets: ["Tailored sessions", "Manchester city centre", "Nutrition support"] },
        { title: "Online Coaching", bullets: ["App-based training", "Weekly check-ins", "Form feedback"] },
        { title: "Small Group", bullets: ["2–4 people", "Lower cost", "Fixed time slots"] },
    ];
    return (
        <section id="coaching" className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">Coaching Options</h2>
                <p className="mt-2 text-slate-600">Pick what fits your schedule and budget.</p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {data.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-2xl border p-6 hover:shadow-sm transition
                         bg-white md:bg-white hover:border-[#C62828]/60"
                        >
                            <h3 className="font-semibold text-xl">{card.title}</h3>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                {card.bullets.map((b) => (
                                    <li key={b}>• {b}</li>
                                ))}
                            </ul>
                            <a
                                href="#book"
                                className="mt-5 inline-block text-[#C62828] font-semibold hover:underline"
                            >
                                Learn more →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------- PROCESS -------------- */
function Process() {
    const steps = [
        { n: 1, title: "Free consult", text: "Quick chat to understand goals, schedule, and training history." },
        { n: 2, title: "Custom plan", text: "Training + nutrition built around your life, not the other way round." },
        { n: 3, title: "Track results", text: "We measure, iterate, and keep you accountable every week." },
    ];
    return (
        <section className="py-14 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {steps.map((s) => (
                        <div key={s.n} className="rounded-2xl border bg-white p-6">
                            <div className="h-10 w-10 rounded-full bg-[#C62828] text-white flex items-center justify-center font-bold">
                                {s.n}
                            </div>
                            <h3 className="mt-4 font-semibold text-xl">{s.title}</h3>
                            <p className="mt-2 text-slate-700 text-sm">{s.text}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <PrimaryButton as="a" href="#book">Start the process</PrimaryButton>
                </div>
            </div>
        </section>
    );
}

/* ------------ RESULTS TEASER ------------ */
function ResultsTeaser() {
    return (
        <section id="results" className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">Real people. Real results.</h2>
                <p className="mt-2 text-slate-600">
                    Before/after photos and short case studies coming soon.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-[4/5] bg-slate-100 rounded-2xl" />
                    ))}
                </div>
                <a
                    className="mt-6 inline-block font-semibold text-[#C62828] hover:underline"
                    href="#book"
                >
                    See more results →
                </a>
            </div>
        </section>
    );
}

/* -------------- WHY TRAIN -------------- */
function WhyTrain() {
    const bullets = [
        "Evidence-based programming",
        "Flexible scheduling (city centre + mobile)",
        "Nutrition built for busy life",
        "Accountability & weekly check-ins",
    ];
    return (
        <section className="py-14 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Why train with Kyle?</h2>
                    <p className="mt-3 text-slate-700">
                        No fluff—just systems that deliver fat loss, strength, and confidence.
                    </p>
                    <ul className="mt-6 space-y-3 text-slate-800">
                        {bullets.map((b) => (
                            <li key={b}>• {b}</li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <PrimaryButton as="a" href="#book">Book Free Consultation</PrimaryButton>
                    </div>
                </div>
                <div className="rounded-2xl bg-slate-200 aspect-video" />
            </div>
        </section>
    );
}

/* ----------- PRICING TEASER ----------- */
function PricingTeaser() {
    const tiers = [
        {
            name: "1:1 PT",
            price: "from £50/session",
            points: ["Package discounts", "City centre gym", "Nutrition support"],
        },
        {
            name: "Online Coaching",
            price: "£119/month",
            points: ["Weekly check-ins", "Custom plan", "Form feedback"],
        },
        {
            name: "Small Group",
            price: "£25/person",
            points: ["2–4 people", "Fixed slots", "Great atmosphere"],
        },
    ];
    return (
        <section id="pricing" className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
                <p className="mt-2 text-slate-600">No contracts. Cancel anytime.</p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {tiers.map((t) => (
                        <div key={t.name} className="rounded-2xl border p-6 hover:border-[#C62828]/60 transition">
                            <h3 className="font-semibold text-xl">{t.name}</h3>
                            <div className="mt-2 text-2xl font-extrabold">{t.price}</div>
                            <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                {t.points.map((p) => (
                                    <li key={p}>• {p}</li>
                                ))}
                            </ul>
                            <a
                                href="#book"
                                className="mt-5 inline-block text-[#C62828] font-semibold hover:underline"
                            >
                                View details →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* --------------- LEAD MAGNET --------------- */
function LeadMagnet() {
    return (
        <section id="resources" className="py-14 bg-[#fff5f5]">
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Free 7-Day Kickstart</h3>
                <p className="mt-2 max-w-2xl text-slate-700">
                    Get a beginner training plan + grocery list delivered to your inbox.
                </p>
                <form
                    className="mt-6 w-full max-w-md flex gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Subscribed! Replace with real integration.");
                    }}
                >
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="flex-1 rounded-xl border px-4"
                    />
                    <PrimaryButton type="submit">Get it</PrimaryButton>
                </form>
            </div>
        </section>
    );
}

/* ----------- FINAL CTA / CONTACT ----------- */
function FinalCTA() {
    return (
        <section id="contact" className="py-14 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
                    <p className="mt-2 text-slate-700">Book a free 15–20 minute consult.</p>
                    <div className="mt-6 space-x-3">
                        <PrimaryButton as="a" href="#book">Book Free Consultation</PrimaryButton>
                        <a
                            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                         border border-slate-300 hover:bg-slate-100"
                            href="https://wa.me/447000000000"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div id="book" className="rounded-2xl border bg-white p-4">
                    {/* Replace with Calendly/Cal.com widget */}
                    <div className="aspect-video w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                        Booking widget placeholder
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                        Prefer email?{" "}
                        <a className="text-[#C62828] font-medium" href="mailto:hello@kylept.co.uk">
                            hello@kylept.co.uk
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <Services />
            <Process />
            <ResultsTeaser />
            <WhyTrain />
            <PricingTeaser />
            <LeadMagnet />
            <FAQ />
            <FinalCTA />
        </>
    );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
    const qas = [
        ["Where do sessions happen?", "Manchester city centre gyms + mobile/home visits."],
        ["Do I need experience?", "No—plans are tailored to your current level."],
        ["Is nutrition included?", "Yes, simple habit-based nutrition with weekly check-ins."],
        ["What if I’m busy?", "We build around your schedule so it’s sustainable."],
    ];
    return (
        <section className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
                <div className="mt-6 divide-y rounded-2xl border">
                    {qas.map(([q, a]) => (
                        <details key={q} className="group p-6">
                            <summary className="flex cursor-pointer list-none items-center justify-between">
                                <span className="font-semibold">{q}</span>
                                <span className="transition group-open:rotate-45">＋</span>
                            </summary>
                            <p className="mt-3 text-slate-700">{a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
