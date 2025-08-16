// src/components/home/WhyTrain.tsx
import PrimaryButton from "../components/ui/PrimaryButton";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { CheckCircle2, Dumbbell, ClipboardList, Timer } from "lucide-react";

/** ---------- Easing ---------- */
const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** ---------- Data ---------- */
const BULLETS = [
    "Evidence-based programming",
    "Flexible scheduling (city centre + mobile)",
    "Nutrition built for busy life",
    "Accountability & weekly check-ins",
];

/** ---------- Variants ---------- */
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: c.reduced ? 0 : 0.5, ease: EASE_OUT },
    }),
};

const listVariants: Variants = {
    hidden: {},
    visible: (c: { reduced: boolean }) => ({
        transition: {
            staggerChildren: c.reduced ? 0 : 0.08,
            delayChildren: c.reduced ? 0 : 0.1,
        },
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

export default function WhyTrain() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            className="py-16 bg-slate-50"
            id="why-train"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
                {/* Left copy */}
                <div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-extrabold tracking-tight"
                        variants={sectionVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        Why train with Kyle?
                    </motion.h2>

                    <motion.p
                        className="mt-3 text-slate-700"
                        variants={sectionVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        No fluff—just systems that deliver fat loss, strength, and confidence.
                    </motion.p>

                    <motion.ul
                        className="mt-6 space-y-3 text-slate-800"
                        variants={listVariants}
                        custom={{ reduced: !!reduce }}
                        role="list"
                        aria-label="Reasons to train with Kyle"
                    >
                        {BULLETS.map((b) => (
                            <motion.li
                                key={b}
                                className="flex items-start gap-3"
                                variants={itemVariants}
                                custom={{ reduced: !!reduce }}
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#C62828] flex-shrink-0" aria-hidden />
                                <span>{b}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Quick highlights */}
                    <motion.div
                        className="mt-6 grid grid-cols-3 gap-3 text-sm"
                        variants={listVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        <motion.div
                            variants={itemVariants}
                            custom={{ reduced: !!reduce }}
                            className="rounded-xl border bg-white p-3 flex items-center gap-2"
                            title="Strength-focused programming"
                        >
                            <Dumbbell className="h-4 w-4 text-[#C62828]" />
                            <span>Strength</span>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            custom={{ reduced: !!reduce }}
                            className="rounded-xl border bg-white p-3 flex items-center gap-2"
                            title="Habit-based nutrition"
                        >
                            <ClipboardList className="h-4 w-4 text-[#C62828]" />
                            <span>Nutrition</span>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            custom={{ reduced: !!reduce }}
                            className="rounded-xl border bg-white p-3 flex items-center gap-2"
                            title="Fits busy schedules"
                        >
                            <Timer className="h-4 w-4 text-[#C62828]" />
                            <span>Flexible</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-8"
                        variants={sectionVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        <PrimaryButton as="a" href="#book">Book Free Consultation</PrimaryButton>
                    </motion.div>
                </div>

                {/* Right visual */}
                <motion.div
                    className="relative"
                    variants={sectionVariants}
                    custom={{ reduced: !!reduce }}
                >
                    {/* Framed media area (replace bg with image/video when ready) */}
                    <motion.div
                        className="rounded-2xl bg-slate-200 aspect-video overflow-hidden relative"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: reduce ? 0 : 0.45, ease: EASE_OUT }}
                    >
                        {/* Placeholder image area */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/assets/images/kyle-training.jpg')",
                            }}
                            aria-hidden
                        />
                        {/* Overlay gradient for text legibility if you add captions later */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                    </motion.div>

                    {/* Animated border glow on hover */}
                    <motion.div
                        className="pointer-events-none absolute -inset-2 rounded-3xl"
                        whileHover={{ opacity: reduce ? 0 : 1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background:
                                "radial-gradient(220px 120px at 100% 0%, rgba(198,40,40,0.15), transparent)",
                        }}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
