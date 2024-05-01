import { Link } from 'react-router-dom';
import classes from './PageHeader.module.css';
import ProductCartIcon from "../../assets/icon-shopping-cart.svg";
import { useShoppingCart } from '../../context/useShoppingCart';

export const PageHeader = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <nav className={classes.header_container}>
            <section className={classes.header}>
                <p className={classes.page_logo}>STORE</p>
                <ul className={classes.header_options}>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/products">products</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
                <button className={classes.Product_cart_container} onClick={openCart}>
                    <img src={ProductCartIcon} alt="Shopping Cart" />
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
