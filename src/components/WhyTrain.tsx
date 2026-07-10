import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { CheckCircle2, ClipboardList, Dumbbell, Timer } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

const BULLETS = [
    "Evidence-based programming",
    "Flexible scheduling with support that fits around work and life",
    "Practical nutrition habits instead of overcomplicated meal plans",
    "Accountability and weekly check-ins to keep progress moving",
];

const HIGHLIGHTS = [
    { icon: Dumbbell, label: "Strength" },
    { icon: ClipboardList, label: "Nutrition" },
    { icon: Timer, label: "Flexible" },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (custom: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: custom.reduced ? 0 : 0.5, ease: EASE_OUT },
    }),
};

const listVariants: Variants = {
    hidden: {},
    visible: (custom: { reduced: boolean }) => ({
        transition: {
            staggerChildren: custom.reduced ? 0 : 0.08,
            delayChildren: custom.reduced ? 0 : 0.1,
        },
    }),
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: custom.reduced ? 0 : 0.35, ease: EASE_OUT },
    }),
};

export default function WhyTrain() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            className="py-20"
            id="why-train"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.02fr] lg:items-center">
                <div>
                    <SectionHeader
                        eyebrow="Why Kyle"
                        title="Coaching that stays practical, supportive, and focused on outcomes"
                        description="The aim is not to make training feel more complicated. It is to make progress easier to stick with."
                    />

                    <motion.ul
                        className="mt-6 space-y-4 text-slate-800"
                        variants={listVariants}
                        custom={{ reduced: !!reduce }}
                        role="list"
                        aria-label="Reasons to train with Kyle"
                    >
                        {BULLETS.map((bullet) => (
                            <motion.li
                                key={bullet}
                                className="flex items-start gap-3"
                                variants={itemVariants}
                                custom={{ reduced: !!reduce }}
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C62828]" aria-hidden />
                                <span className="text-sm leading-6 text-slate-700">{bullet}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className="mt-8 grid gap-3 sm:grid-cols-3"
                        variants={listVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        {HIGHLIGHTS.map((item) => (
                            <motion.div
                                key={item.label}
                                variants={itemVariants}
                                custom={{ reduced: !!reduce }}
                                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
                            >
                                <item.icon className="h-4 w-4 text-[#C62828]" aria-hidden />
                                <span>{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="relative"
                    variants={sectionVariants}
                    custom={{ reduced: !!reduce }}
                >
                    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
                        <motion.div
                            className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-slate-200"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: reduce ? 0 : 0.45, ease: EASE_OUT }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: "url('/assets/images/heroimage.jpg')",
                                }}
                                aria-hidden
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                                    Built around real life
                                </div>
                                <div className="mt-2 max-w-sm text-lg font-semibold">
                                    Support that keeps training manageable, not overwhelming.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
