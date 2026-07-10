import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import PrimaryButton from "./ui/PrimaryButton";
import SectionHeader from "./ui/SectionHeader";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

const RESULTS = [
    {
        quote: "Dropped 8kg in 12 weeks.",
        focus: "Fat loss",
        summary: "Built around sustainable nutrition habits and consistent training rather than extremes.",
    },
    {
        quote: "Stronger at 40 than at 20.",
        focus: "Strength",
        summary: "Progressive programming with clear coaching and enough structure to keep momentum going.",
    },
    {
        quote: "No more back pain, finally.",
        focus: "Confidence",
        summary: "Better movement patterns, stronger basics, and less day-to-day discomfort from training properly.",
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
            staggerChildren: custom.reduced ? 0 : 0.08,
            delayChildren: custom.reduced ? 0 : 0.08,
        },
    }),
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: (custom: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: custom.reduced ? 0 : 0.4, ease: EASE_OUT },
    }),
};

export default function ResultsTeaser() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="results"
            className="bg-slate-50 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow="Results"
                    title="Progress that shows up in real life"
                    description="A few examples of the feedback clients have shared after staying consistent with the coaching process."
                />

                <motion.div
                    className="mt-10 grid gap-6 lg:grid-cols-3"
                    role="list"
                    aria-label="Client results"
                    variants={listVariants}
                    custom={{ reduced: !!reduce }}
                >
                    {RESULTS.map((result) => (
                        <motion.article
                            key={result.quote}
                            role="listitem"
                            variants={cardVariants}
                            custom={{ reduced: !!reduce }}
                            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C62828]">
                                {result.focus}
                            </div>
                            <blockquote className="mt-4 text-2xl font-semibold leading-snug text-slate-900">
                                "{result.quote}"
                            </blockquote>
                            <p className="mt-4 text-sm leading-6 text-slate-600">{result.summary}</p>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="mt-8">
                    <PrimaryButton as="a" href="#book">
                        Book a consultation
                    </PrimaryButton>
                </div>
            </div>
        </motion.section>
    );
}
