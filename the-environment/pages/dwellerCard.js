import Image from 'next/image';
import React,{ useState } from 'react';
import style from './dwellerCard.module.css'
import ReactHtmlParser from 'react-html-parser';

export default function DwellerCard(props){  
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    
    function openOrclosedStyle(){
        return isOpen ? style.open : style.closed;
    }

    async function setOpen(){
        if(description == "" && !isOpen){
            const res = await fetch(`${process.env.HOST}api/dwellersApi?name=The+${props.name}`)
            const data = await res.json()
            setDescription(data.description);
        }
        setIsOpen(!isOpen);
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
                The {props.name}
            </h2>
    }

    function getDwellerDescription(){
        if(isOpen)
            return <div className={style.description}>
                {ReactHtmlParser(description)}
            </div>
    }
    

    return(
        <div>
            <div className={openOrclosedStyle()} onClick={async () => await setOpen()}>
                {getImage()}
            </div>
            <div>
                {getDwellerName()}
            </div>
            {getDwellerDescription()}
        </div>
    );
}