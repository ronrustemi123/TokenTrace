import './ProtectContainer.css'

import icon1 from '../assets/protect_icon1.png';
import icon2 from '../assets/protect_icon2.png';
import icon3 from '../assets/protect_icon3.png';
import ProtectItem from './ProtectItem';

const itemObj = [
    {
        icon: icon1,
        title: 'Secure Asset Fund for Users (SAFU)',
        desc: 'Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.'
    },
    {
        icon: icon2,
        title: 'Personalised Access Control',
        desc: 'Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.'
    },
    {
        icon: icon3,
        title: 'Advanced Data Encryption',
        desc: 'Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.'
    }
]

const ProtectConainer = () => {
    return (

        <>
            {itemObj.map((el,index) => <ProtectItem title={el.title} desc={el.desc} icon={el.icon} key={index}/>)}
        </>

    );
}
 
export default ProtectConainer;