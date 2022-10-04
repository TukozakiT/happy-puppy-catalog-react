import Image from "next/image";
import React from "react";
import ButtonIcon from "./ButtonIcon";
import ProductTag from "./ProductTag";
import dogFood from "../../public/dogfood.jpg";
import styles from "./Product.module.css";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <ProductTag />
      <Image src={dogFood} />
      <p className={styles.productCard_description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        error voluptas ab impedit vitae cum velit dolores quibusdam debitis
        molestiae nisi consequuntur totam, voluptatem tempore aliquid
        perspiciatis suscipit, doloremque omnis!
      </p>
      <ButtonIcon buttonTxt="Attempt Icon" icon="cart" />
    </div>
  );
};

export default ProductCard;
