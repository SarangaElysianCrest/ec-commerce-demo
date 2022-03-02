import React from 'react';
import IconButtons from "../../buttons/icon-buttons";
import {Link, useHistory} from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {logout} from "../../../../features/auth/authSlice";
import {useDispatch} from "react-redux";

const LoginContent = ({isAuthenticated , signOut}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClickAway = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    function handleSignOut(e) {
        e.preventDefault();
        dispatch(logout())
        history.push(`/login`);
    }


    return (
       <ClickAwayListener onClickAway={handleClickAway}>
        <div className="same-style account-setting d-none d-lg-block">
            <IconButtons onClick={e => handleClick(e)} buttonClass={"account-setting-active"} iconClass={"pe-7s-user-female"}/>
            { open ?
                <div className="account-dropdown active">

                    {
                        isAuthenticated === true ?
                            (
                                <ul>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/profile"}>My account</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/"} onClick={handleSignOut}>Logout</Link>
                                    </li>
                                </ul>
                            )
                            :
                            (
                                <ul>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/login"} onClick={handleClickAway}>Login</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/register"} onClick={handleClickAway}>Register</Link>
                                    </li>
                                </ul>
                            )
                    }


                </div> : null
            }
        </div>
       </ClickAwayListener>
    );
};

export default LoginContent;

