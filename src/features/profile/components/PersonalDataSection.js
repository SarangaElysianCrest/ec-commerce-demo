import React from 'react';
import PersonalDetails from "./PersonalDetails";
import ChangePassword from "./ChangePassword";
import AddressList from "./AddressList";

const PersonalDataSection = (props) => {
    return (
        <div className="myaccount-area">
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-lg-12">
                        <div className="myaccount-wrapper">
                            <PersonalDetails {...props}/>
                            <ChangePassword {...props}/>
                            <AddressList {...props}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDataSection;