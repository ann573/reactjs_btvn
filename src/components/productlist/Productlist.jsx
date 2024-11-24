import React, { useState } from 'react'
import {datas} from '../../assets/data/data'

function RenderProduct (props){
    const productData = props.data
    return (
        <>
            <div className='border rounded-sm'>
                <div>
                    <img src={productData.image} alt="image_product" />
                </div>
                <div className='p-3'>
                    <a href='#!' className='text-[#333f48] dark:text-white block min-h-[48px] hover:text-red-500'>{productData.name}</a>
                    <span className='text-sm text-gray-600 dark:text-white'>{productData.materials ?? `Chất liệu thiên nhiên`}</span>
                    <p className='text-sm text-gray-600 dark:text-white'>Còn: <span className='font-bold'>{productData.stock}</span> sản phẩm</p>
                    <div className='flex justify-between items-center my-1'>
                        <p className='font-bold text-xl text-red-600 underline'>{productData.final_price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                        <span className='text-sm text-gray-400 dark:text-white'>SKU: {productData.sku}</span>
                    </div>
                    <p className='text-[#3e3e3e] dark:text-white'>{productData.short_description}</p>
                </div>
            </div>
        </>
    )
}

const Productlist = () => {

    const [number, setNumber] = useState(8)
    function numberProduct (){
        setNumber(number + 8)
    }

  return (
    <section className='dark:bg-black'>
        <div className='max-w-[1300px] mx-auto py-5 '>
            <h2 className='text-4xl mb-5 text-center font-semibold text-text_colors dark:text-white'>Sản phẩm mới nhất</h2>
            <div className='grid grid-cols-4 gap-7 gap-y-10'>
                {datas.slice(0, number).map((item,index)=>{
                    return <RenderProduct key={index} data={item}/>
                })}
            </div>
        </div>
        {number <= datas.length && (<div className='flex flex-col items-center justify-center'>
            <button onClick={numberProduct} className='border px-10 py-3 rounded-md bg-[#333f48] text-white font-bold'> Xem thêm</button>
            <p className='mt-2 text-[#333f48] dark:text-white text-[12px]'>Hiển thị {number} trên tổng sổ {datas.length} sản phẩm</p>
        </div> )}
    </section>
  )
}

export default Productlist