import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Transition } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

type QA = { q: string; a: string };

const QAS: QA[] = [
    { q: "Where do sessions happen?", a: "Fallowfield Gym plus mobile or home visits depending on what works best." },
    { q: "Do I need experience?", a: "No. Coaching is built around your current level, not around what you think you should already know." },
    { q: "Is nutrition included?", a: "Yes. The support is practical and habit-based rather than rigid or overcomplicated." },
    { q: "What if I'm busy?", a: "That is exactly why the plan is built around your real schedule so it stays manageable." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const reduce = useReducedMotion();
    const sectionId = useId();

    const toggle = (idx: number) =>
        setOpenIndex((current) => (current === idx ? null : idx));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: QAS.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
        })),
    };

    return (
        <section className="py-20" aria-labelledby={`${sectionId}-heading`}>
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow="Questions"
                    title="FAQs"
                    description="A few common questions people usually want answered before getting started."
                    className="max-w-3xl"
                />

                <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                    {QAS.map(({ q, a }, index) => {
                        const open = openIndex === index;
                        return (
                            <div key={q} className={index < QAS.length - 1 ? "border-b border-slate-200" : ""}>
                                <button
                                    type="button"
                                    onClick={() => toggle(index)}
                                    aria-expanded={open}
                                    aria-controls={`${sectionId}-panel-${index}`}
                                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C62828]/40 md:px-8"
                                >
                                    <span className="text-base font-semibold text-slate-900">{q}</span>
                                    <span
                                        className={[
                                            "inline-flex items-center justify-center rounded-md border p-1.5",
                                            open ? "border-[#C62828]/50 text-[#C62828]" : "border-slate-300 text-slate-600",
                                        ].join(" ")}
                                        aria-hidden
                                    >
                                        {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            id={`${sectionId}-panel-${index}`}
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    duration: reduce ? 0 : 0.35,
                                                    ease: EASE_OUT,
                                                },
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    duration: reduce ? 0 : 0.25,
                                                    ease: EASE_OUT,
                                                },
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 md:px-8">
                                                <p className="max-w-3xl text-sm leading-6 text-slate-600">{a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 text-sm text-slate-600">
                    Still got questions?{" "}
                    <a
                        href="mailto:Kizzlept@gmail.com"
                        className="font-semibold text-[#C62828] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/30"
                    >
                        Kizzlept@gmail.com
                    </a>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
