import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import AdminDashboard from "./Pages/AdminDashboard";
import CartPage from "./Pages/CartPage";
import { Routes, Route } from "react-router-dom";
import Negociate from "./Pages/Negociate";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";
import ProductCheckout from "./Pages/ProductCheckout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/negociate" element={<Negociate />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/:id/checkout/" element={<ProductCheckout />} />
      </Routes>
    </>
  );
}

export default App;
