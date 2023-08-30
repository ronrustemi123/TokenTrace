import './Portfolio.css'
import PortfolioContainer from './PortfolioContainer';
import SectionHeader from './SectionHeader';

import portfolio_img from '../assets/portfolio-section.webp'
import ButtonYellow from './ButtonYellow';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="left-portfolio">
                <SectionHeader text='Build your crypto portfolio'/>
                <p className='portfolio-subtitle'>Start your first trade with these easy steps.</p>
                <PortfolioContainer/>
                <ButtonYellow text='Get Started' size='16px' weight='500' padding='15px 0' width='200px'/>
            </div>
            <div className="right-portfolio hide-mobile">
                <img loading='lazy' className='port-img' src={portfolio_img} alt="" />
            </div>
        </section>
    );
}
 
export default Portfolio;