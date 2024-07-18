// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import IntroSection from '../components/Intro';
import SponsorSection from '../components/Sponsor';
import ConnectWithUs from '../components/Connect';

function HomePage() {
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
