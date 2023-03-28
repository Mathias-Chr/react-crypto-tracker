import React from 'react';
import { GiTwoCoins } from 'react-icons/gi';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <GiTwoCoins className={styles.coin} />
      <h1>
        Crypto <span>Coins</span>
      </h1>
    </div>
  );
};

export default Header;
