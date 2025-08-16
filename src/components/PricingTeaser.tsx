// src/components/home/PricingTeaser.tsx
import { motion, useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Check, Crown } from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

/** ---------- Easing ---------- */
const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** ---------- Types & Data ---------- */
type Tier = {
    slug: string;
    name: string;
    price: string;
    points: string[];
    highlight?: boolean;
    footnote?: string;
};

const TIERS: Tier[] = [
    {
        slug: "one-to-one-pt",
        name: "1:1 PT",
        price: "from £40/session",
        points: ["Package discounts", "City centre gym", "Nutrition support"],
    },
    {
        slug: "online-coaching",
        name: "Online Coaching",
        price: "£119/month",
        points: ["Weekly check-ins", "Custom plan", "Form feedback"],
        highlight: true,
        footnote: "Most popular for busy professionals",
    },
    {
        slug: "small-group",
        name: "Small Group",
        price: "£25/person",
        points: ["2–4 people", "Fixed slots", "Great atmosphere"],
    },
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
            staggerChildren: c.reduced ? 0 : 0.12,
            delayChildren: c.reduced ? 0 : 0.05,
        },
    }),
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: c.reduced ? 0 : 0.45, ease: EASE_OUT },
    }),
};

/** ---------- Bits ---------- */
function Bullet({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C62828]" aria-hidden />
            <span>{text}</span>
        </li>
    );
}

function Badge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full bg-[#C62828]/10 text-[#C62828] px-2.5 py-1 text-[11px] font-semibold tracking-wide">
            <Crown className="h-3.5 w-3.5" aria-hidden />
            Best Value
        </span>
    );
}

/** ---------- Component ---------- */
export default function PricingTeaser() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="pricing"
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4">
                <motion.header
                    className="max-w-2xl"
                    variants={sectionVariants}
                    custom={{ reduced: !!reduce }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-2 text-slate-600">No contracts. Cancel anytime.</p>
                </motion.header>

                <motion.div
                    className="mt-10 grid gap-6 md:grid-cols-3"
                    role="list"
                    aria-label="Pricing options"
                    variants={listVariants}
                    custom={{ reduced: !!reduce }}
                >
                    {TIERS.map((t) => (
                        <motion.article
                            key={t.slug}
                            variants={cardVariants}
                            custom={{ reduced: !!reduce }}
                            whileHover={reduce ? {} : { y: -4 }}
                            whileFocus={reduce ? {} : { y: -2 }}
                            tabIndex={0}
                            className={[
                                "group relative rounded-2xl border bg-white p-6 shadow-sm transition",
                                "hover:shadow-md focus:shadow-md outline-none",
                                t.highlight
                                    ? "border-[#C62828]/50 ring-1 ring-[#C62828]/20"
                                    : "hover:border-[#C62828]/60 focus:border-[#C62828]/60",
                            ].join(" ")}
                            role="listitem"
                            aria-labelledby={`${t.slug}-title`}
                        >
                            {/* subtle accent */}
                            <div
                                className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(140px_100px_at_100%_0%,rgba(198,40,40,0.08),transparent)]"
                                aria-hidden
                            />

                            <div className="flex items-start justify-between gap-3">
                                <h3 id={`${t.slug}-title`} className="font-semibold text-xl">
                                    {t.name}
                                </h3>
                                {t.highlight && <Badge />}
                            </div>

                            <div className="mt-2 text-2xl font-extrabold">{t.price}</div>
                            {t.footnote && (
                                <div className="mt-1 text-xs text-slate-500">{t.footnote}</div>
                            )}

                            <ul className="mt-4 space-y-2" role="list">
                                {t.points.map((p) => (
                                    <Bullet key={p} text={p} />
                                ))}
                            </ul>

                            <div className="mt-5 flex items-center gap-3">
                                <a
                                    href="#book"
                                    className="text-[#C62828] font-semibold underline-offset-4 hover:underline focus:underline focus:outline-none"
                                    aria-label={`View details for ${t.name}`}
                                >
                                    View details →
                                </a>
                                <span className="text-slate-300">•</span>
                                <a
                                    href="#book"
                                    className="text-sm text-slate-600 underline-offset-4 hover:underline focus:underline focus:outline-none"
                                    aria-label={`Book ${t.name}`}
                                >
                                    Book now
                                </a>
                            </div>

                            {/* pointer-only overlay to make whole card clickable without stealing keyboard focus */}
                            <a
                                href="#book"
                                aria-hidden
                                tabIndex={-1}
                                className="absolute inset-0 rounded-2xl"
                            />
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-10"
                    variants={sectionVariants}
                    custom={{ reduced: !!reduce }}
                >
                    <PrimaryButton as="a" href="#book">
                        Start your plan
                    </PrimaryButton>
                </motion.div>
            </div>
        </motion.section>
    );
}
