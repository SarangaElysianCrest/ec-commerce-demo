import React from 'react';
import AddressList from "./AddressList";
import OrderList from "./OrderList";
import ProfileContainer from "./ProfileContainer";
import Loader from "../../../helpers/loader";

const ProfileLayout = (props) => {

    return (
       props && props.currentUserData != null ?

                <div>
                    <div className="description-review-area pb-90 mt-40">
                        <div className="container">
                            <div className="description-review-wrapper">
                                <ProfileContainer {...props}/>
                            </div>
                        </div>
                    </div>
                </div>
           :
           <Loader/>
    );
};

export default ProfileLayout;