import { useEffect } from "react";
import img from "../../../assets/blitzPrincipal.png";
import classes from "./HomePageWelcomeDisplay.module.css"
import { Link } from "react-router-dom";

export const HomePageWelcomeDisplay = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.display_container}>
            <section className={classes.displayed_product_container}>
                <div>
                    <h1>WELCOME TO THE STORE</h1>
                    <p>Enhance your gaming experience with our selection of skins. Explore our catalog to find the perfect style!</p>
                    <Link to="/products"><button>SEE PRODUCTS</button></Link>
                </div>
                <img className={classes.product_image} src={img} alt="Blitz"/>
            </section>
        </div>
    )
}