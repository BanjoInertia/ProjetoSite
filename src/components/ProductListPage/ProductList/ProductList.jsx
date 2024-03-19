import PropTypes from 'prop-types';
import classes from "./ProductList.module.css";
import img3 from "../../../assets/Mythic_Skin.png";
import img2 from "../../../assets/Legendary_Skin.png";
import img1 from "../../../assets/Epic_Skin.png";
import { Link } from 'react-router-dom';

export const ProductList = ({ filteredProducts }) => {
    const getRarity = (rarity) => {
        const rarityImages = {
            'common': null,
            'epic': img1,
            'legendary': img2,
            'mythic': img3
        };
        return rarityImages[rarity] || null;
    };

    const sortedProducts = filteredProducts.slice().sort((a, b) => {
        return a.productName.localeCompare(b.productName);
    });

    return (
        <div className={classes.product_container}>
            {sortedProducts.map((product, index) => (
                <div key={index}>
                    <Link to={`/product/${product.id}`} >
                        <img className={classes.products_img} src={product.imageURLs[0]} alt={product.productName} />
                        <div className={classes.products_info_container}>
                            <div className={classes.products_info}>
                                <p>{product.productName}</p>  
                                {product.rarity !== 'common' && (
                                    <img src={getRarity(product.rarity)} alt={product.rarity} />
                                )}
                            </div>
                        </div>        
                    </Link>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    filteredProducts: PropTypes.arrayOf(PropTypes.shape({
        imageURLs: PropTypes.arrayOf(PropTypes.string.isRequired),
        productName: PropTypes.string.isRequired,
        rarity: PropTypes.oneOf(['epic', 'legendary', 'mythic']).isRequired
    })).isRequired
};
