import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

import Navbar from './components/nav/navbar';
import Coins from './components/coins/coins';

export default function App() {
  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
  );
}
