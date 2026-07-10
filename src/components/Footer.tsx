import { Mail, MapPin } from "lucide-react";

const FOOTER_LINKS = [
    { label: "Coaching", href: "#coaching" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
];

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-200 bg-white">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#C62828] font-black text-white">
                            PK
                        </span>
                        <div>
                            <div className="text-lg font-bold text-slate-900">Project Kizzle</div>
                            <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                Personal Training
                            </div>
                        </div>
                    </div>
                    <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
                        Evidence-based coaching in Manchester for people who want practical structure and real progress.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Quick links</h4>
                    <ul className="mt-4 space-y-3 text-sm">
                        {FOOTER_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-slate-700 transition hover:text-[#C62828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/30"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Contact</h4>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-slate-500" aria-hidden />
                            Manchester, UK
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-slate-500" aria-hidden />
                            <a
                                href="mailto:kizzlept@gmail.com"
                                className="transition hover:text-[#C62828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]/30"
                            >
                                kizzlept@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Project Kizzle. Manchester-based personal training.
            </div>
        </footer>
    );
}
