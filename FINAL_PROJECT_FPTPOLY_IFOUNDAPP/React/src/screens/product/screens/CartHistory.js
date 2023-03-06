import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const CartHistory = (props) => {
  const displayDay = (day) =>{
    switch (day) {
      case 0:
        return 'chu nhat';
        case 1:
        return 'thu hai';
        case 2:
        return 'thu ba';
        case 3:
        return 'thu tu';
        case 4:
        return 'thu nam';
        case 5:
        return 'thu sau';
        case 6:
        return 'thu bay';
        
    
      default:
        break;
    }
  }
  const displayTime = (time) => {

    time = new Date(time);
    const day = time.getDay();
    const date= time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    const month = time.getMonth() < 10 ? '0' + time.getMonth() : time.getMonth();
    const year = time.getFullYear();
    return '${day}, ${date}, ${month}, ${year}'

  }
  const renderItem =({item}) =>{
    const {createdAt, total, products,status} =item;
    return(
      <View style={styles.cartItemContainer}>
        <Text style={styles.date}>{createdAt}</Text>
        <Text style={styles.status} >Trạng thái: {status}</Text>
        <Text style={styles.products}>Tổng sản phẩm: {products.length}</Text>
        <Text style={styles.total}>Tông tiền: {total}</Text>
      </View>
      )
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Lịch sử giao dịch </Text>
    <FlatList
    data={data}
    keyExtractor={item => Math.random()}
    renderItem={renderItem}
    />
    </View>
  );
};

export default CartHistory;

const styles = StyleSheet.create({
  date: {
    color:'#221F1F',
    fontSize:14,
    borderBottomColor:'#7D7B7B',
    borderBottomWidth:0.5
    },
  status: {
    color:'#007537',
    fontSize:16
  },
  product: {
    color:'#000',
    fontSize:14
  },
  total: {
    color:'#000',
    fontSize:14
  }
  ,
  cartItemContainer:{
    marginTop:16
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
    marginTop:50,
    paddingTop:32,
    paddingHorizontal:48,
    position:'relative',
    alignItems:'center'
    
  },
});

var data =[
  {
      "_id": "6208bddabdb0210016e27e77",
      "user": "61eaa3cdda32720016356bb5",
      "status": "Đang xử lý",
      "total": 13,
      "products": [
          {
              "_id": "6208bddabdb0210016e27e78",
              "product": "61d12f0c555401c8610fb8d1",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "6208bddabdb0210016e27e79",
              "product": "61d12f0c555401c8610fb8d2",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "6208bddabdb0210016e27e7a",
              "product": "61d12f0c555401c8610fb8d3",
              "quantity": 3,
              "price": 3
          }
      ],
      "createdAt": "2022-02-13T08:14:18.571Z",
      "updatedAt": "2022-02-13T08:14:18.571Z"
  }
]
