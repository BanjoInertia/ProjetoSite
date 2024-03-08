import mockedData from '../../../../public/data.json';
import classes from "./ProductDetails.module.css"

import PropTypes from 'prop-types';
import { ProductDetailsImageSlider } from '../ProductDetailsImageSlider/ProductDetailsImageSlider';
import { useEffect } from "react";

export const ProductDetails = ({ id }) => {
    const productId = parseInt(id);

    const product = mockedData.find(item => item.id === productId);

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
                <h2 className={classes.product_name}>           {product.productName}   </h2>
                <p className={classes.product_description}>     {product.description}   </p>
                <p className={classes.product_price}>           R${product.price}       </p>
                <button className={classes.add_to_cart_button}> + Carrinho              </button>
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number]).isRequired,
};