// src/components/home/FAQ.tsx
import { useState, useId } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/** ---------- Easing ---------- */
const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** ---------- Data ---------- */
type QA = { q: string; a: string };
const QAS: QA[] = [
    { q: "Where do sessions happen?", a: "Fallowfield Gym + mobile/home visits." },
    { q: "Do I need experience?", a: "No—plans are tailored to your current level." },
    { q: "Is nutrition included?", a: "Yes, simple habit-based nutrition with weekly check-ins." },
    { q: "What if I’m busy?", a: "We build around your schedule so it’s sustainable." },
];

/** ---------- Component ---------- */
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const reduce = useReducedMotion();
    const sectionId = useId();

    const toggle = (idx: number) =>
        setOpenIndex((cur) => (cur === idx ? null : idx));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": QAS.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
    };

    return (
        <section className="py-16" aria-labelledby={`${sectionId}-heading`}>
            <div className="mx-auto max-w-6xl px-4">
                <h2
                    id={`${sectionId}-heading`}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight"
                >
                    FAQs
                </h2>

                <div className="mt-6 divide-y rounded-2xl border bg-white">
                    {QAS.map(({ q, a }, i) => {
                        const open = openIndex === i;
                        return (
                            <div key={q} className="p-0">
                                <button
                                    type="button"
                                    onClick={() => toggle(i)}
                                    aria-expanded={open}
                                    aria-controls={`${sectionId}-panel-${i}`}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/50"
                                >
                                    <span className="font-semibold">{q}</span>
                                    <span
                                        className={[
                                            "inline-flex items-center justify-center rounded-md border p-1.5",
                                            open ? "border-[#C62828]/50" : "border-slate-300",
                                        ].join(" ")}
                                        aria-hidden
                                    >
                                        {open ? (
                                            <Minus className="h-4 w-4 text-[#C62828]" />
                                        ) : (
                                            <Plus className="h-4 w-4 text-slate-600" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            id={`${sectionId}-panel-${i}`}
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
                                            <div className="px-6 pb-5 pt-0">
                                                <p className="text-slate-700">{a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                {i < QAS.length - 1 && <div className="mx-6 h-px bg-slate-200" />}
                            </div>
                        );
                    })}
                </div>

                {/* Optional CTA under FAQ */}
                <div className="mt-8 text-sm text-slate-600">
                    Still got questions?{" "}
                    <a
                        href="mailto:Kizzlept@gmail.com"
                        className="font-semibold text-[#C62828] underline-offset-4 hover:underline focus:underline"
                    >
                        Kizzlept@gmail.com
                    </a>
                </div>
            </div>

            {/* SEO: FAQPage structured data */}
            <script
                type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
