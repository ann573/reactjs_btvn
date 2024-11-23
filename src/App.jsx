import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import Productlist from './components/productlist/Productlist'


const App = () => {
  const [state, setState] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');  
    } else {
      document.body.classList.remove('dark');  
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  };

  function changeState(){
    setState(prev => !prev)
  }
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Banner/>
      <button onClick={changeState} className="border px-10 py-3 rounded-md bg-[#333f48] text-white font-bold mt-5 ml-28">{state ? `Ẩn sản phảm` : `Hiển thị sản phẩm`}</button>
      {state && <Productlist/>}  
      <Footer/>
    </>
  )
}

export default App