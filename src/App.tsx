import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load all pages for better initial bundle size
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Loading spinner component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background-dark">
        <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-3 border-gray-200 border-t-brand rounded-full animate-spin"></div>
            <p className="text-sm text-gray-400">Loading...</p>
        </div>
    </div>
);

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
                <Suspense fallback={<PageLoader />}>
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
                </Suspense>
            </Router>
        </HelmetProvider>
    );
};

export default App;
