import { StyleSheet, Text, View, Image, Pressable, FlatList, Dimensions,Modal, ToastAndroid } from 'react-native';
import React, {useState, useContext,useEffect} from 'react';
import { FontAwesome ,MaterialIcons} from '@expo/vector-icons';
import { ProductContext } from '../ProductContext';
import { useNavigation } from '@react-navigation/native';



const Cartitems = (props) =>{
  const  navigation  = useNavigation();
  const {cart,updateCart} = props;
  const renderItem = ({item}) => {
    
    const {product, quantity, price, image, checked,} = item;
    const price1 = (product.price)*quantity;
    return(
      <Pressable onPress={() => navigation.navigate('CartDetail',{id: item.product._id})}  key={item.product._id}   style={styles.itemContainer}>
          {/* <View style={styles.checkedContainer}>
            {
              checked == true ?
              <FontAwesome name='check-square' size={24} color="black"/>
              :
              <FontAwesome name='square-o' size={24} color="black"/>
            }
          </View> */}
          
          <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode='cover'
            source={{uri: product.image} } />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.name}>
            <Text>{product.name}</Text>
            </View>
            <View>
            <Text style={styles.price}>{price1}đ</Text>
            </View>
            <View style={styles.quantityAction}>
            {/* <Text onPress={() => updateCart(product, quantity > 1 ? quantity - 1 : 0, price, true)}
             style={styles.removeAction}></Text> */}
            <Text style={styles.quantity}>Quantity: {quantity}</Text>
            <Text onPress={() => updateCart(product, quantity + 1, price, true)}
             style={styles.addQuatity}></Text>
            {/* <Text style={styles.deleteQuatity}>Xóa</Text> */}
            </View>
          </View>
      </Pressable> 
      )
  }
 
  return (
    <FlatList
    navigation={navigation}
    data={cart}
    renderItem={renderItem}
    style={styles.flatlistContainer}
    keyExtractor={item=>item.product._id}
    showsVerticalScrollIndicator={false}
    />
  )
  
}


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
        <Text style={styles.checkout}>Do you want to delete all carts?</Text>
        <Pressable onPress={onDeleteCart} style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Accept</Text>
        </Pressable>
        <Text onPress={() => setIsShowDeleteModal(false)} style={styles.cancel}>Cancel</Text>
        </View>
      </View>
    </Modal>
  )
}

