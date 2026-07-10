type Props = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
};

export default function SectionHeader({
    eyebrow,
    title,
    description,
    align = "left",
    className = "",
}: Props) {
    const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
            {eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C62828]">
                    {eyebrow}
                </span>
            )}
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-base leading-7 text-slate-600">
                    {description}
                </p>
            )}
        </div>
    );
}
