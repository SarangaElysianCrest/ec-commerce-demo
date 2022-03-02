import React, {useEffect} from 'react';
import Breadcrumb from "../../../common/components/breadcrumb";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import TextField from "../../../common/components/text-field/TextField";
import ActionButton from "../../../common/components/buttons/action-button";
import WithAuthController from "../AuthControllerWrapper";
import {useHistory} from "react-router-dom";



const ForgotPasswordSend =(props)=>{
    let username = props.onForgotPasswordEmaill;
    const history = useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        const code = data.get('code');
        const password = data.get('password');
        props.onVerifyPasswordResetCode(username,code,password)

    }

    useEffect(()=>{
     if (username === null){
         history.push(`/login`);
     }
    },[username])

    return  ( 
        <div>
            <Breadcrumb/>
            <div className="login-register-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div className="login-register-wrapper">
                            <Tab.Container defaultActiveKey= "changePassword">
                            <Nav variant="pills" className="login-register-tab-list">
                                    <Nav.Item>
                                        <Nav.Link eventKey= "changePassword">
                                            <h4>Change Password</h4>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="changePassword">
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleSubmit}>
                                                    <TextField
                                                        type="code"
                                                        name="code"
                                                        placeholder="code"
                                                    /><br/>
                                                    <TextField
                                                            type="password"
                                                            name="password"
                                                            placeholder="New Password"
                                                        /><br/>
                                                    <div className="button-box"> 
                                                        <ActionButton type="submit" label={"Change password"}/>
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

export default WithAuthController(ForgotPasswordSend);