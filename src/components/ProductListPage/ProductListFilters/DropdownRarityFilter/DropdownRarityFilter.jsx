import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from "react";
import classes from "./DropdownRarityFilter.module.css";
import data from "../../../../../data/data.json";

export const DropdownRarityFilter = ({ setFilteredProducts, initialRarity }) => {
    const [products, setProducts] = useState([]);
    const [selectedRarity, setSelectedRarity] = useState(initialRarity);
    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (data && data.length > 0) {
            setProducts(data);
            filterProducts(initialRarity);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialRarity, data, products]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const filterProducts = (rarity) => {
        if (rarity === "") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.rarity === rarity);
            setFilteredProducts(filtered);
        }
    };

    const handleRarityChange = (rarity) => {
        setSelectedRarity(rarity);
        setShow(false);
        filterProducts(rarity);
    };

    return (
        <div ref={dropdownRef} className={classes.dropdown}>
            <div onClick={() => setShow(!show)} className={`${show ? classes.select_clicked : ""} ${classes.select}`}>
                <span className={classes.selected}>{selectedRarity || "All"}</span>
                <div className={`${show ? classes.caret_rotate : ""} ${classes.caret}`}></div>
            </div>
            <ul className={`${show ? classes.menu_open : ""} ${classes.menu}`}>
                <li className={classes.option_filter} onClick={() => handleRarityChange("")}>All</li>
                <li className={selectedRarity === "common" ? classes.active : ""} onClick={() => handleRarityChange("common")}>Common</li>
                <li className={selectedRarity === "epic" ? classes.active : ""} onClick={() => handleRarityChange("epic")}>Epic</li>
                <li className={selectedRarity === "legendary" ? classes.active : ""} onClick={() => handleRarityChange("legendary")}>Legendary</li>
                <li className={selectedRarity === "mythic" ? classes.active : ""} onClick={() => handleRarityChange("mythic")}>Mythic</li>
            </ul>
        </div>
    )
}

DropdownRarityFilter.propTypes = {
    setFilteredProducts: PropTypes.func.isRequired,
    initialRarity: PropTypes.string.isRequired,
};
