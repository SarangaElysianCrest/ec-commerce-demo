import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import CheckoutTextField from "../../../common/components/text-field/checkout-text-field";
import ProfileWrapper from "../ProfileWrapper";

const PersonalDetails = (props) => {

    const [person,setPerson] = useState({fname:'',lname:'', telephone:'',homePhone:''});

    //get current user from cognito
    useEffect(()=>{
            props.onCurrentUser();
        setPerson({fname: props.getUserData.firstName, lname:props.getUserData.lastName, telephone:props.getUserData.phone , homePhone:props.getUserData.homePhone})
    },[props])

    let userName = props.currentUserData;

//get current user from db
    useEffect(()=>{
            props.onUserData(props&&props.currentUserData);
    },[userName])

    useEffect(()=>{
        setPerson({fname: props.getUserData.firstName, lname:props.getUserData.lastName, telephone:props.getUserData.phone , homePhone:props.getUserData.homePhone})
    },[])

    function handleChangePersonalDetails(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        let addressLine1 = props.getUserData.addressLine1
        let addressLine2 = props.getUserData.addressLine2
        let city = props.getUserData.city
        let province = props.getUserData.province
        let postalCode = props.getUserData.postalCode
        console.log(person)
        props.onUpdateUser(userName,props.getUserData.email, person.fname, person.lname, person.telephone, person.homePhone, addressLine1,addressLine2,city, province, postalCode)
    }

    const handlePersonalChange = (name,value) => {
        console.log(name,value)
        setPerson({
            ...person,
            [name]:value
        })
    }


    return (
        <Card.Body>
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>My Account Information</h4>
                    <h5>Your Personal Details</h5>
                </div><hr/>
                <form onSubmit={handleChangePersonalDetails}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <label>First Name</label>
                        <input label={"f_name"} type={"text"} value={person.fname} onChange = {(e) => handlePersonalChange('fname',e.target.value)} />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>Last Name</label>
                        <input label={"lname"} type={"text"} value={person.lname}   onChange = {(e) => handlePersonalChange('lname',e.target.value)}/>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <label>Email Address</label>
                        <input label={"email"} type={"text"} value={props.getUserData.email}/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>Telephone</label>
                        <input label={"telephone"} type={"text"} minLength="10" maxlength="10" value={person.telephone}  onChange = {(e) => handlePersonalChange('telephone',e.target.value)}/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>Home Phone</label>
                        <input label={"homePhone"} type={"text"} minLength="10" maxlength="10" value={person.homePhone}  onChange = {(e) => handlePersonalChange('homePhone',e.target.value)}/>
                    </div>
                </div>
                <div className="billing-back-btn">
                        <button className="billing-btn" type="submit">Update Personal Information</button>
                </div>
                </form>
            </div>
        </Card.Body>
    
    );
};

export default PersonalDetails;