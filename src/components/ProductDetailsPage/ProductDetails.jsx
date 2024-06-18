import data from '../../../public/data.json';
import classes from "./ProductDetails.module.css"
import PropTypes from 'prop-types';
import { ProductDetailsImageSlider } from './ProductDetailsImageSlider/ProductDetailsImageSlider';
import { useEffect } from "react";
import { formatCurrency } from '../../utilities/formatCurrency';
import { useShoppingCart } from '../../context/useShoppingCart';

export const ProductDetails = ({ id }) => {
    const productId = parseInt(id);

    const product = data.find(item => item.id === productId);

    const { increaseCartQuantity } = useShoppingCart();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={classes.details_container}>
            <ProductDetailsImageSlider product={product} />
            <div className={classes.product_information_container}>
                <h2 className={classes.product_name}>{product.productName}</h2>           
                <div className={classes.product_information}>
                    <p className={classes.product_description}>{product.description}</p>
                    <div>
                        <p className={classes.product_price}>{formatCurrency(product.price)}</p>
                        <button className={classes.add_to_cart_button} onClick={() => increaseCartQuantity(productId)}> + Cart </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
