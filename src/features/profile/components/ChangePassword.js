import React, {useContext, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import CheckoutTextField from "../../../common/components/text-field/checkout-text-field";
import {useAlerts, useAuth} from "../../../app/hooks";
import AuthContext from "../../../app/context/auth";
import ProfileWrapper from "../ProfileWrapper";
import {currentUser} from "../profileSlice";
import {useDispatch} from "react-redux";
import { ValidatePassword} from "../../../helpers/validationHelper";
import {changePassword} from "../api/profile-api";

const ChangePassword = (props) => {
    const isAuthenticated = useAuth();
    const {setAlert} = useAlerts();
        useEffect(()=>{
            if (props.onCurrentUser){
                props.onCurrentUser();
            }
        },[props])


    // console.log(currentUserData&&currentUserData.username)
    function handleChangePassword(e) {
        let data = new FormData(e.target);
        let old_password = data.get('password');
        let new_password = data.get('new_password');
        let confirm_new_password = data.get('confirm_new_password');

        if (props.currentUserData && isAuthenticated){
            if(ValidatePassword(new_password) === false){
                setAlert({
                    message: 'password must contain at least one uppercase letter, lowercase letter, number and one character(@#$%^:?)',
                    severity: 'warning'
                })
            }else if(new_password === confirm_new_password) {
                    console.log(props.currentUserData,old_password,new_password);
                    props.onChangePassword(props.currentUserData,old_password,new_password)
                    // changePassword(props.currentUserData, old_password, new_password).then(r  => console.log(r)).catch(e => console.log(e))
            }else{
                setAlert({
                    message: 'Passwords do not match',
                    severity: 'warning'
                });
                return;
            }
            
        }else{
            setAlert({
                message: 'You are not logged in to the system',
                severity: 'warning'
            })
        }

    }


    return (
        <Card.Body>
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>My Account Information</h4>
                    <h5>Update Your Password</h5>
                </div><hr/>
                <form onSubmit={handleChangePassword}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <label>Current Password</label>
                            <CheckoutTextField label={"password"} type={"password"}  />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <label>New Password</label>
                            <CheckoutTextField label={"new_password"} type={"password"}  />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <label>Confirm New Password</label>
                            <CheckoutTextField label={"confirm_new_password"} type={"password"} />
                        </div>
                    </div>
                    <div className="billing-back-btn">
                        <button className="billing-btn" type="submit">Update Password</button>
                    </div>
                </form>
            </div>
        </Card.Body>
    );
};

export default ChangePassword;