import React, { useContext } from "react";
import AlertContext from "../../app/context/alerts";
import { ToastProvider, Toast } from "react-toast-notifications";
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from "@material-ui/core";
import { ToastContainer } from 'react-toastify';


export default function Alert(){
    const {alertContext, setAlertContext} = useContext(AlertContext);
    const {show,message,severity} = alertContext;
    const handleAlertClose = () => {
        setAlertContext({
            ...alertContext,
            show: false
        })
    };

    
    return (
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        >
            
        </ToastContainer>
    
        
    )

}