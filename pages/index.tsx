import type { NextPage } from "next";
import styles from "./Home.module.css";
import Layout from "../components/layout_template/layout";
import Button from "../components/CommonUI/Button";
import ButtonIcon from "../components/CommonUI/ButtonIcon";
import ProductCard from "../components/CommonUI/ProductCard";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.classeTeste}>Nossa página</h1>
      <Button buttonTxt={"Attempt 1"} />
      <ButtonIcon buttonTxt={"Attempt Icon"} icon="cart" />
      <ProductCard />
    </Layout>
  );
};

export default Home;
