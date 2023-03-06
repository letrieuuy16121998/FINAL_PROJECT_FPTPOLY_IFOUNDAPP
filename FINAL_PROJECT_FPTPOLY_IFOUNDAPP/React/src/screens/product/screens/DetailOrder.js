

import { View, Text ,StyleSheet,Image, Button,Pressable,Modal, ToastAndroid, FlatList} from 'react-native'
import React,{useEffect,useState,useContext, Children}from 'react';
import { ProductContext } from '../ProductContext';
import PagerView from 'react-native-pager-view';


const DetailOrder = (props) => {
  const { navigation, route: { params: { id } } } = props;
   //  const {_id, name, image, quantity,price} = data;
  
    const {onGetOrderDetail} = useContext(ProductContext);
    const [data, setData] = useState('');
    const [notification, setNotification] = useState('');

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    
  const {onUndo} = useContext(ProductContext);
    
  const DeleteModal = (props) => {
    const { clearCart } = useContext(ProductContext);
     const { setCart } = useContext(ProductContext);
    const { isShowDeleteModal, setIsShowDeleteModal, setData}=props;
    const onDeleteCart = () => {
      setIsShowDeleteModal(false);
      clearCart();
      setData([...[]]);
    }
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowDeleteModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
          <Text style={styles.checkout}>Do you really want to undo this order?</Text>
          <Pressable onPress={undo} style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Accept</Text>
          </Pressable>
          <Text onPress={() => setIsShowDeleteModal(false)} style={styles.cancel}>Cancel</Text>
          </View>
        </View>
      </Modal>
    )
  }
    const undo = async () => {
      if(data.status == 'Order is being processed'){
      setNotification('This order is required cancel!')
      if(notification.length>0){
      const res = await onUndo(id, notification);
      
      if(res == false){
        setIsShowDeleteModal(false);
        ToastAndroid.show('Send request successfully!',ToastAndroid.BOTTOM);
      }else{
        ToastAndroid.show('Send error!',ToastAndroid.BOTTOM);
        setIsShowDeleteModal(false);
      }}else{
        ToastAndroid.show('Please action again!',ToastAndroid.BOTTOM);
        setIsShowDeleteModal(false);
        return;
      }}else{
        setIsShowDeleteModal(false);
        ToastAndroid.show("This order is being shipped or being completed! Can't be undone!",ToastAndroid.BOTTOM);
      }
     }
    useEffect( () => {
        const loaData = async () =>{
      
          
         const res = await onGetOrderDetail(id);
         setData(res);
        //console.log(res);
         return () => {
           res;
           
         }; 
         
        };
        loaData();
        
        },[]);
        
        if(!data){
          return (
            <></>
          )
        }
  
      
   
      //console.log(data);
      //const {name,image,quantity,price} = data;
  return (
    <View style={styles.container} 
      >
      <View style={styles.title}>
        
      <Text style={styles.title1}>DETAIL ORDER</Text>
      </View>
      <View style={styles.image1}>
      <Image style={styles.image} resizeMode='cover'
            source={{uri: data.image} }/>
      </View>
     
      <View style={styles.iphonenew}>
       
        {/* <View style={styles.new}>
            <Text style={styles.new1}>New</Text>
        </View> */}
        
      </View>
      <Text  style={styles.name}>{data.name}</Text>
      <Text  style={styles.price}>{data.price}đ</Text>
      <View style={styles.detailproduct}>
      <Text style={styles.detail}>
Details
</Text>

      <View style={styles.actionconstContainer}>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Quantity </Text>
      <Text style={styles.actiontitle1}>{data.quantity} products left</Text>
      </View>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Type  </Text>
      <Text style={styles.actiontitle1}>{data.type}</Text>
      </View>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Status  </Text>
      <Text style={styles.actiontitle1}>{data.status}</Text>
      </View>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Date  </Text>
      <Text style={styles.actiontitle1}>{data.createdAt}</Text>
      </View>
        </View>
        </View>
        
        
        <View style={styles.logout2}>
        
        <Pressable onPress={() => setIsShowDeleteModal(true)} style={styles.logout1}>
             <Text style={styles.logout}>Undo Order</Text>
        </Pressable> 
        <Pressable onPress={() => navigation.navigate('Order')} style={styles.logout1}>
             <Text style={styles.logout}>Back</Text>
        </Pressable> 
        </View> 
        {/* <Pressable onPress={order} style={styles.button1}>
        <Text style={styles.buy}>ORDER</Text>
        </Pressable> */}
        <DeleteModal   isShowDeleteModal={isShowDeleteModal} 
      setData={setData} setIsShowDeleteModal={setIsShowDeleteModal}/>
    </View>
  )
      }

export default DetailOrder

