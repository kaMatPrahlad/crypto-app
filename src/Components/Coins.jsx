import React from 'react'
import { useState, useEffect } from 'react'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import axios from 'axios'
import Header from './Header'
import { Link } from 'react-router-dom'

const Coins = () => {
  const [loading, setLoading] = useState([]);
  const [coins, setCoins] = useState(true);
  const [currency, setCurrency] = useState('inr  ');
  const currencySymbol = currency === 'inr' ? '₹' : '$';

  useEffect(() => {
    const getCoinsData = async () => {
      const { data } = await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`);
      console.log(data);
      setCoins(data);
      setLoading(false);


    }
    getCoinsData()
  }, [])
  return (
    <div>
      {loading ? <Loader /> : <>
        <Header />
        <div className="btns">
          <button onClick={() => setCurrency('usd')}>USD</button>
          <button onClick={() => setCurrency('inr')}>INR</button>
        </div>

        {
          coins.map((coindata, i) => {
            return (
              <CoinCard coindata={coindata} i={i} id={coindata.id} currencySymbol={currencySymbol} />


            )
          })
        }
      </>}



    </div>
  )
}

const CoinCard = ({ coindata, currencySymbol, i, id }) => {
  const profit = coindata.price_change_percentage_24h > 0
  return (
    <Link to={`/coins/${id}`} style={{ color: "white", textDecoration: 'none' }} >
      <div className='ex-cards'>
        <div className="image">
          <img height={"80px"} src={coindata.image} alt="" />
        </div>
        <div className="name">
          {coindata.name}
        </div>
        <div className="price">
          {currencySymbol} {coindata.current_price.toFixed(0)}
        </div>
        <div style={profit ? { color: "green" } : { color: "red" }} className="rank">
          {profit ? "+" + coindata.price_change_percentage_24h.toFixed(2) : coindata.price_change_percentage_24h.toFixed(2)}
        </div>
      </div>
    </Link>
  )


}


export default Coins