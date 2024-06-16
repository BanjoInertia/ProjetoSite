import { Offcanvas, Stack } from "react-bootstrap"
import { CartItem } from './CartItem/CartItem';
import { formatCurrancy } from '../../../utilities/formatCurrancy';
import { useShoppingCart } from '../../../context/useShoppingCart';

import PropTypes from 'prop-types';
import Products from "/public/data.json"
import "./ShoppingCart.scss"

export const ShoppingCart = ({ isOpen }) => {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas className='cart' show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton closeVariant='white'>
                <Offcanvas.Title className='cart_tittle'>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartItems && cartItems.length > 0 ? (
                        <Stack gap={3}>
                            {
                                cartItems.map(item => (
                                    <CartItem key={item.id} {...item} />
                                ))
                            }
                            <div className='ms-auto fw-bold fs-4'>
                                Total {" "}
                                {formatCurrancy(
                                    cartItems.reduce((total, cartItem) => {
                                        const item = Products.find(item => item.id === cartItem.id)
                                        return total + (item?.price || 0)
                                    }, 0)
                                )}
                            </div>
                        </Stack>
                    ) : (
                        <p>No items in the cart.</p>
                    )
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

ShoppingCart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};
