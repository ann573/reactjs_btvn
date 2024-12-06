// register
import instance from './index';

export const registerAccount = async (body) =>{
    try {
        const {data} = await instance.post("/register", body)
        return data
    } catch (error) {
        console.log(error);
        alert(error?.response?.data || "Register fail")
    }
}

export const loginAccount = async (body) =>{
    try {
        const {data} = await instance.post("/login", body)
        return data
    } catch (error) {
        console.log(error)
    }
}