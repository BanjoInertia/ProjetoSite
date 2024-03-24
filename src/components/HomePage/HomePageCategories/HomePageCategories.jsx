import classes from "./HomePageCategories.module.css"
import { Link } from "react-router-dom"

import epicImg from "../../../assets/product_assets/SoulFighterJhin.png"
import legendaryImg from "../../../assets/product_assets/OldWestJhin.png"
import commonImg from "../../../assets/product_assets/DarkCosmicJhin.png"

export const HomePageCategories = () => {
    return (
        <div className={classes.categorias_card}>

            <div className={classes.img1} id="legendary">
                <Link to={`/products/:id`} >
                    <img className={classes.img1} src={epicImg} />
                    <p className={classes.texto_img}>category 1</p>
                </Link>
            </div>

            <div className={classes.img2}>
                <Link to={`/products`} >
                    <img className={classes.img2} src={legendaryImg} />
                    <p className={classes.texto_img}>category 2</p>
                </Link>
            </div>

            <div className={classes.img3}>
                <Link to={`/products`} >
                    <img className={classes.img3} src={commonImg} />
                    <p className={classes.texto_img}>category 3</p>
                </Link>
            </div>

        </div>
    )
}