import { SERVICES } from "../constants/site";

export default function Services() {
    return (
        <section
            id="services"
            className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-t animate-fade-in-up"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold text-center">Services</h2>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {SERVICES.map((s, i) => (
                        <div
                            key={s.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <h3 className="font-semibold text-lg text-indigo-700">{s.title}</h3>
                            <p className="mt-2 text-slate-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
