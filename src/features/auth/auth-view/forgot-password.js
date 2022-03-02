import React, {Component, useEffect, useState} from 'react';
import {Link, Redirect, useHistory} from "react-router-dom";
import { useAlerts } from '../../../app/hooks';
import Breadcrumb from "../../../common/components/breadcrumb";
import '../../../styles/scss/style.scss';
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import TextField from "../../../common/components/text-field/TextField";
import ActionButton from "../../../common/components/buttons/action-button";
import {ValidateEmail } from "../../../helpers/validationHelper";
import WithAuthController from "../AuthControllerWrapper";



const ForgotPassword = (props) => {
    const {setAlert} = useAlerts();
    const history = useHistory();

    const handleForgotPassword=(e)=> {
        e.preventDefault();
        const data = new FormData(e.target);
        const username = data.get('email');
        if (ValidateEmail(username) === false){
            setAlert({
                message: 'You have entered an invalid email address!',
                severity: 'warning'
            })
        }else{
            props.onSendPasswordResetCode(username)
            props.onHandleSetForgotPasswordEmail(username)
            history.push(`/confirm-forgot-password`);
        }
    }

    return  ( 
            <div>
                <Breadcrumb/>
                <div className="login-register-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                            <div className="login-register-wrapper">
                                <Tab.Container defaultActiveKey= "forgotPassword">
                                <Nav variant="pills" className="login-register-tab-list">
                                        <Nav.Item>
                                            <Nav.Link eventKey= "forgotPassword">
                                                <h4>Forgot Password</h4>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="forgotPassword">
                                            <div className="login-form-container">
                                                <div className="login-register-form">
                                                    <form onSubmit={e=>handleForgotPassword(e)}>
                                                        <TextField
                                                            type="text"
                                                            name="email"
                                                            placeholder="Email"
                                                        /><br/>
                                                        <div className="button-box"> 
                                                            <ActionButton type="submit" label={"SEND Temporary Code"}/>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default WithAuthController(ForgotPassword);