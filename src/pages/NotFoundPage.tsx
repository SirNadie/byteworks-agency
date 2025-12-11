import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../layouts/Layout';

interface NotFoundPageProps {
    lang?: 'en' | 'es';
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ lang = 'en' }) => {
    const isEN = lang === 'en';

    return (
        <Layout lang={lang} title={isEN ? "404 - Page Not Found" : "404 - Página No Encontrada"}>
            <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
                <h1 className="text-6xl font-extrabold font-heading text-primary mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {isEN ? "Page Not Found" : "Página No Encontrada"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
                    {isEN
                        ? "The page you are looking for doesn't exist or has been moved."
                        : "La página que buscas no existe o ha sido movida."}
                </p>
                <Link
                    to={isEN ? "/en" : "/es"}
                    className="btn-hover inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
                >
                    {isEN ? "Back to Home" : "Volver al Inicio"}
                </Link>
            </section>
        </Layout>
    );
};
