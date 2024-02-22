import React from 'react';

export default function CoinItem(props) {
  return (
    <>
      <div className="flex justify-between items-center bg-[#2c2d30] my-8 px-3 py-4 shadow-sm rounded-lg hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <p>{props.coins.market_cap_rank}</p>
        <div className="flex items-center">
          <img className="h-10 w-auto mr-2" src={props.coins.image} alt="" />
          <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>€ {props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)} %</p>
        <p>€ {props.coins.total_volume.toLocaleString()}</p>
        <p>€ {props.coins.market_cap.toLocaleString()}</p>
      </div>
    </>
  );
}
