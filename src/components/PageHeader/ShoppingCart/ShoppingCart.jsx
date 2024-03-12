import PropTypes from 'prop-types';
import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCart"
import  "bootstrap/dist/css/bootstrap.min.css"

export const ShoppingCart = ({ isOpen }) => {
    const { closeCart } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Cart
                </Offcanvas.Title>
                <Offcanvas.Body>
                    dasdas
                </Offcanvas.Body>
            </Offcanvas.Header>
        </Offcanvas>
    )
}

ShoppingCart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
