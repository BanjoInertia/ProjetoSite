import { useEffect } from "react";
import img from "../../../assets/blitzPrincipal.png";
import classes from "./HomePageDisplayedProduct.module.css"

export const HomePageDisplayedProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.display_container}>
            <section className={classes.displayed_product_container}>
                <div>
                    <h1>XX99 MARK II HEADPHONES</h1>
                    <p>Experience natural, lifelike audio and excepitional build quality made for the passionate music enthusiast</p>
                    <a><button>SEE PRODUCT</button></a>
                </div>
                <img className={classes.product_image} src={img} alt="Blitz"/>
            </section>
        </div>
    )
}