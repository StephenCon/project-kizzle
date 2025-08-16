export default function PricingTeaser() {
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
