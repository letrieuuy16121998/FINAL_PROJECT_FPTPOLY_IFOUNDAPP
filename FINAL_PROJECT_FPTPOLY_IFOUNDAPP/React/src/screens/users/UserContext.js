import { StyleSheet, Text, View } from 'react-native';
import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register } from './UserService';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [info, setInfo] = useState('');

    const onLogout = ()=>{
        try{
            const res= isLoggedIn
            if(res){
                setIsLoggedIn(false);
                return true;
            }return res;
        }catch(err){
            console.log(err);
        }return false;
    }

    const onLogin = async (email, password) => {
        
        try{
            const res = await login(email, password)
            //console.log(email);
            setInfo(email)
            //console.log(info);
            //return res;
            if (res) {
                        //const { token, user } = res.data;
                        // await AsyncStorage.setItem('token', token);
                        // await AsyncStorage.setItem('user', JSON.stringify(user));
                        setIsLoggedIn(true);
                        return true;
                    } else {
                        setIsLoggedIn(false);
                    }
            return res;
        }catch(err) {
            console.log(err)
        }
        return false;
    }
    const onRegister =  async (email, password, confirmPassword, name, address, gender, phone) => {
        try {   
            const res = await register(email, password, confirmPassword, name, address, gender, phone);
            if (res.error == false){
                return true;
            }
        } catch (error) {
            console.log('onRegister error: ', error);
        }
        return false;
    }  
    const getInfo = () => info;
    return (
        <UserContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogin, onRegister,onLogout, info, setInfo, getInfo,
            }}
        >

            {children}
        </UserContext.Provider>
    );
};




