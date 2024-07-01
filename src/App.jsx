import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import WorkPage from './pages/WorkPage';

function App() {
    return (
        <Router>
            <>
              <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path="/our-works" element={<WorkPage />} />
              </Routes>
            </>
        </Router>
    );
}

export default App;