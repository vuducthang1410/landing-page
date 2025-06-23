import { type JSX, useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button.tsx";
import bgMobile from "../../assets/bgMobile.jpg";
import logo from "../../assets/logoKlbMobile.png";
import bg2 from "../../assets/bg2Mobile.png";
import giftbox from "../../assets/giftbox.png";
import car from "../../assets/car.png";
import motorbike from "../../assets/motobike.png";
import {
  serviceCards,
  comboCards,
  coinMb,
  flagRibbon,
  prizeData,
} from "../../data.ts";
import FooterMobile from "../../components/ui/mobile/FooterMobile";
import ComboSectionMobile from "../../components/ui/mobile/ComboSectionMobile";
import ContactFormSectionMobile from "../../components/ui/mobile/ContactFormSectionMobile";
import AnniversaryPromotionSectionMobile from "../../components/ui/mobile/AnniversaryPromotionSectionMobile";
import CheckInSectionMobile from "../../components/ui/mobile/CheckInSectionMobile";
import { IoMenu } from "react-icons/io5";
import { ChevronRightIcon } from "lucide-react";

export const LandingPageMobile = (): JSX.Element => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scale, setScale] = useState(window.innerWidth / 375);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / 375);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaled = (value: number) => value * scale;

  // Scroll handler để cập nhật chấm tròn
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = 340; // phải khớp với width card bên dưới
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(idx % serviceCards.length);
  };

  return (
    <div
      className="bg-[#f8f8f8] flex flex-row justify-center w-full"
      data-model-id="4094:398"
    >
      <div
        className="bg-[#f8f8f8] overflow-hidden relative"
        style={{ width: scaled(375), height: scaled(6496) }}
      >
        {/* Header Section */}
        <div
          className="absolute top-0 left-0"
          style={{ width: scaled(546), height: scaled(812) }}
        >
          <img
            className="absolute top-0 left-0 object-cover"
            alt="Mobile"
            src={bgMobile}
            style={{ width: scaled(375), height: scaled(812) }}
          />

          <img
            className="absolute object-cover"
            alt="KienlongBank Logo"
            src={logo}
            style={{
              width: scaled(214),
              height: scaled(38),
              top: scaled(12),
              left: scaled(80),
            }}
          />

          {/* Hamburger Menu */}
          <button
            className="absolute bg-white rounded-[5px] flex items-center justify-center"
            style={{
              width: scaled(40),
              height: scaled(40),
              top: scaled(13),
              left: scaled(13),
              padding: "none",
              border: "none",
            }}
          >
            <IoMenu size={scaled(26)} color="#1D29AF" />
          </button>
        </div>

        {/* Main Prize Section */}
        <div
          className="absolute left-0"
          style={{
            width: scaled(375),
            height: scaled(1624),
            top: scaled(812),
            objectFit: "cover",
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            className="absolute object-cover"
            alt="Flag ribbon"
            src={flagRibbon}
            style={{
              width: scaled(375),
              height: scaled(425),
              top: scaled(802),
              left: 0,
            }}
          />
          {/* Prize Counters */}
          <div
            className="[font-family:'Montserrat',Helvetica] font-bold text-[#00e5ff] text-center tracking-[0] leading-[normal]"
            style={{
              fontSize: scaled(20),
              lineHeight: "100%",
              letterSpacing: "0",
              textAlign: "center",
              width: scaled(375),
              marginTop: scaled(36),
              height: scaled(50),
            }}
          >
            QUAY SỐ RINH QUÀ
            <br />
            TRÚNG THƯỞNG THẢ GA
          </div>
          <div
            className="[font-family:'Montserrat',Helvetica] font-bold text-white text-center tracking-[0] leading-[normal]"
            style={{
              fontSize: scaled(10),
              lineHeight: "100%",
              letterSpacing: "0",
              textAlign: "center",
              width: scaled(375),
              height: scaled(16),
              fontWeight: "700",
            }}
          >
            GIAO DỊCH CÀNG NHIỀU – CƠ HỘI TRÚNG QUÀ CÀNG LỚN!
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: scaled(4),
              height: scaled(145.18),
              marginTop: scaled(12),
            }}
          >
            <div
              style={{
                width: scaled(122),
                height: scaled(107),
                marginBottom: scaled(38.18),
              }}
            >
              <div style={{ width: scaled(116), height: scaled(107) }}>
                <div
                  className="bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-center tracking-[0] leading-[normal] whitespace-nowrap"
                  style={{ fontSize: scaled(64), height: scaled(68) }}
                >
                  {prizeData[0].count}
                </div>
                <div
                  className="[font-family:'Montserrat',Helvetica] font-bold text-white text-center tracking-[0] leading-[normal]"
                  style={{ width: scaled(116), fontSize: scaled(14) }}
                >
                  {prizeData[0].title}
                </div>
                <div
                  className="[font-family:'Montserrat',Helvetica] font-medium text-white text-center tracking-[0] leading-[normal]"
                  style={{ width: scaled(116), fontSize: scaled(10) }}
                >
                  {prizeData[0].description}
                </div>
              </div>
            </div>
            <img
              className="object-contain"
              style={{
                width: scaled(230),
                height: scaled(109.92),
                marginTop: scaled(35.27),
              }}
              alt="Do min"
              src={car}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: scaled(55.82),
              height: scaled(228),
              flexDirection: "row-reverse",
            }}
          >
            <div style={{ width: scaled(104), height: scaled(100) }}>
              <div
                className="relative"
                style={{ width: scaled(116), height: scaled(107) }}
              >
                <div
                  className="bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-center tracking-[0] leading-[normal] whitespace-nowrap"
                  style={{ fontSize: scaled(64), height: scaled(68) }}
                >
                  {prizeData[1].count}
                </div>
                <div
                  className="[font-family:'Montserrat',Helvetica] font-bold text-white text-center tracking-[0] leading-[normal]"
                  style={{ width: scaled(116), fontSize: scaled(14) }}
                >
                  {prizeData[1].title}
                </div>
                <div
                  className="[font-family:'Montserrat',Helvetica] font-medium text-white text-center tracking-[0] leading-[normal]"
                  style={{ width: scaled(116), fontSize: scaled(10) }}
                >
                  {prizeData[1].description}
                </div>
              </div>
            </div>
            <img
              className="object-contain"
              style={{
                width: scaled(229),
                height: scaled(139.01),
                marginTop: scaled(41),
                marginBottom: scaled(48),
              }}
              alt="Element"
              src={motorbike}
            />
          </div>
          <div style={{ width: scaled(122), height: scaled(107) }}>
            <div
              className="relative"
              style={{ width: scaled(116), height: scaled(107) }}
            >
              <div
                className="bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-center tracking-[0] leading-[normal] whitespace-nowrap"
                style={{ fontSize: scaled(64), height: scaled(68) }}
              >
                {prizeData[2].count}
              </div>
              <div
                className="[font-family:'Montserrat',Helvetica] font-bold text-white text-center tracking-[0] leading-[normal]"
                style={{ width: scaled(116), fontSize: scaled(14) }}
              >
                {prizeData[2].title}
              </div>
              <div
                className="[font-family:'Montserrat',Helvetica] font-medium text-white text-center tracking-[0] leading-[normal]"
                style={{ width: scaled(116), fontSize: scaled(10) }}
              >
                {prizeData[2].description}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: scaled(10),
              width: scaled(365),
              justifyContent: "space-between",
            }}
          >
            {[3, 4].map((index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
                style={{ width: scaled(152), height: scaled(107) }}
              >
                <div style={{ width: scaled(152), height: scaled(107) }}>
                  <div
                    className="bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-center tracking-[0] leading-[normal] whitespace-nowrap"
                    style={{
                      fontSize: scaled(64),
                      height: scaled(68),
                      width: "100%",
                    }}
                  >
                    {prizeData[index].count}
                  </div>
                  <div
                    className="[font-family:'Montserrat',Helvetica] font-bold text-white text-center tracking-[0] leading-[normal]"
                    style={{ width: scaled(152), fontSize: scaled(14) }}
                  >
                    {prizeData[index].title}
                  </div>
                  <div
                    className="[font-family:'Montserrat',Helvetica] font-medium text-white text-center tracking-[0] leading-[normal]"
                    style={{ width: scaled(152), fontSize: scaled(10) }}
                  >
                    {prizeData[index].description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            className="absolute object-cover"
            alt="gift-box"
            src={giftbox}
            style={{
              width: scaled(152),
              height: scaled(152),
              top: scaled(790),
              left: scaled(-59),
            }}
          />
          <div
            className="rounded-[10px] border-none"
            style={{
              width: scaled(375),
              height: scaled(467),
              marginTop: scaled(160),
            }}
          >
            {/* Slider động serviceCards - giống desktop, không có button, có 3 chấm */}
            <div
              ref={sliderRef}
              style={{
                width: scaled(375),
                height: scaled(467),
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                gap: scaled(30),
                paddingLeft: scaled(15),
                paddingRight: scaled(15),
              }}
              onScroll={handleScroll}
            >
              {serviceCards.map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    width: scaled(345),
                    height: scaled(467),
                    flexShrink: 0,
                    scrollSnapAlign: "center",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    position: "relative",
                    background: "#fff",
                    borderRadius: scaled(10),
                    padding: scaled(15),
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: scaled(315),
                      height: scaled(295),
                      objectFit: "cover",
                      borderRadius: scaled(16),
                    }}
                  />
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: scaled(20),
                      marginTop: scaled(20),
                      height: scaled(34),
                      color: "#2239bb",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                      lineHeight: "100%",
                      letterSpacing: "-3%",
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: scaled(12),
                      color: "#333",
                      textAlign: "left",
                      marginTop: scaled(5),
                      fontFamily: "Montserrat",
                      lineHeight: "100%",
                      letterSpacing: "0",
                      height: scaled(47),
                    }}
                  >
                    {card.description}
                    <br />
                    {card.description2}
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
          </div>
          {/* Pagination Dots */}
          <div
            className="flex"
            style={{
              width: scaled(67.5),
              marginTop: scaled(25),
              gap: scaled(15.75),
              height: scaled(12),
            }}
          >
            {/* Chấm tròn dưới slider */}
            <div
              style={{
                display: "flex",
                gap: scaled(8),
                marginTop: scaled(16),
              }}
            >
              {serviceCards.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: scaled(10),
                    height: scaled(10),
                    borderRadius: "50%",
                    background: activeIndex === i ? "#1976ff" : "#e0e0e0",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          </div>
          <div
            className="[font-family:'Montserrat',Helvetica] font-bold text-white text-center"
            style={{
              marginTop: scaled(33),
              height: scaled(52),
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            THỂ LỆ CHƯƠNG TRÌNH
          </div>
          <Button
            style={{
              width: scaled(150),
              height: scaled(34.62),
              background:
                "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
              backgroundSize: "100% 100%",
              border: "none",
              boxShadow: "none",
              color: "white",
              fontSize: scaled(16),
              padding: 0,
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: scaled(15.66),
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                color: "white",
                fontSize: scaled(12),
                width: scaled(73.35),
              }}
            >
              Xem thêm
            </span>
            <ChevronRightIcon
              style={{
                height: scaled(20),
                width: scaled(20),
                background: "#2239bb",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </Button>
          <img
            className="absolute object-cover"
            alt="Coin copy"
            src={coinMb}
            style={{
              width: scaled(425),
              height: scaled(228),
              top: scaled(317),
            }}
          />
          <img
            className="absolute object-cover"
            style={{
              width: scaled(134),
              height: scaled(134),
              top: scaled(1545),
              left: scaled(288),
              transform: "rotate(42.66deg)",
            }}
            alt="gift-box"
            src={giftbox}
          />
        </div>

        {/* Section Combo */}
        <ComboSectionMobile comboCards={comboCards} scaled={scaled} />

        {/* Check-in Section */}
        <CheckInSectionMobile scaled={scaled} />

        {/* Anniversary Promotion Section */}
        <AnniversaryPromotionSectionMobile scaled={scaled} />

        {/* Contact Form Section */}
        <ContactFormSectionMobile scaled={scaled} />

        {/* Footer Section */}
        <FooterMobile scaled={scaled} />
      </div>
    </div>
  );
};
