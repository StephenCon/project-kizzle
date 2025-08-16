import PrimaryButton from "../components/ui/PrimaryButton";

export default function Services() {
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
                            className="rounded-2xl border p-6 hover:shadow-sm transition bg-white md:bg-white hover:border-[#C62828]/60"
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
                <div className="mt-8">
                    <PrimaryButton as="a" href="#book">Start the process</PrimaryButton>
                </div>
            </div>
        </section>
    );
}
