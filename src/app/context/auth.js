import React, {createContext, useEffect, useState} from 'react';
import {Hub, Auth} from 'aws-amplify';
const AuthContext = createContext();
const {Consumer: AuthConsumer, Provider} = AuthContext;

function AuthProvider(props) {
    const [isAuthenticated,setIsAuthenticated] = useState(false);


    useEffect(()=>{
        Auth.currentAuthenticatedUser()
        .then(user=>{
            if(user){
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        })
        .catch(console.error);
        
        Hub.listen('auth',({payload})=>{
            switch(payload.event){
                default:
                    setIsAuthenticated(false);
                    break;
                case 'signIn':
                    setIsAuthenticated(true);
                    break;
                case 'signOut':
                    setIsAuthenticated(false);
                    break;
                case "customOAuthState":
                    setIsAuthenticated(true);
                    break;
            }
        })
    },[])

    return (
        <Provider value={{isAuthenticated,setIsAuthenticated}}>
            {props.children}
        </Provider>
    )
}

export default AuthContext;
export {AuthConsumer,AuthProvider}