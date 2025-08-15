import { TESTIMONIALS } from "../constants/site";

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-20 animate-fade-in-up"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold text-center">Client Results</h2>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <figure
                            key={i}
                            className="rounded-2xl border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <blockquote className="">{t}</blockquote>
                            <figcaption className="mt-3 text-sm">— Happy client</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
