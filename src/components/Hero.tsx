import PrimaryButton from "./ui/PrimaryButton";

const TRUST_POINTS = ["Manchester based", "Evidence-led coaching", "Flexible scheduling"];

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden">
            <div
                className="min-h-[640px] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/heroimage.jpg')" }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/70 md:bg-black/62" />
            <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_78%_32%,rgba(198,40,40,0.34),transparent_60%)]" />

            <div className="absolute inset-0">
                <div className="mx-auto grid min-h-[640px] max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="max-w-2xl text-white">
                        <span className="inline-flex rounded-full border border-white/20 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                            Personal training in Manchester
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                            Straightforward coaching for people who want
                            <span className="text-[#ff8b8b]"> real progress</span>.
                        </h1>

                        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
                            Project Kizzle helps busy adults build strength, lose body fat, and train with more confidence through practical, evidence-based coaching.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <PrimaryButton as="a" href="#book">
                                Book a consultation
                            </PrimaryButton>
                            <PrimaryButton as="a" href="#pricing" variant="secondary">
                                View pricing
                            </PrimaryButton>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {TRUST_POINTS.map((point) => (
                                <span
                                    key={point}
                                    className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/85"
                                >
                                    {point}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="lg:justify-self-end">
                        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-sm">
                            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                                What to expect
                            </div>
                            <div className="mt-5 space-y-5">
                                <div>
                                    <div className="text-3xl font-extrabold">1:1 coaching</div>
                                    <p className="mt-1 text-sm leading-6 text-slate-200">
                                        Training built around your goals, your schedule, and your current level.
                                    </p>
                                </div>
                                <div className="grid gap-4 border-t border-white/12 pt-5 sm:grid-cols-2">
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                            Focus
                                        </div>
                                        <div className="mt-2 text-base font-semibold">Strength, fat loss, confidence</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                                            First step
                                        </div>
                                        <div className="mt-2 text-base font-semibold">Free 15-20 minute consultation</div>
                                    </div>
                                </div>
                                <a
                                    href="https://wa.me/447704505381"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 transition hover:text-[#ffd5d5] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    Message on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
