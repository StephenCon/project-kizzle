// src/components/ui/Banner.tsx
export default function Banner({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <section className="w-full border-y border-[#C62828]/10 bg-[#fff3f3] py-4">
            <div className="mx-auto max-w-6xl px-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#9f1f1f]">
                {children || ""}
            </div>
        </section>
    );
}
