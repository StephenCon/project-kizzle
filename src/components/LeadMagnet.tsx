import PrimaryButton from "../components/ui/PrimaryButton";

export default function LeadMagnet() {
    return (
        <section id="resources" className="py-14 bg-[#fff5f5]">
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Free 7-Day Kickstart</h3>
                <p className="mt-2 max-w-2xl text-slate-700">
                    Get a beginner training plan + grocery list delivered to your inbox.
                </p>
                <form
                    className="mt-6 w-full max-w-md flex gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Subscribed! Replace with real integration.");
                    }}
                >
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="flex-1 rounded-xl border px-4"
                    />
                    <PrimaryButton type="submit">Get it</PrimaryButton>
                </form>
            </div>
        </section>
    );
}
