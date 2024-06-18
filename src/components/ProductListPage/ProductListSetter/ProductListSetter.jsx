import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classes from "./ProductListSetter.module.css";
import img3 from "../../../assets/Mythic_Skin.png";
import img2 from "../../../assets/Legendary_Skin.png";
import img1 from "../../../assets/Epic_Skin.png";
import { Link } from 'react-router-dom';

export const ProductListSetter = ({ filteredProducts, searchedProduct }) => {
    const [searchedData, setSearchedData] = useState([]);

    const getRarity = (rarity) => {
        const rarityImages = {
            'common': null,
            'epic': img1,
            'legendary': img2,
            'mythic': img3
        };
        return rarityImages[rarity] || null;
    };

    const sortedProducts = useMemo(() => {
        return filteredProducts.slice().sort((a, b) => {
            return a.productName.localeCompare(b.productName);
        });
    }, [filteredProducts]);

    useEffect(() => {
        const fetchData = async () => {
            const data = sortedProducts;
            setSearchedData(data);
        };

        fetchData();
    }, [sortedProducts]);

    const filteredData = searchedData
        .filter((el) => {
            if (searchedProduct === '') {
                return true;
            } else {
                return el.productName.toLowerCase().includes(searchedProduct.toLowerCase());
            }
        })
        .sort((a, b) => {
            const startsWithSearchedLetterA = a.productName.toLowerCase().startsWith(searchedProduct.toLowerCase());
            const startsWithSearchedLetterB = b.productName.toLowerCase().startsWith(searchedProduct.toLowerCase());
            
            if (startsWithSearchedLetterA && !startsWithSearchedLetterB) {
                return -1;
            } else if (!startsWithSearchedLetterA && startsWithSearchedLetterB) {
                return 1;
            } else {
                return a.productName.localeCompare(b.productName);
            }
        });

    console.log(filteredData)

    return (
        <>
            <h1 className={classes.products_title}>Products</h1>
            {filteredData.length === 0 ? (
                <p className={classes.products_not_found_message}>No products found.</p>
            ) : (
                <div className={classes.products_container}>
                    {filteredData.map((product, index) => (
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
            )}
        </>
    );
};

ProductListSetter.propTypes = {
    filteredProducts: PropTypes.arrayOf(PropTypes.shape({
        imageURLs: PropTypes.arrayOf(PropTypes.string.isRequired),
        productName: PropTypes.string.isRequired,
        rarity: PropTypes.oneOf(['common', 'epic', 'legendary', 'mythic']).isRequired
    })).isRequired,
    searchedProduct: PropTypes.string.isRequired
};
