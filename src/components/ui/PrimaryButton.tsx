type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button" | "a";
    href?: string;
};

export default function PrimaryButton({
    as = "button",
    href,
    className = "",
    children,
    ...rest
}: Props) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2";
    const styles =
        "bg-[#C62828] text-white hover:brightness-110 focus:ring-[#C62828]/80";
    if (as === "a" && href) {
        return (
            <a href={href} className={`${base} ${styles} ${className}`}>
                {children}
            </a>
        );
    }
    return (
        <button className={`${base} ${styles} ${className}`} {...rest}>
            {children}
        </button>
    );
}
