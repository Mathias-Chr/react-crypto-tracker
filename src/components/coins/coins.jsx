import React from 'react';

import { Link } from 'react-router-dom';

import Coin from '../../routes/coin';

import CoinItem from './coinItem';

export default function Coins(props) {
  return (
    <>
      <div className="max-w-7xl m-auto">
        <div className="flex justify-between items-center bg-[#2c2d30] my-8 px-3 py-4 shadow-sm rounded-lg font-bold">
          <p>#</p>
          <p className="-ml-4">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
