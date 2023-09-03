import './Explore.css'
import SectionHeader from './SectionHeader';
import ExploreItem from './ExploreItem';

import icon1 from '../assets/explore_icon1.webp';
import icon2 from '../assets/explore_icon2.webp';
import icon3 from '../assets/explore_icon3.webp';
import ButtonYellow from './ButtonYellow';


const itemObj = [
    {
        icon: icon1,
        title: 'Dive into the world of NFTs',
        desc: 'Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Token NFT.'
    },
    {
        icon: icon2,
        title: 'Grow your business with Token Pay',
        desc: 'Reach more customers as you pay and get paid in crypto with our borderless payment technology on Token Trace Pay & Token Trace Marketplace.'
    },
    {
        icon: icon3,
        title: 'Token Earn',
        desc: 'Hold your crypto funds and start earning.'
    },
]

const Explore = () => {
    return (
        <section className="explore">
            <SectionHeader text='Explore endless possibilities with Token Trace'/>
            <div className="explore-container">
                {itemObj.map(el => <ExploreItem key={el.title} icon={el.icon} title={el.title} desc={el.desc}/>)}
            </div>
            <ButtonYellow text='Explore Now' padding="15px 0" weight="500" size='16px' width='200px'/>
        </section>
    );
}
 
export default Explore;