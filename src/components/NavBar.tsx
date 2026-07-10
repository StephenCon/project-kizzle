import { useEffect, useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";

const NAV_ITEMS = [
    { label: "Coaching", href: "#coaching" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#book" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const linkCls = scrolled
        ? "text-slate-800 hover:text-[#C62828]"
        : "text-white hover:text-[#ffd5d5]";

    return (
        <header
            className={`sticky top-0 z-50 transition-colors ${scrolled
                    ? "bg-white/95 shadow-sm backdrop-blur"
                    : "bg-black/40 backdrop-blur-md"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="/" className="flex items-center gap-3">
                    <span
                        aria-hidden="true"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#C62828] font-black text-white"
                    >
                        PK
                    </span>
                    <span
                        className={`font-extrabold text-lg ${scrolled ? "text-slate-900" : "text-white"
                            }`}
                    >
                        Project Kizzle - Personal Training
                    </span>
                </a>

                <div className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`transition ${linkCls}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

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

            {open && (
                <div className="lg:hidden border-t border-slate-200 bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="py-2 text-slate-800 hover:text-[#C62828]"
                            >
                                {item.label}
                            </a>
                        ))}
                        <PrimaryButton as="a" href="#book">
                            Book Free Consultation
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </header>
    );
}
