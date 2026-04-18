import Hero from "../components/ui/Hero.jsx";
import Services from "../components/sections/Services";
import FAQ from "../components/ui/FAQ";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <FAQ />
            <Footer/>
        </>
    );
}