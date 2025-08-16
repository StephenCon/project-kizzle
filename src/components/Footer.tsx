// src/components/home/Footer.tsx
import { motion, useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

/** ---------- Easing ---------- */
const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** ---------- Variants ---------- */
const containerVariants: Variants = {
    hidden: {},
    visible: (c: { reduced: boolean }) => ({
        transition: {
            staggerChildren: c.reduced ? 0 : 0.08,
        },
    }),
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: c.reduced ? 0 : 0.4, ease: EASE_OUT },
    }),
};

export default function Footer() {
    const reduce = useReducedMotion();

    return (
        <motion.footer
            className="mt-20 border-t bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
                {/* Logo + tagline */}
                <motion.div variants={itemVariants} custom={{ reduced: !!reduce }}>
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <span className="h-8 w-8 rounded-md bg-[#C62828]" />
                        Project Kizzle
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                        Evidence-based coaching in Manchester &amp; online.
                    </p>
                </motion.div>

                {/* Quick links */}
                <motion.div variants={itemVariants} custom={{ reduced: !!reduce }}>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#coaching" className="hover:text-[#C62828]">
                                Coaching
                            </a>
                        </li>
                        <li>
                            <a href="#results" className="hover:text-[#C62828]">
                                Results
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" className="hover:text-[#C62828]">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#resources" className="hover:text-[#C62828]">
                                Resources
                            </a>
                        </li>
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div variants={itemVariants} custom={{ reduced: !!reduce }}>
                    <h4 className="font-semibold mb-3">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-slate-500" aria-hidden />
                            Manchester, UK
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-slate-500" aria-hidden />
                            <a
                                href="mailto:kizzlept@gmail.com"
                                className="hover:text-[#C62828]"
                            >
                                kizzlept@gmail.com
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="text-center text-xs text-slate-500 pb-8"
                variants={itemVariants}
                custom={{ reduced: !!reduce }}
            >
                © {new Date().getFullYear()} Project Kizzle — Manchester
            </motion.div>
        </motion.footer>
    );
}
