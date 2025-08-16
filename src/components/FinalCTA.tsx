import PrimaryButton from "../components/ui/PrimaryButton";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-14 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
                    <p className="mt-2 text-slate-700">Book a free 15–20 minute consult.</p>
                    <div className="mt-6 space-x-3">
                        <PrimaryButton as="a" href="#book">Book Free Consultation</PrimaryButton>
                        <a
                            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                         border border-slate-300 hover:bg-slate-100"
                            href="https://wa.me/447000000000"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div id="book" className="rounded-2xl border bg-white p-4">
                    {/* Replace with Calendly/Cal.com widget */}
                    <div className="aspect-video w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                        Booking widget placeholder
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                        Prefer email?{" "}
                        <a className="text-[#C62828] font-medium" href="mailto:hello@kylept.co.uk">
                            hello@kylept.co.uk
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
