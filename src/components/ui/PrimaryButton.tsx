type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
    as?: "button" | "a";
    href?: string;
    variant?: ButtonVariant;
    className?: string;
    children?: React.ReactNode;
};

type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function PrimaryButton({
    as = "button",
    href,
    variant = "primary",
    className = "",
    children,
    ...rest
}: ButtonProps | AnchorProps) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const stylesByVariant: Record<ButtonVariant, string> = {
        primary:
            "bg-[#C62828] text-white shadow-sm hover:brightness-110 focus:ring-[#C62828]/80",
        secondary:
            "border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-[#C62828]/40 hover:bg-slate-50 focus:ring-[#C62828]/40",
        ghost:
            "text-[#C62828] hover:bg-[#C62828]/8 focus:ring-[#C62828]/30",
    };
    const styles = stylesByVariant[variant];

    if (as === "a" && href) {
        return (
            <a href={href} className={`${base} ${styles} ${className}`} {...(rest as AnchorProps)}>
                {children}
            </a>
        );
    }
    return (
        <button className={`${base} ${styles} ${className}`} {...(rest as ButtonProps)}>
            {children}
        </button>
    );
}
