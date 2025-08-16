import PrimaryButton from "../components/ui/PrimaryButton";

export default function Process() {
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
