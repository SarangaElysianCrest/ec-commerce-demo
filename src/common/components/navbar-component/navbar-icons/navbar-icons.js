import React, {useContext, useState} from 'react';
import IconButtons from "../../buttons/icon-buttons";
import {Link} from "react-router-dom";
import MobileMenu from "../mobile-menu/mobile-menu";
import {useAuth} from "../../../../app/hooks";
import {logout} from "../../../../features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import CartCompact from "../../../../features/cart/CartCompact";
import SearchContent from "./SearchContent";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LoginContent from "./LoginContent";
import CartContent from "./CartContent";

const NavbarIcons = ({
            cartData,
            deleteFromCart,
            cssClass
            }) => {

    const isAuthenticated = useAuth();
    const cartItems = useSelector(store => store.cart.items);
    let wishlistData = useSelector(store => store.wishlist.items);
    let compareData = useSelector(store => store.compare.items);



    // const handleClick = e => {
    //     e.currentTarget.nextSibling.classList.toggle("active");
    // };


    const [drawer,setDrawer] = React.useState(false);

    function handleDrawer() {
        setDrawer(true)
    }




    return (
        <div className={cssClass}>
            <SearchContent/>
            <LoginContent isAuthenticated={isAuthenticated} />
            <div className="same-style header-compare">
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                    <i className="pe-7s-shuffle" />
                    <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
                </Link>
            </div>
            <div className="same-style header-wishlist">
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                    <i className="pe-7s-like" />
                    <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
                </Link>
            </div>
            <CartContent deleteFromCart={deleteFromCart} cartItems={cartItems}/>
            <div className="same-style cart-wrap d-block d-lg-none">
                <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
                    <i className="pe-7s-shopbag" />
                    <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
                </Link>
            </div>


            {/*mobile*/}
            <div className="same-style mobile-off-canvas d-block d-lg-none">
                <IconButtons onClick={()=>handleDrawer()} buttonClass={"mobile-aside-button"} iconClass={"pe-7s-menu"}/>
            </div>
            {
                drawer ? <MobileMenu setDrawer={setDrawer}/> : null
            }
        </div>
    );
};

export default NavbarIcons;