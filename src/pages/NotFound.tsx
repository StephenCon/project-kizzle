
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-[#14b3c4] p-8 flex flex-col items-center text-center animate-fade-in-up">
      <h1 className="text-4xl font-extrabold mb-6 text-brand">404 - Not Found</h1>
      <p className="text-lg text-neutral-900 max-w-2xl">The page you are looking for does not exist.</p>
    </div>
  );
}
