import BigNumberItem from "./BigNumberItem";
import styles from "./ProjectBigNumbers.module.css";


export default function ProjectBigNumbers(){
    return (
        <div className={styles.container}>
            <BigNumberItem icon="target" title="Target" value="$5000"/>
            <BigNumberItem icon="dolar" title="Pledget" value="$4,500"/>
            <BigNumberItem icon="person" title="Beckers" value="46"/>
        </div>
    );
}