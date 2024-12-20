import { instance } from './index';
import { IProduct } from './../interface/IProduct';

export const getAll = async (path: string): Promise<any> => {
    const { data }: { data: any } = await instance.get(`${path}`);
    return data;
}

export const removeProduct = async (id:string|number): Promise<any> => {
    const { res }: { res: any } = await instance.delete(`/products/${id}`);
    return res;
}

export const updateProduct = async ({id,dataBody} : {id:string|number, dataBody:IProduct}): Promise<any> => {
    const { data }: { data: IProduct } = await instance.patch(`/products/${id}`, dataBody);
    return data;
}

export const getProductById = async (id:string|number) : Promise<any> => {
    const {data}:{data:IProduct} = await instance.get(`/products/${id}`)
    return data
}

export const addProduct = async (product:IProduct) : Promise<any> => {
    const {data}:{data:IProduct} = await instance.post(`/products`,product)
    return data
}