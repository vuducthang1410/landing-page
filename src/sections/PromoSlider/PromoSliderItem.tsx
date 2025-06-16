import React from 'react';

interface PromoSliderItemProps {
  image: string;
  alt?: string;
  children?: React.ReactNode;
}

const PromoSliderItem: React.FC<PromoSliderItemProps> = ({ image, alt, children }) => {
  return (
    <div className="bg-white rounded-[2vw] shadow-lg overflow-hidden flex flex-col items-center justify-between w-full h-full">
      <img src={image} alt={alt} className="w-full h-[22vw] object-cover" />
      <div className="p-[1.2vw] w-full flex-1 flex flex-col justify-between">{children}</div>
    </div>
  );
};

export default PromoSliderItem; 