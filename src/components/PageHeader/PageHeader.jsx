import { Link } from 'react-router-dom';
import classes from './PageHeader.module.css';
import ProductCartImage from "../../assets/cart-svgrepo-com.svg";

export const PageHeader = () => {
    return (
        <nav className={classes.header_container}>
            <section className={classes.header}>
                <p>JIMMY</p>
                <ul className={classes.header_options}>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/">blitzcrank</Link>
                    </li>
                    <li>
                        <Link to="/">soulfighter</Link>
                    </li>
                    <li>
                        <Link to="/">sobre</Link>
                    </li>
                </ul>
                <button className={classes.ProductCartContainer}>
                    <img src={ProductCartImage} alt="Description of the SVG" />
                    <div>5</div>
                </button>
            </section>
        </nav>
    );
};
