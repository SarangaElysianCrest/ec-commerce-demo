import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {
    changePassword,
    currentUser,
    getUserData,
    updateUserData,
    resetProfileAlert,
    getOrdersByUserId, getOrdersByOrderId, resetProfileData, resetCurrentUser
} from "./profileSlice";
import {useAlerts, useAuth} from "../../app/hooks";


export default function ProfileWrapper(Component){
    return function ProfileComponent(props){
        const dispatch = useDispatch();
        const alert = useSelector(store => store.profile.alert);
        const users = useSelector(store => store.profile.user);
        const profile = useSelector(store => store.profile.profile);
        const orders = useSelector(store => store.profile.orders);
        const orderById = useSelector(store => store.profile.orderById);
        const {setAlert} = useAlerts();

        useEffect(()=>{
            dispatch(getOrdersByUserId({users}))
            console.log("order called")
        },[])
        const handleCurrentUser=()=>{
            dispatch(currentUser())
        }

        const handleChangePassword = (user,oldPassword,newPassword) =>{
            dispatch(changePassword({user,oldPassword,newPassword}))
        }

        const handleGetUserData = (username) =>{
            dispatch(getUserData({username}))
        }

        const handleUpdateUserData = (id,email,fname,lname,telephone,homePhone, address1,address2,city, province, postalCode) =>{
            dispatch(updateUserData({id,email,fname,lname,telephone,homePhone, address1,address2,city, province, postalCode}))
        }

        const handleGetOrdersByUserId = (uid) =>{
            dispatch(getOrdersByUserId({uid}))
        }

        const handleGetOrdersById = (id) =>{
            dispatch(getOrdersByOrderId({id}))
        }


        // Alert Effect Hook
        useEffect(()=>{
            if(alert && alert.show) {
                setAlert({
                    message: alert.message,
                    severity: alert.severity,
                    onClear: ()=>dispatch(resetProfileAlert())
                })
            }
        },[alert]);
        return <Component
                 onCurrentUser={handleCurrentUser}
                 onChangePassword={handleChangePassword}
                 currentUserData={users}
                 onUserData={handleGetUserData}
                 getUserData={profile}
                 onUpdateUser={handleUpdateUserData}
                 getOrdersByUserId={handleGetOrdersByUserId}
                 getOrdersByOrderId={handleGetOrdersById}
                 ordersData={orders}
                 orderByIdData={orderById}
                 {...props}
        />
    }
}