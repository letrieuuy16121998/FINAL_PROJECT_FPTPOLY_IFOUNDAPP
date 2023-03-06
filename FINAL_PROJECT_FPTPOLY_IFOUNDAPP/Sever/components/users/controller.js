//tang su ly
const userService = require('../users/service');
const userModel = require('../users/model');
const bcrypt = require('bcryptjs');

exports.login =async(email,password) =>{
     const user =await userService.login(email,password);
    //  if (user && user.password == password) {

    //      return user;
    //  }
    //  return null;
    console.log(user,email,password);
    //const checkPassword= await bcrypt.compare(password, user.password);
    //console.log(checkPassword);
    if (password!=user.password) {
        return null;
    }
    return{_id: user._id, email: user.email, password: user.password}
 }

//  exports.login = async (email, password) => {
//     const user = await userService.findByEmail(email);
//     if (!user) return 'Email không đúng!';
//     const checkPassword = await bcrypt.compare(password, user.password);
//     if (!checkPassword) return null;
//     return user;
// };

 exports.register = async (email,password,confirm_password,name,gender,address,phone)=>{
    if (password != confirm_password) return null;
   console.log(email, password, confirm_password);
    let user = await userService.login(email);
    if (user) return null;

    //const hash = await bcrypt.hash(password,await bcrypt.genSalt(10));
    user = await userService.register(email, /*hash*/ password,name,gender,address,phone);
    return {_id: user._id};
 }

 exports.getProfileById = async (email) => {
    const users = await userModel.findOne({email: email}).select('email gender phone address image name password');
    return users;
}

exports.getProfileById1 = async (id) => {
    const profile = await userModel.findById(id)
    return profile;
}
 exports.insert = async (body) => {
   console.log(body)
   const user = new userModel({
       name: body.user,
   })
   await user.save()
}

exports.update = async (id, name, gender, address, phone) => {
   await userModel.updateOne(id, {
       name: name,
       gender: gender,
       address: address,
       phone: phone,
   });
}
exports.updatePassword = async (id, password) => {
    await userModel.updateOne(id, {
        password: password,
    });
 }