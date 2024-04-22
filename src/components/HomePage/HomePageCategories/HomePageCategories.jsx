import classes from "./HomePageCategories.module.css"
import { Link } from "react-router-dom"

import epicImg from "../../../assets/product_assets/SoulFighterJhin.png"
import legendaryImg from "../../../assets/product_assets/OldWestJhin.png"
import commonImg from "../../../assets/product_assets/DarkCosmicJhin.png"

export const HomePageCategories = () => {
    return (
        <div className={classes.categories_card}>

            <div className={classes.img1} id="legendary">
                <Link to={`/products?rarity=legendary`} >
                    <img className={classes.img1} src={epicImg} />
                    <div className={classes.category_name_container}>
                        <div className={classes.category_name}>
                            <p>Legendary</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={classes.img2}>
                <Link to={`/products?rarity=epic`} >
                    <img className={classes.img2} src={legendaryImg} />
                    <div className={classes.category_name_container}>
                        <div className={classes.category_name}>
                            <p>Epic</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={classes.img3}>
                <Link to={`/products?rarity=common`} >
                    <img className={classes.img3} src={commonImg} />
                    <div className={classes.category_name_container}>
                        <div className={classes.category_name}>
                            <p>Common</p>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}
