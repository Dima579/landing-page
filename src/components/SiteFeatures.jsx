import '../styles/SiteFeatures.css'
import Card from './Card/Card.jsx'
import { BiSolidTree } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { FaStore } from "react-icons/fa";

function SiteFeatures()
{
    return(
        <>
        <section className='flex-center-column sf-gap'>
            <div className='text-group text-center condesner text-group--padding-height'>
                <h1 className='text-group__title'>What do we have on offer?</h1>
                <h3 className='text-group__description'>Whether you are a first-time player getting your first taste of the sport, or a long time regular who's coming in for their regular skirmish, there is no such thing as a regular day with us. Here just some of the factors that really define what we're about:</h3>
            </div>
            <div className='card-containers'>
                <Card Title="Vast game area" Icon={<BiSolidTree />} Description="The game area itself is 40+ acres, with a mixture of woodland and varying structures such as barracks and compounds giving players a good mixture of long-short range engagements, catering for all styles of play."/>
                <Card Title="Events" Icon={<MdOutlineDescription />} Description="Every skirmish, milsim and role-playing event we host comes with it's own storyline, characters and even creatures depending the story, we take pride in emersing our players with every detail."/>
                <Card Title="store & facilities" Icon={<FaStore />} Description="Our on-site store is designed so players can get anything they need for the day. We sell everything from bbs, gas, snacks, drinks, tactical kit and even replicas to help everyone be prepared for the next mission."/>
            </div>
        </section>
        </>
    );
}

export default SiteFeatures