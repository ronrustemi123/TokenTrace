import './Header.css'
import HeaderForm from './HeaderForm';
import HeaderIllustrations from './HeaderIllustrations';
import HeaderStats from './HeaderStats';

const stats = [
    {
        text: '$38 billion',
        desc: '24h trading volume on Token Trace exchange'
    },
    {
        text: '350+',
        desc: 'Cryptocurrencies listed'
    },
    {
        text: '150 million',
        desc: 'Registered users'
    },
    {
        text: '<0.10%',
        desc: 'Lowest transaction fees'
    },
]

const Header = () => {
    return ( 
        <header className="header">
            <div className="header-top">
                <HeaderForm/>
                <HeaderIllustrations/>
            </div>
            <div className="header-bottom">
                {stats.map(el => <HeaderStats text={el.text} desc={el.desc} key={el.desc}/>)}
            </div>
        </header>
    );
}
 
export default Header;