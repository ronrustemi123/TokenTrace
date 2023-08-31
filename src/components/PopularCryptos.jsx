import React, {useState, useEffect} from "react";
import Coins from "./Coins";
import './PopularCryptos.css'
import SectionHeader from './SectionHeader';
import SectionLink from "./SectionLink";
import ButtonYellow from "./ButtonYellow";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoaderIcon from "./LoaderIcon";

import { Link } from "react-router-dom";

const PopularCryptos = () => {

    const [coins, setCoins] = useState([]);

    const [error, setError] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en')
        .then(resp => resp.json())
        .then(data => {
          setCoins(data)
          setError('none')
        })
        .catch(() => {
            toast.error("Can't load cryptos!")
            setError('flex')
        })
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
          <h1 style={{display: error}} className="error-msg">Try Again Later! <LoaderIcon/></h1>
          <div className="section-footer">
            <h2 className="footer-header">Sign up now to build your own portfolio for free!</h2>
            <Link to='/signup'>
              <ButtonYellow text='Get Started' padding="15px 0px" size="17px" weight="500" width='200px'/>
            </Link>
          </div>
        </div>
      </>
    );
}
 
export default PopularCryptos;