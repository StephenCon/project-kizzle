import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import Process from "../components/Process";
import ResultsTeaser from "../components/ResultsTeaser";
import WhyTrain from "../components/WhyTrain";
import PricingTeaser from "../components/PricingTeaser";
import LeadMagnet from "../components/LeadMagnet";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Banner from "../components/ui/Banner";

export default function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <Services />
            <Banner />
            <Process />
            <ResultsTeaser />
            <Banner />
            <WhyTrain />
            <PricingTeaser />
            <Banner />
            <LeadMagnet />
            <FAQ />
            <FinalCTA />
        </>
    );
}
