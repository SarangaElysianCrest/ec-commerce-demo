import PropTypes from 'prop-types';
import {getDiscountPrice} from "../../../helpers/product";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {useHistory, useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import {useAlerts, useAuth} from "../../../app/hooks";
import RoundButtons from "../../../common/components/buttons/round-buttons";


function OrderSummaryView(props){
    let location = useLocation();
    let cartTotalPrice = 0;
    let history = useHistory();
    const isAuthenticated = useAuth();
    const [paymentMethod, setPaymentMethod] = React.useState();
    const [promoCode,setPromoCode] = React.useState("");
    const [total,setTotal] = React.useState()
    const {setAlert} = useAlerts();

    useEffect(()=>{
        props.items.map((cartItem, key) => {
            const discountedPrice = (cartItem.price - cartItem.discount) * cartItem.quantity;
            discountedPrice != null ? (cartTotalPrice += (cartItem.price - cartItem.discount) * cartItem.quantity) : (cartTotalPrice += (cartItem.price - cartItem.discount) * cartItem.quantity);
            setTotal(cartTotalPrice)
        })
    },[props.items])

    useEffect(()=>{
        if (location.pathname !== 'checkout'){
            props.onhandleResetCoupon();
        }
    },[location])
    const handleChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    console.log(props)
    function handleCouponCode(e) {
        e.preventDefault();
        let coupon = {
            promoCodeName:promoCode,
            total:total,
        }
        props.onHandleCouponCode(coupon)
    }

    function handleOrderCheckout(e) {
        e.preventDefault();
        if(!props.person.company === true || !props.address.province === true || !props.address.postal  === true || !props.address.country  === true || !props.person.notes  === true  || !paymentMethod === true){
            setAlert({
                message: 'Fill all the fields',
                severity: 'warning'
            })
        }else{
            if (props.coupon != null && props.coupon.status === "valid"){
                let order= {
                    userId: props.currentUserData,
                    firstname: props.person.fname,
                    lastname: props.person.lname,
                    companyName: props.person.company,
                    addressLine1: props.address.address1,
                    addressLine2: props.address.address2,
                    city: props.address.city,
                    province: props.address.province,
                    postcode: props.address.postal,
                    country: props.address.country,
                    phone: props.person.telephone,
                    email: props.getUserData.email,
                    notes: props.person.notes,
                    currency: "LKR",
                    rate: 1,
                    type: paymentMethod,
                    status: 1,
                    items: props.items,
                    total:total - props.coupon.discountPrice,
                }
                props.onCheckout(order);
            }else{
                let order= {
                    userId: props.currentUserData,
                    firstname: props.person.fname,
                    lastname: props.person.lname,
                    companyName: props.person.company,
                    addressLine1: props.address.address1,
                    addressLine2: props.address.address2,
                    city: props.address.city,
                    province: props.address.province,
                    postcode: props.address.postal,
                    country: props.address.country,
                    phone: props.person.telephone,
                    email: props.getUserData.email,
                    notes: props.person.notes,
                    currency: "LKR",
                    rate: 1,
                    type: paymentMethod,
                    status: 1,
                    items: props.items,
                    total:total,
                }
                props.onCheckout(order);
            }
        }
    }

    useEffect(()=>{
        if (props.success === true){
            history.push('/order')
            props.onClearcart();
        }else{
            // console.log("failed")
        }
        return()=> {
            props.resetSuccessState()
        }
    },[props.success])
    return (
        <div className="your-order-area">
            <h3>Your Order</h3>
            <div className="your-order-wrap gray-bg-4">
                <div className="your-order-product-info">
                    <div className="your-order-top">
                        <ul>
                            <li><h4>Product</h4></li>
                            <li><h4>Total</h4></li>
                        </ul>
                    </div>
                    <div className="your-order-middle">
                        <ul>
                            {
                                props.items.map((cartItem, key) => {
                                    const discountedPriceInside = (cartItem.price - cartItem.discount) * cartItem.quantity;
                                    const finalDiscountedPrice = discountedPriceInside;
                                        return (
                                            <li key={key}>
                                          <span className="order-middle-left">
                                            {cartItem.order} X {cartItem.quantity}
                                          </span>{" "}
                                          <span className="order-price">
                                              {"LKR " +  finalDiscountedPrice }
                                          </span>
                                            </li>
                                        );
                            })}
                        </ul>
                    </div>
                    <div className="your-order-bottom">
                        <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                        </ul>
                    </div>
                    <div className="discount-code-wrapper mt-4">
                        <form onSubmit={e => handleCouponCode(e)}>
                                <div className="title-wrap"><h4 className="cart-bottom-title section-bg-gray">Use Coupon
                                    Code</h4></div>
                                <div className="discount-code"><p>Enter your coupon code if you have one.</p>
                                    <input type="text" value={props.coupon ? props.coupon.promoCodeName : null} name="name" onChange={e=>setPromoCode(e.target.value)} className="mb-4"/>
                                    <RoundButtons className={"cart-btn-2"} type={"submit"} label={"Apply Coupon"} />
                                </div>
                        </form>
                    </div>
                    <div className="your-order-total">
                        {props.coupon != null && props.coupon.status === "valid"
                                ?
                                <div>
                                    <ul>
                                        <li className="order-total"><h5>Order Amount</h5></li>
                                        <li>
                                            {
                                             "LKR "+( total)
                                            }
                                        </li>
                                    </ul>
                                    <ul>
                                    <li className="order-total"><h5>Coupon Discount</h5></li>
                                    <li>
                                        {
                                          "LKR " + '(' + props.coupon.discountPrice + ')'
                                        }
                                    </li>
                                    </ul><hr/>
                                    <ul>
                                        <li className="order-total">Total</li>
                                        <li>
                                            {"LKR" + " " + (total - props.coupon.discountPrice)}
                                        </li>
                                    </ul>
                                </div>
                                :
                                <ul>
                                    <li className="order-total">Total</li>
                                    <li>
                                        {"LKR" + " " + total}
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
                <FormControl component="fieldset">
                    <h4>Payment Method</h4>
                    <RadioGroup row aria-label="position" name="position" value={paymentMethod} onChange={handleChange}>
                        <FormControlLabel value="COD" control={<Radio color="primary" />} label="Cash on Delivery" />
                        <FormControlLabel value="BANK" control={<Radio color="primary" />} label="Bank Transfer" />
                        <FormControlLabel value="CARD" control={<Radio color="primary" />} label="Card" />
                    </RadioGroup>
                </FormControl>
            </div>
            <form action="" onSubmit={e =>handleOrderCheckout(e)}>
                <div className="place-order mt-25">
                    <button className="btn-hover" >Place Order</button>
                </div>
            </form>
        </div>
    )

};

OrderSummaryView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number
    })),
    delivery: PropTypes.string,
    total: PropTypes.number,
    deduction: PropTypes.number
}

export default OrderSummaryView;