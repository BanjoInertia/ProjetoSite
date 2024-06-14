import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DropdownRarityFilter } from "./ProductListFilters/DropdownRarityFilter/DropdownRarityFilter";
import { ProductListSetter } from "./ProductListSetter/ProductListSetter";
import { SearchBarFilter } from "./ProductListFilters/SearchBarFilter/SearchBarFilter";
import classes from "./ProductList.module.css"

export const ProductList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialRarity = queryParams.get("rarity") || "";

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className={classes.filters_container}>
                <SearchBarFilter setSearchedProduct={setSearchedProduct} />
                <DropdownRarityFilter setFilteredProducts={setFilteredProducts} initialRarity={initialRarity} />
            </div>
            <ProductListSetter filteredProducts={filteredProducts} searchedProduct={searchedProduct} />
        </div>
    );
}
