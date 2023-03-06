import axiosInstance from "../../utils/Axios";

export const login = async (email, password) => {
    const data = {
        email,
        password
    }
    const response = await axiosInstance.post('/api/login',data);
    return response;
    // const data = {email, password}
    // const res = await axiosInstance.post('/api/login', data)
    // return res;
}

export const register = async (email, password, confirm_password, name, address, gender, phone) => {
    const data = {
        email,
        password,
        confirm_password,
        name,
        address,
        gender,
        phone
    }
    const response = await axiosInstance.post('/api/register',data);
    return response;
}   
