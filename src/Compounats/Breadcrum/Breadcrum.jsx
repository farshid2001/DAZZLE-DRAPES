import React from "react";
import "./breadcrum.css";
import breadcrum_arrow from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  const getCategoryPage = (category) => {
    if (category === "men") {
      return "/mens";
    } else if (category === "women") {
      return "/womens";
    } else if (category === "kid") {
      return "/kids";
    }
    return "/";
  };

  if (!product) {
    return null;
  }

  return (
    <nav className="breadcrum" aria-label="breadcrumb">
      <ol>
        <li>
          <a href="/">HOME</a>
          <img src={breadcrum_arrow} alt=">" aria-hidden="true" />
        </li>
        <li>
          <a href="/">SHOP</a>
          <img src={breadcrum_arrow} alt=">" aria-hidden="true" />
        </li>
        <li>
          <a href={getCategoryPage(product.category)}>{product.category}</a>
          <img src={breadcrum_arrow} alt=">" aria-hidden="true" />
        </li>
        <li aria-current="page">{product.name}</li>
      </ol>
    </nav>
  );
};

export default Breadcrum;
