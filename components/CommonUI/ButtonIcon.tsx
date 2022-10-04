import styles from "./Button.module.css";
import Image from "next/image";
import cart from "../../public/icons/cart_add.png";

const ButtonIcon = ({ buttonTxt, icon }: ButtonProps) => {
  const iconSrc = getIcon(icon);

  return (
    <button className={styles.button}>
      <span>{buttonTxt}</span>
      <Image src={iconSrc} className={styles.icon} width={25} height={25} />
    </button>
  );
};

interface ButtonProps {
  buttonTxt: string;
  icon: string;
}

function getIcon(iconName: string) {
  if (iconName == "cart") return cart;
  return "no icon";
}

export default ButtonIcon;
