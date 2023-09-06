import './Help.css'
import SectionHeader from './SectionHeader';

import icon1 from '../assets/help_icon1.webp';
import icon2 from '../assets/help_icon2.webp';
import icon3 from '../assets/help_icon3.webp';
import HelpItem from './HelpItem';


const itemObj = [
    {
        icon: icon1,
        title: '24/7 Chat Support',
        desc: 'Get 24/7 chat support with our friendly customer service agents at your service',
        link: 'Chat now'
    },
    {
        icon: icon2,
        title: 'FAQs',
        desc: 'View FAQs for detailed instructions on specific features.',
        link: 'View more'
    },
    {
        icon: icon3,
        title: 'Blog',
        desc: 'Stay up to date with the latest stories and commentary.',
        link: 'View more'
    }
]



const Help = () => {
    return (
        <section className="help">
            <SectionHeader text='Need help?'/>
            <div className="help-container">
                {itemObj.map(el=> <HelpItem title={el.title} desc={el.desc} icon={el.icon} key={el.title} link={el.link}/>)}
            </div>
        </section>
    );
}
 
export default Help;