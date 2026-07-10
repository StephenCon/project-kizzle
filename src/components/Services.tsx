import { Check } from "lucide-react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import PrimaryButton from "./ui/PrimaryButton";
import SectionHeader from "./ui/SectionHeader";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

type Service = {
    slug: string;
    title: string;
    summary: string;
    bullets: string[];
    price?: string;
    status?: string;
};

const SERVICES: Service[] = [
    {
        slug: "one-to-one-pt",
        title: "1:1 Personal Training",
        summary: "Hands-on coaching in Manchester with a plan built around your goals and experience level.",
        bullets: ["Tailored sessions", "Technique coaching", "Nutrition support"],
        price: "From GBP 25/session",
    },
    {
        slug: "online-coaching",
        title: "Online Coaching",
        summary: "Programming, check-ins, and accountability for people who need structure around a busy week.",
        bullets: ["App-based training", "Weekly check-ins", "Form feedback"],
        status: "Waitlist",
    },
    {
        slug: "small-group",
        title: "Small Group",
        summary: "A lower-cost option for training with friends while still getting proper coaching and progression.",
        bullets: ["2-4 people", "Fixed slots", "Supportive atmosphere"],
        status: "Waitlist",
    },
];

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
            delayChildren: custom.reduced ? 0 : 0.08,
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

export default function Services() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="coaching"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ delayBase: 0, reduced: reduce }}
        >
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow="Coaching"
                    title="Coaching options that match how you actually live"
                    description="Whether you want in-person sessions or a more flexible coaching setup, the aim is simple: clear structure, practical support, and steady progress."
                />

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
                            className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                            role="listitem"
                            aria-labelledby={`${card.slug}-title`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 id={`${card.slug}-title`} className="text-xl font-semibold text-slate-900">
                                    {card.title}
                                </h3>
                                {card.status && (
                                    <span className="rounded-full bg-[#C62828]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#C62828]">
                                        {card.status}
                                    </span>
                                )}
                            </div>

                            {card.price && (
                                <div className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                                    {card.price}
                                </div>
                            )}

                            <p className="mt-4 text-sm leading-6 text-slate-600">{card.summary}</p>

                            <ul className="mt-5 space-y-3" role="list">
                                {card.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-2 text-sm text-slate-700">
                                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C62828]" aria-hidden="true" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-2">
                                <PrimaryButton
                                    as="a"
                                    href="#book"
                                    variant={card.status ? "secondary" : "primary"}
                                    className="w-full"
                                >
                                    {card.status ? "Join the waitlist" : "Book a consultation"}
                                </PrimaryButton>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
