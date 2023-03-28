import React, { useState } from 'react';

import Header from './components/Header/Header.jsx';
import Coins from './components/Coins/Coins.jsx';
import CoinsList from './components/Coins/CoinList.jsx';

const DUMMY_COINS = [
  {
    id: 1,
    market_cap_rank: 1,
    image: 'image1',
    symbol: 'sympol1',
    price: 123,
    price_change_percentage_24h: 'pph',
    total_volume: 456,
    market_cap: 789,
  },
  {
    id: 2,
    market_cap_rank: 2,
    image: 'image2',
    symbol: 'sympol2',
    price: 123,
    price_change_percentage_24h: 'pph',
    total_volume: 456,
    market_cap: 789,
  },
  {
    id: 3,
    market_cap_rank: 3,
    image: 'image3',
    symbol: 'sympol3',
    price: 123,
    price_change_percentage_24h: 'pph',
    total_volume: 456,
    market_cap: 789,
  },
];

const App = () => {
  const [coins, setCoins] = useState(DUMMY_COINS);
  return (
    <>
      <Header />
      <Coins items={coins} />
    </>
  );
};

export default App;
