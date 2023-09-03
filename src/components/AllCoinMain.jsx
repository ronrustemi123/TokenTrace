import { useEffect, useState } from 'react';
import './AllCoinMain.css'
import AllCoinCrypto from './AllCoinCrypto';

import { ToastContainer, toast } from 'react-toastify';
import LoaderIcon from './LoaderIcon';
import Navigation from './Navigation';
import CoinPage from './pages/CoinPage';
import { Link } from 'react-router-dom';

const AllCoinMain = () => {

    const [coins, setCoins] = useState([])

    const [page, setPage] = useState(1)
    const [error, setError] = useState('')

    const [firstRank, setFirstRank] = useState(0)
    const [lastRank, setLastRank] = useState(11)




    const pageUp = () => {
        if(page > 0 && page <= 9) {
            setPage(prev => prev + 1)
            setFirstRank(prev => prev + 10)
            setLastRank(prev => prev + 10)
        }
    }
    const pageDown = () => {
        if(page > 1 && page <= 10) {
            setPage(prev => prev - 1)
            setFirstRank(prev => prev - 10)
            setLastRank(prev => prev - 10)
        }
    }

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
        .then(resp => resp.json())
        .then(data => {
            setCoins(data)
            setError('none')
        })
        .catch(() => {
            toast.error("Can't load cryptos!")
            setError('flex')
        })
    }, [])

    return (
        <main className="all-coin-main">
             <ToastContainer/>
            <div className="all-coin-main-container">
                
                <div className="all-coin-main-tab">
                    <h2 className='all-coin-main-tab-head'>Top Tokens by Market Capitalization</h2>
                    <div className='switch-tab'>
                        <i className="fa-solid fa-chevron-left" onClick={pageDown}></i>
                        <p>{page}</p>
                        <i className="fa-solid fa-chevron-right" onClick={pageUp}></i>
                    </div>    
                    
                </div>       
                <div className="all-coin-main-cryptos-head">
                    <p>Name</p>
                    <p>Price</p>
                    <p>24h Change</p>
                    <p className='all-coin-hide-mobile'>Market Cap</p>
                    <p>Favorite</p>
                </div>
                <div className='all-coin-main-cryptos'>
                    {coins.map(coins => {
                        return (
                            <Link to={`/coin/${coins.id}`} element={<><Navigation/><CoinPage/></>} style={{textDecoration: 'none'}} key={coins.id}>
                                {coins.market_cap_rank > firstRank && coins.market_cap_rank < lastRank ? <AllCoinCrypto coins={coins}/> : null}
                            </Link>
                        )
                    })}
                    <h1 style={{display: error}} className="error-msg">Try Again Later! <LoaderIcon/></h1> 
                </div>   
            </div>
        </main>
    );
}
 
export default AllCoinMain;