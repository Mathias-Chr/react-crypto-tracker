import React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import DOMPurify from 'dompurify';

import Card from '../components/UI/Card';

export default function Coin() {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <Card>
          <h1 className="text-5xl text-center">{coin.name}</h1>
        </Card>
        <Card>
          <div className="mb-6">
            <span className="p-2 rounded-lg bg-[#6900ff]">
              Rank # {coin.market_cap_rank}
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-4">
              {coin.image && <img src={coin.image.small} alt="" />}
              <p>{coin.name}</p>
              {coin.symbol && <p>{coin.symbol.toUpperCase()}/EUR</p>}
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price ? (
                <h1 className="text-4xl mr-16">
                  €{coin.market_data.current_price.eur.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
        </Card>

        <Card>
          <table className="flex flex-col">
            <h2 className="text-xl text-center">Movement</h2>
            <thead className="my-1">
              <tr className="flex gap-1">
                <th className="w-1/6 text-center bg-[#333]">1h</th>
                <th className="w-1/6 text-center bg-[#333]">24h</th>
                <th className="w-1/6 text-center bg-[#333]">7d</th>
                <th className="w-1/6 text-center bg-[#333]">14d</th>
                <th className="w-1/6 text-center bg-[#333]">30d</th>
                <th className="w-1/6 text-center bg-[#333]">1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex">
                <td className="w-1/6 text-center">
                  {coin.market_data?.price_change_percentage_1h_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.eur.toFixed(
                        1
                      )}
                      %
                    </p>
                  )}
                </td>
                <td className="w-1/6 text-center">
                  {coin.market_data
                    ?.price_change_percentage_24h_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.eur.toFixed(
                        1
                      )}
                      %
                    </p>
                  )}
                </td>
                <td className="w-1/6 text-center">
                  {coin.market_data?.price_change_percentage_7d_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.eur.toFixed(
                        1
                      )}
                      %
                    </p>
                  )}
                </td>
                <td className="w-1/6 text-center">
                  {coin.market_data
                    ?.price_change_percentage_14d_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.eur.toFixed(
                        1
                      )}
                      %
                    </p>
                  )}
                </td>
                <td className="w-1/6 text-center">
                  {coin.market_data
                    ?.price_change_percentage_30d_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.eur.toFixed(
                        1
                      )}
                      %
                    </p>
                  )}
                </td>
                <td className="w-1/6 text-center">
                  {coin.market_data?.price_change_percentage_1y_in_currency && (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.eur.toFixed(
                        1
                      )}
                      %
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card>
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h && (
                  <p>€{coin.market_data.low_24h.eur.toLocaleString()}</p>
                )}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h && (
                  <p>€{coin.market_data.high_24h.eur.toLocaleString()}</p>
                )}{' '}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <h4>Market Cap</h4>
              {coin.market_data?.market_cap && (
                <p>€{coin.market_data.market_cap.eur.toLocaleString()}</p>
              )}
            </div>
            <div className="row">
              <h4>Circulating Supply</h4>
              {coin.market_data && <p>{coin.market_data.circulating_supply}</p>}
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="about">
          <h3>About</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ''
              ),
            }}
          ></p>
        </div>
      </Card>
    </>
  );
}
