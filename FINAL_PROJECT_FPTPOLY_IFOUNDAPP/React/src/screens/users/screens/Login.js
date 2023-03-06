import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TextInput, 
    Pressable,KeyboardAvoidingView, ScrollView, ToastAndroid}
from 'react-native';
import  {UserContext}  from '../UserContext';

export const Login = (props) => {
    const {navigation} = props;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    
    const {onLogin} = useContext(UserContext);
    
    const login = async () => {
        if(email || password) {
            const res = await onLogin(email, password);
            // console.log(email)
            if(res) {
              ToastAndroid.show('Login successfully', ToastAndroid.BOTTOM)
            }else {
              ToastAndroid.show('Login failed, please enter correct email and password', ToastAndroid.BOTTOM)
            }
          }else {
            ToastAndroid.show('Please enter full information', ToastAndroid.BOTTOM)
          }
        // const res = await onLogin(email, password);
        // console.log('>>>>>>',res);
    }

    

    return (
        <KeyboardAvoidingView>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                <TextInput 
                value={email}
                onChangeText={setEmail}
                placeholder= 'Email'
                style={styles.textinput}/>
                <TextInput
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholder= 'Password'
                style={styles.textinput}/>
                <Pressable style={styles.button}
                onPress={login}
                >
                    <Text style={styles.login}>Sign in</Text>
                </Pressable>
                <Pressable style={styles.buttonn}
                onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.login}>Sign up</Text>
                </Pressable>
                

            </View>
           
            
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    registerContainer:{
flexDirection:'row',
justifyContent:'center'
    },
    register: {
        borderBottomColor:'black',
        borderBottomWidth:1.5,
        marginTop:12,
        fontStyle:"italic"
           
    },
    login:{
        color:'black',
        fontWeight: '500'
        
        
    },
    button:{
        height: 50,
        backgroundColor:'#90CBEC',
        borderRadius:8,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonn:{
        height: 50,
        backgroundColor:'#90CBEC',
        borderRadius:8,
        marginTop:16,
        justifyContent:'center',
        alignItems:'center'
    },
    textinput: {

        height: 33,
        borderBottomColor:'#ABABAB',
        borderBottomWidth: 1.5,
        marginVertical: 4,
        marginTop:20
    }, 
    textinputContainer:{
        paddingHorizontal: 32,
        marginVertical:16,
    },
    text:{
        fontSize:14,
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
        paddingVertical:28,
        
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
    container: {
        backgroundColor:'white',
        height:'100%',
        width:'100%',   
    }
})