import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './homePage'
import { ProductDetailsPage } from './ProductDetailsPage'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/product/:id' element={<ProductDetailsPage />}/>
            </Routes>
        </BrowserRouter>
    )
}