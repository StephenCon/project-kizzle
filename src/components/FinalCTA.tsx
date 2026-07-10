import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { Clock3, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import PrimaryButton from "./ui/PrimaryButton";
import SectionHeader from "./ui/SectionHeader";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (custom: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: custom.reduced ? 0 : 0.5, ease: EASE_OUT },
    }),
};

const SUPPORT_POINTS = [
    {
        icon: Clock3,
        title: "Short first call",
        body: "A simple 15-20 minute conversation to understand your goals and whether the coaching is a good fit.",
    },
    {
        icon: ShieldCheck,
        title: "No pressure",
        body: "No hard sell, no long commitment up front, and no need to feel gym-confident before you start.",
    },
];

export default function FinalCTA() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="book"
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div id="contact" aria-hidden="true" className="relative -top-24" />
            <div className="mx-auto max-w-6xl px-4">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="bg-slate-50 px-6 py-10 md:px-10">
                            <SectionHeader
                                eyebrow="Start here"
                                title="Ready to get started?"
                                description="Book a free consultation and talk through your goals, training history, and the best next step."
                            />

                            <div className="mt-8 flex flex-wrap gap-3">
                                <PrimaryButton
                                    as="a"
                                    href="https://wa.me/447704505381?text=Hi%20Kyle%2C%20I%27d%20like%20to%20book%20a%20consultation."
                                >
                                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                                    WhatsApp
                                </PrimaryButton>
                                <PrimaryButton as="a" href="mailto:Kizzlept@gmail.com" variant="secondary">
                                    <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                                    Email Kyle
                                </PrimaryButton>
                            </div>
                        </div>

                        <div className="px-6 py-10 md:px-10">
                            <div className="space-y-6">
                                {SUPPORT_POINTS.map((point) => (
                                    <div key={point.title} className="flex gap-4">
                                        <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#C62828]/10 text-[#C62828]">
                                            <point.icon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">{point.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <div className="text-sm font-semibold text-slate-900">Contact details</div>
                                <div className="mt-3 text-sm text-slate-600">
                                    WhatsApp replies are usually the quickest.
                                </div>
                                <div className="mt-4 space-y-2 text-sm">
                                    <a
                                        className="block font-medium text-[#C62828] underline-offset-4 hover:underline"
                                        href="mailto:Kizzlept@gmail.com"
                                    >
                                        Kizzlept@gmail.com
                                    </a>
                                    <a
                                        className="block font-medium text-[#C62828] underline-offset-4 hover:underline"
                                        href="https://wa.me/447704505381"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Message on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
