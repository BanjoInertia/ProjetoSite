import classes from "./SearchBarFilter.module.css"

export const SearchBarFilter = ({ setSearchedProduct }) => {
    let HandleSearchedProduct = (event) => {
        let lowerCase = event.target.value.toLowerCase();
        setSearchedProduct(lowerCase);
    }

    return (
        <input
            data-testid="pokemon-search-bar"
            size={50}
            type="text"
            id="searchProduct"
            name="searchProduct"
            autoComplete="off"
            onChange={HandleSearchedProduct}
            placeholder="Search for a pokemon"
        />
    )
}