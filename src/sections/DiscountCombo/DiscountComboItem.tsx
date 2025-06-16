import React from 'react';

interface DiscountComboItemProps {
  image: string;
  title: string;
  description: string;
  detailUrl: string;
}

const DiscountComboItem: React.FC<DiscountComboItemProps> = ({
  image,
  title,
  description,
  detailUrl,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6">
      <div className="w-full aspect-square flex items-center justify-center mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-xl bg-gradient-to-br from-[#2B3DB8]/10 to-[#7cb3ea]/10"
        />
      </div>
      <h3 className="font-montserrat font-bold text-xl text-[#2B3DB8] text-center mb-2 uppercase">{title}</h3>
      <p className="font-montserrat text-base text-[#222] text-center mb-6 min-h-[24px]">{description}</p>
      <a
        href={detailUrl}
        className="font-montserrat text-[#2B3DB8] text-base font-semibold flex items-center gap-1 hover:underline"
      >
        Chi tiết
        <span className="inline-block w-4 h-4 bg-[#2B3DB8] rounded-full text-white flex items-center justify-center text-xs ml-1">i</span>
      </a>
    </div>
  );
};

export default DiscountComboItem; 