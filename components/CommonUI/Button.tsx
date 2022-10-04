import styles from "./Button.module.css";

const Button = ({ buttonTxt }: ButtonProps) => {
  return (
    <button className={styles.button}>
      <span>{buttonTxt}</span>
    </button>
  );
};

interface ButtonProps {
  buttonTxt: String;
}

export default Button;
