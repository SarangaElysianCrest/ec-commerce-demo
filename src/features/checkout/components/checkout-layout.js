import React, {useEffect, useState} from 'react';
import EditableAddressCard from "../../../common/components/address/EditableAddressCard";
import OrderSummaryView from "./OrderSummaryView";
import PromoCode from "./PromoCode";
import PaymentMethodSelector from "./PaymentMethodSelector";
import EmptyCheckout from "./empty-checkout";
import ProfileWrapper from "../../profile/ProfileWrapper";
import CheckoutWrapper from "../CheckoutWrapper";

const CheckoutLayout = (props) => {

    const [person,setPerson] = useState({fname:'',lname:'', telephone:'',company:'', notes:''});
    const [address,setAddress] = useState({address1:'',address2:'', city:'',province:'',postalCode:'',country:''});

    let cartTotalPrice = 0;


    //get current user from cognito
    useEffect(()=>{
        props && props.onCurrentUser();
    },[props]);

    console.log(address)


    let userName = props.currentUserData;

    //get current user from db
    useEffect(()=>{
        props.onUserData(userName && userName);
    },[userName])

    useEffect(()=>{
       setPerson({fname: props.getUserData.firstName, lname:props.getUserData.lastName, telephone:props.getUserData.phone, company:props.getUserData.company, notes:''})
    },[props.getUserData])

    useEffect(()=>{
        setAddress({address1: props.getUserData.addressLine1, address2:props.getUserData.addressLine2, city:props.getUserData.city, province:props.getUserData.province, postalCode:props.getUserData.postalCode, country:props.getUserData.country})
    },[props.getUserData])

    const handlePersonalChange = (name,value) => {
        setPerson({
            ...person,
            [name]:value
        })
    }

    const handleBillingChange = (name,value) => {
        setAddress({
            ...address,
            [name]:value
        })
    }

    return (
        <div className="checkout-area pt-95 pb-100">
            <div className="container">
                {props.items && props.items.length >= 1 ? (
                    <div className="row">
                        <div className="col-lg-7">
                            <EditableAddressCard
                                person={person}
                                setPerson={setPerson}
                                address={address}
                                setAddress={setAddress}
                                getUserData={props.getUserData}
                                handlePersonalChange={handlePersonalChange}
                                handleBillingChange={handleBillingChange}
                            />
                        </div>
                        <div className="col-lg-5">
                            <OrderSummaryView {...props} person={person} address={address}/>
                        </div>
                    </div>
                ) : (
                    <EmptyCheckout/>
                )
                }
            </div>
        </div>
    );
};

export default CheckoutLayout;