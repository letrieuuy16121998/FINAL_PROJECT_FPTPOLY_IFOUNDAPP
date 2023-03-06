import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, 
    Pressable,KeyboardAvoidingView, ScrollView,ToastAndroid }
from 'react-native';
import { UserContext } from '../UserContext';
import { useContext ,useState} from 'react';


export const Register = (props) => {
    const {navigation} = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const { onRegister } = useContext(UserContext);

    const register = async () => {
        // if (confirmPassword.trim() == password.trim()){
        //     const res = await onRegister(email,password);
        //     if(res == false){
        //         ToastAndroid.show('Đăng kí không thành công', ToastAndroid.BOTTOM);
                
        //     }else{
        //         ToastAndroid.show('Đăng kí thành công,bạn có thể đăng nhập',ToastAndroid.BOTTOM);
        //         navigation.goBack();
        //     }
        // }else{
        //     ToastAndroid.show('Mật khẩu không trùng khớp',ToastAndroid.BOTTOM);
        // }
        if(email || password || confirmPassword ){
            if(password.length >5 &&confirmPassword>5){
        if( confirmPassword.trim() == password.trim()) {
            const res = await onRegister(email, password, confirmPassword, name, address, gender, phone);
            if(res==false) {
                ToastAndroid.show('Register successfully!', ToastAndroid.BOTTOM)
                navigation.goBack();
            }else {
                ToastAndroid.show('Register unsuccessfully!', ToastAndroid.BOTTOM)
            }
        }else {
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
            <Text onPress={() => navigation.goBack('Login')}
            style={styles.register}>Register</Text>
            </View>
                <TextInput 
                value={email} onChangeText={setEmail}
                placeholder= 'Email'
                style={styles.textinput}/>

                <TextInput 
                value={password} onChangeText={setPassword}
                placeholder= 'Password'
                style={styles.textinput} secureTextEntry/>

                <TextInput
                value={confirmPassword} onChangeText={setConfirmPassword}
                placeholder= 'Confirm pasword'
                style={styles.textinput} secureTextEntry/>

                <Pressable onPress={register} style={styles.button}>
                    <Text style={styles.login}>Register</Text>
                </Pressable>
               

            </View>
            <View style={styles.register1Container}>
            <Text  onPress={() => navigation.navigate('Login')}
            
            style={styles.register1}>Back</Text>
            </View>
            
        </View>
        </ScrollView>
       //</KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    registerContainer:{
flexDirection:'row',
marginBottom:20

    },
    register1Container:{
        flexDirection:'row',
        justifyContent:'center'
            },
    register1: {
        borderBottomColor:'black',
        borderBottomWidth:1.5,
        marginTop:0,
        fontStyle:"italic"
           
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
        marginTop:40,
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