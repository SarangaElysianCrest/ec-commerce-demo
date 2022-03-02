import PropTypes from 'prop-types';
import OrderSummaryView from "./components/OrderSummaryView";
import PaymentMethodSelector from './components/PaymentMethodSelector';
import EditableAddressCard from '../../common/components/address/EditableAddressCard';
import PromoCode from './components/PromoCode';
import React from "react";
import CheckoutWrapper from "./CheckoutWrapper";
import Breadcrumb from "../../common/components/breadcrumb";
import CheckoutLayout from "./components/checkout-layout";

export function CheckoutView(props){

    return (
        <div>
            <Breadcrumb/>
            <CheckoutLayout {...props}/>
            {/*<OrderSummaryView*/}
            {/*    items={props.items}*/}
            {/*    delivery={props.delivery.label}*/}
            {/*    total={props.total}*/}
            {/*    deduction={props.promoCode?.deduction}*/}
            {/*/>*/}
            {/*<PromoCode*/}
            {/*    onSubmit={props.onPromoCodeApply}*/}
            {/*    promoCode={props.promoCode?.label}*/}
            {/*/>*/}
            {/*<PaymentMethodSelector*/}
            {/*    methods={props.paymentMethods}*/}
            {/*    onSelect={props.onPaymentMethodChange}*/}
            {/*/>*/}
        </div>
    )    
};

CheckoutView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number
    })),
    total: PropTypes.number,
    promoCode: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        deduction: PropTypes.number
    }),
    paymentMethods: PropTypes.arrayOf(PropTypes.shape({
        methoId: PropTypes.string,
        label: PropTypes.string
    })),
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        address: PropTypes.shape({
            addressLine1: PropTypes.string,
            addressLine2: PropTypes.string,
            city: PropTypes.string,
            province: PropTypes.string,
            postalCode: PropTypes.string,
            country: PropTypes.string,
        })
    }),
    onAddressSave: PropTypes.func,
    onCheckout: PropTypes.func,
    onPaymentMethodChange: PropTypes.func,
    onPromoCodeApply: PropTypes.func
    
}

export default CheckoutWrapper(CheckoutView)