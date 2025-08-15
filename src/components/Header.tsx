import { useState } from "react";
import { NAV_LINKS } from "../constants/site";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <a href="/" className="font-extrabold tracking-tight text-xl">
                    Kyle<strong className="text-indigo-600">PT</strong>
                </a>

                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.slice(0, 3).map((l) => (
                        <a key={l.href} href={l.href} className="hover:text-indigo-600">
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-2 inline-flex items-center rounded-xl border border-indigo-600 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        Book a Free Consult
                    </a>
                </nav>

                <button
                    className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                >
                    ☰
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden border-t bg-white">
                    <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setMobileOpen(false)}
                                className={l.href === "#contact" ? "font-semibold text-indigo-600" : ""}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
