import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { fetchProductById } from "../features/products/productAction";
import { productSchema } from "../schema/productSchema";
import { AppDispatch, RootState } from "../store/store";
import {
  createProduct,
  editProduct,
} from "./../features/products/productAction";
import { IProduct } from "./../interface/IProduct";

const ProductForm: React.FC = () => {
  const nav: ReturnType<typeof useNavigate> = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { error }: { error: string | null } = useSelector(
    (state: RootState) => state.products
  );
  const { id } = useParams<{ id: string }>();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const data: IProduct = await dispatch(fetchProductById(id)).unwrap();
        reset(data);
        } catch (error) {
          toast.error("Lỗi khi tải sản phẩm!");
        }
      })();
    }
  }, [dispatch, id, reset]);

  const submitForm: SubmitHandler<IProduct> = (dataBody: IProduct): void => {

    if (id) {
      try {
        dispatch(editProduct({ id, dataBody }));
      nav("/");
      } catch (error) {
        toast("Không update được, hãy thử lại")
      }
    } else {
      dispatch(createProduct(dataBody));
      reset();
      if (error) toast(error);
      else if (!error && confirm("Bạn có muốn chuyển trang không")) nav("/");
    }
  };

  return (
    <>
      <form
        className="border mx-auto max-w-[450px] px-3 py-5"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-center text-3xl font-bold">
          {id ? "Cập nhật thông tin" : "Thêm sản phẩm mới"}
        </h1>
        <div className="mb-3">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="border w-full rounded-lg px-2"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500 italic">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            className="border w-full rounded-lg px-2"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-red-500 italic">{errors.price.message}</p>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            cols={30}
            rows={10}
            className="border resize-none px-2"
            {...register("description")}
          ></textarea>
        </div>
        <div className="mb-3">
          <button className="w-full bg-green-500 py-1 rounded-lg text-white">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default ProductForm;
