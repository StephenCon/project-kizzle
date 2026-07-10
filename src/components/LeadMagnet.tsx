import { useState, type FormEvent } from "react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

const DELIVERABLES = [
    "A simple 7-day beginner training structure",
    "A practical shopping list for busy weeks",
    "A short checklist to help you stay consistent",
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (custom: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: custom.reduced ? 0 : 0.5, ease: EASE_OUT },
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

export default function LeadMagnet() {
    const reduce = useReducedMotion();
    const [email, setEmail] = useState("");

    const handleRequest = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const subject = encodeURIComponent("Project Kizzle starter pack request");
        const body = encodeURIComponent(
            [
                "Hi Kyle,",
                "",
                "I'd like the free 7-day kickstart pack.",
                `My email: ${email}`,
                "",
                "Thanks,",
            ].join("\n")
        );

        window.location.href = `mailto:kizzlept@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <motion.section
            id="resources"
            className="py-16 bg-[#fff5f5]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                    <motion.h3
                        className="text-2xl md:text-3xl font-extrabold tracking-tight"
                        variants={itemVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        Free 7-day kickstart
                    </motion.h3>

                    <motion.p
                        className="mt-3 max-w-2xl text-slate-700"
                        variants={itemVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        Request the starter pack and Kyle will send over a simple plan you can start with straight away.
                    </motion.p>

                    <motion.ul
                        className="mt-6 space-y-3 text-sm text-slate-700"
                        variants={sectionVariants}
                        custom={{ reduced: !!reduce }}
                    >
                        {DELIVERABLES.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C62828]" aria-hidden />
                                <span>{item}</span>
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <motion.div
                    className="rounded-2xl border bg-white p-6 shadow-sm"
                    variants={itemVariants}
                    custom={{ reduced: !!reduce }}
                >
                    <form className="space-y-4" onSubmit={handleRequest}>
                        <label className="block text-sm font-medium text-slate-800" htmlFor="starter-pack-email">
                            Your email
                        </label>
                        <div className="relative">
                            <Mail
                                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                                aria-hidden
                            />
                            <input
                                id="starter-pack-email"
                                type="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@example.com"
                                className="w-full rounded-xl border py-3 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C62828]/50"
                            />
                        </div>

                        <PrimaryButton type="submit" className="w-full">
                            Request by email
                        </PrimaryButton>
                    </form>

                    <div className="mt-4 border-t pt-4">
                        <a
                            href="https://wa.me/447704505381?text=Hi%20Kyle%2C%20I%27d%20like%20the%20free%207-day%20kickstart%20pack."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#C62828] underline-offset-4 hover:underline"
                        >
                            <MessageCircle className="h-4 w-4" aria-hidden />
                            Prefer WhatsApp? Request it there instead
                        </a>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                        This opens your email app with the request pre-filled so Kyle can send the pack manually.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
