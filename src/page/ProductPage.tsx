import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";

import {
  deleteProduct,
  fetchProduct,
} from "./../features/products/productAction";
import { IProduct } from "./../interface/IProduct";

import { PulseLoader } from "react-spinners";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const {
    products,
    loading,
  }: { products: IProduct[]; loading: boolean; } =
    useSelector((state: RootState) => state.products);

    useEffect(() => {
      (async () => {
        try {
          await dispatch(fetchProduct("products")).then(unwrapResult);
        } catch (error) {
          toast.error("Lỗi khi tải sản phẩm!");
        }
      })();
    }, [dispatch]);

  const handleDelete = (id: string | number) => {
    if (confirm("Bạn có chắc muốn xóa không")) dispatch(deleteProduct(id));
  };
  return (
    <>
      <header className="bg-blue-500 text-center text-white py-3">
        HeaderAdmin
      </header>
      {loading ? (
        <>
          <button className="text-white bg-green-500 block mx-auto mt-10 px-3 py-1 rounded-xl">
            <Link to="/admin/add">Thêm sản phẩm</Link>
          </button>

          <section className="flex justify-center mt-10">
            <PulseLoader />
          </section>
        </>
      ) : (
        <>
          <button className="text-white bg-green-500 block mx-auto mt-10 px-3 py-1 rounded-xl">
            <Link to="/admin/add">Thêm sản phẩm</Link>
          </button>
          <table className="mx-auto mt-5">
            <thead className="border border-collapse border-slate-500">
              <tr>
                <th className="border border-collapse border-slate-500">ID</th>
                <th className="border border-collapse border-slate-500">
                  Title
                </th>
                <th className="border border-collapse border-slate-500">
                  Price
                </th>
                <th className="border border-collapse border-slate-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="border border-collapse border-slate-500">
                      {item.id}
                    </td>
                    <td className="border border-collapse border-slate-500 px-3">
                      {item.title}
                    </td>
                    <td className="border border-collapse border-slate-500 px-5 text-center">
                      ${item.price}
                    </td>
                    <td className="border border-collapse border-slate-500">
                      <button
                        className="bg-red-500 px-2 py-1 rounded-lg m-2"
                        onClick={() => item.id && handleDelete(item.id)}
                      >
                        Remove
                      </button>
                      <button className="bg-yellow-500 px-2 py-1 rounded-lg m-2">
                        <Link to={`/admin/update/${item.id}`}> Update</Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ToastContainer/>
        </>
      )}
    </>
  );
};

export default ProductPage;
