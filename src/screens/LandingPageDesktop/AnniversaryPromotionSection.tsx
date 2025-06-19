import React from "react";

interface AnniversaryPromotionSectionProps {
  scale: number;
  extendedImages: string[];
  carouselIndex: number;
  carouselTransition: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  Button: React.ElementType;
  MdOutlineArrowBackIos: React.ElementType;
  MdArrowForwardIos: React.ElementType;
  onTransitionEnd: () => void;
}

const AnniversaryPromotionSection: React.FC<AnniversaryPromotionSectionProps> = ({
  scale,
  extendedImages,
  carouselIndex,
  carouselTransition,
  handlePrev,
  handleNext,
  Button,
  MdOutlineArrowBackIos,
  MdArrowForwardIos,
  onTransitionEnd,
}) => {
  const scaled = (value: number) => value * scale;
  const itemWidth = 463 * scale;
  const gap = 80 * scale;
  const totalWidth = extendedImages.length * itemWidth + (extendedImages.length - 1) * gap;
  const translateX = carouselIndex * (itemWidth + gap);

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: scaled(1776),
          top: scaled(5489),
          left: scaled(71),
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 700,
          color: "#2239bb",
          fontSize: scaled(48),
          textAlign: "center",
          letterSpacing: 0,
          lineHeight: "normal",
        }}
      >
        VÔ VÀN ƯU ĐÃI MỪNG SINH NHẬT 30 NĂM
      </div>
      {/* Promotion Carousel */}
      <div
        style={{
          position: "absolute",
          width: scaled(1699),
          height: scaled(463),
          top: scaled(5733),
          left: scaled(111),
        }}
      >
        <div
          style={{
            position: "relative",
            width: scaled(1549),
            height: scaled(463),
            overflow: "hidden",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              transition: carouselTransition ? "transform 0.3s" : "none",
              transform: `translateX(-${translateX}px)`,
              width: `${totalWidth}px`,
              gap: `${gap}px`
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {extendedImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`img-${index}`}
                style={{
                  width: itemWidth,
                  height: itemWidth,
                  objectFit: "cover",
                  borderRadius: scaled(20),
                }}
              />
            ))}
          </div>
        </div>
        {/* Nút chuyển trái/phải */}
        <div
          style={{
            position: "absolute",
            top: scaled(216),
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: scaled(20),
            paddingRight: scaled(20),
          }}
        >
          <Button
            onClick={handlePrev}
            style={{
              borderRadius: "100%",
              backgroundColor: "white",
              border: 0,
              outline: "none",
              padding: 0,
              boxShadow: "0 0 0 0 ",
              width: scaled(32),
              height: scaled(32),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdOutlineArrowBackIos
              size={16 * scale}
              style={{ color: "#293546" }}
            />
          </Button>
          <Button
            onClick={handleNext}
            style={{
              borderRadius: "100%",
              backgroundColor: "white",
              border: 0,
              outline: "none",
              padding: 0,
              boxShadow: "0 0 0 0 ",
              width: scaled(32),
              height: scaled(32),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdArrowForwardIos
              size={16 * scale}
              style={{ color: "#293546" }}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AnniversaryPromotionSection; 