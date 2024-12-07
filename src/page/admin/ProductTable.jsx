import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllItem, removeItemByID } from "./../../service/crud";

const ProductTable = () => {
  const [perPage, setPerPage] = useState(10);
  const [nowPage, setNowPage] = useState(0);

  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getAllItem("products");
      setProducts(data);
      setTotal(Math.ceil(data.length / perPage));
    })();
  }, []);

  function nextPage(){
    nowPage+1 < total ? setNowPage(prev => prev + 1) : setNowPage(0)

  }
  function prevPage(){
    nowPage-1 > 0 ? setNowPage(prev => prev - 1) : setNowPage(total-1)

  }
  const handleRemove = async (id) => {
    confirm("Bạn có chắc chắn muốn xóa không?") && (
      await removeItemByID("products", id) &&
      await getAllItem("products").then(data => {
        setProducts(data);
        setTotal(Math.ceil(data.length / perPage));
      })
      );
  };
  
  return (
    <>
      <Link
        to="/admin/products/add"
        className="bg-green-500 px-3 py-2 rounded-md"
      >
        Thêm sản phẩm mới
      </Link>
      <table className="mt-5 border">
        <thead>
          <tr>
            <th className="border">ID</th>
            <th className="border">Title</th>
            <th className="border">Price</th>
            <th className="border">Description</th>
            <th className="border">Action</th>
          </tr>
        </thead>

        <tbody>
          {products
            .slice(nowPage * perPage, (nowPage + 1) * perPage)
            .map((item) => (
              <tr key={item.id}>
                <td className="border w-[5%]">{item.id}</td>
                <td className="border w-[20%]">{item.title}</td>
                <td className="border w-[20%]">{item.price}</td>
                <td className="border w-[30%]">
                  {item.description || "Đang cập nhật"}
                </td>
                <td className="border text-center w-[30%]">
                  <button className="bg-red-500 py-1 px-3 mr-3 rounded-lg" onClick={()=> handleRemove(item.id)}>
                    Remove
                  </button>
                  <button className="bg-yellow-500 py-1 px-3 rounded-lg">
                    <Link to={`/admin/products/update/${item.id}`}>Update</Link>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-5">
        <div className="bg-slate-300 cursor-pointer" onClick={prevPage}>
          <i className="ri-arrow-left-s-fill p-2 text-xl"></i>
        </div>
        <p className="border px-2">
          Trang {nowPage + 1}/{total}
        </p>
        <div className="bg-slate-300 cursor-pointer" onClick={nextPage}>
          <i className="ri-arrow-right-s-fill p-2 text-xl"></i>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
