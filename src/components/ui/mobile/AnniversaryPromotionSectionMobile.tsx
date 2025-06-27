import { useState } from "react";
import { imagesMobile } from "../../../data";
import { ChevronRightIcon } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface AnniversaryPromotionSectionMobileProps {
  scaled: (value: number) => number;
}

const AnniversaryPromotionSectionMobile: React.FC<
  AnniversaryPromotionSectionMobileProps
> = ({ scaled }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <Swiper
        style={{
          width: scaled(375),
          height: scaled(530),
          padding: `0px ${scaled(12.5)}px`,
        }}
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {imagesMobile.map((image, index) => (
          <SwiperSlide key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: scaled(350),
                  height: scaled(530),
                  backgroundImage: `url(${image.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: scaled(10),
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: scaled(350),
                    height: scaled(284),
                    borderRadius: `0 0 ${scaled(10)}px ${scaled(10)}px`,
                    background:
                      "linear-gradient(360deg, #080F68 0%, rgba(25, 160, 234, 0) 100%)",
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
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

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
        {imagesMobile.map((_, i) => (
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
