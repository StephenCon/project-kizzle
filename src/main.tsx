import { useState } from "react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight text-xl">
            Kyle<strong className="text-indigo-600">PT</strong>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#testimonials" className="hover:text-indigo-600">Results</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-xl border border-indigo-600 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Book a Free Consult
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
              <a onClick={() => setMobileOpen(false)} href="#services">Services</a>
              <a onClick={() => setMobileOpen(false)} href="#testimonials">Results</a>
              <a onClick={() => setMobileOpen(false)} href="#pricing">Pricing</a>
              <a onClick={() => setMobileOpen(false)} href="#contact" className="font-semibold text-indigo-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Get Strong. Move Better. <span className="text-indigo-600">Feel Amazing.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              1:1 coaching, custom programming, and nutrition guidance tailored to your goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl border border-indigo-600 px-5 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Book a Free Consult
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold hover:bg-slate-50 transition"
              >
                See Services
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Accredited PT • Evidence-based programming • Online & In-person
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border shadow-sm">
            {/* Placeholder image block; replace with a real photo later */}
            <div className="aspect-video w-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
              <span className="text-slate-700">Trainer photo / hero image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "1:1 Personal Training", desc: "Hands-on coaching to master technique and accelerate results." },
              { title: "Custom Programming", desc: "Tailored plans for fat loss, muscle gain, or performance." },
              { title: "Nutrition Coaching", desc: "Practical guidance to fuel training and improve body composition." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Client Results</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["“Dropped 8kg in 12 weeks.”", "“Stronger at 40 than at 20.”", "“No more back pain, finally.”"].map((t, i) => (
              <figure key={i} className="rounded-2xl border p-6 bg-white shadow-sm">
                <blockquote className="text-slate-800">{t}</blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">— Happy client</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-slate-50 border-y">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Single Session", price: "£50", features: ["60 minutes", "Technique focus", "Form feedback"] },
              { name: "Monthly Coaching", price: "£180", features: ["Weekly sessions", "Program + check-ins", "Nutrition basics"] },
              { name: "Online Coaching", price: "£120", features: ["Custom plan", "Form checks", "Messaging support"] },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {p.features.map((f) => <li key={f}>• {f}</li>)}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex justify-center rounded-xl border border-indigo-600 px-4 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Book a Free Consultation</h2>
          <form
            className="mt-8 grid gap-4 max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I’ll be in touch shortly.");
            }}
          >
            <input className="border rounded-xl px-4 py-3" placeholder="Your name" />
            <input className="border rounded-xl px-4 py-3" placeholder="Email address" type="email" />
            <textarea className="border rounded-xl px-4 py-3" placeholder="Your goals" rows={4} />
            <button
              type="submit"
              className="inline-flex items-center rounded-xl border border-indigo-600 px-5 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} KylePT. All rights reserved.</span>
          <a href="#" className="hover:text-indigo-600">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
