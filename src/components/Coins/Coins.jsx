import React from 'react';

import CoinsList from './CoinList.jsx';

import styles from './Coins.module.css';

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
