import React, { useRef, useState } from "react";

interface ComboCard {
  image: string;
  title: string;
  description: string;
  description2?: string;
}

interface ComboSectionMobileProps {
  comboCards: ComboCard[];
}

const ComboSectionMobile: React.FC<ComboSectionMobileProps> = ({ comboCards }) => {
  const comboSliderRef = useRef<HTMLDivElement>(null);
  const [comboActiveIndex, setComboActiveIndex] = useState(0);
  const handleComboScroll = () => {
    if (!comboSliderRef.current) return;
    const scrollLeft = comboSliderRef.current.scrollLeft;
    const cardWidth = 340;
    const idx = Math.round(scrollLeft / cardWidth);
    setComboActiveIndex(idx % comboCards.length);
  };

  return (
    <div style={{ width: '100%', margin: '40px 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontWeight: 700, fontSize: 20, color: '#2239bb', textAlign: 'center', fontFamily: 'Montserrat', marginBottom: 8 }}>
        CHỌN COMBO NGAY<br />QUÀ TẶNG TRAO TAY
      </div>
      <div style={{ fontWeight: 500, fontSize: 14, color: '#54a4ff', textAlign: 'center', fontFamily: 'Montserrat', marginBottom: 16 }}>
        NHẬN NGAY TỚI 30.000 QUÀ TẶNG<br />KHI SỬ DỤNG COMBO DỊCH VỤ
      </div>
      <div
        ref={comboSliderRef}
        style={{
          width: 340,
          height: 400,
          overflowX: 'auto',
          overflowY: 'hidden',
          borderRadius: 20,
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          display: 'flex',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
        onScroll={handleComboScroll}
      >
        {comboCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              width: 340,
              height: 400,
              flex: '0 0 340px',
              scrollSnapAlign: 'center',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              position: 'relative',
            }}
          >
            <img src={card.image} alt={card.title} style={{ width: 320, height: 200, objectFit: 'cover', borderRadius: 16, marginTop: 12 }} />
            <div style={{ fontWeight: 700, fontSize: 18, marginTop: 16, color: '#2239bb', textAlign: 'center', fontFamily: 'Montserrat' }}>{card.title}</div>
            <div style={{ fontSize: 15, color: '#333', textAlign: 'center', marginTop: 8, fontFamily: 'Montserrat' }}>{card.description}</div>
            <button style={{ marginTop: 18, background: 'none', border: 'none', color: '#2239bb', fontWeight: 500, fontSize: 15, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              Chi tiết
              <span style={{ display: 'inline-block', width: 20, height: 20, background: '#2239bb', borderRadius: '50%', color: 'white', textAlign: 'center', lineHeight: '20px', marginLeft: 4, fontSize: 14 }}>→</span>
            </button>
          </div>
        ))}
      </div>
      {/* Chấm tròn dưới slider combo */}
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        {comboCards.map((_, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: comboActiveIndex === i ? '#1976ff' : '#e0e0e0',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ComboSectionMobile; 