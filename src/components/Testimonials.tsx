import { TESTIMONIALS } from "../constants/site";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold">Client Results</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <figure key={i} className="rounded-2xl border p-6 bg-white shadow-sm">
                            <blockquote className="text-slate-800">{t}</blockquote>
                            <figcaption className="mt-3 text-sm text-slate-500">— Happy client</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
