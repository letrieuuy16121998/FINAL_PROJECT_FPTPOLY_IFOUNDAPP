import { StyleSheet, Text, View, Image, FlatList, Pressable,  } from 'react-native';
import React,{useEffect,useState,useContext, Children}from 'react';
import { UserContext } from '../../users/UserContext';
import { ProductContext } from '../ProductContext';
 const  Home = (props) => {
  const {navigation} = props;
  const {onGetProductForHomePage} = useContext(ProductContext);
const [data, setData] = useState('');
const [isloading, setIsLoading] = useState(false);
//console.log(onGetProductForHomePage());

useEffect( () => {
  const loaData = async () =>{

    
   const res = await onGetProductForHomePage();
   setData(res);
   
  //console.log(res);
   return () => {
     res;
     
   }; 
   
  };
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
      onPress={() => navigation.navigate('Detail', {id: item._id})}  key={item._id} >
        
        
        <View style={styles.productsContainer}>

                
                <View  style={styles.product} key={
                  item._id
                }>
                  
                  <View style={styles.productImagesContainer}>
                  <Image style={styles.productImages}  
        source={{uri: item.image} } 

                />
                  </View>
                  <View style={styles.bgp}>
                  <View style={styles.productNameContainer}>
                    <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                  </View>
                  <View style={styles.productPriceContainer}>
                    <Text style={styles.productPrice}>{item.price}VNĐ</Text>
                  </View>
                  <View style={styles.productPriceContainer}>
                    <Text style={styles.productqQuantity}>Status: {item.quantity}</Text>
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
        source={require('../../../assets/images/banner1.jpg')}
        /> 
      </View>
    )
    
  }
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
      <Pressable style={styles.prig} >
        
        <Image style={styles.imagecart2} 
   source={require('../../../assets/images/giamgia.jpg')}/>
   
   </Pressable>

      <Pressable style={styles.prig} >
        
             <Image style={styles.imagecart1} 
        source={require('../../../assets/images/tang.jpg')}/>
        
        </Pressable>

      <Pressable style={styles.prig} onPress={() => navigation.navigate('Cart')}>
        
             <Image style={styles.imagecart} 
        source={require('../../../assets/images/cartt.png')}/>
        
        </Pressable>
            <Text style={styles.formtext}>
             iFOUND
            </Text>
            <Text style={styles.formtextt}>
             WELCOME!
             </Text>
             
      </View>
      
        <FlatList 
         data={data} renderItem={renderItem}
         keyExtractor={item => item._id}
         ListHeaderComponent={renderHeader}>
        </FlatList>
         
        </View>
      
    
  )


}


export default Home
const styles = StyleSheet.create({
  bgp:{
    backgroundColor:'#90CBEC',
    padding:10,
    marginTop:25
  },
  productqQuantity:{
    color:'#000080'
  },
  prig:{
    position:'absolute',
    width:'100%',
    height:'100%'
    
  },
  imagecart2:{
    height:50,
    width:50,
    position:'absolute',
    right: 135,
    marginTop:25,
    borderRadius:20
    
  },
  imagecart1:{
    height:50,
    width:50,
    position:'absolute',
    right: 80,
    marginTop:25,
    borderRadius:20
    
  },
  imagecart:{
    height:50,
    width:50,
    position:'absolute',
    right: 25,
    marginTop:25,
    borderRadius:20
    
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
        fontSize: 20,
        fontWeight:'500'
        
    },
    formtextt:{
        marginTop:10,
        marginLeft:15,
        fontSize:20,
        
        fontWeight:'500'
    },
    formcontainer:{
        position:'relative',
        width:'100%',
        height:100,
        backgroundColor:'#90CBEC',
        marginTop:30,
        borderColor:'#ABABAB'
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
  },
  productPriceContainer:{
    alignItems:'center'
  },
  productName:{
    color:'black',
    fontSize:17,
    fontWeight:'600',
  },
  productNameContainer:{
    alignItems:'center',
  },
  categorycontainer: {
    
    paddingHorizontal:5,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  productImages:{
    width:150,
    height:164,
    marginTop:15
  },
  productImagesContainer: {
    height:164,
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'#F6F6F6',
  },
  product: {
    width:'100%',
    marginTop:25,
    borderWidth:0.5,
    borderColor: 'grey',
    padding:15,
    borderRadius:10,
    backgroundColor:'white'
  },
  productsContainer:{
    flexDirection:'row',
    
    justifyContent:'space-between',
    marginLeft:17,
    marginRight:17,
    
  },
  image: {
    width: '100%',
    height: 230,
    opacity:0.6
  },
  imageContainer:{
    width: '100%',
    height: 200,
    marginBottom:20
  },
  container: {
    width:'100%',
    height:'100%',
    flexGrow:1,
    position:'relative',
    backgroundColor:'#C0C0C0',
    // backgroundColor:'white',
  }
})




