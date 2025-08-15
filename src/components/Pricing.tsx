import { PRICING_PLANS } from "../constants/site";

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-20 bg-gradient-to-r from-brand-dark to-brand text-white border-y animate-fade-in-up"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold text-center">Pricing</h2>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {PRICING_PLANS.map((p, i) => (
                        <div
                            key={p.name}
                            className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6 shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <h3 className="font-semibold text-lg">{p.name}</h3>
                            <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                            <ul className="mt-4 space-y-2 text-sm text-white/80">
                                {p.features.map((f) => (
                                    <li key={f}>• {f}</li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className="mt-6 inline-flex justify-center rounded-xl bg-white px-4 py-2 font-semibold text-brand hover:bg-brand-light transition"
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
