export default function Footer() {
    return (
        <footer className="py-8 border-t">
            <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
                <span>© {new Date().getFullYear()} KylePT. All rights reserved.</span>
                <a href="#" className="hover:text-indigo-600">Privacy</a>
            </div>
        </footer>
    );
}
