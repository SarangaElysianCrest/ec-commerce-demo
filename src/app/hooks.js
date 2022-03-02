import { useContext } from "react";
import AlertContext from "./context/alerts";
import AuthContext from "./context/auth";

export function useAlerts(){
    const {setAlertContext} = useContext(AlertContext);
    return {
        setAlert: ({message,severity,onClear}) => {
            setAlertContext({
                show: true,
                message: message,
                severity: severity
            });
            try{
                if(onClear) onClear();
            } catch(e) {
                console.error(e);
            }
        }
    }
};

export function useAuth(){
    const {isAuthenticated} = useContext(AuthContext)
    return isAuthenticated;
}