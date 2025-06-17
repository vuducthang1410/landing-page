import React from 'react';
import coinImage from '../assets/coin4copy6.png';

const CoinOverlay = () => {
  return (
    <section
      className="absolute w-[87.08vw] h-[46.67vw] left-[6.35vw] top-[53.96vw] bg-cover bg-no-repeat z-[2] pointer-events-none"
      style={{
        backgroundImage: `url(${coinImage})`
      }}
    />
  );
};

export default CoinOverlay;