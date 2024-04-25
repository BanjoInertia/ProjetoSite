import classes from "./HomePageCards.module.css"

import img from "../../../assets/blitz.png"

export const HomePageCards = () => {
    return (
        <>
            {/* <h1 className={classes.card_titulo}>New Release!</h1> */}
            <div className={classes.card}>
                <img src={img} />
                <div>
                    <h1>XX99 MARK II HEADPHONES</h1>
                    <p>Experience natural, lifelike audio and excepitional build quality made for the passionate music enthusiast</p>
                    <a><button>SEE PRODUCT</button></a>
                </div>
            </div>
        </>
    )
}