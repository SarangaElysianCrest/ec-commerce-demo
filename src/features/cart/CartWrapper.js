/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useAlerts } from "../../app/hooks";
import {cartItemsSelector, removeFromCart, changeItemQty, clearCart, resetCartAlert, getCoupon} from "./cartSlice"
import {resetAlert} from "../auth/authSlice";
import {resetPromoCode} from "../checkout/checkoutSlice";

export default function CartWrapper(Component){
    return function CartComponent(props){
        const dispatch = useDispatch();
        const {setAlert} = useAlerts();
        const alert = useSelector(store=>store.cart.alert);
        const coupon = useSelector(store=>store.checkout.coupon)
        const items = useSelector(cartItemsSelector);

        const handleRemoveFromCart = (item) => {
            dispatch(removeFromCart({sku:item}))
        }

        const handleChangeQuantity = (sku,quantity) => {
            dispatch(changeItemQty({sku:sku,quantity:quantity}))
        }

        const handleClearCart = () =>{
            dispatch(clearCart())
        }

        const handleResetCoupon = () =>{
            dispatch(resetPromoCode())
        }
        // Alert Effect Hook
        useEffect(()=>{
            if(alert && alert.show) {
                setAlert({
                    message: alert.message,
                    severity: alert.severity,
                    onClear: ()=>dispatch(resetCartAlert())
                })
            }
        },[alert]);

        return <Component 
            onRemoveItem = {handleRemoveFromCart}
            onChangeQuantity = {handleChangeQuantity}
            onClearCart = {handleClearCart}
            onhandleResetCoupon = {handleResetCoupon}
            items={items}
            {...props}/>
    }
}