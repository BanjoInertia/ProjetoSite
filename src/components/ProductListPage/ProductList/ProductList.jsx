import PropTypes from 'prop-types';
import classes from "./ProductList.module.css";
import img3 from "../../../assets/Mythic_Skin.png";
import img2 from "../../../assets/Legendary_Skin.png";
import img1 from "../../../assets/Epic_Skin.png";

export const ProductList = ({ filteredProducts }) => {
    const getRarity = (rarity) => {
        const rarityImages = {
            'epic': img1,
            'legendary': img2,
            'mythic': img3
        };
        return rarityImages[rarity] || null;
    };

    return (
        <div className={classes.product_container}>
            {filteredProducts.map((product, index) => (
                <div key={index} className={classes.products_card}>
                    <img className={classes.products_img} src={product.imageURLs[0]} alt={product.productName} />
                    <div className={classes.products_info_container}>
                        <div className={classes.products_info}>
                            <p>{product.productName}</p>  
                            <img src={getRarity(product.rarity)} alt={product.rarity} />
                        </div>
                    </div>
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
