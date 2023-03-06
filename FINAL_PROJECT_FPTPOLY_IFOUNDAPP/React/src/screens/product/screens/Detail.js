import { View, Text ,StyleSheet,Image, Button,Pressable, ToastAndroid, FlatList} from 'react-native'
import React,{useEffect,useState,useContext, Children}from 'react';
import { ProductContext } from '../ProductContext';
import PagerView from 'react-native-pager-view';
const PartialView = (props) => {
  
    const {product} = props;
    const { price, size, madein, quantity, _id} = product;
    
    const {updateCart, cart} = useContext(ProductContext);
      
    const getQuantity = () =>{
      if(cart.length == 1){
        return 1;
      }
           let item  = cart.filter(i => i.product._id == _id);
           if(item.length > 1){
             return item[0].quantity;
           }
           return 1;
    }
    
    const [number, setNumber] = useState(getQuantity());
  
    const onNumberChange = (isAdd) => {
      if (isAdd == true) {
        setNumber(number + 1);
      } else if (isAdd == false && number >= 1) {
        setNumber(number - 1);
      }
    }
  
  
    const onUpdateCart = () => {
      updateCart(product._id, product, number, price, true);
      ToastAndroid.show('The product has been added to cart successfully', ToastAndroid.BOTTOM);
    }
  
    return(
      <>
      
        <View style={styles.buttonContainer}>
          <Pressable onPress={onUpdateCart} style={[styles.button,
          number > 0 ? styles.changeBackgroundColor : null]} >
            <Text  style={styles.buttonText} >add to cart</Text>
          </Pressable>
          
        </View>
      </>
    )
  }

const Detail = (props) => {
  const { navigation, route: { params: { id } } } = props;
   //  const {_id, name, image, quantity,price} = data;
  
    const {onGetProductDetail} = useContext(ProductContext);
    const [data, setData] = useState('');
    
    

    useEffect( () => {
        const loaData = async () =>{
      
          
         const res = await onGetProductDetail(id);
         setData(res);
        
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
        
      <Text style={styles.title1}>DETAIL PRODUCT</Text>
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
      <Text style={styles.actiontitle}>Status </Text>
      <Text style={styles.actiontitle1}>{data.quantity}</Text>
      </View>
      <View style={styles.actiontitlee}>
      <Text style={styles.actiontitle}>Type  </Text>
      <Text style={styles.actiontitle1}>{data.category_id.name}</Text>
      </View>
        </View>
        </View>
        
        <PartialView  product={data}/>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.button11} >
            <Text  style={styles.buttonText} >Back</Text>
          </Pressable>
        <View style={styles.buttonrb}>
        
        {/* <Pressable style={styles.button2} onPress={() => navigation.navigate('Cart')}>
             <Image style={styles.buy1} resizeMode='cover'
        source={require('../../../assets/images/order.png')}/>
        </Pressable>  */}
        </View> 
        {/* <Pressable onPress={order} style={styles.button1}>
        <Text style={styles.buy}>ORDER</Text>
        </Pressable> */}
    </View>
  )
}


export default Detail

const styles = StyleSheet.create({
  
  button11:{
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor:'#90CBEC',
  borderRadius: 15,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
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
        marginVertical:20,
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
        height:150,
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

