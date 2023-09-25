import './Buy.css'
import BuyComp from './BuyComp';

const Buy = () => {
    return (
        <section className='buy-sec'>
            <div className="buy-container">
                <div className="buy-desc">
                    <h1>Buy Crypto in a Few, Easy Steps</h1>
                    <h3>With various payment methods available, you're sure to find one that works for you.</h3>
                </div>
                <BuyComp/>
            </div>
        </section>
    );
}
 
export default Buy;