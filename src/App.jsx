import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
const App = () => {
    return (
        <div className="min-h-screen bg-black text-white">

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>

        </div>
    );
};

export default App;