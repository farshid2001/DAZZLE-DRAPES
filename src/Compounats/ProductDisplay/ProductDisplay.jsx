import React, { useContext } from "react";
import './ProductDisplay.css'
import star_img from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";
import Swal from 'sweetalert2'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)

    return<>
    <div className="productdisply">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            </div>
           

        </div>
        <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-star">
                <img src={star_img} alt="" />
                <img src={star_img} alt="" />
                <img src={star_img} alt="" />
                <img src={star_img} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-rate-old">${product.old_price}</div>
                <div className="productdisplay-rate-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-description">
            Elegant and comfortable,  cloth features a pattern, perfect for occasion. 
            
            </div>

            <div className="productdisplay-size">
                <h1>Select size</h1>
                <div className="productdisplay-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>Women , T- Shirt, Croptop</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern, Leatest</p>

        </div>
        
    </div>
    
    </>
}

export default ProductDisplay