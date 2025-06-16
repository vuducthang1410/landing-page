import React from 'react';
import coinImage from '../assets/coin4copy6.png';

const CoinOverlay = () => {
  return (
    <section
      className="absolute w-[1337.6px] h-[695.2px] left-[140px] top-[815px] bg-cover bg-no-repeat z-[2] pointer-events-none"
      style={{
        backgroundImage: `url(${coinImage})`
      }}
    />
  );
};

export default CoinOverlay;