import './CoinPage.css'

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CoinInfo from '../CoinInfo';
import CoinBuy from '../CoinBuy';
import LoaderIcon from '../LoaderIcon';
import { ToastContainer, toast } from 'react-toastify';


const CoinPage = () => {

    const [coin, setCoin] = useState({});
    const params = useParams()

    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
        .then(resp => resp.json())
        .then(data => {
            setCoin(data)
            setError('none')
        })
        .catch(() => {
            toast.error("Can't load cryptos!")
            setError('flex')
        })
    }, [])

    return (
        <section className="coin-page">
            <ToastContainer/>
            <div className='coin-container'>
                <CoinInfo coin={coin}/>
                <CoinBuy  coin={coin}/>
                <h1 style={{display: error}} className="load-msg">Loading! <LoaderIcon/></h1>
            </div>
        </section>
    );
}
 
export default CoinPage;