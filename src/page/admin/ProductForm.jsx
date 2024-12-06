import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createNewItem, getItemByID } from "../../service/crud";
import { updateByID } from "./../../service/crud";
import { zodResolver } from "@hookform/resolvers/zod";
import schemaProduct from './../../schema/product';


const ProductForm = () => {
  const nav = useNavigate();
  const { id } = useParams();
  // const [data, setData] = useState([]);
  if (id) {
    useEffect(() => {
      (async () => {
        const dataBody = await getItemByID("products", id);
        reset(dataBody);
      })();
    }, []);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({resolver: zodResolver(schemaProduct)});

  const onSubmit = async (formData) => {
    const action = id ? updateByID("products", id, formData) : createNewItem("products", formData);
    const data = await action;
    
    if (data && confirm("Bạn có muốn sang trang sản phẩm không? ")) {
      nav("/admin/products");
    }
    
    reset();
  };
  
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-[400px] mx-auto mt-10 p-4"
      >
        <h1 className="text-xl font-bold">
          {id ? "Update Product" : "Add new Product"}
        </h1>

        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            className="border w-full p-1"
            placeholder="Title........."
            name="title"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500">{errors?.title?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            className="border w-full p-1"
            name="price"
            placeholder="Price......"
            {...register("price", { required: "Price is required", valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-red-500">{errors?.price?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="border w-full p-1 resize-none"
            rows="10"
            name="description"
            placeholder="Description....."
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors?.description?.message}</p>
          )}
        </div>

        <button type="submit" className="w-full bg-orange-400 py-1 rounded-md">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default ProductForm;
