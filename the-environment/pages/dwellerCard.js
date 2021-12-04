import Image from 'next/image';
import React,{ useState } from 'react';
import style from './dwellerCard.module.css'


export default function DwellerCard(props){
    
    const [isOpen, setIsOpen] = useState(false);
    
    function openOrclosedStyle(){
        return isOpen ? style.open : style.closed;
    }

    function getImage(){
        return isOpen ?
        <Image
                src={props.src}
                alt="dweller"
                layout="fill"
                objectFit="cover"
        /> :
        <Image
            src={props.src}
            alt="dweller"
            layout="fill"
            objectFit="cover"
            objectPosition={props.position}
        />
    }

    function getDwellerName(){
        if(isOpen)
            return <h2 className={style.dwellerName}>
                {props.name}
            </h2>
    }

    return(
        <div>
            <div className={openOrclosedStyle()} onClick={() => setIsOpen(!isOpen)}>
                {getImage()}
            </div>
            <div>
                {getDwellerName()}
            </div>
        </div>
    );
}