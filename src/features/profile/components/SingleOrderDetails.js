import React, {useEffect} from 'react';
import Breadcrumb from "../../../common/components/breadcrumb";
import SingleOrderLayout from "./SingleOrderLayout";
import ProfileWrapper from "../ProfileWrapper";
import {useLocation} from "react-router";

const SingleOrderDetails = (props) => {
    let location = useLocation();
    let orderId = location.pathname.split("/")[2]
    useEffect(()=>{
        props.getOrdersByOrderId(orderId)
    },[orderId])
    console.log(props)
    return (
        <div>
            <Breadcrumb/>
            <SingleOrderLayout {...props}/>
        </div>
    );
};

export default ProfileWrapper(SingleOrderDetails);