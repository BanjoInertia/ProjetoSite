import { Link } from 'react-router-dom';
import classes from './PageHeader.module.css';
import ProductCartImage from "../../assets/cart-svgrepo-com.svg";
import { useShoppingCart } from '../../context/useShoppingCart';

export const PageHeader = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <nav className={classes.header_container}>
            <section className={classes.header}>
                <p>JIMMY</p>
                <ul className={classes.header_options}>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/products">products</Link>
                    </li>
                    <li>
                        <Link to="/">soulfighter</Link>
                    </li>
                    <li>
                        <Link to="/">sobre</Link>
                    </li>
                </ul>
                <button className={classes.ProductCartContainer} onClick={openCart}>
                    <img src={ProductCartImage} alt="Description of the SVG" />
                    {
                        cartQuantity > 0 && (
                            <div>{cartQuantity}</div>
                        )
                    }
                </button>
            </section>
        </nav>
    );
};
