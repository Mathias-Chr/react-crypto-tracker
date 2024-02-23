import React from 'react';

import { Link } from 'react-router-dom';

import { FaCoins } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <Link to="/">
        <div className="flex justify-center items-center mt-10">
          <FaCoins className="text-3xl text-[#fff154] mr-4" />
          <h1 className="text-3xl">
            Coin <span className="text-[#fff154]">Search</span>
          </h1>
        </div>
      </Link>
    </>
  );
}
