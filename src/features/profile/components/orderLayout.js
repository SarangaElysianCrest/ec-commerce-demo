import React from 'react';
import AddressList from "./AddressList";
import OrderList from "./OrderList";
import OrderContainer from "./orderContainer";
import Loader from "../../../helpers/loader";

const OrderLayout = (props) => {

    return (
       props && props.currentUserData != null ?

                <div>
                    <div className="description-review-area pb-90 mt-40">
                        <div className="container">
                            <div className="description-review-wrapper">
                                <OrderContainer {...props}/>
                            </div>
                        </div>
                    </div>
                </div>
           :
           <Loader/>
    );
};

export default OrderLayout;