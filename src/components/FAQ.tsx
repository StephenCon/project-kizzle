export default function FAQ() {
    const qas: [string, string][] = [
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
