import React, {useState, useEffect} from "react";
import Coins from "./Coins";
import './PopularCryptos.css'
import SectionHeader from './SectionHeader';
import SectionLink from "./SectionLink";
import ButtonYellow from "./ButtonYellow";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PopularCryptos = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en')
        .then(resp => resp.json())
        .then(data => setCoins(data))
        .catch(() => toast.error("Can't load cryptos!"))
    }

    return (
      <>
        <ToastContainer/>
        <div className="popular-cryptos-container">
          
          <div className="section-header">
            <SectionHeader text='Popular cryptocurrencies'/>
            <SectionLink text='View more markets'/>
          </div>
          <Coins coins={coins} />
          <div className="section-footer">
            <h2 className="footer-header">Sign up now to build your own portfolio for free!</h2>
            <ButtonYellow text='Get Started' padding="15px 0px" size="17px" weight="500" width='200px'/>
          </div>
        </div>
      </>
    );
}
 
export default PopularCryptos;