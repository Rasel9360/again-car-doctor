import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firbase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const  logoutUser = ()=>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser
    };

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser=>{
            console.log("currentUser", currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggerUser = {email: userEmail}
            setUser(currentUser);
            setLoading(false)
            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggerUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggerUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data);
                })
            }
        })
        return ()=> unsubsCribe();
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;