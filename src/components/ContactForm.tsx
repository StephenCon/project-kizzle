export default function ContactForm() {
    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-r from-neutral-100 via-white to-neutral-100 animate-fade-in-up"
        >
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold text-center">Book a Free Consultation</h2>
                <form
                    className="mt-10 grid gap-4 max-w-xl mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thanks! I’ll be in touch shortly.");
                    }}
                >
                    <input
                        className="border-2 border-brand-light rounded-xl px-4 py-3 focus:border-brand transition"
                        placeholder="Your name"
                    />
                    <input
                        className="border-2 border-brand-light rounded-xl px-4 py-3 focus:border-brand transition"
                        placeholder="Email address"
                        type="email"
                    />
                    <textarea
                        className="border-2 border-brand-light rounded-xl px-4 py-3 focus:border-brand transition"
                        placeholder="Your goals"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark hover:-translate-y-0.5 transition-transform"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
