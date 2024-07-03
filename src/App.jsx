import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import WorkPage from './pages/WorkPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import FaqsPage from './pages/FaqsPage';
import MembershipForm from './components/MembershipForm';

function App() {
    return (
        <Router>
            <>
              <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path="/our-works" element={<WorkPage />} />
                    <Route path="/personaldetails" element={<PersonalDetailsPage />} />
                    <Route path="/faqs" element={<FaqsPage />} />
                    <Route path="/membership" element={<MembershipForm />} />
              </Routes>
            </>
        </Router>
    );
}

export default App;
