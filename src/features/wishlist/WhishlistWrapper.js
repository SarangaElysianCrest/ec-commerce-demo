import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useAlerts} from "../../app/hooks";
import {addToWhishList, clearWishList, removeFromWishList, resetWhisListAlert} from "./wishlishSlice";
import {addToCart} from "../cart/cartSlice";
import {resetCartAlert} from "../cart/cartSlice";



export default function WhishlistWrapper (Component) {
    return function WrappedWhishlist(props) {
        const dispatch = useDispatch();
        const {setAlert} = useAlerts();
        const items = useSelector(store=>store.wishlist.items);
        const alert = useSelector(store=>store.wishlist.alert);
        const cartAlert = useSelector(store => store.cart.alert);



        const handleAddToCart = (item) => {
            dispatch(addToCart(item))
        };

        const handleAddToWishList= (item) =>{
            dispatch(addToWhishList(item))
        }

        const handleRemoveWishList= (item) =>{
            dispatch(removeFromWishList({sku:item}))
        }

        const handleClearWishList = () =>{
            dispatch(clearWishList())
        }


        useEffect(()=>{
            if(cartAlert && cartAlert.show) {
                setAlert({
                    message: cartAlert.message,
                    severity: cartAlert.severity,
                    onClear: ()=>dispatch(resetCartAlert())
                })
            }
        },[cartAlert])

        return <Component
                items={items}
                onAddToWishList={handleAddToWishList}
                onRemoveWishList={handleRemoveWishList}
                onClearWishList={handleClearWishList}
                onAddToCart={handleAddToCart}
                {...props}
                />
    }
}

