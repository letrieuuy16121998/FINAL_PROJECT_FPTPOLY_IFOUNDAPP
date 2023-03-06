const orderModel = require('./model');


// tầng gọi database


exports.order  = async (name,price,image,quantity,type,email,nameuser,address,phone) =>{
    const order = new orderModel({ name: name, price: price,image: image, quantity: quantity, type: type, email: email,nameuser:nameuser,address:address,phone:phone});
    return await order.save();
}

// mảng dữ liệu users
// lấy từ database
// var data = [
//     {id: 1, email: 'letrieuuy16121998@gmail.com', password: '1612998', name: 'Uy'}
// ]