const Cart = (props) => {
  const {navigation}= props;
  const [data, setData] = useState([]);
  const {updateCart,getCart} = useContext(ProductContext);
  
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [image, setImage] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const {onOrder} = useContext(ProductContext);
 // console.log(data)
  const CheckoutModal = (props) => {
    const { isShowModal, setIsShowModal}=props;
    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
          <Text style={styles.checkout}>Do you want to order all products?</Text>
          <Pressable style={styles.checkoutButton}>
            <Text onPress={order }  style={styles.checkoutText}>Accept</Text>
          </Pressable>
          <Text onPress={() => setIsShowModal(false)} style={styles.cancel}>Cancel</Text>
          </View>
        </View>
      </Modal>
    )
  }
  const order = async () => {
   
    data.map(product =>{
    
    setName(product.product.name);
    setPrice(product.price);
    setImage(product.product.image);
    setQuantity(product.quantity);})
 
    if(name.length>0){
    const res = await onOrder(name,price,image,quantity);

    if(res == false){
      ToastAndroid.show('Order successfully!',ToastAndroid.BOTTOM);
      setIsShowModal(false);
    }else{
      ToastAndroid.show('Order not Found',ToastAndroid.BOTTOM);
      setIsShowModal(false);
    }}else{
      ToastAndroid.show('Please action again!',ToastAndroid.BOTTOM);
      setIsShowModal(false);
      return;
    }
   }
  
  useEffect(() => {
    setData([]);
    const unsubscribe = navigation.addListener('focus', () => {
      
      const res = getCart();
      
      setData(res);
    });
    return unsubscribe;
  }, [navigation]);
  // console.log('>>>>>>>>>',getCart().length);

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  
  const isShowCheckout = () => {
    const items = data.filter(item => item.checked == true) || [];
    let total = 0;
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      total += element.quantity * element.price;
      
    }
    return {isShown: items.length  >0,total:total};
  }

  
   
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CART</Text>
        <FontAwesome onPress={() => setIsShowDeleteModal(true)}
        style={styles.trash} name='trash-o' size={24} color="black"/>
      </View>
      <View>
        {
          data.length == 0 ?
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>Your cart is empty</Text>
          </View> :
          
          <Cartitems updateCart={updateCart} cart={data}/>
          
        }
      </View>
      <View style={styles.checkoutContainer}>
        {
          isShowCheckout().isShown == true ?
          <>
          <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Notional price</Text>
          <Text>{isShowCheckout().total}đ</Text>
        </View>
        <Pressable  style={styles.buttonContainer}>
          <Text onPress={() => setIsShowModal(true)}  style={styles.buttonText}>Proceed to checkout</Text>
          <MaterialIcons style={styles.buttonText} name="keyboard-arrow-right" size={24} color="black" />
        </Pressable>
          </>: <></>
        }
        
      </View>
      <CheckoutModal data={data} isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      <DeleteModal   isShowDeleteModal={isShowDeleteModal} 
      setData={setData} setIsShowDeleteModal={setIsShowDeleteModal}/>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  cancel:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    marginTop:8
  },
  checkoutText:{
    color:'white'
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
  checkout:{
    color:'#252A31',
    fontSize:16,
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
  flatlistContainer:{
    maxHeight: Dimensions.get('window').height - 200,
  },
  buttonText: {
   // color:'white',
   textTransform:'uppercase'
  },
  buttonContainer: {
    height: 50,
    backgroundColor:'#90CBEC',
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:30,
    alignItems:'center',
    marginTop:20,
    width:'100%',
    marginBottom:10
  },
  totalText: {
    opacity:0.6
  },
  totalContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
  },
  checkoutContainer: {
    paddingHorizontal:35,
    position:'absolute',
    bottom:0,
    width:'100%',
  },
  trash:{
    position:'absolute',
    right: 20
  },
  deleteQuatity:{
    borderBottomColor:'black',
    borderBottomWidth:1
  },
  addQuatity: {
    borderRadius: 5,
    //borderWidth: 0.5,
    width: 27.5,
    height: 27.5,
    textAlign: 'center',
    lineHeight: 20.5,
    color: 'black',
  },
  quantity: {},

  removeAction: {
    borderRadius: 5,
    //borderWidth: 0.5,
    width: 27.5,
    height: 27.5,
    textAlign: 'center',
    lineHeight: 20.5,
    color: 'black',
  },
  quantityAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  name: {
    width:200,
    overflow:'hidden'
  },
  price: {
    color:'#007537',
    fontSize:16
  },
  infoContainer: {
    marginLeft:15,
    borderRightColor:'#00EE00'
  },
  image:{
    width:'80%',
    height:'80%',
    marginTop:10
  },
  imageContainer: {
    width: 77,
    height: 77,
    borderRadius: 8,
    marginLeft:20
  },
  checkedContainer:{
width:50,
alignItems:'center',
justifyContent:'center'
  },
  itemContainer: {
    flexDirection:'row',
    marginTop:20,
    marginVertical:0,
    paddingHorizontal:24,
    //backgroundColor:'#CC99FF',
    height:100,
    borderWidth:1,
    borderRadius:10,
    borderColor:'grey',
    marginHorizontal:20,
    paddingTop:10,
    paddingBottom:5
    
  },
  emptyContainer:{
    alignItems:'center',
  justifyContent:'center',
  marginTop:32
  },
title:{
  fontSize:18,
  textTransform:'uppercase',
  fontWeight:'500'


},
titleContainer:{
  alignItems:'center',
  justifyContent:'center',
  position:'relative',
  height:50,
  backgroundColor:'#90CBEC',

},
container:{
  flex:1,
  backgroundColor: 'white',
  paddingTop:25,
  position:'relative',
}
});

