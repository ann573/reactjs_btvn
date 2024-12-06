import React from "react";
import { Outlet, Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <>
      <header className="bg-black p-5 text-white mb-4">Xin chào Admin</header>
      <Link to="/admin/products" className="bg-violet-400 px-1 py-2 rounded-lg">Trang danh sách sản phẩm</Link>
      <Outlet />
    </>
  );
};

export default DashBoard;
