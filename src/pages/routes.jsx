import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { HomePage } from './homePage'
import { ProductListPage } from './productListPage'
import { ProductDetailsPage } from './ProductDetailsPage'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { PageFooter } from '../components/PageFooter/PageFooter'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import { AboutPage } from './aboutPage'

export const AppRoutes = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/products' element={<ProductListPage />}/>
                    <Route path='/product/:id' element={<ProductDetailsPage />}/>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <PageFooter />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}