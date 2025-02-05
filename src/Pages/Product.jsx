import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Compounats/Breadcrum/Breadcrum";
import RelatedProduct from "../Compounats/RelatedProduct/RelatedProduct";
// import { RelatedProduct } from "../Compounats/RelatedProduct/RelatedProduct";
import ProductDisplay from "../Compounats/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Compounats/DescriptionBox/Descriptionbox";

const Product = () => {
  const { productId } = useParams(); // Get productId from the URL
  const { all_products } = useContext(ShopContext);

//   if (!Array.isArray(all_product)) {
//     return <div>Loading...</div>;
//   }

  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProduct/>
        
      
    </div>
  );
};

export default Product;
