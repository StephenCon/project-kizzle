// src/components/home/FinalCTA.tsx
import PrimaryButton from "../components/ui/PrimaryButton";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { CalendarDays, MessageCircle, Mail } from "lucide-react";

/** ---------- Easing ---------- */
const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

/** ---------- Variants ---------- */
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        transition: { duration: c.reduced ? 0 : 0.5, ease: EASE_OUT },
    }),
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: (c: { reduced: boolean }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: c.reduced ? 0 : 0.45, ease: EASE_OUT },
    }),
};

export default function FinalCTA() {
    const reduce = useReducedMotion();

    return (
        <motion.section
            id="contact"
            className="py-16 bg-slate-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            custom={{ reduced: !!reduce }}
        >
            <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
                {/* Left: Copy + actions */}
                <motion.div
                    variants={cardVariants}
                    custom={{ reduced: !!reduce }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Ready to get started?
                    </h2>
                    <p className="mt-2 text-slate-700">
                        Book a free 15–20 minute consult. No pressure, no salesy stuff—just a plan.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <PrimaryButton as="a" href="#book" className="inline-flex items-center gap-2">
                            <CalendarDays className="h-5 w-5" />
                            Book Free Consultation
                        </PrimaryButton>

                        <a
                            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                         border border-slate-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#C62828]/40"
                            href="https://wa.me/447000000000?text=Hi%20Kyle%2C%20I%27d%20like%20to%20book%20a%20consultation."
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Chat via WhatsApp"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            WhatsApp
                        </a>
                    </div>

                    <div className="mt-4 text-sm text-slate-600 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-500" aria-hidden />
                        Prefer email?{" "}
                        <a className="text-[#C62828] font-medium underline-offset-4 hover:underline focus:underline"
                            href="mailto:Kizzlept@gmail.com">
                            Kizzlept@gmail.com
                        </a>
                    </div>
                </motion.div>

                {/* Right: Booking widget */}
                <motion.div
                    id="book"
                    variants={cardVariants}
                    custom={{ reduced: !!reduce }}
                    className="rounded-2xl border bg-white p-4 shadow-sm"
                >
                    {/* Replace this block with your live Calendly/Cal.com embed */}
                    {/* Example (Cal.com):
              <div className="relative aspect-video">
                <iframe
                  src="https://cal.com/your-handle/consultation?embed=1"
                  className="absolute inset-0 h-full w-full rounded-xl"
                  frameBorder="0"
                />
              </div>
          */}
                    <div className="relative aspect-video w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                        Booking widget placeholder
                    </div>

                    <p className="mt-3 text-xs text-slate-500">
                        Tip: add a Cal.com or Calendly iframe here so clients can book instantly.
                    </p>

                    {/* Quick micro-faq / reassurance row */}
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
                        <div className="rounded-lg border bg-slate-50 p-3">
                            ✅ 100% free consult
                        </div>
                        <div className="rounded-lg border bg-slate-50 p-3">
                            ✅ No contracts required
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
