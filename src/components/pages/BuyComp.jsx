import { useEffect, useState } from 'react';
import './Buy.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from 'react-toastify';

import ButtonYellow from '../ButtonYellow'
import { Link } from 'react-router-dom';

const BuyComp = () => {

    const [amount, setAmount] = useState(1)

    const [coin, setCoin] = useState([])

    const [value, setValue] = useState('bitcoin')

    const [price, setPrice] = useState([])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(value !== '') {
            getPrice()
        }
    }, [value])

    const getData = async () => {
        try {
            const resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en');
            const data = await resp.json();
            setCoin(data)
        }catch(err) {
            console.error(err)
            toast.error("Can't get crypto data!")
        }
    }

    const getPrice = async () => {
        try {
            const resp = await fetch(`https://api.coingecko.com/api/v3/coins/${value}`);
            const data = await resp.json();
            setPrice(data)
        }catch(err) {
            console.error(err)
            toast.error("Can't get crypto data!")
        }
    }

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
          object.target.value = object.target.value.slice(
            0,
            object.target.maxLength
          );
        }
      };



    const result = amount * (price.market_data ? (price.market_data.current_price.usd.toFixed(2)) : null)


    return (
        <div className='buy-buypage'>
            <ToastContainer autoClose={3000} hideProgressBar={true} theme='dark' pauseOnHover={false}/>
            <h2 className='buypage-header'>Buy</h2>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={coin.map(el => el.id)}
                onSelect={e => setValue(e.target.value)}
                renderInput={(params) => <TextField {...params}  placeholder='Bitcoin'/>}
            />
            <div style={{marginBottom: '10px'}} className="buy-input">
                <p>Buy</p>
                <input maxLength='8' onInput={e => maxLengthCheck(e)} value={amount} onChange={e => setAmount(e.target.value)}  type="number" name="" id="" placeholder='0.00'/>
            </div>
            <div className="buy-result">
                <p>{amount} <span className='symbol-up'>{price.symbol}</span> =</p>
                <p>USD ${result.toLocaleString()}</p>
            </div>
            <Link to='/signup'>
                <ButtonYellow width='100%' padding='15px 0' text='Buy' size='19px' weight='500'/>
            </Link>
        </div>
    );
}
 
export default BuyComp;