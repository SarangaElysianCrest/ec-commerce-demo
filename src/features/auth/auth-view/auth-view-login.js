import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import TextField from "../../../common/components/text-field/TextField";
import ActionButton from "../../../common/components/buttons/action-button";
import {NavLink, useHistory} from "react-router-dom";
// import ToggleButton from "../auth-component/toogle-button";
import WithAuthController from "../AuthControllerWrapper";
import { useAlerts } from '../../../app/hooks';
import {useLocation} from "react-router-dom";
import { login } from "../api/auth-api";
import {ValidateEmail , ValidatePassword} from "../../../helpers/validationHelper";
import Breadcrumb from "../../../common/components/breadcrumb";

const AuthViewLogin  = ({onLogin,onLoginWithGoogle,onLoginWithFacebook}) =>{

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let email = data.get('email');
        let password = data.get('password');
        onLogin(email,password)
    };
    function handleGoogle(e){
        e.preventDefault();
        onLoginWithGoogle()
    }
    function handleFacebook(e){
        e.preventDefault();
        onLoginWithFacebook()
    }
    return (
        <div>
            <Breadcrumb/>
            <div className="login-register-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                            <div className="login-register-wrapper">
                                <Tab.Container defaultActiveKey= "login">
                                    <Nav variant="pills" className="login-register-tab-list">
                                        <Nav.Item>
                                            <Nav.Link eventKey= "login">
                                                <h4>Login</h4>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <NavLink to={process.env.PUBLIC_URL + "/register"}>
                                                <h4>Register</h4>
                                            </NavLink>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="login">
                                            <div className="login-form-container">
                                                <div className="login-register-form">
                                                    <form onSubmit={handleLoginSubmit}>
                                                        <TextField
                                                            type="text"
                                                            name="email"
                                                            placeholder="Email"
                                                        /><br/>
                                                        <TextField
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                        /><br/>
                                                        <div className="button-box">
                                                            {/* <ToggleButton  label={"Remember me"} linkLabel={"Forgot Password?"}/> */}
                                                            <ActionButton type="submit" label={"Login"}/>
                                                            
                                                        </div>
                                                        <br/>
                                                        <a href="/forgot-password">Forgot Password?</a>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-4">
                                        <div className="button-box mt-30">
                                            <form onSubmit={handleGoogle}>
                                                <ActionButton type="submit" label={"Login With GOOGLE"}/>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="button-box mt-30">
                                            <form onSubmit={handleFacebook}>
                                                <ActionButton type="submit" label={"Login With Facebook"}/>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
}

export default WithAuthController(AuthViewLogin);