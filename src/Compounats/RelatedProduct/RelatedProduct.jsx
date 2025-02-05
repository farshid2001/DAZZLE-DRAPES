import React from "react";
import "./relatedProduct.css"
import data_product from '../Assets/data'
import Item from "../Item/Item";

const RelatedProduct = () => {

    return (
        <div className="relatedProduct">
            <h1>Releted products</h1>
            <hr />
            <div className="relatedProducts-item">
            {data_product.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>

        </div>
    )


}

export default RelatedProduct