import classes from "./HomePageCard.module.css"
import img from "../../../assets/blitz.png"
import { Link } from "react-router-dom"

export const HomePageCard = () => {
    return (
        <>
            <h1 className={classes.card_title}>New Release!</h1>
            <div className={classes.card}>
                <img src={img} />
                <div>
                    <h1>Rusty Blitzcrank</h1>
                    <p>Embrace a fusion of modern style and timeless sophistication. Elevate your gaming presence with its refined allure and unbeatable charisma.</p>
                    <Link to="/product/15"><button>SEE PRODUCT</button></Link>
                </div>
            </div>
        </>
    )
}