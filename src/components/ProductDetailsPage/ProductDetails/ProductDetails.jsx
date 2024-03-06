import classes from "./ProductDetails.module.css"
import mockedData from '../../../../public/data.json';

export const ProductDetails = ({ id }) => {
    const productId = parseInt(id);

    const product = mockedData.find(item => item.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={classes.detailsContainer}>
            <img className={classes.img} src={product.image} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
        </div>
    );
}