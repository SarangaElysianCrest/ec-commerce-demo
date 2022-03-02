import PropTypes from 'prop-types';
import ProfileWrapper from './ProfileWrapper';
import React from "react";
import Breadcrumb from "../../common/components/breadcrumb";
import ProfileLayout from "./components/ProfileLayout";

export function ProfileView(props){

    return  <div>
                <Breadcrumb/>
                <ProfileLayout {...props}/>
            </div>
}

ProfileView.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    addresses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        city: PropTypes.string,
        province: PropTypes.string,
        postalCode: PropTypes.number,
        country: PropTypes.string,
    })),
    onUpdateProfile: PropTypes.func,
    onAddAddress: PropTypes.func,
    onUpdateAddress: PropTypes.func,
    onDeleteAddress: PropTypes.func,
    onLoadOrders: PropTypes.func
}

export default ProfileWrapper(ProfileView);