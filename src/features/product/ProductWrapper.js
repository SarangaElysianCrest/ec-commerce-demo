/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlerts } from "../../app/hooks";
import {addToCart} from '../cart/cartSlice';
import {getProductsById, getProductsBySKU} from "./productSlice";
import {resetCartAlert} from "../cart/cartSlice";
import {addToWhishList, resetWhisListAlert} from "../wishlist/wishlishSlice";
import {addToCompare, resetCompareAlert} from "../compare/compareSlice";

export default function ProductWrapper(Component){
    return function ProductComponent(props){
        const {id} = useParams();
        const dispatch = useDispatch();
        const {setAlert} = useAlerts();
        const product = useSelector(store => store.product.product) || []
        const products = useSelector(store => store.shop.current.products) || [];
        const cartAlert = useSelector(store => store.cart.alert);
        const alert = useSelector(store=>store.wishlist.alert);
        const CompareAlert = useSelector(store=>store.compare.alert);
        const cartItems = useSelector(store => store.cart.items);


        const reviews = [];


        useEffect(()=>{
            dispatch(getProductsById({id}))
        },[products])
        const handleAddToCart = (item) => {
            dispatch(addToCart(item))
        };
        const handleAddToCompare = (item) => {
            dispatch(addToCompare(item))
        };

        const handleAddToWishlist = (item) => {
            dispatch(addToWhishList(item))
        };
        const handleLoadReviews = () => {};
        const handleInteractWithReview = () => {};
        const handleCreateReview = () => {};
        const handleEditReview = () => {};
        const handleDeleteReview = () => {};


        useEffect(()=>{
            if(cartAlert && cartAlert.show) {
                setAlert({
                    message: cartAlert.message,
                    severity: cartAlert.severity,
                    onClear: ()=>dispatch(resetCartAlert())
                })
            }
        },[cartAlert])

        // Alert Effect Hook
        useEffect(()=>{
            if(alert && alert.show) {
                setAlert({
                    message: alert.message,
                    severity: alert.severity,
                    onClear: ()=>dispatch(resetWhisListAlert())
                })
            }
        },[alert]);

        useEffect(()=>{
            if(CompareAlert && CompareAlert.show){
                setAlert({
                    message: CompareAlert.message,
                    severity: CompareAlert.severity,
                    onClear: ()=>dispatch(resetCompareAlert())
                })
            }
        },[CompareAlert])


        return(<>
        {!!product&&
            <Component
            onAddToCart={handleAddToCart}
            onAddToCompare={handleAddToCompare}
            onAddToWishlist={handleAddToWishlist}
            reviews={reviews}
            onLoadReviews={handleLoadReviews}
            onInteractWithReview={handleInteractWithReview}
            onCreateReview={handleCreateReview}
            onEditReview={handleEditReview}
            onDeleteReview={handleDeleteReview}
            {...product}
            {...props}
            />
        }
            </>
        ) 
        
    }
}