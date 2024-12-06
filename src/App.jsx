import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import DashBoard from "./page/admin/DashBoard";
import ProductTable from "./page/admin/ProductTable";
import ProductForm from "./page/admin/ProductForm";
import NotFound from "./page/NotFound";
import LayoutAdmin from './components/layouts/LayoutAdmin';
import Register from './page/Register';
import LayoutCustom from './components/layouts/LayoutCustom';
import Login from './page/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutCustom />} >
          <Route index element={<HomePage/>}/>  
        </Route>  
        <Route path="/admin" element={<LayoutAdmin />}> 
          <Route index element={<DashBoard />} />  
          <Route path="products" element={<ProductTable />} />  
          <Route path="products/add" element={<ProductForm />} />  
          <Route path="products/update/:id" element={<ProductForm />} />  
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound />} />  
      </Routes>
    </>
  );
}

export default App;
