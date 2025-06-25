import React, { useState, useEffect, useRef } from "react";
import { images } from "../../data";

interface AnniversaryPromotionSectionProps {
  scale: number;
  Button: React.ElementType;
  MdOutlineArrowBackIos: React.ElementType;
  MdArrowForwardIos: React.ElementType;
  visibleCount?: number;
}

const AnniversaryPromotionSection: React.FC<AnniversaryPromotionSectionProps> = ({
  scale,
  Button,
  MdOutlineArrowBackIos,
  MdArrowForwardIos,
  visibleCount = 3,
}) => {
  const extendedImages = [
    ...images.slice(-visibleCount),
    ...images,
    ...images.slice(0, visibleCount),
  ];
  const [carouselIndex, setCarouselIndex] = useState(visibleCount);
  const [carouselTransition, setCarouselTransition] = useState(false);
  const [pendingJump, setPendingJump] = useState<null | number>(null);
  const intervalRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Hàm chuyển slide tự động
  useEffect(() => {
    if (!isHovered && !isButtonHovered) {
      if (!intervalRef.current) {
        intervalRef.current = window.setInterval(() => {
          handleNext();
        }, 2000);
      }
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, isButtonHovered]);

  // Hàm chuyển slide phải
  const handleNext = () => {
    if (carouselTransition) return;
    setCarouselTransition(true);
    setCarouselIndex((prev) => prev + 1);
  };
  // Hàm chuyển slide trái
  const handlePrev = () => {
    if (carouselTransition) return;
    setCarouselTransition(true);
    setCarouselIndex((prev) => prev - 1);
  };
  // Xử lý vòng lặp vô tận
  useEffect(() => {
    if (!carouselTransition) return;
    let timeout: ReturnType<typeof setTimeout>;
    if (carouselIndex === 0) {
      timeout = setTimeout(() => {
        setPendingJump(images.length);
      }, 300);
    } else if (carouselIndex === images.length + visibleCount) {
      timeout = setTimeout(() => {
        setPendingJump(visibleCount);
      }, 300);
    } else {
      timeout = setTimeout(() => setCarouselTransition(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [carouselIndex, carouselTransition, visibleCount]);
  // Nhảy index không transition
  useEffect(() => {
    if (pendingJump !== null) {
      setCarouselTransition(false);
      setCarouselIndex(pendingJump);
      setPendingJump(null);
    }
  }, [pendingJump]);

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
          lineHeight: "100%",
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
          >
            {extendedImages.map((src, index) => (
              <a href={src.link} target="_blank" rel="noopener noreferrer">  
              <img
                key={index}
                src={src.img}
                alt={`img-${index}`}
                style={{
                  width: itemWidth,
                  height: itemWidth,
                  objectFit: "cover",
                  borderRadius: scaled(20),
                }}
              />
              </a>
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
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
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
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
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