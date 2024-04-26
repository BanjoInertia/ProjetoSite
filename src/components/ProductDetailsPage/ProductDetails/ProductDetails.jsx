import mockedData from '../../../../public/data.json';
import classes from "./ProductDetails.module.css"
import PropTypes from 'prop-types';
import { ProductDetailsImageSlider } from '../ProductDetailsImageSlider/ProductDetailsImageSlider';
import { useEffect } from "react";
import { formatCurrancy } from '../../../utilities/formatCurrancy';
import { useShoppingCart } from '../../../context/useShoppingCart';

export const ProductDetails = ({ id }) => {
    const productId = parseInt(id); // Convert id to number

    const product = mockedData.find(item => item.id === productId);

    const { increaseCartQuantity } = useShoppingCart();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={classes.details_container}>

            <ProductDetailsImageSlider imageURLs={product.imageURLs} />

            <div className={classes.product_information_container}>
                <h2 className={classes.product_name}>{product.productName}</h2>           
                <div className={classes.product_information}>
                    <p className={classes.product_description}>{product.description}</p>
                    <div>
                        <p className={classes.product_price}>{formatCurrancy(product.price)}</p>
                        <button className={classes.add_to_cart_button} onClick={() => increaseCartQuantity(productId)}> + Carrinho </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
