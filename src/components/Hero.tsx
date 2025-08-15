export default function Hero() {
    return (
        <section className="relative min-h-[72vh] grid place-items-center overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1596357395104-5e7e7528f1b3?q=80&w=2000&auto=format&fit=crop')",
                }}
                aria-hidden
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" aria-hidden />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Build Strength. <span className="text-indigo-300">Own Your Movement.</span>
                </h1>
                <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                    Personal training that scales to your life: smart programming, form-first coaching, real results.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-xl border border-white/20 bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                    >
                        Book a Free Consult
                    </a>
                    <a
                        href="#services"
                        className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                    >
                        See Services
                    </a>
                </div>
            </div>
        </section>
    );
}
