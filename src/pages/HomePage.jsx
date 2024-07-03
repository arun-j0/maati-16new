// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import IntroSection from '../components/Intro';
import SponsorSection from '../components/Sponsor';
import ConnectWithUs from '../components/Connect';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <IntroSection />
            <SponsorSection />
            <ConnectWithUs />
            <Footer />
        </>
    );
}

export default HomePage;
