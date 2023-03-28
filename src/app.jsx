import React, { useState } from 'react';

import Header from './components/Header/Header.jsx';
import Coins from './components/Coins/Coins.jsx';

const DUMMY_COINS = [
  {
    id: 1,
    market_cap_rank: 1,
    image: 'img1',
    symbol: 'sympol1',
    current_price: 123,
    price_change_percentage_24h: 'pph',
    total_volume: 456,
    market_cap: 789,
  },
  {
    id: 2,
    market_cap_rank: 2,
    image: 'img2',
    symbol: 'sympol2',
    current_price: 123,
    price_change_percentage_24h: 'pph',
    total_volume: 456,
    market_cap: 789,
  },
  {
    id: 3,
    market_cap_rank: 3,
    image: 'img3',
    symbol: 'sympol3',
    current_price: 123,
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
