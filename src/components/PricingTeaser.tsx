import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { Check, Crown } from "lucide-react";
import PrimaryButton from "./ui/PrimaryButton";
import SectionHeader from "./ui/SectionHeader";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

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
        price: "From GBP 40/session",
        points: ["Package discounts", "City centre gym", "Nutrition support"],
    },
    {
        slug: "online-coaching",
        name: "Online Coaching",
        price: "GBP 119/month",
        points: ["Weekly check-ins", "Custom plan", "Form feedback"],
        highlight: true,
        footnote: "Most popular for busy professionals",
    },
    {
        slug: "small-group",
        name: "Small Group",
        price: "GBP 25/person",
        points: ["2-4 people", "Fixed slots", "Great atmosphere"],
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
            staggerChildren: custom.reduced ? 0 : 0.12,
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

function Badge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full bg-[#C62828]/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#C62828]">
            <Crown className="h-3.5 w-3.5" aria-hidden />
            Best Value
        </span>
    );
}

export default function PricingTeaser() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="pricing"
            className="bg-white py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow="Pricing"
                    title="Simple pricing without unnecessary complication"
                    description="Clear options, straightforward support, and no pressure to lock into something that does not fit."
                />

                <motion.div
                    className="mt-10 grid gap-6 lg:grid-cols-3"
                    role="list"
                    aria-label="Pricing options"
                    variants={listVariants}
                    custom={{ reduced: !!reduce }}
                >
                    {TIERS.map((tier) => (
                        <motion.article
                            key={tier.slug}
                            variants={cardVariants}
                            custom={{ reduced: !!reduce }}
                            className={[
                                "flex h-full flex-col rounded-[1.75rem] border p-6 shadow-sm",
                                tier.highlight
                                    ? "border-[#C62828]/30 bg-[#fff7f7]"
                                    : "border-slate-200 bg-white",
                            ].join(" ")}
                            role="listitem"
                            aria-labelledby={`${tier.slug}-title`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 id={`${tier.slug}-title`} className="text-xl font-semibold text-slate-900">
                                    {tier.name}
                                </h3>
                                {tier.highlight && <Badge />}
                            </div>

                            <div className="mt-4 text-3xl font-extrabold text-slate-900">{tier.price}</div>
                            {tier.footnote && (
                                <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                    {tier.footnote}
                                </div>
                            )}

                            <ul className="mt-5 space-y-3" role="list">
                                {tier.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C62828]" aria-hidden />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-2">
                                <PrimaryButton
                                    as="a"
                                    href="#book"
                                    variant={tier.highlight ? "primary" : "secondary"}
                                    className="w-full"
                                >
                                    Book a consultation
                                </PrimaryButton>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
