import DwellerCard from './dwellerCard';
import style from './dwellers.module.css'
import fairy from '../images/fairy.png'
import disruptor from '../images/disruptor.png'
import behemoth from '../images/behemoth.png'
import firewall from '../images/firewall.png'
import handler from '../images/handler.png'
import frontliner from '../images/frontliner.png'
import honeycomb from '../images/honeycomb.png'
import host from '../images/host.png'
import motherboard from '../images/motherboard.png'
import prototype from '../images/prototype.png'
import queue from '../images/queue.png'
import ransomware from '../images/ransomware.png'
import spyware from '../images/spyware.png'
import transistor from '../images/transistor.png'
import tyrant from '../images/tyrant.png'
import wirerepairer from '../images/wirerepairer.png'
import worm from '../images/worm.png'

export default function Dwellers(){
    return (
        <div className={style.main}>
            <DwellerCard
                name="Prototype"
                src={prototype}
                position="0 26%">  
            </DwellerCard>
            <DwellerCard
                name="Host"
                src={host}
                position="0 22.5%">  
            </DwellerCard>
            <DwellerCard
                name="Frontliner"
                src={frontliner}
                position="0 22.5%">  
            </DwellerCard>
            <DwellerCard 
                name="Handler"
                src={handler}
                position="0 5%">  
            </DwellerCard>
            <DwellerCard 
                name="Firewall"
                src={firewall}
                position="0 21%">  
            </DwellerCard>
            <DwellerCard
                name="Worm"
                src={worm}
                position="0 10%">  
            </DwellerCard>
            <DwellerCard
                name="Transistor"
                src={transistor}
                position="0 22.5%">  
            </DwellerCard>
            <DwellerCard
                name="Spyware"
                src={spyware}
                position="0 20%">  
            </DwellerCard>
            <DwellerCard
                name="Behemoth"
                src={behemoth}
                position="0 17%">
            </DwellerCard>
            <DwellerCard
                name="Wirerepairer"
                src={wirerepairer}
                position="0 38%">  
            </DwellerCard>
            <DwellerCard
                name="Disruptor"
                src={disruptor}
                position="0 6%">
            </DwellerCard>
            <DwellerCard
                name="Honeycomb"
                src={honeycomb}
                position="0 37%">  
            </DwellerCard>
            <DwellerCard
                name="Ransomware"
                src={ransomware}
                position="0 22.5%">  
            </DwellerCard>
            <DwellerCard 
                name="Fairy"
                src={fairy}
                position="0 12%">  
            </DwellerCard>
            <DwellerCard
                name="Queue"
                src={queue}
                position="0 12%">  
            </DwellerCard>
            <DwellerCard
                name="Tyrant"
                src={tyrant}
                position="0 40%">  
            </DwellerCard>
            <DwellerCard
                name="Motherboard"
                src={motherboard}
                position="0 22.5%">  
            </DwellerCard>
            
            
        </div>
    );
}