import PropTypes from 'prop-types';
import classes from "./SearchBarFilter.module.css"

export const SearchBarFilter = ({ setSearchedProduct }) => {
    let HandleSearchedProduct = (event) => {
        let lowerCase = event.target.value.toLowerCase();
        setSearchedProduct(lowerCase);
    }

    return (
        <input
            className={classes.search_bar}
            size={50}
            type="text"
            autoComplete="off"
            onChange={HandleSearchedProduct}
            placeholder="Search for a product"
        />
    )
}

SearchBarFilter.propTypes = {
    setSearchedProduct: PropTypes.func.isRequired
};