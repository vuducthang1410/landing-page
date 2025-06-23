import { ChevronRightIcon } from "lucide-react";
import React, { useRef, useState } from "react";

interface ComboCard {
  image: string;
  title: string;
  description: string;
  description2?: string;
}

interface ComboSectionMobileProps {
  comboCards: ComboCard[];
  scaled: (value: number) => number;
}

const ComboSectionMobile: React.FC<ComboSectionMobileProps> = ({
  comboCards,
  scaled,
}) => {
  const comboSliderRef = useRef<HTMLDivElement>(null);
  const [comboActiveIndex, setComboActiveIndex] = useState(0);
  const handleComboScroll = () => {
    if (!comboSliderRef.current) return;
    const scrollLeft = comboSliderRef.current.scrollLeft;
    const cardWidth = 340; // 320px width + 20px margin
    const idx = Math.round(scrollLeft / cardWidth);
    setComboActiveIndex(idx % comboCards.length);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: scaled(2436),
        left: "0",
        width: scaled(375),
        padding: `${scaled(94)}px 0 0 0`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#F8F8F8",
        height: scaled(812),
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: scaled(20),
          color: "#2239bb",
          textAlign: "center",
          fontFamily: "Montserrat",
          marginBottom: scaled(8),
        }}
      >
        CHỌN COMBO NGAY
        <br />
        QUÀ TẶNG TRAO TAY
      </div>
      <div
        style={{
          fontWeight: 500,
          fontSize: scaled(14),
          color: "#54a4ff",
          textAlign: "center",
          fontFamily: "Montserrat",
          marginBottom: scaled(16),
        }}
      >
        NHẬN NGAY TỚI 30.000 QUÀ TẶNG
        <br />
        KHI SỬ DỤNG COMBO DỊCH VỤ
      </div>
      <div
        ref={comboSliderRef}
        className="combo-slider"
        style={{
          width: scaled(375),
          height: scaled(467),
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          padding: `0 ${scaled(15)}px`,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          marginTop: scaled(39),
        }}
        onScroll={handleComboScroll}
      >
        {comboCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              width: scaled(345),
              height: scaled(467),
              flex: `none`,
              scrollSnapAlign: "center",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              marginRight: `${scaled(20)}px`,
              padding: `${scaled(10)}px`,
              background: "#fff",
              borderRadius: scaled(20),
              flexShrink: 0,
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: scaled(320),
                height: scaled(200),
                objectFit: "cover",
                borderRadius: scaled(16),
                marginTop: scaled(12),
              }}
            />
            <div
              style={{
                fontWeight: 700,
                fontSize: scaled(18),
                marginTop: scaled(16),
                color: "#2239bb",
                textAlign: "center",
                fontFamily: "Montserrat",
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontSize: scaled(15),
                color: "#333",
                textAlign: "left",
                marginTop: scaled(8),
                fontFamily: "Montserrat",
                width: scaled(315),
              }}
            >
              {card.description}
            </div>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#333333",
                fontWeight: 400,
                fontSize: scaled(12),
                display: "flex",
                alignItems: "center",
                gap: scaled(6),
                cursor: "pointer",
                position: "absolute",
                bottom: scaled(15),
                left: scaled(15),
              }}
            >
              Chi tiết
              <ChevronRightIcon
                style={{
                  height: scaled(12.13),
                  width: scaled(12.13),
                  color: "white",
                  background: "#2239bb",
                  borderRadius: "50%",
                }}
              />
            </button>
          </div>
        ))}
      </div>
      {/* Chấm tròn dưới slider combo */}
      <div style={{ display: "flex", gap: scaled(8), marginTop: scaled(16) }}>
        {comboCards.map((_, i) => (
          <div
            key={i}
            style={{
              width: scaled(10),
              height: scaled(10),
              borderRadius: "50%",
              background: comboActiveIndex === i ? "#1976ff" : "#e0e0e0",
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ComboSectionMobile;
