import React from 'react'
import FooterAdmin from './FooterAdmin';
import HeaderAdmin from './HeaderAdmin';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <>
        <HeaderAdmin/>
            <Outlet/>
        <FooterAdmin/>
    </>
  )
}

export default LayoutAdmin