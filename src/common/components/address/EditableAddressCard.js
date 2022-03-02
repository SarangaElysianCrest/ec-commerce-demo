import React, {useEffect, useState} from "react";

function EditableAddressCard(props){

    return (
        <div className="billing-info-wrap">
            <h3>Billing Details</h3>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <label>First Name</label>
                    <input name={"f_name"}  type={"text"} className="billing-info mb-20" value={props.person.fname} onChange = {(e) => props.handlePersonalChange('fname',e.target.value)} required={true}/>
                </div>
                <div className="col-lg-6 col-md-6">
                    <label>Last Name</label>
                    <input name={"l_name"} type={"text"} className="billing-info mb-20" value={props.person.lname}  onChange = {(e) => props.handlePersonalChange('lname',e.target.value)} required={true}/>
                </div>
                <div className="col-lg-6 col-md-6">
                        <label>Phone</label>
                        <input name={"phone"} className="billing-info mb-20"  value={props.person.telephone} type="text" minlength="9"  maxlength="10" onChange = {(e) => props.handlePersonalChange('telephone',e.target.value)} required={true}/>
                </div>

                <div className="col-lg-6 col-md-6">
                        <label>Email Address</label>
                        <input name={"email"} type={"text"} className="billing-info mb-20" value={props.getUserData.email}/>
                </div>
                <div className="col-lg-12">
                    <label>Company Name</label>
                    <input name={"company"} type={"text"} className="billing-info mb-20"  value={props.person.company} onChange = {(e) => props.handlePersonalChange('company',e.target.value)} required={true}/>
                </div>
                <div className="col-lg-12 col-md-12">
                    <label>Address Line 1</label>
                    <input name={"address1"} type={"text"}  className="billing-info mb-20" value={props.address.address1} onChange = {(e) => props.handleBillingChange('address1',e.target.value)}required={true} />
                </div>
                <div className="col-lg-12 col-md-12">
                    <label>Address Line 2</label>
                    <input name={"address2"} type={"text"} className="billing-info mb-20" value={props.address.address2} onChange = {(e) => props.handleBillingChange('address2',e.target.value)} required={true}/>
                </div>
                <div className="col-lg-12">
                        <label>Town / City</label>
                        <input name={"city"} type={"text"} className="billing-info mb-20" value={props.address.city} onChange = {(e) => props.handleBillingChange('city',e.target.value)} required={true}/>
                </div>
                <div className="col-lg-12 col-md-12">
                    <label>Province</label>
                    <input name={"province"} type={"text"} className="billing-info mb-20" value={props.address.province} onChange = {(e) => props.handleBillingChange('province',e.target.value)} required={true}/>
                </div>
                <div className="col-lg-12 col-md-12">
                    <label>Postal Code</label>
                    <input name={"postalCode"} type={"text"}className="billing-info mb-20" value={props.address.postalCode} minlength="5"  maxlength="5" onChange = {(e) => props.handleBillingChange('postalCode',e.target.value)} required={true} />
                </div>
                <div className="col-lg-6 col-md-12">
                        <label>State / County</label>
                        <input name={"country"} className="billing-info mb-20" type={"text"} value={props.address.country} onChange = {(e) => props.handleBillingChange('country',e.target.value)} required={true}/>
                </div>
            </div>

            <div className="additional-info-wrap">
                <h4>Additional Information</h4>
                <div className="additional-info">
                    <label>Order notes</label>
                    <textarea
                        placeholder="Notes about your order, e.g. special notes for delivery. "
                        name="message"
                        defaultValue={""}
                        onChange = {(e) => props.handlePersonalChange('notes',e.target.value)}
                    />
                </div>
            </div>
        </div>
    )

}

// EditableAddressCard.propTypes = {
//     onSave: PropTypes.func,
//     addressLine1: PropTypes.string.isRequired,
//     addressLine2: PropTypes.string.isRequired,
//     city: PropTypes.string,
//     province: PropTypes.string,
//     postalCode: PropTypes.string,
//     country: PropTypes.string,
//     showEmail: PropTypes.bool,
//     email: PropTypes.string,
//     showPhone: PropTypes.bool,
//     phone: PropTypes.number,
//     showName: PropTypes.bool,
//     firstName: PropTypes.string,
//     lastName: PropTypes.string
// }

export  default EditableAddressCard