import { useEffect, useState } from "react";
import classes from "./FilteredProductList.module.css";
import data from "../../../../public/data.json";
import { ProductList } from "../ProductList/ProductList";

export const FilteredProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedRarity, setSelectedRarity] = useState("");

    useEffect(() => {
        if (data && data.length > 0) {
            setProducts(data);
            filterProducts(selectedRarity);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, selectedRarity, filteredProducts]);

    const filterProducts = (rarity) => {
        if (rarity === "") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.rarity === rarity);
            setFilteredProducts(filtered);
        }
    };

    const handleRarityChange = (event) => {
        const rarity = event.target.value;
        setSelectedRarity(rarity);
    };

    return (
        <div>




            <div className={classes.dropdown}>
                <div className={classes.select}>
                    <span className={classes.selected}>Figma</span>
                    <div className={classes.caret}></div>
                </div>
                <ul>
                    <li>Framer</li>
                    <li>Framer</li>
                    <li>Framer</li>
                    <li className={classes.active}>Framer</li>
                    <li>Framer</li>
                </ul>
            </div>





            {/* <div className={classes.filter_container}>
                <select className={classes.select_filter} value={selectedRarity} onChange={handleRarityChange}>
                    <option className={classes.option_filter} value="">All</option>
                    <option value="common">Common</option>
                    <option value="epic">Epic</option>
                    <option value="legendary">Legendary</option>
                    <option value="mythic">Mythic</option>
                </select>
            </div> */}
            <ProductList filteredProducts={filteredProducts} />
        </div>
    );
};