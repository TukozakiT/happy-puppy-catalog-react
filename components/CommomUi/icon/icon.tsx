import Image from "next/image";
import question from "../../../public/icons/icons8-ajuda-64.png";
import cat from "../../../public/icons/icons8-cat-64.png";
import dog from "../../../public/icons/icons8-dog-64.png";
import fish from "../../../public/icons/icons8-fish-48.png";
import hamster from "../../../public/icons/icons8-hamster-64.png";
import horse from "../../../public/icons/icons8-horse-64.png";
import hummingbird from "../../../public/icons/icons8-hummingbird-48.png";
import pottedplant from "../../../public/icons/icons8-potted-plant-48.png";
import pterodactyl from "../../../public/icons/icons8-pterodactyl-48.png";
import rabbit from "../../../public/icons/icons8-rabbit-64.png";



interface IconProps {
    iconName: string
}

const Icon = ({ iconName} : IconProps) => {
    let iconSrc = question;
    if(iconName === 'cat') iconSrc = cat;
    if(iconName === 'dog') iconSrc = dog;
    if(iconName === 'fish') iconSrc = fish;
    if(iconName === 'hamster') iconSrc = hamster;
    if(iconName === 'horse') iconSrc = horse;
    if(iconName === 'hummingbird') iconSrc = hummingbird;
    if(iconName === 'pottedplant') iconSrc = pottedplant;
    if(iconName === 'pterodactyl') iconSrc = pterodactyl;
    if(iconName === 'rabbit') iconSrc = rabbit;

    return(
        <Image src={iconSrc} alt={iconName}/>    
    )
}

export default Icon