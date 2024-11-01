import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (name, email, password) => {
        setIsLoading(true);

        axios.post (`${BASE_URL}/register`, {
            name, email, password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            console.log(userInfo);
        }).catch(e => {
            console.log(`register error ${e}`);
        });
    };

    return (
    <AuthContext.Provider value={{register}}>{children}</AuthContext.Provider>
    );
};