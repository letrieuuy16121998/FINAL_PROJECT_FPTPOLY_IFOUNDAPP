import { StyleSheet, Text, View,TextInput,Pressable ,Image,ToastAndroid} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome} from '@expo/vector-icons';
import { ProductContext } from '../ProductContext';

const EditProfile = (props) => {
  const {navigation, route: {params: {id}}} = props;
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
   const {_id, avatar,dob,email} = data2;
   const {onGetProfileDetail, onEditProfile} = useContext(ProductContext)
    
  const [showDatetimePicker, setShowDatetimePicker] = useState(false);
  
  useEffect( () => {
    const loaData = async () =>{
  
      
     const res = await onGetProfileDetail(id);
     setData(res);
     return res;
       
     
    };
    loaData();
    
    },[]);
    
    if(!data){
      return (
        <></>
      )
    }
  
  const editprofile = async ()=>{
    if(address && phone) {
      
    const res = await onEditProfile(id, name, gender, address, phone);
    if(res==false) {
      ToastAndroid.show('Edit successfully', ToastAndroid.BOTTOM)
    }else {
      ToastAndroid.show('Edit failed, please enter full address and phone', ToastAndroid.BOTTOM)
    }
  }else {
    ToastAndroid.show('Please enter full address and phone information', ToastAndroid.BOTTOM)
  }
  }
  
  const displayTime = (time) => {
    time =new Date(time);
    return time.getDate() + '/' + (time.getMonth()) + '/' + time.getFullYear();
  }
  const onChangeDatetime = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatetimePicker(false);
    setBirthday(currentDate);

  };
  return (
    
    <View style={styles.container}>
      <View style={styles.viewtitle} >
      <Text style={styles.title1}>Edit ProFile</Text>
      </View>
      {/* <Text style={styles.title}>Chỉnh sủa thông tin </Text> */}
      
      <View  style={styles.infoContainer}>
        <View  style={styles.avatarContainer}>
        {
          avatar.trim().length ==0 ?
          <FontAwesome name="user-circle-o" size={100} color="black"/>
          :
           <Image source={require('../../../assets/images/profile.png')} resizeMode='cover' style={styles.avatar}/>
        }
        
      </View>
        <View  style={styles.nameContainer}>
          <View style={styles.nameContainer1}>
          <Text numberOfLines={1} style={styles.name}>{data.name}</Text>
          </View>
          <Text numberOfLines={1} style={styles.email}>{data.email}</Text> 
      </View>  
          </View>
      <View style={styles.formContainer}>
        <Text style={styles.inputTextall}>Please enter full information</Text>
        <TextInput  placeholder='Name' onChangeText={setName} style={styles.inputText1}/>
        <TextInput  placeholder='Gender' onChangeText={setGender} style={styles.inputText}/>
        <TextInput  placeholder='Address' numberOfLines={2} onChangeText={setAddress} style={styles.inputText}/>
        <TextInput  placeholder='Phone number' onChangeText={setPhone} style={styles.inputText}/>
        {/* <TextInput placeholder={displayTime(birthday)} onPressIn={() => setShowDatetimePicker(true)} style={styles.inputText}/> */}
        {/* <TextInput placeholder='Birthday' onPressIn={() => setShowDatetimePicker(true)} style={styles.inputText}/> */}
        
      </View>
      
      
      <Pressable style={styles.buttonContainer} onPress={editprofile}>
      
        <Text style={styles.save}>Save information</Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Profile')}>
      
        <Text style={styles.save}>Back</Text>
      </Pressable>
      {showDatetimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(birthday)}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChangeDatetime}
        />
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  inputTextall:{
    marginVertical:10,
    fontSize:15,
    fontWeight:'400',
    textAlign:'center'
  },
  avatar:{
    width:'100%',
    height:'100%',
    borderRadius:20
  },

  name:{
    fontSize:15,
    textAlign:'center',
    textTransform:'uppercase',
    marginTop:5
  },
  email:{
    fontSize:14,
    color:'#7F7F7F',
    marginLeft:40
    
  },
  nameContainer:{},
  
  width:'100%',
    height:'100%',
    borderRadius:20,
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
    height:200,
    width:'100%',
    backgroundColor:'#90CBEC',
    borderRadius:10
  },
  nameContainer1:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:60
  },
  viewtitle:{
    height:50,
    backgroundColor:'#90CBEC',
    borderRadius:10,
    width:'100%'
  },
  title1:{
   // backgroundColor:'#90CBEC',
    fontSize:18,
    textAlign:'center',
    textTransform:'uppercase',
    marginTop:15,
    fontWeight:'500'
  },
  save:{
    color:'black',
    marginTop:10,
    textAlign:'center',
    fontSize:20,
    fontWeight:'500'
  },
  instruction: {
    marginTop:15,
    marginBottom:10,
  fontSize:12,
  alignSelf:'flex-start',
  fontStyle:'italic',
  borderBottomWidth:0.5,
  borderBottomColor:'grey',
  marginLeft:90,
  color:'#0099CC'
  },
  inputText: {
    height: 40,
    borderBottomColor:'#ABABAB',
    borderBottomWidth:0.5,
    color:'#7D7B7B',
    
  },
  inputText1: {
    height: 40,
    borderBottomColor:'#ABABAB',
    borderBottomWidth:0.5,
    color:'#7D7B7B',
    marginTop:15
  },
  buttonContainer: {
    height:50,
    width:200,
    backgroundColor:'#90CBEC',
    marginHorizontal:110,
    borderRadius:10,
    marginTop:10,
    
    
  },
  formContainer: {
    width:'90%',
    marginBottom:15,
    paddingHorizontal:32,
    borderColor:'grey',
    borderWidth:0.8,
    
    marginTop:30,
    height:280,
    paddingVertical:20,
    borderRadius:10,

  },
  title: {
    fontSize:16,
    textAlign:'center',
    textTransform:'uppercase',
    marginBottom:16
  },
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingTop:25,
    
    position:'relative',
    alignItems:'center'
    
  },
});


var data2 = {
  _id: "61eaa3cdda32720016356bb5",
        email: "",
        fullname:"",
        address: "",
        gender:"",
        avatar: "https://freesvg.org/img/abstract-user-flat-4.png",
        dob: "",
        name: "",
        phone: ""
}