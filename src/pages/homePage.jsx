import { HomePageWelcomeDisplay } from "../components/HomePage/HomePageWelcomeDisplay/HomePageWelcomeDisplay"
import { HomePageProductSlider } from "../components/HomePage/HomePageProductSlider/HomePageProductSlider"
import { HomePageCards } from "../components/HomePage/HomePageCards/HomePageCards"
import { HomePageCategories } from "../components/HomePage/HomePageCategories/HomePageCategories"

export const HomePage = () => {
    return (
        <>
            <HomePageWelcomeDisplay />
            <HomePageProductSlider />
            <HomePageCards />
            <HomePageCategories />
        </>
    )
}