const styles = StyleSheet.create({
  logout2:{
    marginTop:10,
    alignItems:'center',
    justifyContent:'space-between',
  },
  logout:{
    color:'black',
    marginTop:10,
    textAlign:'center',fontSize:20,
    fontWeight:'500',
    
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView:{
    margin:20,
    backgroundColor:'white',
    borderRadius:20,
    padding:35,
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
    width:'90%'
  },
  checkout:{
    color:'#252A31',
    fontSize:16,
  },
  checkoutButton:{
    backgroundColor:'#90CBEC',
    height:50,
    borderRadius:4,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:16
  },
  checkoutText:{
    color:'white'
  },
  cancel:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    marginTop:8
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
  buy1:{
    height:50,
    width:50,
    marginLeft:300
  },
  buy:{
            fontSize:18,
            textAlign:'center',
            marginTop:10,
            fontWeight:'500'
            
        },
    review:{
        fontSize:20,
        textAlign:'center',
        marginTop:10
    },
    buttonrb:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
        
    },
    button1:{
               height:50,
              backgroundColor:'#90CBEC',
              
              marginHorizontal:22,

              borderRadius:15
          },
    // button:{
    //     height:50,
    //     width:'40%',
    //     backgroundColor:'#90CBEC',
    //     borderRadius:5,
    //     marginLeft:30
    // },
    
    actiontitle1:{
        position:'relative',
        fontSize:13,
        color:'#3A3A3A',
        borderBottomColor:'#ABABAB',
        
        marginTop:20,
        borderColor:'#000000',
        
        
      },
    actiontitle:{
        position:'relative',
        fontSize:15,
        color:'#000000',
        borderBottomColor:'#ABABAB',
        
        marginTop:20,
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
      detailproduct:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        marginTop:15,
        marginHorizontal:20,
        paddingBottom:30,
        paddingTop:15
        
      },
    detail:{
        borderBottomWidth:0.8,
        borderColor:'#C0C0C0',
        marginTop:10,
        fontSize:16,
        marginRight:260,
        fontStyle:'bold',
        fontFamaily:'italic',
        marginLeft:20,
    
        
      },
    name:{
        fontSize:24,
        marginLeft:20,
        marginTop:0,
        fontStyle:'bold',
        fontWeight:'500'
    },
    price:{
        color:'#007537',
        fontSize:18,
        marginTop:3,
        marginLeft:20,

    },
    iphone1:{
        textAlign:'center',
        color:'white',
        marginTop:5
    },
    new1:{
        textAlign:'center',
        color:'white',
        marginTop:5
    },
    iphone:{
        backgroundColor:'#009245',
        width:70,
        height:30,
        textTransform:'uppercase',
        
        marginLeft:20,
        
    },
    new:{
        backgroundColor:'#009245',
        marginLeft:20,
        width:50,
        textTransform:'uppercase',
        height:30
    },
    iphonenew:{
        flexDirection:'row',
        marginTop:10

    },
    image:{
        height:170,
        width:'50%',
        
        marginHorizontal:90,
        marginVertical:20,
        
    },
    image1:{
      borderWidth:1,
      borderRadius:10,
      borderColor:'grey',
      marginHorizontal:20,
      marginTop:15,
      

    },
container:{
    marginTop:30
},
title:{
    backgroundColor:'#90CBEC',
    height:50,
    marginTop:25
},
title1:{
    textTransform:'uppercase',
    fontSize:18,
    textAlign:'center',
    fontWeight:'500',
    justifyContent:'center',
    marginTop:12
},




buttonText: {
  fontSize: 18,
  //color: 'white',
  textTransform: 'uppercase',
  fontWeight:'500'
},
buttonContainer: {
  paddingHorizontal: 22,
  height: 50,
  marginTop: 10,
},
button: {
  backgroundColor:'#90CBEC',
  borderRadius: 15,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
},
total: {
  marginTop: 4,
  textAlign: 'right',
  fontSize: 24,
  fontWeight: '500'
},
totalText: {
  color: 'black',
  opacity: 0.6
},
processTotal: {

},
addQuatity: {
  borderRadius: 5,
  borderWidth: 0.5,
  width: 27.5,
  height: 27.5,
  textAlign: 'center',
  lineHeight: 20.5,
  color: 'black',
},
quantity: {},

removeAction: {
  borderRadius: 5,
  borderWidth: 0.5,
  width: 27.5,
  height: 27.5,
  textAlign: 'center',
  lineHeight: 20.5,
  color: 'black',
},
quantityAction: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 4
},
quantityText: {
  fontSize: 14,
  opacity: 0.6

},
processQuatity: {},
CartProcessContainer: {
  //marginTop:10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 24,
  paddingVertical:10,
  borderWidth:1,
  marginVertical:10,
  marginHorizontal:20,
  borderRadius:10
},
productDetailText: {
  fontSize: 14,
  fontWeight: '500',
  color: '#3A3A3A',
},
productDetail: {
  borderBottomColor: '#221F1F',
  borderBottomWidth: 0.5,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 15
},
productTitle: {
  fontSize: 16,
  fontWeight: '500',
  color: '#3A3A3A',
  marginTop: 10,
  borderBottomColor: '#221F1F',
  borderBottomWidth: 0.5
},
productPrice: {
  fontSize: 24,
  fontWeight: '500',
  color: '#007537',
},
productInfocontainer: {
  paddingHorizontal: 48,
  paddingVertical: 32,
  
},
productImage: {
  width: '100%',
  height: '100%',
},
productImagesPager: {
  flex: 1
},
productImagesContainer: {
  width: '100%',
  height: 270,
},
productNameContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 55
},
proproductName: {
  fontSize: 16,
  fontWeight: '500'
},
container: {

  flexGrow: 1,
  backgroundColor: 'white',

}
})

