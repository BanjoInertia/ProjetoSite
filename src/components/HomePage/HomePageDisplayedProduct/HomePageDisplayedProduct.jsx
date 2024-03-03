import img from "../../../assets/blitzPrincipal.png";
import classes from "./HomePageDisplayedProduct.module.css"

export const HomePageDisplayedProduct = () => {
    return (
        <section className={classes.displayedProductContainer}>
            <div>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p>Experience natural, lifelike audio and excepitional build quality made for the passionate music enthusiast</p>
                <a><button>SEE PRODUCT</button></a>
            </div>
            <img className={classes.productImage} src={img} alt="Blitz"/>
        </section>
    )
}