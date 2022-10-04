import Image from "next/image";
import React from "react";
import styles from "./Product.module.css";

const ProductTag = () => {
  return (
    <div className={styles.productTag}>
      <p className={styles.productTag_dot}>・</p>
      <p>ProductTag</p>
    </div>
  );
};

export default ProductTag;
