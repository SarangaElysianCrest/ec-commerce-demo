import PropTypes from 'prop-types';
import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import OrderTable from "./OrderTable";

export default function OrderList(props){
    console.log(props)
    useEffect(()=>{
        props.getOrdersByUserId(props.currentUserData)
    },[props.currentUserData])

    return (
        <div className="myaccount-area">
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-lg-12">
                        <div className="myaccount-wrapper">
                            <Card.Body>
                                <div className="myaccount-info-wrapper">
                                    <div className="account-info-wrapper">
                                        <h4>My Order Details</h4>
                                    </div><hr/>
                                    {
                                        props && props.ordersData &&  props.ordersData.length === 0 ?
                                            (
                                                <div className="entries-wrapper align-items-center ">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 justify-content-center">
                                                            <h5>You have no previous orders</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )   :
                                            (
                                                <div className="entries-wrapper align-items-center ">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 justify-content-center">
                                                            <OrderTable {...props}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    }

                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

OrderList.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            quantity: PropTypes.number,
            price: PropTypes.number
        })),
    })),
    onLoadOrders: PropTypes.func
}