import axiosInstance from "../../utils/Axios";
export const getProductForHomePage = async () => {
    const res = await axiosInstance.get('/api/products');
    return res;
}

export const getProductDetail = async (id) => {
    const res = await axiosInstance.get(`/api/products/${id}/detail`);
    return res;
}

export const getProfile = async (email) => {
    const res = await axiosInstance.get(`/api/profile/${email}`);
    return res;
}

export const getProfileDetail = async (id) => {
    const res = await axiosInstance.get(`/api/profile/${id}/detail`);
    return res;
}

export const getOrder = async () => {
    const res = await axiosInstance.get('/api/orders');
    return res;
}
// export const getOrderId = async (id) => {
//     const res = await axiosInstance.get(`/api/products/${id}/detail`);
//     return res;
// }
export const order = async (name,price,image,quantity,type,email,nameuser,address,phone) => {
    const data = {
        name,
        price,
        image,
        quantity,
        type,
        email,
        nameuser,
        address,
        phone
    }
    const response = await axiosInstance.post('/api/order',data);
    return response;
} 
export const undo = async (id, notification) => {
    const data = {
        id,
        notification,
    }
    const response = await axiosInstance.post('/api/undoorder',data);
    return response;
} 
export const editProfile = async (id, name, gender, address, phone) => {
    const data = {
        id,
        name, gender,address, phone
    }
    const response = await axiosInstance.post('/api/editprofile',data);
    return response;
} 

export const changePassword = async (id, password) => {
    const data = {
        id,
        password
    }
    // console.log(data)
    const response = await axiosInstance.post('/api/updatepassword',data);
    return response;
} 

export const search = async () => {
    const res = await axiosInstance.get('/products/find/:name');
    return res;
}
export const getOrderDetail = async (id) => {
    const res = await axiosInstance.get(`/api/orders/${id}/detail`);
    return res;
}
 