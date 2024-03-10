import mockedData from '../../../../public/data.json';
import classes from "./ProductDetails.module.css"
import PropTypes from 'prop-types';
import { ProductDetailsImageSlider } from '../ProductDetailsImageSlider/ProductDetailsImageSlider';
import { useEffect } from "react";
import { useShoppingCart } from '../../../context/ShoppingCart';

export const ProductDetails = ({ id }) => {
    const productId = parseInt(id); // Convert id to number

    const product = mockedData.find(item => item.id === productId);

    const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
    const quantity = getItemQuantity(productId);

    console.log(quantity);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={classes.details_container}>

            <ProductDetailsImageSlider mockedData={mockedData} />

            <div className={classes.product_information}>
                <h2 className={classes.product_name}>{product.productName}</h2>
                <p className={classes.product_description}>{product.description}</p>
                <p className={classes.product_price}>R${product.price}</p>
                <button className={classes.add_to_cart_button} onClick={() => increaseCartQuantity(productId)}> + Carrinho </button>
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
