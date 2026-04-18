import React from 'react'
import Navbar from "../components/layout/Navbar.jsx";
import About from "../components/sections/About.jsx";
import FAQ from "../components/ui/FAQ.jsx";
import FooterBottom from "../components/ui/FooterBottom.jsx";

const AboutPage = () => {
    return (
        <>
            <Navbar/>
            <About/>
            <FAQ/>
            <FooterBottom/>
        </>
    )
}
export default AboutPage
