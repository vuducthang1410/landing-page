import { useState } from "react";
import { images } from "../../../data";
import { ChevronRightIcon } from "lucide-react";

const AnniversaryPromotionSectionMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const newIndex = Math.round(scrollLeft / 365);
    setActiveIndex(newIndex);
  };

  return (
    <div className="absolute w-[375px] h-[812px] top-[4060px] flex flex-col items-center">
      <div
        className=" w-[375px]  [font-family:'Montserrat',Helvetica] text-center tracking-[0] leading-[normal]"
        style={{
          marginTop: "66px",
          height: "51px",
          fontSize: "20px",
          fontWeight: 700,
          color: "#2239bb",
        }}
      >
        VÔ VÀN ƯU ĐÃI
        <br />
        MỪNG SINH NHẬT 30 NĂM
      </div>

      <div
        className="w-[374px] [font-family:'Montserrat',Helvetica] text-center tracking-[0] leading-[normal]"
        style={{
          marginTop: "10px",
          height: "38px",
          fontSize: "10px",
          fontWeight: 500,
          color: "#54A4FF",
          lineHeight: "100%",
          textAlign: "center",
          marginBottom: "31px",
        }}
      >
        VAY VỐN
      </div>
      <div
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{
          gap: "15px",
          padding: "0 12.5px",
          width: "375px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[350px] h-[530px] bg-[100%_100%] flex-shrink-0 snap-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <div
              className="w-[350px] h-[284px] rounded-[0px_0px_10px_10px] bg-[linear-gradient(0deg,rgba(8,15,104,1)_0%,rgba(25,160,234,0)_100%)]"
              style={{ position: "absolute", bottom: 0 }}
            />
            <button
              style={{
                background: "none",
                border: "none",
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                position: "absolute",
                left: 0,
                bottom: 10,
                outline: "none",
                padding: "5px 17px",
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

      {/* Pagination Dots */}
      <div
        style={{
          display: "flex",
          gap: 15.75,
          marginTop: 36.5,
          marginBottom: 36.5,
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
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
