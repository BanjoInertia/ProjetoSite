import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './homePage';
import { ProductListPage } from './productListPage';
import { ProductDetailsPage } from './productDetailsPage';
import { AboutPage } from './aboutPage';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { PageFooter } from '../components/PageFooter/PageFooter';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

export const AppRoutes = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductListPage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    {/* 404 Route */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <PageFooter />
            </BrowserRouter>
        </ShoppingCartProvider>
    );
};
