import DwellerCard from './dwellerCard';
import style from './dwellers.module.css'
import fairy from '../images/fairy.png'
import disruptor from '../images/disruptor.png'
import behemoth from '../images/behemoth.png'
import firewall from '../images/firewall.png'
import handler from '../images/handler.png'
import frontliner from '../images/frontliner.png'
// import Image from 'next/image';
// import fairy from '../images/fairy.png'

export default function Dwellers(){
    // const res = await fetch(`https://.../api/dwellersApi/Fairy`);
    // const data = await res.json();
    return (
        <div className={style.main}>
            <DwellerCard
                name="The Frontliner"
                src={frontliner}
                position="0 22.5%">  
            </DwellerCard>
            <DwellerCard 
                name="The Handler"
                src={handler}
                position="0 5%">  
            </DwellerCard>
            <DwellerCard 
                name="The Firewall"
                src={firewall}
                position="0 21%">  
            </DwellerCard>
            <DwellerCard 
                name="The Fairy"
                src={fairy}
                position="0 12%">  
            </DwellerCard>

            <DwellerCard
                name="The Disruptor"
                src={disruptor}
                position="0 6%">
            </DwellerCard>
            <DwellerCard
                name="The Behemoth"
                src={behemoth}
                position="0 17%">
            </DwellerCard>
            
        </div>
        // <div>
        //     <span>
        //         <Image
        //             src={data.src}
        //             width={600}
        //             height={600} 
        //         />
        //     </span>
        //     <span>
        //         {data.description}
        //     </span>
        // </div>
    );
}