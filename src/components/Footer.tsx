export default function Footer() {
    return (
        <footer className="py-8 animate-fade-in-up">
            <div className="mx-auto max-w-6xl px-4 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
                <span>© {new Date().getFullYear()} KylePT. All rights reserved.</span>
                <a href="#" className="hover:underline">Privacy</a>
            </div>
        </footer>
    );
}
