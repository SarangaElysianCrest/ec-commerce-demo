import React, {useEffect, useState} from "react";
import { CheckoutView } from "./CheckoutView";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {createCheckout, getCoupon, resetCheckoutAlert, resetPromoCode, resetSuccess} from "./checkoutSlice";
import {currentUser, getUserData} from "../profile/profileSlice";
import {clearCart, resetCartAlert} from "../cart/cartSlice";
import {useAlerts} from "../../app/hooks";

export default function CheckoutWrapper(Component){
    return function CheckoutComponent(props){
        const dispatch = useDispatch();
        const {setAlert} = useAlerts();
        const [paymentMethod,setPaymentMethod] = useState();
        const cartItems = useSelector(store=>store.cart.items);
        const users = useSelector(store => store.profile.user);
        const profile = useSelector(store => store.profile.profile);
        const success = useSelector(store => store.checkout.successState);
        const loading = useSelector(store => store.checkout.loading);
        const alert = useSelector(store=>store.checkout.alert);
        const cartAlert = useSelector(store=>store.cart.alert);
        const couponData = useSelector(store=>store.checkout.coupon)
        const [promoCode,setPromoCode] = useState(null);
        const [deliveryAddress,setDeliveryAddress] = useState(null);

        const total = 0;

        const paymentMethods = [];

        const handleCurrentUser=()=>{
            dispatch(currentUser())
        }
        const handleGetUserData = (username) =>{
            dispatch(getUserData({username}))
        }

        const handleAddressSave = (address) => {
            setDeliveryAddress(address);
        };

        const handleSuccess = () =>{
            dispatch(resetSuccess())
        }

        const handleCouponCode = (coupon)=>{
            if (couponData !== null && couponData.status === "valid"){
                setAlert({
                    message: "Already added",
                    severity: 'error',
                })
            }else{
                dispatch(getCoupon({coupon}))
            }

        }
        const handlePromoCodeReset = () =>{
            dispatch(resetPromoCode())
        }

        const handlePromoCodeApply = (code) => {
            //TODO 1. Check if Promo code is valid 
            // 2. Get Promo Code deduction amount
            // 3. if(isValid(code))
            setPromoCode({
                id: '', // Get from response
                label: '', // Get from response
                deduction: 0 // Get from response
            })
        }

        const handlePaymentMethodChange = (methodId) => {
            setPaymentMethod(methodId);
        }

        const handleCheckout = (order) => {
            console.log(order)
                dispatch(createCheckout({order}))
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
                    onClear: ()=>dispatch(resetCheckoutAlert())
                })
            }
        },[alert]);

        // Alert Effect Hook
        useEffect(()=>{
            if(cartAlert && cartAlert.show) {
                setAlert({
                    message: cartAlert.message,
                    severity: cartAlert.severity,
                    onClear: ()=>dispatch(resetCartAlert())
                })
            }
        },[cartAlert]);

        return <CheckoutView 
            items={cartItems && cartItems}
            total={total}
            paymentMethods={paymentMethods}
            promoCode={promoCode}
            onCurrentUser={handleCurrentUser}
            onAddressSave={handleAddressSave}
            onPromoCodeApply={handlePromoCodeApply}
            onPaymentMethodChange={handlePaymentMethodChange}
            onCheckout={handleCheckout}
            onUserData={handleGetUserData}
            getUserData={profile}
            currentUserData={users}
            onClearcart={handleClearCart}
            success={success}
            coupon={couponData}
            onHandleCouponCode={handleCouponCode}
            onhandlePromoCodeReset={handlePromoCodeReset}
            onhandleResetCoupon={handleResetCoupon}
            resetSuccessState={handleSuccess}
            {...props}
            />
    }
}