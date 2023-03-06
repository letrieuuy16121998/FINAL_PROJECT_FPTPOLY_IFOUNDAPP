import { StyleSheet, Text, View,Pressable,Image,ToastAndroid } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import React,{useContext, useState,useEffect} from 'react';
import { UserContext } from '../../users/UserContext';
import { ProductContext } from '../ProductContext';
import {data1} from '../screens/EditProfile';
import { Login } from '../../users/screens/Login';
const Profile = (props) => {
  
  const { navigation } = props;
  
  //const email = Login(email);
  // console.log(email);
   const {_id, name, address, phone, avatar,dob} = data2;


  const [data, setData] = useState('');
  const {getInfo, onLogout} =useContext(UserContext);
  const {onGetProfile} = useContext(ProductContext);
  const email = getInfo() ;
  //console.log(data._id);
  const loaData = async () =>{
  
      
    const res = await onGetProfile(email);
   //  if(email == email)
    setData(res);
    //console.log(res);
   
    return res;
      

    
   };
  useEffect( () => {
    
    loaData();
    
    },[]);

  const logout = ()=>{
    const res = onLogout();
    if(res){
      () => navigation.navigate('Login');
    }else{
      ToastAndroid.show('Logout thất bại', ToastAndroid.BOTTOM)
    }
  }
  const load = async () => {
    loaData();
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.viewtitle} >
      <Text style={styles.title}>ProFile</Text>
      </View>
      
      <View  style={styles.infoContainer}>
        <View  style={styles.avatarContainer}>
        {
          avatar.trim().length ==0 ?
          <FontAwesome name="user-circle-o" size={100} color="black"/>
          :
           <Image source={{uri:avatar}} resizeMode='cover' style={styles.avatar}/>
        }
        
      </View>
        <View  style={styles.nameContainer}>
          <View style={styles.nameContainer1}>
          <Text numberOfLines={1} style={styles.name}>{data.name}</Text>  
          <Pressable onPress={() => navigation.navigate('EditProfile', {id: data._id})}  key={data._id}>
          <Image  style={styles.image} resizeMode='cover'
        source={require('../../../assets/images/pencal.jpg')}
        /> 
          </Pressable>  
          </View>
          <View>
          <Text style={styles.email}>{data.email}</Text> 
          </View>
      </View>
    </View>
    <View style={styles.actionContainer}>
    <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Name</Text>
        <Text style={styles.actiontitle1}>{data.name}</Text>
      </View>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Email</Text>
        <Text style={styles.actiontitle1}>{data.email}</Text>
      </View>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Gender </Text>
        <Text style={styles.actiontitle1}>{data.gender}</Text>
      </View>
      

      {/* <Text onPress={() => navigation.navigate('EditProfile')} style={styles.action}>Chỉnh sửa thông tin</Text>
      <Text onPress={() => navigation.navigate('CartHistory')} style={styles.action}>Lịch sử giao dịch</Text> */}


      
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Address </Text>
        <Text style={styles.actiontitle1}>{data.address}</Text>
        </View>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Phone Number </Text>
      <Text style={styles.actiontitle1}>{data.phone}</Text>
      </View>
      
      </View>
      

      
        {/* <Text onPress={() => navigation.navigate('EditProfile')} style={styles.action1}>Chỉnh sửa thông tin</Text> */}
      
      <View style={styles.logout2}>
      <Pressable style={styles.logout1} onPress={load} >
        <Text style={styles.logout}>Update</Text>
      </Pressable>
      <Pressable style={styles.logout1} onPress={()=>navigation.navigate('Reset')} >
        <Text style={styles.logout}>Change password</Text>
      </Pressable>
      <Pressable style={styles.logout1} onPress={logout} >
        <Text style={styles.logout}>Logout</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  logout2:{
    alignItems:'center',
    justifyContent:'space-between',
  },
  nameContainer1:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:60
  },
  image:{
    position:'absolute',
    height:25,
    width:25,
    marginLeft:5,
    
    borderRadius:5
  },
  logout1:{
    height:50,
    width:250,
    backgroundColor:'#90CBEC',
    //position:'absolute',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:15,
    borderRadius:10
  },
 
  
  actiontitle1:{
    position:'relative',
    fontSize:15,
    color:'grey',
    borderBottomColor:'#ABABAB',
    
    marginTop:16,
    borderColor:'#000000',
  },
 
  actiontitlee:{
    
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:20,
    marginLeft:20,
    borderBottomWidth:0.5,
    borderBottomColor:'grey'
  },
  viewtitle:{
    height:50,
    backgroundColor:'#90CBEC',
    borderRadius:10
  },
  logout:{
    color:'black',
    marginTop:10,
    textAlign:'center',fontSize:20,
    fontWeight:'500',
    
  },
  action: {
    marginVertical:15,
    color:'red'
  }
  ,

  action1: {
    marginVertical:15,
    color:'red',
    fontSize:25,
    marginLeft:150,
    marginTop:30
  }
  ,
  
  actiontitle:{
    position:'relative',
    fontSize:15,
    color:'#000000',
    borderBottomColor:'#ABABAB',
    
    marginTop:16,
    borderColor:'#000000',
    
    
  },
  actionContainer:{
    marginTop:20,
    flexDirection:'column',
    
    borderColor:'grey',
    borderWidth:0.8,
    marginVertical:30,
    marginTop:40,
    height:210,
    marginHorizontal:15,
    borderRadius:10
    
    //borderBottomWidth: 2
    // height:100,
    // backgroundColor:'#90CBEC'
  },
  
  title: {
    fontSize:18,
    textAlign:'center',
    textTransform:'uppercase',
    marginTop:15,
    fontWeight:'500'
  },
  email:{
    textAlign:'center',
    fontSize:14,
    color:'#7F7F7F'
  },
  name:{
    fontSize:15,
    textAlign:'center',
    textTransform:'uppercase',
    marginTop:5
  },
  nameContainer:{
    
    // alignItems:'center',
  },
  avatar:{
    width:'100%',
    height:'100%',
    borderRadius:20
  },
  avatarContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:80,
    height:80,

    //backgroundColor:'red'
  },
  infoContainer:{
    flexDirection:'column',
    justifyContent:'center',
    marginTop:15,
    alignItems:'center',
    height:180,
    backgroundColor:'#90CBEC'
  },
    container: {
      flex: 1,
      backgroundColor:'white',
      marginTop:10,
      paddingTop:32,
      // paddingHorizontal:10
      
    },
});


var data2 = {
  _id: "61eaa3cdda32720016356bb5",
        email: "user@gmail.com",
        createdAt: "2022-01-21T12:15:09.775Z",
        updatedAt: "2022-02-12T10:45:26.309Z",
        address: "Bình Thuận",
        gender:"male",
        avatar: "https://freesvg.org/img/abstract-user-flat-4.png",
        dob: "2000-06-10T00:00:00.000Z",
        name: "user",
        phone: "0383920972"
}