/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { useAlerts, useAuth } from "../../app/hooks";

import {
    login,
    logout,
    resetAlert,
    signUp,
    loginWithFacebook,
    loginWithGoogle,
    createUser,
    forgotPasswordCodeSend,
    forgotPasswordSubmission,
    setForgotPasswordEmail,
    confirmSignUp,
    setIsUnConfirmed
} from './authSlice';
import {currentUser, getUserData} from "../profile/profileSlice";
import api from "./api";

export default function WithAuthController(Component, props) {
    return function AuthComponent(){
        const dispatch = useDispatch();
        const history = useHistory();
        const isAuthenticated = useAuth();
        const alert = useSelector(store => store.auth.alert);
        const isUnconfirmed =  useSelector(store=> store.auth.isUnconfirmed);
        const isForgotPassword =  useSelector(store=> store.auth.isForgotPassword);
        const forgotPasswordEmail =  useSelector(store=> store.auth.forgotPasswordEmail);
        const verified =  useSelector(store=> store.auth.verified);
        const user =  useSelector(store=> store.auth.user.username);
        const email = useSelector(store=> store.auth.user.email);
        const users = useSelector(store => store.profile.user);
        const {setAlert} = useAlerts();
        let username = users && users;

        const handleLogin = (email,password) => {
            dispatch(login({email,password}));
        };

        useEffect(()=>{
           if (isAuthenticated === true){
               dispatch(currentUser())
           }
        },[])
        useEffect(()=>{
            if (username != null){
                dispatch(getUserData({username}))
            }
        },[])



        const handleLogout = () => {
            dispatch(logout());
        }
        const handleLoginWithGoogle = () => {
            dispatch(loginWithGoogle())
        };
        const handleLoginWithFacebook = () => {
            dispatch(loginWithFacebook())
        };
        const handleSignup = (email,password) => {
            dispatch(signUp({email,password}))
        };

        async function handleConfirmSignup(username,code,email) {
          let result = await api.confirmSignup(username,code)
                      .then(res =>{
                          let userData = {
                              id:username,
                              email:email,
                              firstName: "",
                              lastName: "",
                              phone: "",
                              addressLine1: "",
                              addressLine2: "",
                              city: ""
                          }

                          if (res === "SUCCESS"){
                              let result = api.createUser(userData)
                              console.log(result)
                              history.push('/')
                          }
                  })
              .catch(error =>{})
        }

        const handleSendPasswordResetCode = (username) => {
            dispatch(forgotPasswordCodeSend(username))
        };
        const handleVerifyPasswordResetCode = (email,code,new_password) => {
            dispatch(forgotPasswordSubmission({email, code, new_password}))
        };

        const handleSetForgotPasswordEmail = (username) =>{
            dispatch(setForgotPasswordEmail(username))
        }
        const handleSetIsUnConfirmed = () =>{
            dispatch(setIsUnConfirmed())
        }

        // Alert Effect Hook
        useEffect(()=>{
            if(alert && alert.show) {
                setAlert({
                    message: alert.message,
                    severity: alert.severity,
                    onClear: ()=>dispatch(resetAlert())
                })
            }
        },[alert]);
        // Auth Context Effect Hook
        useEffect(()=>{
            if(isAuthenticated){
                history.push('/');
            }
        },[isAuthenticated]);

        //User push to confirm sign up section
        useEffect(()=>{
            if(!isAuthenticated && isUnconfirmed){
                history.push(`/confirm-signup?username=${user}&email=${email}`);
            }else{

            }
        },[isUnconfirmed]);


        return(
            <>
                <Component 
                    onLogin={handleLogin}
                    onLogout={handleLogout}
                    onLoginWithGoogle={handleLoginWithGoogle}
                    onLoginWithFacebook={handleLoginWithFacebook}
                    onSignup={handleSignup}
                    onConfirmSignup={handleConfirmSignup}
                    onSendPasswordResetCode={handleSendPasswordResetCode}
                    onVerifyPasswordResetCode={handleVerifyPasswordResetCode}
                    // onCreateUser={handleCreateUser}
                    onHandleSetForgotPasswordEmail={handleSetForgotPasswordEmail}
                    onForgotPasswordEmaill={forgotPasswordEmail}
                    onhandleSetIsUnConfirmed={handleSetIsUnConfirmed}
                    verified={verified}
                    {...props}/>
            </>
        )
    } 
}


