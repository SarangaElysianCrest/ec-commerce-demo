/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Breadcrumb from "../../../common/components/breadcrumb";
import Card from "react-bootstrap/Card";
import TextField from "../../../common/components/text-field/TextField";
import {useHistory, useLocation} from 'react-router-dom'
import {confirmSignUp} from "../authSlice";
import {useDispatch, useSelector} from "react-redux";
import WithAuthController from "../AuthControllerWrapper";

const ConfirmSignUp = (props) => {
    const history = useHistory();
    const isUnconfirmed =  useSelector(store=> store.auth.isUnconfirmed);
    const location = useLocation();
    const dispatch = useDispatch();
    let queryparams = location.search.split('?')[1];
    let params = queryparams.split('&');
    const userName =  (params[0].split('=')[1]);
    const email =  (params[1].split('=')[1]);

    useEffect(()=>{
        props.onhandleSetIsUnConfirmed()
    },[])

    function handleVerifySignup(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        let username = userName;
        let code = data.get('code');
        props.onConfirmSignup(username, code,email)
        // dispatch(confirmSignUp({username, code,email}))

    }
    useEffect(()=>{
        if(isUnconfirmed === false){
            history.push(`/login`);
        }
    },[isUnconfirmed]);

    return (
        <div>
            <Breadcrumb/>
            <div className="myaccount-area">
                <div className="container">
                    <div className="row">
                        <div className="ml-auto mr-auto col-lg-12">
                            <div className="myaccount-wrapper mb-150">
                                <Card.Body>
                                    <div className="myaccount-info-wrapper">
                                        <div className="account-info-wrapper">
                                            <h4>Confirm Your Account</h4>
                                            <h5>Please Add The Verification Code That Received Your Email</h5>
                                        </div><hr/>
                                        <Card.Body>
                                            <form onSubmit={handleVerifySignup}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <TextField
                                                            type="hidden"
                                                            name="username"
                                                            placeholder="username"
                                                            value={userName}
                                                        /><br/>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <label>Verification Code</label>
                                                        <TextField
                                                            type="text"
                                                            name="code"
                                                            placeholder="code"
                                                        /><br/>
                                                    </div>
                                                </div>
                                                <div className="billing-back-btn">
                                                    <button className="billing-btn" type="submit">Verify Account</button>
                                                </div>
                                            </form>
                                        </Card.Body>
                                    </div>
                                </Card.Body>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithAuthController(ConfirmSignUp);