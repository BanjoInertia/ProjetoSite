import { HomePageDisplayedProduct } from "../components/HomePage/HomePageDisplayedProduct/HomePageDisplayedProduct"
import { HomePageSlider } from "../components/HomePage/HomePageSlider/HomePageSlider"
import { HomePageCards } from "../components/HomePage/HomePageCards/HomePageCards"
import { HomePageCategories } from "../components/HomePage/HomePageCategories/HomePageCategories"

export const HomePage = () => {
    return (
        <>
            <HomePageDisplayedProduct />
            <HomePageSlider />
            <HomePageCards />
            <HomePageCategories />
        </>
    )
}