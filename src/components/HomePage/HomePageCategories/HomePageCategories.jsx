import classes from "./HomePageCategories.module.css"

import categoryImg1 from "../../../assets/SoulFighterJhin.png"
import categoryImg2 from "../../../assets/OldWestJhin.png"
import categoryImg3 from "../../../assets/DarkCosmicJhin.png"

export const HomePageCategories = () => {
    return (
            <div className={classes.categorias_card}>

                <div className={classes.img1}>
                    <img className={classes.img1} src={categoryImg1} />
                    <p className={classes.texto_img}>category 1</p>
                </div>

                <div className={classes.img2}>
                    <img className={classes.img2} src={categoryImg2} />
                    <p className={classes.texto_img}>category 2</p>
                </div>

                <div className={classes.img3}>
                    <img className={classes.img3} src={categoryImg3} />
                    <p className={classes.texto_img}>category 3</p>
                </div>
                
            </div>
    )
}