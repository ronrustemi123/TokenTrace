import './Portfolio.css'
import PortfolioContainer from './PortfolioContainer';
import SectionHeader from './SectionHeader';

import portfolio_img from '../assets/portfolio-section.webp'
import ButtonYellow from './ButtonYellow';

import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
      <section className="portfolio">
        <div className="left-portfolio">
          <SectionHeader text="Build your crypto portfolio" />
          <p className="portfolio-subtitle">
            Start your first trade with these easy steps.
          </p>
          <PortfolioContainer />
          <Link to="/signup">
            <ButtonYellow
              text="Get Started"
              padding="15px 0px"
              size="17px"
              weight="500"
              width="200px"
            />
          </Link>
        </div>
        <div className="right-portfolio hide-mobile">
          <img loading="lazy" className="port-img" src={portfolio_img} alt="" />
        </div>
      </section>
    );
}
 
export default Portfolio;