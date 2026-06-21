import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import ShowroomPage from './pages/ShowroomPage';
import ServicesPage from './pages/ServicesPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="showroom" element={<ShowroomPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
