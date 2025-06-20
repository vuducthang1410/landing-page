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
}

const ComboSectionMobile: React.FC<ComboSectionMobileProps> = ({
  comboCards,
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
        top: "2436px",
        left: "0",
        width: "100%",
        margin: "40px 0 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#F8F8F8",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 20,
          color: "#2239bb",
          textAlign: "center",
          fontFamily: "Montserrat",
          marginBottom: 8,
        }}
      >
        CHỌN COMBO NGAY
        <br />
        QUÀ TẶNG TRAO TAY
      </div>
      <div
        style={{
          fontWeight: 500,
          fontSize: 14,
          color: "#54a4ff",
          textAlign: "center",
          fontFamily: "Montserrat",
          marginBottom: 16,
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
          width: 375,
          height: 467,
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          padding: "0 15px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          marginTop: 39,
        }}
        onScroll={handleComboScroll}
      >
        {comboCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              width: 345,
              height: 467,
              flex: "0 0 345px",
              scrollSnapAlign: "center",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              marginRight: "20px",
              padding: "15px",
              background: "#fff",
              borderRadius: 20,
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: 315,
                height: 295,
                objectFit: "cover",
                borderRadius: 16,
              }}
            />
            <div
              style={{
                fontWeight: 700,
                fontSize: 20,
                marginTop: 20,
                color: "#2239bb",
                textAlign: "center",
                fontFamily: "Montserrat",
                height: 34,
                lineHeight: "100%",
                width: 345,
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#333",
                textAlign: "left",
                marginTop: 5,
                fontFamily: "Montserrat",
                height: 47,
                width: 315,
                fontWeight: 400,
                // lineHeight: "100%",
                letterSpacing: "0%",
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
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                position: "absolute",
                left: 0,
                bottom: 17,
                outline: "none",
              }}
            >
              Chi tiết
              <ChevronRightIcon
                style={{
                  height: "12.13146591186528px",
                  width: "12.13146591186528px",
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
      <div style={{ display: "flex", gap: 15.75, marginTop: 25 }}>
        {comboCards.map((_, i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: comboActiveIndex === i ? "#0CCBEF" : "#D9D9D9",
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ComboSectionMobile;
