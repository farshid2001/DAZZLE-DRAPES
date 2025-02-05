import React, { createContext, useState } from "react";
import all_products from "../Compounats/Assets/all_product";
import Swal from 'sweetalert2'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) { // Fixed loop
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Functions need to be defined before being used in contextValue
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    Swal.fire({
      title: "Added To Cart",
      icon: "success",
      draggable: true
    });
    console.log(cartItems);

  };

  const removeFromCart = (itemId) => {
    Swal.fire({
      title: "Do you want to remove this item from the cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Remove",
      denyButtonText: `Keep Item`
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
        }));
        Swal.fire("Removed!", "The item has been removed from your cart.", "success");
      } else if (result.isDenied) {
        Swal.fire("Item kept", "Your item is still in the cart.", "info");
      }
    });
  };
  


  const getCartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }

    }
    return totalAmount;
  }


  const getCartTotalItems = () => {
   let totalItem = 0;
   for(const item in cartItems){
    if(cartItems[item]>0){
      totalItem += cartItems[item];
    }
   }
   return totalItem;
  }


  const contextValue = { getCartTotal, all_products, cartItems, addToCart, removeFromCart,getCartTotalItems };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
