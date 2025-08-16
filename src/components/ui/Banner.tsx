// src/components/ui/Banner.tsx
export default function Banner({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <section className="w-full bg-[#C62828] py-6">
            <div className="mx-auto max-w-6xl px-4 text-center text-white font-semibold tracking-wide">
                {children || ""}
            </div>
        </section>
    );
}
