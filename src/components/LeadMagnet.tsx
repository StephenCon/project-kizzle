// src/components/home/LeadMagnet.tsx
import PrimaryButton from "../components/ui/PrimaryButton";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Mail } from "lucide-react";

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

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: c.reduced ? 0 : 0.35, ease: EASE_OUT },
    }),
};

export default function LeadMagnet() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="resources"
            className="py-16 bg-[#fff5f5]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
                <motion.h3
                    className="text-2xl md:text-3xl font-extrabold tracking-tight"
                    variants={itemVariants}
                    custom={{ reduced: !!reduce }}
                >
                    Free 7-Day Kickstart
                </motion.h3>

                <motion.p
                    className="mt-2 max-w-2xl text-slate-700"
                    variants={itemVariants}
                    custom={{ reduced: !!reduce }}
                >
                    Get a beginner training plan + grocery list delivered to your inbox.
                </motion.p>

                <motion.form
                    className="mt-6 w-full max-w-md flex gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Subscribed! Replace with real integration.");
                    }}
                    variants={itemVariants}
                    custom={{ reduced: !!reduce }}
                >
                    <div className="relative flex-1">
                        <Mail
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none"
                            aria-hidden
                        />
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-xl border pl-10 pr-3 py-2 text-sm focus:ring-2 focus:ring-[#C62828]/50 focus:outline-none"
                        />
                    </div>
                    <PrimaryButton type="submit">Get it</PrimaryButton>
                </motion.form>

                <motion.div
                    className="mt-4 text-xs text-slate-500"
                    variants={itemVariants}
                    custom={{ reduced: !!reduce }}
                >
                    No spam. Unsubscribe anytime.
                </motion.div>
            </div>
        </motion.section>
    );
}
