import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import EventDetails from "./pages/EventDetails";
import Footer from "./components/Footer";
import { handleHashNavigation } from "./utils/scrollToSection";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {

    if (location.hash) {
      handleHashNavigation();
    } else {

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

