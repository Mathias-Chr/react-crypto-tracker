import React from 'react';
import { GiTwoCoins } from 'react-icons/gi';

import Card from '../UI/Card.jsx';

import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <GiTwoCoins className={styles['header--headline__coin']} />
        <h1 className={styles['header--headline']}>
          Crypto
          <span className={styles['header--headline__orange']}> Coins</span>
        </h1>
      </div>

      <Card className={styles.header}>
        <div className={styles['header--content']}>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </div>
      </Card>
    </>
  );
};

export default Header;
