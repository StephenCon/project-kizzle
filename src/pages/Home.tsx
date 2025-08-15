import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900 space-y-24">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}
