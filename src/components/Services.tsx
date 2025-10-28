// src/components/home/Services.tsx
import { Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

/** ---------- Easing ---------- */
const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** ---------- Types ---------- */
type Service = {
    slug: string;
    title: string;
    summary: string;
    bullets: string[];
    price?: string;
    highlight?: boolean;
};

/** ---------- Data ---------- */
const SERVICES: Service[] = [
    {
        slug: "one-to-one-pt",
        title: "1:1 Personal Training",
        summary: "Hands-on coaching in Manchester with a plan built for you.",
        bullets: ["Tailored sessions", "Manchester", "Nutrition support"],
        price: "from £25/session",
    },
    {
        slug: "online-coaching",
        title: "Online Coaching",
        summary: "App-based programming, check-ins, and form feedback—train anywhere.",
        bullets: ["App-based training", "Weekly check-ins", "Form feedback"],
        price: "COMING SOON",
        highlight: true,
    },
    {
        slug: "small-group",
        title: "Small Group",
        summary: "Train with friends (2–4 people). Same quality, lower cost.",
        bullets: ["2–4 people", "Lower cost", "Fixed time slots"],
        price: "COMING SOON",
    },
];

/** ---------- Small Presentational Bits ---------- */
function ServiceBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full bg-[#C62828]/10 text-[#C62828] px-2.5 py-1 text-[11px] font-semibold tracking-wide">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Most Popular
        </span>
    );
}

function Bullet({ text }: { text: string }) {
    return (
        <li className="flex gap-2 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C62828]" aria-hidden />
            <span>{text}</span>
        </li>
    );
}

/** ---------- Animation Variants ---------- */
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: { delayBase: number; reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: custom.reduced ? 0 : 0.5,
            ease: EASE_OUT,
            delay: custom.reduced ? 0 : custom.delayBase,
        },
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

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    visible: (custom: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: custom.reduced ? 0 : 0.45,
            ease: EASE_OUT,
        },
    }),
};

/** ---------- Component ---------- */
export default function Services() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="coaching"
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ delayBase: 0, reduced: reduce }}
        >
            <div className="mx-auto max-w-6xl px-4">
                <motion.header
                    className="max-w-2xl"
                    variants={sectionVariants}
                    custom={{ delayBase: 0.05, reduced: reduce }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Coaching Options</h2>
                    <p className="mt-2 text-slate-600">
                        Pick what fits your schedule and budget. No contracts—cancel anytime.
                    </p>
                </motion.header>

                <motion.div
                    className="mt-10 grid gap-6 md:grid-cols-3"
                    role="list"
                    aria-label="Available coaching services"
                    variants={listVariants}
                    custom={{ reduced: reduce }}
                >
                    {SERVICES.map((card) => (
                        <motion.article
                            key={card.slug}
                            variants={cardVariants}
                            custom={{ reduced: reduce }}
                            whileHover={reduce ? {} : { y: -4 }}
                            whileFocus={reduce ? {} : { y: -2 }}
                            tabIndex={0}
                            className="group relative rounded-2xl border bg-white p-6 shadow-sm transition
                         hover:shadow-md focus:shadow-md
                         hover:border-[#C62828]/60 focus:border-[#C62828]/60 outline-none"
                            role="listitem"
                            aria-labelledby={`${card.slug}-title`}
                        >
                            {/* subtle corner accent */}
                            <div
                                className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120px_80px_at_100%_0%,rgba(198,40,40,0.08),transparent)]"
                                aria-hidden
                            />

                            <div className="flex items-start justify-between gap-3">
                                <h3 id={`${card.slug}-title`} className="font-semibold text-xl">
                                    {card.title}
                                </h3>
                                {card.highlight && <ServiceBadge />}
                            </div>

                            {card.price && (
                                <motion.div
                                    className="mt-2 text-[15px] font-extrabold text-slate-900"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.1, ease: EASE_OUT }}
                                >
                                    {card.price}
                                </motion.div>
                            )}

                            <p className="mt-2 text-sm text-slate-600">{card.summary}</p>

                            <ul className="mt-4 space-y-2" role="list">
                                {card.bullets.map((b) => (
                                    <Bullet key={b} text={b} />
                                ))}
                            </ul>

                            <div className="mt-5 flex items-center gap-3">
                                <a
                                    href="#book"
                                    className="text-[#C62828] font-semibold underline-offset-4 hover:underline focus:underline focus:outline-none"
                                    aria-label={`Learn more about ${card.title}`}
                                    data-analytics="services_learn_more"
                                    data-service={card.slug}
                                >
                                    Learn more →
                                </a>
                                <span className="text-slate-300">•</span>
                                <a
                                    href="#book"
                                    className="text-sm text-slate-600 underline-offset-4 hover:underline focus:underline focus:outline-none"
                                    aria-label={`Book ${card.title}`}
                                >
                                    Book now
                                </a>
                            </div>

                            {/* make the entire card clickable for pointer users only (keeps keyboard semantics) */}
                            <a
                                href="#book"
                                aria-hidden
                                tabIndex={-1}
                                className="absolute inset-0 rounded-2xl ring-offset-2 focus:outline-none focus:ring-2 focus:ring-[#C62828]/60"
                            />
                        </motion.article>
                    ))}
                </motion.div>

                
            </div>
        </motion.section>
    );
}
