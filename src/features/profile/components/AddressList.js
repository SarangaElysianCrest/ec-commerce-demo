import PropTypes from 'prop-types';

import React, {useEffect, useState} from "react";
import CheckoutTextField from "../../../common/components/text-field/checkout-text-field";
import Card from "react-bootstrap/Card";
export default function AddressList(props){

    const [address,setAddress] = useState({address1:'',address2:'', city:'',  province:'', postalCode:''});

    useEffect(()=>{
        setAddress({address1: props.getUserData.addressLine1, address2:props.getUserData.addressLine2, city:props.getUserData.city,  province:props.getUserData.province, postalCode:props.getUserData.postalCode})
    },[props])

    let userName = props.currentUserData;

    function handleChangeAddress(e) {
        e.preventDefault();
        props.onUpdateUser(userName, props.getUserData.email, props.getUserData.firstName, props.getUserData.lastName, props.getUserData.phone, props.getUserData.homePhone, address.address1, address.address2, address.city, address.province, address.postalCode )
    }

    const handleBillingChange = (name,value) => {
        setAddress({
            ...address,
            [name]:value
        })
    }
    return (

        <Card.Body>
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>My Address Information</h4>
                    <h5>Your Default Address</h5>
                </div><hr/>
                <form onSubmit={handleChangeAddress}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <label>Address Line 1</label>
                            <input label={"address1"} type={"text"} value={address.address1} onChange = {(e) =>handleBillingChange('address1',e.target.value)} />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <label>Address Line 2</label>
                            <input label={"address2"} type={"text"} value={address.address2} onChange = {(e) => handleBillingChange('address2',e.target.value)} />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <label>City</label>
                            <input label={"city"} type={"text"} value={address.city} onChange = {(e) => handleBillingChange('city',e.target.value)}/>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <label>Province</label>
                            <input label={"province"} type={"text"} value={address.province}  onChange = {(e) => handleBillingChange('province',e.target.value)}/>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <label>Postal Code</label>
                            <input label={"postalCode"} type={"text"} minLength="5" maxlength="5" value={address.postalCode}  onChange = {(e) => handleBillingChange('postalCode',e.target.value)}/>
                        </div>
                    </div>
                    <div className="billing-back-btn">
                        <button className="billing-btn" type="submit">Update Address</button>
                    </div>
                </form>
            </div>
        </Card.Body>

    )
}

AddressList.propTypes = {
    addresses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        city: PropTypes.string,
        province: PropTypes.string,
        postalCode: PropTypes.number,
        country: PropTypes.string,
    })),
    onAddAddress: PropTypes.func,
    onUpdateAddress: PropTypes.func,
    onDeleteAddress: PropTypes.func,
}

