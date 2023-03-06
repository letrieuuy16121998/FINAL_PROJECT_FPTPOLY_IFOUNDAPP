// import { StyleSheet, Text, View } from 'react-native';
// import React, { useState, createContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getProductForHomePage, getProductDetail } from './ProductService';

// export const ProductContext = createContext();

// export const ProductContextProvider = (props) => {
//     const { children } = props;
//     const [cart, setCart] = useState([]);
//     const onGetProductForHomePage = async () => {
//         try {
//            const res = await getProductForHomePage();
//            //console.log(res);
          
//                return res;
               
           
           
//         } catch (error) {
//             console.log('onGetProductForHomePage error: ', error);
//         }
//         return [];
//     }
    
//     const onGetProductDetail = async (id) =>{
//         try {
//             const res = await getProductDetail(id);
//             if(res.error == false){
//                 return res.data;
//             }
//         } catch (error) {
//             console.log('onGetProductDetail error: ', error);
//         }
//         return null;
//     }
//     const updateCart= (product, quantity, price, checked)=> {
//         let _cart = cart;
//         if(_cart.length ==0){
//             _cart.push({product, quantity, price, checked});
//         }else{
//             let items  =_cart.filter(item => item.product._id == product._id);
//         if(items.length == 0){
//             _cart.push({product, quantity, price, checked});
//         }else{
//             _cart = _cart.map(item => {
//                 if(item.product._id  == product._id){
//                     item.quantity = quantity;
//                     item.checked = checked;
//                 }
//                 return item;
//             })
//         }
//         }
        
//         setCart(_cart);
        
//     }

//     const getCart = () => cart;
//     const clearCart  = ()=> setCart([]);

//     return (
//         <ProductContext.Provider
//             value={{
//                 cart, getCart,setCart,clearCart,
//                 onGetProductForHomePage,onGetProductDetail,updateCart
//             }}
//         >

//             {children}
//         </ProductContext.Provider>
//     );
// } ;

import { StyleSheet, Text, View } from 'react-native';
import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProductForHomePage,getOrderDetail,undo,changePassword, getProfileDetail,getProductDetail, getOrder, order,getProfile,search, editProfile} from './ProductService';
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const { children } = props;
    const [cart, setCart] = useState([]);
    
    const onGetProductForHomePage = async () => {
        try {
           const res = await getProductForHomePage();
           //console.log(res);
               return res;
            
        } catch (error) {
            console.log('onGetProductForHomePage error: ', error);
        }
        return [];
    }

    const onSearch = async () => {
        try {
           const res = await search();
           //console.log(res);
          
               return res;
            
        } catch (error) {
            console.log('Search error: ', error);
        }
        return [];
    }

    const onGetProfile = async (email) => {
        try {
           const res = await getProfile(email);
        //    console.log(res);
          
               return res;
           
        } catch (error) {
            console.log('onGetOrder error: ', error);
        }
        return null;
    }


    const onGetOrder = async () => {
        try {
           const res = await getOrder();
           //console.log(res);
          
               return res;
           
        } catch (error) {
            console.log('onGetOrder error: ', error);
        }
        return [];
    }
    
    const onOrder =  async (name,price,image,quantity,type,email,nameuser,address,phone) => {
        try {   
            const res = await order(name,price,image,quantity,type,email,nameuser,address,phone);
            if (res.error == false){
             return true;
            }
            //  console.log(res);
        } catch (error) {
            console.log('onOrder error: ', error);
        }
        return false;
    }
    const onUndo =  async (id, notification) => {
        try { 
              
            const res = await undo(id, notification);
            if (res.error == false){
             return true;
            }
            //  console.log(res);
        } catch (error) {
            console.log('onOrder error: ', error);
        }
        return false;
    }
    const onEditProfile =  async (id,  name, gender,address, phone ) => {
        try { 
              
            const res = await editProfile(id, name, gender,address, phone );
            if (res.error == false){
             return true;
            }
            //  console.log(res);
        } catch (error) {
            console.log('onOrder error: ', error);
        }
        return false;
    }
    const onChangePassword =  async (id,  password ) => {
        try { 
              
            const res = await changePassword(id, password );
            
            if (res.error == false){
             return true;
            }
            
            //  console.log(res);
        } catch (error) {
            console.log('onChangePassword error: ', error);
            // console.log(password)
        }
        return false;
    }
    const onGetProductDetail = async (id) =>{
        try {
            const res = await getProductDetail(id);
            //console.log(res);
                return res;
            
        } catch (error) {
            console.log('onGetProductDetail error: ', error);
        }
        return null;
        
    }
    const onGetProfileDetail = async (id) =>{
        try {
            const res = await getProfileDetail(id);
            //console.log(res);
                return res;
            
        } catch (error) {
            console.log('onGetProfileDetail error: ', error);
        }
        return null;
        
    }
    const onGetOrderDetail = async (id) =>{
        try {
            const res = await getOrderDetail(id);
            //console.log(res);
                return res;
            
        } catch (error) {
            console.log('onGetProductDetail error: ', error);
        }
        return null;
        
    }
    const updateCart= (id,product, quantity, price, checked)=> {
        let _cart = cart;
        
        if(_cart.length ==0){
            _cart.push({id,product, quantity, price, checked});
        }else{
            let items  =_cart.filter(item => item.product._id == product._id);
            console.log(items)
        if(items.length == 0){
            _cart.push({id,product, quantity, price, checked});
        }else{
            _cart = _cart.map(item => {
                if(item.product._id  == product._id){
                    item.quantity = quantity;
                    item.checked = checked;
                }
                return item;
            })
        }
        }
        
        setCart(_cart);
        
    }

    const getCart = () => cart;
    const clearCart  = () => setCart([]);

    return (
        <ProductContext.Provider
            value={{
                cart,onChangePassword, getCart,setCart,clearCart,onSearch,onGetOrderDetail,onUndo,onGetProfileDetail,
                onGetProductForHomePage,onGetProductDetail,updateCart,onOrder,onGetOrder,onGetProfile,onEditProfile
            }}
        >

            {children}
        </ProductContext.Provider>
    );
} ;

