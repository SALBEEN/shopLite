import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products))
      .catch((err) => alert("Error while fetching data from server", +err));
  }, []);

  // initialize product with the products array (not a nested array)
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        user,
        setUser,
        cartCount,
        setCartCount,
        selectedCategory,
        setSelectedCategory,
        setProduct,
        product,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
