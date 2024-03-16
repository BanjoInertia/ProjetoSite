import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { HomePage } from './homePage'
import { ProductListPage } from './productListPage'
import { ProductDetailsPage } from './productDetailsPage'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { PageFooter } from '../components/PageFooter/PageFooter'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'

export const AppRoutes = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/products' element={<ProductListPage />}/>
                    <Route path='/product/:id' element={<ProductDetailsPage />}/>
                </Routes>
                <PageFooter />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}