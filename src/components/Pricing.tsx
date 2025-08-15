import { PRICING_PLANS } from "../constants/site";

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 bg-slate-50 border-y">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold">Pricing</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {PRICING_PLANS.map((p) => (
                        <div key={p.name} className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
                            <h3 className="font-semibold text-lg">{p.name}</h3>
                            <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                            <ul className="mt-4 space-y-2 text-slate-600">
                                {p.features.map((f) => (
                                    <li key={f}>• {f}</li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className="mt-6 inline-flex justify-center rounded-xl border border-indigo-600 px-4 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
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
