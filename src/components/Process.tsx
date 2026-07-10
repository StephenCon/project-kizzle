import type { ComponentType } from "react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { Dumbbell, MessageSquare, TrendingUp } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

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
        title: "Start with a quick consultation",
        text: "Talk through goals, schedule, training history, and what you want from coaching.",
        icon: MessageSquare,
    },
    {
        n: 2,
        title: "Get a plan that fits real life",
        text: "Training and nutrition are built around your routine rather than around ideal conditions.",
        icon: Dumbbell,
    },
    {
        n: 3,
        title: "Keep adjusting as you progress",
        text: "Results are reviewed, the plan is updated, and accountability stays built in.",
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
            className="bg-white py-20"
            id="process"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow="Process"
                    title="A simple process that keeps the focus on progress"
                    description="No complicated onboarding, no vague plans, and no guesswork about what to do next."
                />

                <motion.div
                    className="mt-10 grid gap-6 lg:grid-cols-3"
                    role="list"
                    aria-label="Process steps"
                    variants={listVariants}
                    custom={{ reduced: !!reduce }}
                >
                    {STEPS.map((step) => (
                        <motion.article
                            key={step.n}
                            variants={cardVariants}
                            custom={{ reduced: !!reduce }}
                            className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6"
                            role="listitem"
                            aria-labelledby={`step-${step.n}-title`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C62828] font-bold text-white">
                                    {step.n}
                                </div>
                                <step.icon className="h-5 w-5 text-[#C62828]" aria-hidden="true" />
                            </div>

                            <h3 id={`step-${step.n}-title`} className="mt-5 text-xl font-semibold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
