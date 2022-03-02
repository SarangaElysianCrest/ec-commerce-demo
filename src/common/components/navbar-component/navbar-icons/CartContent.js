import React, {useEffect} from 'react';
import CartCompact from "../../../../features/cart/CartCompact";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {useLocation} from "react-router-dom";

const CartContent = ({cartItems, deleteFromCart}) => {
    let location = useLocation();
    const [open, setOpen] = React.useState(false);
    const handleClickAway = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    useEffect(()=>{
        setOpen(false);
    },[location])
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className="same-style cart-wrap d-none d-lg-block">
            <button className="icon-cart" onClick={e => handleClick(e)}>
                <i className="pe-7s-shopbag" />
                <span className="count-style">
                        {cartItems && cartItems.length ? cartItems.length : 0}
                  </span>
            </button>
            {/* menu cart */}
            {
                open ?
                    <CartCompact
                        cartData={cartItems}
                        currency={"lkr"}
                        deleteFromCart={deleteFromCart}
                    />
                    : null
            }
        </div>
        </ClickAwayListener>
    );
};

export default CartContent;