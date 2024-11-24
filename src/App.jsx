import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import Productlist from './components/productlist/Productlist'


const App = () => {
  const [showBtn, setShowBtn] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  };

  function changeState(){
    setShowBtn(prev => !prev)
  }
  return (
    <div className={isDarkMode ? `dark` : `light`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Banner/>
      <div className='dark:bg-black'>
        <button onClick={changeState} className="border px-10 py-3 rounded-md bg-[#333f48] text-white font-bold mt-5 ml-28">{state ? `Ẩn sản phảm` : `Hiển thị sản phẩm`}</button>
      </div>
      {state && <Productlist/>}  
      <Footer/>
    </div>
  )
}

export default App