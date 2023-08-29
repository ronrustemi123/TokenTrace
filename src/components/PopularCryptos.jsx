import React, {useState, useEffect} from "react";
import Coins from "./Coins";
import './PopularCryptos.css'
import SectionHeader from './SectionHeader';
import SectionLink from "./SectionLink";

const PopularCryptos = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en')
        .then(resp => resp.json())
        .then(data => setCoins(data))
        .catch(err => console.error(err))
    }

    return (
      <div className="popular-cryptos-container">
        <div className="section-header">
          <SectionHeader text='Popular cryptocurrencies'/>
          <SectionLink text='View more markets'/>
        </div>
        <Coins coins={coins} />
      </div>
    );
}
 
export default PopularCryptos;