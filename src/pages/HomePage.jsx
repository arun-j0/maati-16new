// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import IntroSection from '../components/Intro';
import SponsorSection from '../components/Sponsor';
import ConnectWithUs from '../components/Connect';
import { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
      }, []);
    return (
        <>
            <Navbar />
            <HeroSection />
            <IntroSection />
            <SponsorSection />
            <ConnectWithUs />
        </>
    );
}

export default HomePage;
