import PrimaryButton from "../components/ui/PrimaryButton";

export default function WhyTrain() {
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
