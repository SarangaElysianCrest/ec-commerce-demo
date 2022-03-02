/** Wrap Custom Product Card Components inside this */
import React, {useEffect} from "react";
import {addToCart, resetCartAlert} from "../../features/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {addToWhishList, resetWhisListAlert} from "../../features/wishlist/wishlishSlice";
import {useAlerts} from "../../app/hooks";

export default function ProductCardWrapper(Component){
    return function ProductCartComponent(props) {
        const dispatch = useDispatch();
        const alert = useSelector(store=>store.wishlist.alert);
        const {setAlert} = useAlerts();

        const handleAddToCart = (item) => {
            dispatch(addToCart(item))
        };

        const handleAddToWishList= (item) =>{
            dispatch(addToWhishList(item))
        }


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

        return(
            <Component
                onAddToCart={handleAddToCart}
                onAddToWishList={handleAddToWishList}
                {...props}
            />)
    }
}
