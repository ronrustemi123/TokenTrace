import ButtonYellow from './ButtonYellow';
import './Earn.css'
import SectionHeader from './SectionHeader';

import { Link } from 'react-router-dom';

const Earn = () => {
    return (
        <section className="earn">
            <SectionHeader text='Start earning today'/>
            <Link to='/signup'>
              <ButtonYellow text='Get Started' padding="15px 0px" size="17px" weight="500" width='200px'/>
            </Link>
        </section>
    );
}
 
export default Earn;