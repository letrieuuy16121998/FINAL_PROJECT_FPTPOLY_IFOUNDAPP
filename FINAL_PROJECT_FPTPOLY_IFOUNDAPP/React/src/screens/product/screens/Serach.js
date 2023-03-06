import { StyleSheet, Text, View,Image,TextInput,
  FlatList,Pressable } from 'react-native';
import React, {useState,useContext,useEffect} from 'react';
import { ProductContext } from '../ProductContext';
import { Button } from 'react-native-web';

const Serach = (props) => {
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



const search = ({item})=>{

}

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
                  <View style={styles.product11}>
                  <View style={styles.productImagesContainer}>
                  <Image style={styles.productImages}  
        source={{uri: item.image} } 

                />
                  </View>
                  <View style={styles.productNameContainer}>
                    <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                  </View>
                  
                </View>
                </View>
        </View>
         
        
      </Pressable>
    )
  }
  
  
  
 return (
   <View style={styles.container}>
     <View style={styles.textSearchContainer}>
       <Text style={styles.textSearch}>
         SEARCH
       </Text>
     </View>
     <View style={styles.textInputContainer}>
       <TextInput placeholder='Search' style={styles.textInput}/>
       <View style={styles.searchIcon}>
         <Image source={require('../../../assets/images/search.png')}/>
       </View>
     </View>
     {/* <View style={styles.btncon}>
        <Pressable onPress={search} style={styles.searchbtn}><Text style={styles.btnte}>iPhone</Text></Pressable>
     </View> */}
     <FlatList 
     showsVerticalScrollIndicator={false}
     data={data}
     keyExtractor={item => item._id}
     renderItem={renderItem}
     />
   </View>
 );
};

export default Serach;

const styles = StyleSheet.create({
  btnte:{
    color:'black',
  },
  btncon:{
    flexDirection:'row'
  },
  searchbtn:{
    backgroundColor:'#90CBEC',
    padding: 5,
    borderRadius:8,
    
  },
  product11:{
    flexDirection:'row'
  },
  productImages:{
    width:50,
    height:50,
  },
  productImagesContainer: {
    height:164,
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'#F6F6F6',
  },
 productQuantity:{
   fontSize:14,

   
 },
 productPrice:{
   fontSize:16,
   fontWeight:'500',
 },
 productName:{

   fontSize:16,
   fontWeight:'500',
   marginTop:60,
   marginLeft:20

 },
 productInfoContainer: {
   marginLeft:15,

 },
 productImage:{
   width:'80%',
   height:'80%',

 },

 productImageContainer: {
   width:77,
   height:77,
   borderRadius:8,
   backgroundColor:'#F6F6F6',
   alignItems:'center',
   justifyContent:'center'
 },
 product:{
   flexDirection:'row',
   height:107,
   marginTop:20,
   
 }
 ,
 searchIcon:{
   position:'absolute',
   right:15,
 },
 textInput:{
   width:'100%',
   height:'100%',
   borderBottomColor: 'black',
   borderBottomWidth:1.5,

 },
 textInputContainer:{
   //paddingHorizontal:48,
   height:40,
   marginTop:4,
   position:'relative',
   marginBottom:20,
 },
 textSearch: {
   fontSize:16,
   fontWeight:'500',
   textTransform:"uppercase"
 },
 textSearchContainer: {
   justifyContent:'center',
   alignItems:'center',
 },
 container: {
   width:'100%',
   height:'100%',
   flexGrow:1,
   padding:16,
   backgroundColor:'white',
   paddingTop:50,
   paddingHorizontal:48
 }
});

var data = [
    
]
