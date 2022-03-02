import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CartWrapper from './CartWrapper';
import Breadcrumb from "../../common/components/breadcrumb";
import CartMainLayout from "./components/cart-main-layout";

export function CartView(props){
    const [total,setTotal] = useState(0);
    
    useEffect(()=>{
        let subTotal = 0;
        props.items.forEach(item => {
            subTotal += item.quantity * (item.price - item.discount);
        });
        setTotal(subTotal);
    },[props.items]);

    console.log(total)
    console.log(props.items)
    return (
        <div>
            <Breadcrumb/>
            <CartMainLayout cartItems={props.items} total={total} clearCart={props.onClearCart} changeQuantity={props.onChangeQuantity}  deleteFromCart={props.onRemoveItem} onHandleCouponCode={props.onHandleCouponCode}/>
        </div>
    )
}

CartView.propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
        variantId: PropTypes.number,
    })),
    onRemoveItem: PropTypes.func,
    onChangeQuantity: PropTypes.func,
}

export default CartWrapper(CartView);