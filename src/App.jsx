import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import AdminDashboard from "./Pages/AdminDashboard";
import CartPage from "./Pages/CartPage";
import { Routes, Route } from "react-router-dom";
import Negociate from "./Pages/Negociate";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";
<<<<<<< HEAD
=======
import ProductCheckout from "./Pages/ProductCheckout";
>>>>>>> da5208a (Updated Product checkout feature)

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
<<<<<<< HEAD
=======
        <Route path="/product/:id/checkout/" element={<ProductCheckout />} />
>>>>>>> da5208a (Updated Product checkout feature)
      </Routes>
    </>
  );
}

export default App;
