// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import WorkPage from './pages/WorkPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import FaqsPage from './pages/FaqsPage';
import MembershipPage from './pages/MembershipPage';
import DonationPage from './pages/DonationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import MottoObjectivePage from './pages/MottoObjectivePage'; // Import the MottoObjectivePage

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/our-works" element={<WorkPage />} />
                <Route path="/personaldetails" element={<PersonalDetailsPage />} />
                <Route path="/faqs" element={<FaqsPage />} />
                <Route path="/motto-objective" element={<MottoObjectivePage />} /> {/* Route for Motto and Objective */}
                <Route path="/membership-volunteership" element={<MembershipPage />} />
                <Route path="/donate-us" element={<DonationPage />} />
                <Route path="/privacy-policies" element={<PrivacyPolicyPage />} />
            </Routes>
        </Router>
    );
}

export default App;
