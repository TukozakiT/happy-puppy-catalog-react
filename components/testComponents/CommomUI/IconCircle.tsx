import styles from "./IconCircle.module.css";
import Image from "next/image";
import dolar from "../../../public/money.png";
import target from "../../../public/target.png";
import person from "../../../public/person.png";

export default function IconCircle({icon}:IconCircleProps){
    
    const iconSrc = getIcon(icon);
    
    
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src={iconSrc} className={styles.icon} width={25} height={25}/>
            </div>
        </div>
        
    );
}

function getIcon(iconName:string){
    if(iconName == "dolar") return dolar;
    if(iconName == "target") return target;
    if(iconName == "person") return person;
    return dolar;
}

interface IconCircleProps{
    icon:string;
}