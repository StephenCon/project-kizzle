// src/components/Navbar.tsx
import { useEffect, useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // White links when on dark (top), dark links when scrolled
    const linkCls = scrolled
        ? "text-slate-800 hover:text-[#C62828]"
        : "text-white hover:text-[#ffd5d5]";

    return (
        <header
            className={`sticky top-0 z-50 transition-colors ${scrolled
                    ? "bg-white/95 shadow-sm backdrop-blur"
                    : // << make it readable at the top
                    "bg-black/40 backdrop-blur-md"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Logo + brand */}
                <a href="/" className="flex items-center gap-3">
                    {/* Swap to your real logo file */}
                    <img
                        src="/assets/images/logo.png"
                        alt="Project Kizzle"
                        className="h-8 w-auto"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                    <span
                        className={`font-extrabold text-lg ${scrolled ? "text-slate-900" : "text-white"
                            }`}
                    >
                        Project Kizzle - Manchester
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {["Coaching", "Results", "Pricing", "Resources", "Contact"].map(
                        (label) => (
                            <a
                                key={label}
                                href={`#${label.toLowerCase()}`}
                                className={`transition ${linkCls}`}
                            >
                                {label}
                            </a>
                        )
                    )}
                    <PrimaryButton
                        as="a"
                        href="#book"
                        className={
                            scrolled
                                ? ""
                                : // subtle outline when over dark hero
                                "border border-white/20"
                        }
                    >
                        Book Free Consultation
                    </PrimaryButton>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className={`lg:hidden p-2 rounded-md border transition ${scrolled
                            ? "border-slate-300 text-slate-900"
                            : "border-white/30 text-white"
                        }`}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3 6h18M3 12h18M3 18h18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile panel */}
            {open && (
                <div className="lg:hidden border-t border-slate-200 bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
                        {["coaching", "results", "pricing", "resources", "contact"].map(
                            (id) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={() => setOpen(false)}
                                    className="py-2 text-slate-800 hover:text-[#C62828]"
                                >
                                    {id[0].toUpperCase() + id.slice(1)}
                                </a>
                            )
                        )}
                        <PrimaryButton as="a" href="#book" onClick={() => setOpen(false)}>
                            Book Free Consultation
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </header>
    );
}
