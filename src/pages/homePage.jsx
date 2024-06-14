import { HomePageWelcomeDisplay } from "../components/HomePage/HomePageWelcomeDisplay/HomePageWelcomeDisplay"
import { HomePageProductSlider } from "../components/HomePage/HomePageProductSlider/HomePageProductSlider"
import { HomePageCard } from "../components/HomePage/HomePageCard/HomePageCard"
import { HomePageCategories } from "../components/HomePage/HomePageCategories/HomePageCategories"

export const HomePage = () => {
    return (
        <>
            <HomePageWelcomeDisplay />
            <HomePageProductSlider />
            <HomePageCard />
            <HomePageCategories />
        </>
    )
}