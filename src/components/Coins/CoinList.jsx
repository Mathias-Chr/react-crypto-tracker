import React from 'react';

import Card from '../UI/Card';

import styles from './CoinList.module.css';

const CoinsList = (props) => {
  return (
    <Card className={styles.flex}>
      <p>{props.items.market_cap_rank}</p>
      <div className="img-symbol">
        <p>{props.items.image}</p>
        <p>{props.items.symbol}</p>
      </div>
      <p>${props.items.current_price}</p>
      <p>{props.items.price_change_percentage_24h}%</p>
      <p className="hide-mobile">${props.items.total_volume}</p>
      <p className="hide-mobile">${props.items.market_cap}</p>
    </Card>
  );
};

export default CoinsList;
