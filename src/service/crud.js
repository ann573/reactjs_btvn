import instance from './index';

export const getAllItem = async (path) =>{
    try {
        const {data} = await instance.get(`/${path}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getItemByID = async (path, id) =>{
    try {
        const {data} = await instance.get(`/${path}/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const removeItemByID = async (path, id) =>{
    try {
        const res = await instance.delete(`/${path}/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const createNewItem = async (path, dataBody) =>{
    try {
        const {data} = await instance.post(`/${path}`, dataBody)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateByID = async (path,id, dataBody) =>{
    try {
        const {data} = await instance.patch(`/${path}/${id}`, dataBody)
        return data
    } catch (error) {
        console.log(error)
    }
}