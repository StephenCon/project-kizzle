import { useEffect, useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";

const NAV_ITEMS = [
    { label: "Coaching", href: "#coaching" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
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
        ? "text-slate-700 hover:text-[#C62828]"
        : "text-white/90 hover:text-white";

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-all ${scrolled
                    ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
                    : "border-white/10 bg-black/35 backdrop-blur-md"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/50">
                    <span
                        aria-hidden="true"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#C62828] font-black text-white shadow-sm"
                    >
                        PK
                    </span>
                    <div className="leading-tight">
                        <div className={`text-base font-extrabold ${scrolled ? "text-slate-900" : "text-white"}`}>
                            Project Kizzle
                        </div>
                        <div className={`text-xs uppercase tracking-[0.18em] ${scrolled ? "text-slate-500" : "text-white/70"}`}>
                            Personal Training
                        </div>
                    </div>
                </a>

                <div className="hidden items-center gap-7 lg:flex">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/40 ${linkCls}`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <PrimaryButton as="a" href="#book" className="px-4 py-2.5 text-sm">
                        Book a consultation
                    </PrimaryButton>
                </div>

                <button
                    onClick={() => setOpen((value) => !value)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className={`rounded-lg border p-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/40 lg:hidden ${scrolled
                            ? "border-slate-300 text-slate-900"
                            : "border-white/30 text-white"
                        }`}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                <div className="border-t border-slate-200 bg-white lg:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:text-[#C62828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/40"
                            >
                                {item.label}
                            </a>
                        ))}
                        <PrimaryButton as="a" href="#book" className="mt-2">
                            Book free consultation
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </header>
    );
}
