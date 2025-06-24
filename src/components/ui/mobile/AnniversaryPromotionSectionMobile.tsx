import { useState } from "react";
import { images } from "../../../data";
import { ChevronRightIcon } from "lucide-react";

interface AnniversaryPromotionSectionMobileProps {
  scaled: (value: number) => number;
}

const AnniversaryPromotionSectionMobile: React.FC<
  AnniversaryPromotionSectionMobileProps
> = ({ scaled }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const newIndex = Math.round(scrollLeft / 365);
    setActiveIndex(Math.min(Math.max(newIndex, 0), images.length - 1));
  };

  return (
    <div
      style={{
        width: scaled(375),
        height: scaled(812),
        position: "absolute",
        top: scaled(4056),
      }}
    >
      <div
        style={{
          marginTop: scaled(66),
          height: scaled(51),
          fontSize: scaled(20),
          fontWeight: 700,
          color: "#2239bb",
          fontFamily: "Montserrat, Helvetica",
          textAlign: "center",
          letterSpacing: 0,
          lineHeight: "100%",
          width: scaled(375),
        }}
      >
        VÔ VÀN ƯU ĐÃI
        <br />
        MỪNG SINH NHẬT 30 NĂM
      </div>

      <div
        style={{
          marginTop: scaled(10),
          height: scaled(38),
          fontSize: scaled(10),
          fontWeight: 500,
          color: "#54A4FF",
          lineHeight: "100%",
          textAlign: "center",
          marginBottom: scaled(31),
          fontFamily: "Montserrat, Helvetica",
          width: scaled(374),
        }}
      >
        {/* VAY VỐN */}
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: scaled(15),
          padding: `0px ${scaled(12.5)}px`,
          width: scaled(375),
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory",
        }}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: scaled(350),
              height: scaled(530),
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: scaled(10),
              position: "relative",
              flexShrink: 0,
              scrollSnapAlign: "center",
            }}
          >
            <div
              style={{
                width: scaled(350),
                height: scaled(284),
                borderRadius: `0 0 ${scaled(10)}px ${scaled(10)}px`,
                background:
                  "linear-gradient(0deg,rgba(8,15,104,1)_0%,rgba(25,160,234,0)_100%)",
                position: "absolute",
                bottom: 0,
              }}
            />
            <button
              style={{
                background: "none",
                border: "none",
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: scaled(12),
                display: "flex",
                alignItems: "center",
                gap: scaled(2),
                cursor: "pointer",
                position: "absolute",
                left: 0,
                bottom: scaled(10),
                outline: "none",
                padding: `${scaled(5)}px ${scaled(17)}px`,
              }}
            >
              Chi tiết
              <ChevronRightIcon
                style={{
                  height: scaled(12.13146591186528),
                  width: scaled(12.13146591186528),
                  color: "white",
                  background: "#2239bb",
                  borderRadius: "50%",
                }}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div
        style={{
          display: "flex",
          gap: scaled(15.75),
          marginTop: scaled(36.5),
          marginBottom: scaled(36.5),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: scaled(12),
              height: scaled(12),
              borderRadius: "50%",
              background: activeIndex === i ? "#0CCBEF" : "#D9D9D9",
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnniversaryPromotionSectionMobile;
