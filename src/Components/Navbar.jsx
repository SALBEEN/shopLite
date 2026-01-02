import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const { user, cartCount, setUser, setSelectedCategory, selectedCategory } =
    useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="navbar">
    //   <h1 className="logo">ShopLite</h1>

    //   <div className={`nav-links ${isOpen ? "active" : ""}`}>
    //     <Link to="/">
    //       <i class="fa-solid fa-house"></i>
    //     </Link>

    //     <Link to="/product">Products</Link>
    //     <Link to="/admindashboard">
    //       <i class="fa-solid fa-users"></i>
    //     </Link>

    //     <Link to="/setting">
    //       <i class="fa-solid fa-gear"></i>
    //     </Link>

    //     <div className="search-box">
    //       <i
    //         style={{ fontSize: "20px", paddingRight: "5px" }}
    //         class="fa-solid fa-magnifying-glass"
    //       ></i>
    //       <input type="search" placeholder="Search Item" />
    //     </div>

    //     <div className="filter-box">
    //       <span>Category:</span>
    //       <select
    //         value={selectedCategory}
    //         onChange={(e) => setSelectedCategory(e.target.value)}
    //       >
    //         <option value="All">All</option>
    //         <option value="beauty">Beauty</option>
    //         <option value="fragrances">Fragrances</option>
    //         <option value="furniture">Furniture</option>
    //         <option value="groceries">Groceries</option>
    //       </select>
    //     </div>
    //     <div className="cart-edit">
    //       <Link id="cart" to="/cartpage">
    //         <i className="fa-solid fa-cart-shopping"></i>
    //       </Link>
    //       <label id="cartCount">{cartCount}</label>
    //     </div>
    //   </div>

    //   {isOpen && (
    //     <>
    //       <div className="mini-navbar">
    //         <div className="mini-nav-link">
    //           <div className="cart-edit">
    //             <Link id="cart" to="/cartpage">
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </Link>
    //             <label id="cartCount">{cartCount}</label>
    //           </div>

    //           <Link to="/">
    //             <i class="fa-solid fa-house"></i>
    //           </Link>

    //           <Link to="/product">Products</Link>
    //           <Link to="/admindashboard">
    //             <i class="fa-solid fa-users"></i>
    //           </Link>

    //           <Link to="/setting">
    //             <i class="fa-solid fa-gear"></i>
    //           </Link>
    //         </div>

    //         <div className="filter-box">
    //           <span>Category:</span>
    //           <select
    //             value={selectedCategory}
    //             onChange={(e) => setSelectedCategory(e.target.value)}
    //           >
    //             <option value="All">All</option>
    //             <option value="beauty">Beauty</option>
    //             <option value="fragrances">Fragrances</option>
    //             <option value="furniture">Furniture</option>
    //             <option value="groceries">Groceries</option>
    //           </select>
    //         </div>
    //       </div>
    //     </>
    //   )}

    //   <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
    //     <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
    //   </div>
    // </div>
    <div className="navbar">
      <div className="nav-left">
        <h1 className="logo">ShopLite</h1>
      </div>

      {/* Desktop */}
      <div className="nav-links">
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="/product">Products</Link>
        <Link to="/admindashboard">
          <i className="fa-solid fa-users"></i>
        </Link>
        <Link to="/negociate">Negociate</Link>

        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search products…" />
        </div>

        <div className="filter-box">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>
<<<<<<< HEAD

        <div className="cart-edit">
          <Link to="/cartpage">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
=======
      </div>

      <div className={`cart-edit ${isOpen ? "show" : ""}`}>
        <Link to="/cartpage">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-count">{cartCount}</span>
        </Link>
>>>>>>> da5208a (Updated Product checkout feature)
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      {/* Mobile */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/admindashboard">Admin</Link>
        <Link to="/setting">Settings</Link>
<<<<<<< HEAD
=======
        <div className="cart-edit">
          <Link to="/cartpage">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
>>>>>>> da5208a (Updated Product checkout feature)

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </div>
  );
}
// "fa-solid fa-bars"S
// "fa-solid fa-xmark"
