import { StyleSheet, Text, View, Image, FlatList, Pressable, ToastAndroid,  } from 'react-native';
import React,{useEffect,useState,useContext, Children}from 'react';
import { UserContext } from '../../users/UserContext';
import { ProductContext } from '../ProductContext';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
 const  Order = (props) => {
  const {navigation} = props;
  const {onGetOrder} = useContext(ProductContext);
const [data, setData] = useState('');
const [isloading, setIsLoading] = useState(false);
const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
//console.log(onGetProductForHomePage());

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
        <Text style={styles.checkout}>Do you want delete all carts?</Text>
        <Pressable onPress={onDeleteCart} style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Accept</Text>
        </Pressable>
        <Text onPress={() => setIsShowDeleteModal(false)} style={styles.cancel}>Cancel</Text>
        </View>
      </View>
    </Modal>
  )
}

    const DeleteOrder =(item) =>{
      if(item.status == 'Order is being processed'){
        DeleteModal();
      }
      else{
        ToastAndroid.show('Order not delete!',ToastAndroid.BOTTOM);
      }
    }
    const loaData = async () =>{
    
      const res = await onGetOrder();
      setData(res);
      
     
      return () => {
        res;
        
      }; 
      
     };
useEffect( () => {
  
  loaData();
  
  },[]);

//console.log(data)



  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
       
    </View>
  );
  const renderItem = ({ item }) => {
    //const  {name, price, quantity, image, id}  =item;
    // console.log(products);
    return (
       
        
      <Pressable style={styles.categorycontainer}
       onPress={() => navigation.navigate('DetailOrder',{id: item._id})}  key={item._id} 
       >
        
        
        <View style={styles.productsContainer}>

        
          
                
                <View  style={styles.product} key={
                  item._id 
                }>
                  
                  <View style={styles.productImagesContainer}>
                  <Image style={styles.productImages}  
        source={{uri: item.image}} 

                /> 
                
                  </View>
                  <View>
                  
                  <View style={styles.productNameContainer}>
                    <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
                  </View>
                  <View style={styles.productPriceContainer}>
                    <Text  style={styles.productPrice}>Price: {item.price}đ</Text>
                  </View>
                  <View style={styles.productquantityContainer}>
                    <Text  style={styles.productQuantity}>Quantity:{item.quantity - (item.quantity - 1)} selected product</Text>
                  </View>
                  <View style={styles.productquantityContainer}>
                    <Text  style={styles.productQuantity}>Date: {item.createdAt}</Text>
                  </View>
                  <View style={styles.productquantityContainer}>
                    <Text  style={styles.productQuantity}>Status: {item.status}</Text>
                  </View>
                </View>
                </View>
        </View>
         
        
      </Pressable>
    )
  }
  
  const renderHeader = () => {
    return(
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode='cover'
        source={require('../../../assets/images/brip.png')}
        /> 
      </View>
    )
    
  }
  
  
  const load = async () => {
    loaData();
  }
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
            
            <Text style={styles.formtextt}>
             ORDERS
             </Text>
             <Pressable onPress={load} style={styles.prig}>
             <Image style={styles.imagecart2} 
   source={require('../../../assets/images/reset1.jpg')}/>
             </Pressable>

      </View>
      <Text style={styles.formtexttt}>* The completed orders will automatic delete in 3 weeks ago!</Text>
      
        <FlatList 
        
         data={data} renderItem={renderItem}
         keyExtractor={item => item._id}
        >
        </FlatList>
         
        </View>
      
    
  )


  
}


export default Order
const styles = StyleSheet.create({
  prig:{
    position:'absolute',
    width:'100%',
    height:'100%'
    
  },
  imagecart2:{
    height:50,
    width:50,
    position:'absolute',
    right:20,
    
    borderRadius:20
    
  },
  formtexttt:{
   marginTop:10,
   marginLeft:15,
   color:'#90CBEC' 
  },
  // productquantityContainer:{
  //   position: 'absolute',
  //   width:'100%'
  // },
  productQuantity:{
    marginLeft:20,
    marginTop:3,
    fontSize:15
  
  },
  productName1:{
    //color:'red',
    fontSize:17,
    fontWeight:'600',
    marginLeft:15,
    
   // position:'absolute',
  },
  flatlist:{
    flexDirection:'row',

  },
  imagenextt:{
    position:'absolute',
    width:40,
    height:40,
    marginTop:40,
    marginLeft:320
  },
  list:{
    position:'absolute',
    color:'#FF6699',
    marginTop:80,
    marginLeft:100
  },
 
  
    formtext:{
        marginTop:15,
        marginLeft:15,
        fontSize: 20
    },
    formtextt:{
      fontSize:20,
      textAlign:'center',
      marginTop:10,
      fontWeight:'500'
    },
    formcontainer:{
        position:'relative',
        width:'100%',
        
        backgroundColor:'#90CBEC',
        height:50,
        marginTop:30
    },
  categoryName:{
    color:'#221F1F',
    fontSize:24,
    fontWeight:'700',lineHeight:34,
    marginTop:50,
    marginLeft:15
  },
  productPrice: {
    color:'#007537',
    fontSize:15,
    fontWeight:'700',
    marginLeft:20,
    
  },
  productPriceContainer:{
    marginTop:60
  },
  productName:{
    color:'black',
    fontSize:17,
    fontWeight:'600',
    marginLeft:20,
    marginTop:10,
    color:'#003399'
    
  },
  productNameContainer:{
    
    position:'absolute'
  },
  categorycontainer: {
    
    
    
  },
  productImages:{
    width:90,
    height:'100%',
    height:90,
    marginTop:30,
    marginLeft: 30
    
  },
  productImagesContainer: {
    
    alignItems:'center',
    justifyContent:'center',
   // backgroundColor:'#F6F6F6',
  },
  product: {
    width:'100%',
    height:175,
    marginTop:25,
    borderWidth:0.5,
    borderColor: 'grey',
    borderRadius:10,
    flexDirection:'row'
  },
  productsContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:20,
    position:'relative'
  },
  image: {
    width: '100%',
    height: 230
  },
  imageContainer:{
    width: '100%',
    height: 200,
    marginTop:20
    
  },
  container: {
    width:'100%',
    height:'100%',
    flexGrow:1,
   // position:'absolute',
    

    backgroundColor:'white',
    position:'relative'
  }
})
