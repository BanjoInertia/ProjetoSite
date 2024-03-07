import { useEffect } from 'react';
import classes from "./ProductDetails.module.css"
import mockedData from '../../../../public/data.json';

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
            <img className={classes.img} src={product.image} alt={product.productName} />
            <div className={classes.product_information}>
                <h2 className={classes.product_name}>{product.productName}</h2>
                <p className={classes.product_description}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the wheather can offer</p>
                <p className={classes.product_price}>R${product.price}</p>
                <button className={classes.add_to_cart_button}>+ Carrinho</button>
            </div>
        </div>
    );
}