// src/components/home/FinalCTA.tsx
import { motion, useReducedMotion, type Variants, type Transition } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

/** ---------- Easing ---------- */
const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** ---------- Variants ---------- */
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: c.reduced ? 0 : 0.5, ease: EASE_OUT },
    }),
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: c.reduced ? 0 : 0.45, ease: EASE_OUT },
    }),
};

export default function FinalCTA() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="contact"
            className="py-16 bg-slate-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
                {/* Left: Copy + actions */}
                <motion.div
                    variants={cardVariants}
                    custom={{ reduced: !!reduce }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Ready to get started?
                    </h2>
                    <p className="mt-2 text-slate-700">
                        Book a free 15–20 minute consult. No pressure, no salesy stuff—just a plan.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-slate-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#C62828]/40"
                            href="https://wa.me/447704505381?text=Hi%20Kyle%2C%20I%27d%20like%20to%20book%20a%20consultation."
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Chat via WhatsApp"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                            WhatsApp
                        </a>
                    </div>

                    <div className="mt-4 text-sm text-slate-600 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-500" aria-hidden="true" />
                        Prefer email?{" "}
                        <a
                            className="text-[#C62828] font-medium underline-offset-4 hover:underline focus:underline"
                            href="mailto:Kizzlept@gmail.com"
                        >
                            Kizzlept@gmail.com
                        </a>
                    </div>
                </motion.div>

                {/* Right column left empty intentionally (layout balance / future content) */}
                <div aria-hidden className="hidden md:block" />
            </div>
        </motion.section>
    );
}
