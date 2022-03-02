import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import React, { useContext } from "react";
import AlertContext from "../../app/context/alerts";

/**
 * Default Alert Component Based on Material Snackbar
 * and MuiAlert.
 */ 


export default function Alert(){
    const {alertContext, setAlertContext} = useContext(AlertContext);
    const handleAlertClose = () => {
        setAlertContext({
            ...alertContext,
            show: false
        })
    };

    const handleSnackbarClose = () => {
        setAlertContext({
            message:null,
            severity:null,
            show:false
        })
    };

    
    return (
        
        <Snackbar 
            open={alertContext.show} 
            autoHideDuration={750} 
            anchorOrigin={{vertical:'top', horizontal:'right'}} 
            onClose={handleSnackbarClose} 
        >   
            <MuiAlert elevation={6} variant="filled"   severity={alertContext.severity||'success' }>
                {alertContext.message || ''}
            </MuiAlert>
            
        </Snackbar>

        
    )

}
