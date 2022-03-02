import PropTypes from 'prop-types';
import ProfileWrapper from './ProfileWrapper';
import React from "react";
import Breadcrumb from "../../common/components/breadcrumb";
import OrderLayout from "./components/orderLayout";

export function OrderView(props){

    return  <div>
                <Breadcrumb/>
                <OrderLayout {...props}/>
            </div>
}

OrderView.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            quantity: PropTypes.number,
            price: PropTypes.number
        })),

    })),
}

export default ProfileWrapper(OrderView);