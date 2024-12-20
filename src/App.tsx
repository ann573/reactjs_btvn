import { Route, Routes } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import ProductForm from "./page/ProductForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/admin/update/:id" element={<ProductForm />} />
      <Route path="/admin/add" element={<ProductForm />} />
    </Routes>
  );
};

export default App;
