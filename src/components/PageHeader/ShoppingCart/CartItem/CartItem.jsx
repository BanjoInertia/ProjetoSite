import { formatCurrancy } from "../../../../utilities/formatCurrancy"
import { Button, Stack } from "react-bootstrap"
import Products from "../../../../../public/data.json"
import classes from "./CartItem.module.css"
import PropTypes from 'prop-types';
import { useShoppingCart } from "../../../../context/useShoppingCart";

export const CartItem = ({ id }) => {
    const { removeFromCart } = useShoppingCart()
    const item = Products.find(item => item.id === id)

    if (item === null) return null
    
    return (
        <Stack direction="horizontal" gap={2} className={classes.stack}>
            <img src={item.imageURLs[0]} className={classes.cart_item_image} />
            <div className="me-auto">
                <div className={classes.product_name}>
                    {item.productName}
                </div>
                <div className={classes.product_price}>
                    {formatCurrancy(item.price)}
                </div>
            </div>
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}

CartItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};