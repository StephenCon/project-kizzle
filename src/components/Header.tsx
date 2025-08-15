import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants/site";

/**
 * Header
 * - Sticky, translucent header with blur.
 * - Desktop: inline nav with primary CTA.
 * - Mobile: animated sheet menu, body scroll lock, ESC to close.
 * - Accessible: roles/labels, focus styles, larger tap targets.
 */
export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [elevated, setElevated] = useState(false);

    // Lock page scroll when mobile nav is open.
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", mobileOpen);
        return () => document.body.classList.remove("overflow-hidden");
    }, [mobileOpen]);

    // Add elevation on scroll for subtle shadow feedback.
    useEffect(() => {
        const onScroll = () => setElevated(window.scrollY > 4);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close on Escape for better ergonomics.
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        if (mobileOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [mobileOpen]);

    return (
        <header
            className={[
                "sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
                elevated ? "shadow-sm" : "shadow-none",
            ].join(" ")}
        >
            {/* Skip link for accessibility */}
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:inset-x-0 focus:top-2 focus:mx-auto focus:w-max focus:rounded-lg focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white"
            >
                Skip to content
            </a>

            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                {/* Brand */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 font-extrabold tracking-tight text-xl"
                    aria-label="KylePT home"
                >
                    <span className="select-none">Kyle</span>
                    <strong className="text-indigo-600 select-none">PT</strong>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
                    {NAV_LINKS.slice(0, 3).map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-slate-700 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-2 inline-flex items-center rounded-xl border border-indigo-600 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
                    >
                        Book a Free Consult
                    </a>
                </nav>

                {/* Mobile toggle */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    {/* Icon transitions between hamburger and close */}
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {mobileOpen ? (
                            <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile sheet */}
            <div
                id="mobile-menu"
                className={[
                    "md:hidden overflow-hidden border-t bg-white will-change-[max-height,opacity]",
                    mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    "transition-all duration-300 ease-out",
                ].join(" ")}
            >
                <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setMobileOpen(false)}
                            className={[
                                "rounded-lg px-2 py-2",
                                "text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                                l.href === "#contact" ? "font-semibold text-indigo-700" : "",
                            ].join(" ")}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-1 inline-flex items-center justify-center rounded-xl border border-indigo-600 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
                    >
                        Book a Free Consult
                    </a>
                </div>
            </div>
        </header>
    );
}
