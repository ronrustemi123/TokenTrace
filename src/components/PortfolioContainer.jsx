import './PortfolioContainer.css'
import PortfolioItem from './PortfolioItem';

import item1 from '../assets/portfolio_icon1.webp';
import item2 from '../assets/portfolio_icon2.png';
import item3 from '../assets/portfolio_icon3.png';

const itemObj = [
    {
        icon: item2,
        title: 'Verify your identity',
        desc: 'Complete the identity verification process to secure your account and transactions.'
    },
    {
        icon: item3,
        title: 'Fund your account',
        desc: 'Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.'
    },
    {
        icon: item1,
        title: 'Start trading',
        desc: "You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Token Trace has to offer."
    },
]



const PortfolioContainer = () => {
    return (
        <div className="portfolio-container">
            {itemObj.map(el => <PortfolioItem title={el.title} desc={el.desc} icon={el.icon} key={el.title}/>)}
        </div>
    );
}
 
export default PortfolioContainer;