import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import {createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import auth from "../firebase/firebase.config";

export const AuthContext  = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscrive = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log("observing current user inside useEffect of AuthProvider",currentUser)
        })
        return ()=>{
            unSubscrive();
        }
    },[])

    const authInfo = {user,createUser,signInUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.PropTypes ={
    children:PropTypes.node
}