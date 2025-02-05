import React, { useContext } from "react";
import "./CSS/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Compounats/Assets/dropdown_icon.png";
import Item from "../Compounats/Item/Item";

const ShopCategory = ({ banner, category }) => {
    const { all_products = [] } = useContext(ShopContext);
    console.log(all_products);
  const filteredProducts = all_products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
  

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt={`Banner for ${category} category`} />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_products.length} products
        </p>
        <div className="shopCategory-sort">
           <p>sort by</p>
          <img src={drop_down} alt="Sort Dropdown" />
         
        </div>
      </div>
      <div className="shopCategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available in this category</p>
        )}
      </div>
      <div className="shopCategory-loadmore">
        explore more
      </div>
    </div>
  );
};

export default ShopCategory;
