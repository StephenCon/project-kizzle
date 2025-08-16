export default function Footer() {
    return (
        <footer className="mt-16 border-t">
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <span className="h-8 w-8 rounded-md bg-[#C62828]" />
                        Kyle PT Manchester
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                        Evidence-based coaching in Manchester city centre & online.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#coaching" className="hover:text-[#C62828]">Coaching</a></li>
                        <li><a href="#results" className="hover:text-[#C62828]">Results</a></li>
                        <li><a href="#pricing" className="hover:text-[#C62828]">Pricing</a></li>
                        <li><a href="#resources" className="hover:text-[#C62828]">Resources</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Manchester, UK</li>
                        <li>
                            <a href="tel:+44xxxxxxxxxx" className="hover:text-[#C62828]">
                                +44 (0)7…
                            </a>
                        </li>
                        <li>
                            <a href="mailto:Kizzlept@gmail.com" className="hover:text-[#C62828]">
                                Kizzlept@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-xs text-slate-500 pb-8">
                © {new Date().getFullYear()} Kyle PT Manchester
            </div>
        </footer>
    );
}
