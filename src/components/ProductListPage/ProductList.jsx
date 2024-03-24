import { useEffect, useState } from "react";
import { DropdownRarityFilter } from "./ProductListFilters/DropdownRarityFilter/DropdownRarityFilter";
import { ProductListSetter } from "./ProductListSetter/ProductListSetter";
import classes from "./ProductList.module.css"
import { SearchBarFilter } from "./ProductListFilters/SearchBarFilter/SearchBarFilter";

export const ProductList = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className={classes.filters_container}>
                <SearchBarFilter setSearchedProduct={setSearchedProduct} />
                <DropdownRarityFilter setFilteredProducts={setFilteredProducts} />
            </div>
            <ProductListSetter filteredProducts={filteredProducts} searchedProduct={searchedProduct} />
        </div>
    );
}