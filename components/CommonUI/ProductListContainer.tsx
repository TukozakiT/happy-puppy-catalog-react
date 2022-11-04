import React from "react";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

const ProductListContainer = () => {
  return (
    <section className={classes.productListContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductListContainer;
