import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAlerts} from "../../app/hooks";
import {clearCompare, removeFromCompare, resetCompareAlert} from "./compareSlice";
import {addToCart, resetCartAlert} from "../cart/cartSlice";

export default function CompareWrapper (Component) {
    return function WrappedCompare(props) {

        const dispatch = useDispatch();
        const {setAlert} = useAlerts();
        const alert = useSelector(store=>store.compare.alert);
        const items = useSelector(store=>store.compare.items);
        const cartAlert = useSelector(store=>store.cart.alert);
        const handleAddToCart = (item) => {
            dispatch(addToCart(item))
        };

        const handleCompareRemove= (item) =>{
            dispatch(removeFromCompare({sku:item}))
        }

        const handleClearCompare = () =>{
            dispatch(clearCompare())
        }

        useEffect(()=>{
            if(alert && alert.show){
                setAlert({
                    message: alert.message,
                    severity: alert.severity,
                    onClear: ()=>dispatch(resetCompareAlert())
                })
            }
        },[alert])


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
        return <Component
            items={items}
            onCompareRemove={handleCompareRemove}
            onCompareClear={handleClearCompare}
            onAddToCart={handleAddToCart}
            {...props}
        />
    }
}