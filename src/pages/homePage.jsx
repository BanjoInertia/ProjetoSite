import { PageHeader } from "../components/PageHeader/PageHeader"
import { HomePageDisplayedProduct } from "../components/HomePage/HomePageDisplayedProduct/HomePageDisplayedProduct"
import { HomePageSlider } from "../components/HomePage/HomePageSlider/HomePageSlider"
import { PageFooter } from "../components/PageFooter/PageFooter"
import { HomePageCards } from "../components/HomePage/HomePageCards/HomePageCards"
import { HomePageCategories } from "../components/HomePage/HomePageCategories/HomePageCategories"

export const HomePage = () => {
    return (
        <>
            <PageHeader />
            <HomePageDisplayedProduct />
            <HomePageSlider />
            <HomePageCards />
            <HomePageCategories />
            <PageFooter />
        </>
    )
}