import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import PageLayout from './components/layout/PageLayout';
import { AdminAuthProvider } from './context/AdminAuthProvider';
import { VehicleProvider } from './context/VehicleProvider';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/admin/AdminPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import ShowroomPage from './pages/ShowroomPage';
import ServicesPage from './pages/ServicesPage';

const App = () => (
  <BrowserRouter>
    <VehicleProvider>
      <AdminAuthProvider>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="showroom" element={<ShowroomPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="quote" element={<QuotePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="admin" element={<AdminPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AdminAuthProvider>
    </VehicleProvider>
  </BrowserRouter>
);

export default App;
