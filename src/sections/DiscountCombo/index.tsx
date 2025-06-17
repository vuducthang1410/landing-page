import React from 'react';
import DiscountComboItem from './DiscountComboItem';
import giaithuong from '../../assets/giaithuong.jpg';
import giaithuong2 from '../../assets/giaithuong2.jpg';

const combos = [
  {
    id: 1,
    image: giaithuong,
    title: 'GỬI TIẾT KIỆM',
    description: 'Nhận ngay Mũ bảo hiểm/Áo mưa',
    detailUrl: '#',
  },
  {
    id: 2,
    image: giaithuong,
    title: 'VAY VỐN',
    description: 'Nhận ngay Mũ bảo hiểm/Áo mưa',
    detailUrl: '#',
  },
  {
    id: 3,
    image: giaithuong2,
    title: 'MUA TRÁI PHIẾU',
    description: 'Nhận ngay Bộ chén ăn cao cấp',
    detailUrl: '#',
  },
];

const DiscountCombo: React.FC = () => {
  return (
    <div id='discount-combo' className="w-screen h-[56.25vw] bg-[#f7f7fa] py-[3vw]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-[2vw]">
          <h2 className="font-montserrat font-bold text-[2.5vw] text-[#2B3DB8] uppercase mb-2">
            CHỌN COMBO NGAY - QUÀ TẶNG TRAO TAY
          </h2>
          <p className="font-montserrat text-[1.2vw] text-[#7cb3ea] font-semibold">
            NHẬN NGAY TỚI 30.000 QUÀ TẶNG KHI SỬ DỤNG COMBO DỊCH VỤ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <DiscountComboItem
              key={combo.id}
              image={combo.image}
              title={combo.title}
              description={combo.description}
              detailUrl={combo.detailUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountCombo; 