import type { ComponentType } from "react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { Dumbbell, MessageSquare, TrendingUp } from "lucide-react";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

type Step = {
    n: number;
    title: string;
    text: string;
    icon: ComponentType<{ className?: string }>;
};

const STEPS: Step[] = [
    {
        n: 1,
        title: "Free consult",
        text: "Quick chat to understand goals, schedule, and training history.",
        icon: MessageSquare,
    },
    {
        n: 2,
        title: "Custom plan",
        text: "Training + nutrition built around your life, not the other way round.",
        icon: Dumbbell,
    },
    {
        n: 3,
        title: "Track results",
        text: "We measure, iterate, and keep you accountable every week.",
        icon: TrendingUp,
    },
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
            staggerChildren: custom.reduced ? 0 : 0.1,
            delayChildren: custom.reduced ? 0 : 0.05,
        },
    }),
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: (custom: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: custom.reduced ? 0 : 0.45, ease: EASE_OUT },
    }),
};

export default function Process() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            className="py-16 bg-slate-50"
            id="process"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4">
                <motion.div
                    className="max-w-2xl"
                    variants={sectionVariants}
                    custom={{ reduced: !!reduce }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How it works</h2>
                    <p className="mt-2 text-slate-600">
                        Simple, proven process built around you - no fluff.
                    </p>
                </motion.div>

                <div className="relative mt-10">
                    <div
                        className="pointer-events-none absolute left-1/2 hidden h-[2px] w-full -translate-x-1/2 -translate-y-4 bg-gradient-to-r from-transparent via-[#C62828]/20 to-transparent md:block"
                        aria-hidden="true"
                    />

                    <motion.div
                        className="grid gap-6 md:grid-cols-3"
                        role="list"
                        aria-label="Process steps"
                        variants={listVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        {STEPS.map((step, idx) => (
                            <motion.article
                                key={step.n}
                                variants={cardVariants}
                                custom={{ reduced: !!reduce }}
                                whileHover={reduce ? {} : { y: -4 }}
                                whileFocus={reduce ? {} : { y: -2 }}
                                tabIndex={0}
                                className="relative group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md focus:shadow-md outline-none hover:border-[#C62828]/60 focus:border-[#C62828]/60"
                                role="listitem"
                                aria-labelledby={`step-${step.n}-title`}
                            >
                                <div
                                    className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(140px_100px_at_100%_0%,rgba(198,40,40,0.08),transparent)]"
                                    aria-hidden="true"
                                />

                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C62828] font-bold text-white">
                                            {step.n}
                                        </div>
                                        <div
                                            className="pointer-events-none absolute -inset-1 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
                                            style={{
                                                background:
                                                    "radial-gradient(closest-side, rgba(198,40,40,0.25), transparent)",
                                            }}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <step.icon className="h-5 w-5 text-[#C62828]" aria-hidden="true" />
                                </div>

                                <h3 id={`step-${step.n}-title`} className="mt-4 font-semibold text-xl">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-700">{step.text}</p>

                                <div className="mt-6 hidden md:block">
                                    {idx < STEPS.length - 1 && (
                                        <div className="flex items-center gap-1 text-[#C62828]/30">
                                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                        </div>
                                    )}
                                </div>

                                <a
                                    href="#book"
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    className="absolute inset-0 rounded-2xl"
                                />
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
