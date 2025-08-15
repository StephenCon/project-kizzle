export default function Hero() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Get Strong. Move Better. <span className="text-indigo-600">Feel Amazing.</span>
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        1:1 coaching, custom programming, and nutrition guidance tailored to your goals.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-xl border border-indigo-600 px-5 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
                        >
                            Book a Free Consult
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold hover:bg-slate-50 transition"
                        >
                            See Services
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-slate-500">
                        Accredited PT • Evidence-based programming • Online & In-person
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden border shadow-sm">
                    <div className="aspect-video w-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                        <span className="text-slate-700">Trainer photo / hero image</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
