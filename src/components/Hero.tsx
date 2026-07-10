export default function Hero() {
    return (
        <section className="relative isolate">
            <div
                className="h-[78vh] min-h-[560px] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/heroimage.jpg')" }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_75%_35%,rgba(198,40,40,0.35),transparent_60%)]" />
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0, transparent 24%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08) 0, transparent 18%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.06) 0, transparent 22%)",
                }}
            />

            <div className="absolute inset-0">
                <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4 text-white">
                    <div className="mb-4 inline-flex items-center gap-3">
                        <span className="h-9 w-9 rounded-md bg-[#C62828]" />
                        <span className="text-sm tracking-widest text-white/80">
                            PROJECT KIZZLE
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                        No excuses. <span className="text-[#C62828]">Just results.</span>
                    </h1>

                    <p className="mt-4 max-w-xl text-lg text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                        Personal training in Manchester - evidence-based coaching for
                        strength, fat loss and confidence.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://wa.me/447704505381"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className="mt-6 inline-block rounded-md bg-[#C62828] px-4 py-2">
                        <span className="text-xs md:text-sm font-bold tracking-widest text-white">
                            NO EXCUSES. JUST RESULTS.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
