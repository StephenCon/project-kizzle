export default function ContactForm() {
    return (
        <section id="contact" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold">Book a Free Consultation</h2>
                <form
                    className="mt-8 grid gap-4 max-w-xl"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thanks! I’ll be in touch shortly.");
                    }}
                >
                    <input className="border rounded-xl px-4 py-3" placeholder="Your name" />
                    <input className="border rounded-xl px-4 py-3" placeholder="Email address" type="email" />
                    <textarea className="border rounded-xl px-4 py-3" placeholder="Your goals" rows={4} />
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-xl border border-indigo-600 px-5 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
