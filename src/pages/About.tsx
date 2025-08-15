
export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-brand p-8 flex flex-col items-center text-center animate-fade-in-up">
            <h1 className="text-4xl font-extrabold mb-6 text-brand">Meet Your Trainer</h1>
            <img
                src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop"
                alt="Personal trainer coaching a client"
                className="w-64 h-64 object-cover rounded-full shadow mb-6"
            />
            <p className="text-lg text-neutral-900 max-w-2xl">
                I'm Kyle, a certified personal trainer with over a decade of experience helping people build strength,
                move better, and feel amazing. Whether you're new to the gym or chasing performance goals, we'll create
                a plan that fits your life and keeps you motivated.
            </p>
        </div>
    );
}
