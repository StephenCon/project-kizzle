import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

const RESULTS = [
    {
        quote: "Dropped 8kg in 12 weeks.",
        focus: "Fat loss",
        summary: "Built around sustainable nutrition habits and consistent training.",
    },
    {
        quote: "Stronger at 40 than at 20.",
        focus: "Strength",
        summary: "Progressive programming with coaching that keeps technique sharp.",
    },
    {
        quote: "No more back pain, finally.",
        focus: "Confidence",
        summary: "Better movement patterns, stronger fundamentals, and less day-to-day discomfort.",
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
            className="py-16"
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
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Real people. Real results.
                    </h2>
                    <p className="mt-2 text-slate-600">
                        A few examples of the feedback clients have shared after sticking with the process.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-10 grid gap-6 md:grid-cols-3"
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
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                        >
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C62828]">
                                {result.focus}
                            </div>
                            <blockquote className="mt-4 text-xl font-semibold leading-snug text-slate-900">
                                "{result.quote}"
                            </blockquote>
                            <p className="mt-4 text-sm text-slate-600">{result.summary}</p>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600"
                    variants={sectionVariants}
                    custom={{ reduced: !!reduce }}
                >
                    <span>Want to work towards similar results?</span>
                    <a
                        className="font-semibold text-[#C62828] underline-offset-4 hover:underline"
                        href="#book"
                    >
                        Book a consultation
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
