import { useState, useEffect } from "react";
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

    return (
        <header className={`sticky top-0 z-50 transition bg-white/80 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}>
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="/" className="flex items-center gap-2 font-bold text-xl">
                    <span className="h-8 w-8 rounded-xl bg-indigo-600 inline-block" />
                    Kyle PT Manchester
                </a>

                <button
                    className="lg:hidden p-2 rounded-md border border-slate-200"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {/* hamburger icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="hidden lg:flex items-center gap-8">
                    <a href="#coaching" className="hover:text-indigo-600">Coaching</a>
                    <a href="#results" className="hover:text-indigo-600">Results</a>
                    <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
                    <a href="#resources" className="hover:text-indigo-600">Resources</a>
                    <a href="#contact" className="hover:text-indigo-600">Contact</a>
                    <PrimaryButton as="a" href="#book">Book Free Consultation</PrimaryButton>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="lg:hidden border-t border-slate-200">
                    <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
                        <a href="#coaching" onClick={() => setOpen(false)}>Coaching</a>
                        <a href="#results" onClick={() => setOpen(false)}>Results</a>
                        <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
                        <a href="#resources" onClick={() => setOpen(false)}>Resources</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                        <PrimaryButton as="a" href="#book" onClick={() => setOpen(false)}>Book Free Consultation</PrimaryButton>
                    </div>
                </div>
            )}
        </header>
    );
}
