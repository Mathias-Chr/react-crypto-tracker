import React from 'react';

import CoinsList from './CoinList.jsx';

const Coins = (props) => {
  return (
    <>
      {props.items.map((coins) => {
        return <CoinsList items={coins} key={coins.id} />;
      })}
    </>
  );
};

export default Coins;
