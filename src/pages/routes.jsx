import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './homePage';
import { ProductListPage } from './productListPage';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { PageFooter } from '../components/PageFooter/PageFooter';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import { AboutPage } from './aboutPage';
import { ProductPage } from './productPage';

export const AppRoutes = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/products' element={<ProductListPage />} />
                    <Route path='/product/:id' element={<ProductPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <PageFooter />
            </BrowserRouter>
        </ShoppingCartProvider>
    );
};
