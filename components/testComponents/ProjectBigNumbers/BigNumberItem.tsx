import IconCircle from "../CommomUI/IconCircle";
import styles from "./BigNumberItem.module.css";


export default function BigNumberItem({icon, title, value}:BigNumberItemProps){
    return (
        <div className={styles.container}>
            <IconCircle icon={icon} />
            <p className={`${styles.fontDefault} ${styles.title}`}>{title}</p>
            <p className={`${styles.fontDefault} ${styles.value}`}>{value}</p>
        </div>
    );
}

interface BigNumberItemProps{
    icon: string;
    title: string;
    value:string
}