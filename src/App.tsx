import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const IndexRedirect = () => {
    useEffect(() => {
        // Basic language detection
        const lang = navigator.language.startsWith('es') ? 'es' : 'en';
        window.location.replace(`/${lang}`);
    }, []);
    return null;
};

// ScrollToTop component for Router
const ScrollToTopRoute = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App = () => {
    return (
        <HelmetProvider>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <ScrollToTopRoute />
                <Routes>
                    <Route path="/" element={<IndexRedirect />} />

                    {/* English Routes */}
                    <Route path="/en" element={<HomePage lang="en" />} />
                    <Route path="/en/about" element={<AboutPage lang="en" />} />
                    <Route path="/en/pricing" element={<PricingPage lang="en" />} />
                    <Route path="/en/contact" element={<ContactPage lang="en" />} />
                    <Route path="/en/faq" element={<FAQPage lang="en" />} />
                    <Route path="/en/how-it-works" element={<HowItWorksPage lang="en" />} />
                    <Route path="/en/privacy" element={<PrivacyPage lang="en" />} />
                    <Route path="/en/terms" element={<TermsPage lang="en" />} />

                    {/* Spanish Routes */}
                    <Route path="/es" element={<HomePage lang="es" />} />
                    <Route path="/es/about" element={<AboutPage lang="es" />} />
                    <Route path="/es/pricing" element={<PricingPage lang="es" />} />
                    <Route path="/es/contacto" element={<ContactPage lang="es" />} />
                    <Route path="/es/faq" element={<FAQPage lang="es" />} />
                    <Route path="/es/how-it-works" element={<HowItWorksPage lang="es" />} />
                    <Route path="/es/privacidad" element={<PrivacyPage lang="es" />} />
                    <Route path="/es/terminos" element={<TermsPage lang="es" />} />

                    {/* 404 Handling */}
                    <Route path="/es/*" element={<NotFoundPage lang="es" />} />
                    <Route path="*" element={<NotFoundPage lang="en" />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
