import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, 
    Pressable,KeyboardAvoidingView, ScrollView ,ToastAndroid}
 from 'react-native';
 import { UserContext } from '../UserContext';
 import { ProductContext } from '../../product/ProductContext';
import { useContext ,useState, useEffect} from 'react';

export const Reset = (props) => {
    const {navigation} = props;
    const [data, setData] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const {getInfo} = useContext(UserContext);
    const { onGetProfile, onChangePassword } = useContext(ProductContext);
    const email = getInfo();
    
    const loaData = async () =>{
  
      
        const res = await onGetProfile(email);
       //  if(email == email)
        setData(res);
        
       
        return res;
          
    
        
       };
      useEffect( () => {
        
        loaData();
        
        },[]);
    const reset = async () => {
            // if(password && password == confirmPassword) {
                if(password || confirmPassword ){
                    if(password.length >5 &&confirmPassword>5){
                if( confirmPassword.trim() == password.trim()) {
            const res = await onChangePassword(data._id, password);
            if(res==false) {
              ToastAndroid.show('Change successfully', ToastAndroid.BOTTOM)
            }else {
              ToastAndroid.show('Change failed', ToastAndroid.BOTTOM)
            }}else {
                ToastAndroid.show('Confirm password is not match with password!', ToastAndroid.BOTTOM)
            }
        }else{
            ToastAndroid.show('Password and confirm password must at least 5 character!', ToastAndroid.BOTTOM);
        }
    
        }else{
            ToastAndroid.show('Please enter full information!', ToastAndroid.BOTTOM);
        }
        
 }

    return (
        
       //    <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode='cover'
            source={require('../../../assets/images/backroung.png')}/>
            </View>
            <View style={styles.planContainer}>
                <Text style={styles.planText}>iFound</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Shopping and experience authentic products </Text>
               
                <Text style={styles.text}>of Apple in a simple way</Text>
            </View>
            <View style={styles.textinputContainer}>
            <View style={styles.registerContainer}>
            <Text 
            style={styles.register}>Change password</Text>
            </View>
            

                <TextInput 
                value={password} onChangeText={setPassword}
                placeholder= 'New Password'
                style={styles.textinput} secureTextEntry/>

                <TextInput
                value={confirmPassword} onChangeText={setConfirmPassword}
                placeholder= 'Confirm New Pasword'
                style={styles.textinput} secureTextEntry/>
                <Pressable onPress={reset} style={styles.button}>
                    <Text style={styles.login}>Change password</Text>
                </Pressable>
                <Pressable onPress={()=> navigation.navigate('Profile')} style={styles.button}>
                    <Text style={styles.login}>Back</Text>
                </Pressable>
               

            </View>
            
            
        </View>
        </ScrollView>
       //</KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    registerContainer:{
flexDirection:'row',
marginBottom:25

    },
    register: {
        borderBottomColor:'black',
        borderBottomWidth:1.5,
        marginTop:12,
        fontSize:20,
        color:'#3282AF'
           
    },
    login:{
        color:'black',
        
    },
    button:{
        height: 50,
        backgroundColor:'#90CBEC',
        borderRadius:8,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20
    },
    textinput: {

        height: 33,
        borderBottomColor:'#ABABAB',
        borderBottomWidth: 2,
        marginVertical: 4,
        marginHorizontal:20,
        
    }, 
    textinputContainer:{

        paddingHorizontal: 32,
        marginVertical:16,
    },
    text:{
        fontSize:15,
        marginVertical:4
    },
    textContainer:{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    planText: {

        fontSize:45,
        color:'#6FB2D8',
        fontWeight:'700'
    },
    planContainer:{
        
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:28},
    image: {
        width:'100%',
        height:'100%',
        },
    imageContainer: {
        width: '100%',
        height: 390,
    },
    container: {
        backgroundColor:'white',
        height:'100%',
        width:'100%',   
    },
    image: {
        width:'100%',
        height:227,
        marginTop:30
        },
    imageContainer: {
        width: '100%',
        height: 270
    },
})
