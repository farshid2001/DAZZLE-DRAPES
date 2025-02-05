import React, { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import cart_close_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const { all_products, cartItems, addToCart, removeFromCart,getCartTotal } = useContext(ShopContext);

    return (
        <div className="cart-items">
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {  
                    return (
                        <div key={e.id}>  
                            <div className="cartitem-format cartitem-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img 
                                    src={cart_close_icon} 
                                    onClick={() => removeFromCart(e.id)} 
                                    alt="Remove item" 
                                    className="cart-remove-icon"
                                />
                            </div>
                            <hr />
                        </div>
                        
                    );
                }
                return null; // If item quantity is 0, don't render anything
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getCartTotal()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getCartTotal()}</h3>
                        </div>
                    

                    </div>
                    <button>PROCEED TO CHECOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code"/>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
