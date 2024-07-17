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
import MottoPage from './pages/MottoPage';
import ObjectivesPage from './pages/ObjectivesPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CoreMembers from './components/CoreMembers';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/our-works" element={<WorkPage />} />
          <Route path="/personaldetails" element={<PersonalDetailsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/motto-objective" element={<MottoPage />} />
          <Route path="/objectives" element={<ObjectivesPage />} />
          <Route path="/membership-volunteership" element={<MembershipPage />} />
          <Route path="/donate-us" element={<DonationPage />} />
          <Route path="/privacy-policies" element={<PrivacyPolicyPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/core-members" element={<CoreMembers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
