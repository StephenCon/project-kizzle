export default function ResultsTeaser() {
    return (
        <section id="results" className="py-14">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold">Real people. Real results.</h2>
                <p className="mt-2 text-slate-600">
                    Before/after photos and short case studies coming soon.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-[4/5] bg-slate-100 rounded-2xl" />
                    ))}
                </div>
                <a
                    className="mt-6 inline-block font-semibold text-[#C62828] hover:underline"
                    href="#book"
                >
                    See more results →
                </a>
            </div>
        </section>
    );
}
