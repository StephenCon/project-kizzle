const TRUST_ITEMS = [
    { label: "Qualification", value: "Level 3 Personal Trainer" },
    { label: "Location", value: "Manchester / Fallowfield" },
    { label: "Approach", value: "Strength, fat loss, confidence" },
];

export default function TrustBar() {
    return (
        <section className="border-y border-slate-200 bg-white">
            <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-3">
                {TRUST_ITEMS.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            {item.label}
                        </div>
                        <div className="mt-2 text-sm font-semibold text-slate-900">
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
