import PrimaryButton from "../components/ui/PrimaryButton";

/* ---------- HERO ---------- */
function Hero() {
    return (
        <section
            className="relative"
            aria-labelledby="hero-title"
        >
            <div
                className="h-[78vh] min-h-[520px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero-gym.jpg')" }}
            >
                <div className="h-full w-full bg-black/50">
                    <div className="mx-auto max-w-6xl h-full px-4 flex flex-col items-start justify-center text-white">
                        <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Personal Training in Manchester that actually fits your life.
                        </h1>
                        <p className="mt-4 max-w-xl text-lg text-slate-200">
                            Strength, fat loss & confidence—without the guesswork. Flexible sessions in city centre & online.
                        </p>
                        <div className="mt-8 flex gap-3">
                            <PrimaryButton as="a" href="#book">Book Free Consultation</PrimaryButton>
                            <a
                                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/70 hover:bg-white/10"
                                href="https://wa.me/447000000000"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
    return (
        <section className="py-8 border-b">
            <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-center gap-6 text-slate-600">
                <span className="text-sm">CIMSPA Registered</span>
                <span className="text-sm">REPs Certified</span>
                <span className="text-sm">Google ★★★★★</span>
                <span className="text-sm">Ancoats • Deansgate • NQ</span>
            </div>
        </section>
    );
}

/* ---------- SERVICES SNAPSHOT ---------- */
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
                        <div key={card.title} className="rounded-2xl border p-6 hover:shadow-sm transition">
                            <h3 className="font-semibold text-xl">{card.title}</h3>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                {card.bullets.map(b => <li key={b}>• {b}</li>)}
                            </ul>
                            <a href="#book" className="mt-5 inline-block text-indigo-600 font-semibold hover:underline">
                                Learn more →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- PROCESS ---------- */
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
                    {steps.map(s => (
                        <div key={s.n} className="rounded-2xl border bg-white p-6">
                            <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">{s.n}</div>
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

/* ---------- RESULTS TEASER ---------- */
function ResultsTeaser() {
    return (
        <section id="results" className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">Real people. Real results.</h2>
                <p className="mt-2 text-slate-600">Before/after photos and short case studies coming soon.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-[4/5] bg-slate-100 rounded-2xl" />
                    ))}
                </div>
                <a className="mt-6 inline-block font-semibold text-indigo-600 hover:underline" href="#book">See more results →</a>
            </div>
        </section>
    );
}

/* ---------- WHY TRAIN ---------- */
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
                    <p className="mt-3 text-slate-700">No fluff—just systems that deliver fat loss, strength, and confidence.</p>
                    <ul className="mt-6 space-y-3 text-slate-800">
                        {bullets.map(b => <li key={b}>• {b}</li>)}
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

/* ---------- PRICING TEASER ---------- */
function PricingTeaser() {
    const tiers = [
        { name: "1:1 PT", price: "from £50/session", points: ["Package discounts", "City centre gym", "Nutrition support"] },
        { name: "Online Coaching", price: "£119/month", points: ["Weekly check-ins", "Custom plan", "Form feedback"] },
        { name: "Small Group", price: "£25/person", points: ["2–4 people", "Fixed slots", "Great atmosphere"] },
    ];
    return (
        <section id="pricing" className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
                <p className="mt-2 text-slate-600">No contracts. Cancel anytime.</p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {tiers.map(t => (
                        <div key={t.name} className="rounded-2xl border p-6">
                            <h3 className="font-semibold text-xl">{t.name}</h3>
                            <div className="mt-2 text-2xl font-extrabold">{t.price}</div>
                            <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                {t.points.map(p => <li key={p}>• {p}</li>)}
                            </ul>
                            <a href="#book" className="mt-5 inline-block text-indigo-600 font-semibold hover:underline">View details →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- LEAD MAGNET ---------- */
function LeadMagnet() {
    return (
        <section id="resources" className="py-14 bg-indigo-50">
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Free 7-Day Kickstart</h3>
                <p className="mt-2 max-w-2xl text-slate-700">
                    Get a beginner training plan + grocery list delivered to your inbox.
                </p>
                <form
                    className="mt-6 w-full max-w-md flex gap-2"
                    onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Replace with real integration."); }}
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

/* ---------- FAQ ---------- */
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

/* ---------- FINAL CTA & CONTACT ---------- */
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
                            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-slate-300 hover:bg-slate-100"
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
                        Prefer email? <a className="text-indigo-600 font-medium" href="mailto:hello@kylept.co.uk">hello@kylept.co.uk</a>
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
