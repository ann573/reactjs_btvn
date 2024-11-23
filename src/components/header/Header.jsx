import React from 'react'
import logo from '../../assets/image/logo.svg'
const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className='py-2 shadow-xl text-text_colors dark:text-white  dark:bg-[#121212]'>
        <div className='max-w-[1300px] mx-auto flex items-center'>
            <div className='mr-8'>
                <img src={logo} alt="" />
            </div>
            <ul className='flex gap-5 mr-auto'>
                <li className="relative after:content-[''] after:border after:border-solid after:bg-[#da291c] after:w-full after:h-[5px] after:absolute after:left-0 after:top-[42px] after:rounded-lg">
                    <a href="#!" className='font-semibold'>BLACK NOVEMBER</a>
                </li>
                <li>
                    <a href="#!" className='font-semibold'>NỮ</a>
                </li>
                <li>
                    <a href="#!" className='font-semibold'>NAM</a>
                </li>
                <li>
                    <a href="#!" className='font-semibold'>BÉ GÁI</a>
                </li>
                <li>
                    <a href="#!" className='font-semibold'>BÉ TRAI</a>
                </li>
                <li>
                    <a href="#!" className='font-semibold'>CANIFA S</a>
                </li>
            </ul>
            <div className='relative w-[20%]'>
                <i className="ri-search-line absolute top-1 left-[3px]"></i>
                <input type="text" placeholder='Tìm kiếm' className='w-full border border-[#666666] rounded-xl pl-5 py-1'/>
            </div>
            <div className='flex gap-5 ml-10'>
                <div className='flex flex-col items-center'>
                    <i class="ri-store-2-line text-xl"></i>
                    <span className='text-xs'>Cửa hàng</span>
                </div>
                <div className='flex flex-col items-center'>
                    <i className="ri-user-line text-xl"></i>
                    <span className='text-xs'>Tài khoản</span>
                </div>
                <div className='flex flex-col items-center relative'>
                    <i className="ri-shopping-bag-line text-xl"></i>
                    <span className='text-xs'>Giỏ hàng
                        <span className='size-4 bg-red-500 rounded-full flex items-center justify-center absolute top-0 left-2/3 text-white'>0</span>
                    </span>
                </div>

                <button onClick={toggleDarkMode} className="text-xl">
                    {isDarkMode ? (<i class="ri-sun-line"></i>) : (<i class="ri-moon-line"></i>)}
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header