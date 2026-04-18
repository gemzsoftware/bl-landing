import React from 'react'
import Navbar from "../components/layout/Navbar.jsx";
import FooterBottom from "../components/ui/FooterBottom.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

const ContactPage = () => {
    return (
        <div>
            <Navbar/>
            <ContactSection/>
            <FooterBottom/>
        </div>
    )
}
export default ContactPage
