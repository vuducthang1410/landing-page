import { ChevronRightIcon } from "lucide-react";
import { useState, type JSX, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button.tsx";
import { CardContent } from "../../components/ui/card.tsx";
import { Input } from "../../components/ui/input.tsx";

import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { Textarea } from "../../components/ui/textarea.tsx";
import LuckyDraw from "../../components/ui/LuckyDraw.tsx";
import SavingPromotionPopup from "../../components/popup/SavingPromotionPopup";
import CreditCardPromotionPopup from "../../components/popup/CreditCardPromotionPopup";
import MyShopPromotionPopup from "../../components/popup/MyShopPromotionPopup";
import BondPromotionPopup from "../../components/popup/BondPromotionPopup";
import ForexPromotionPopup from "../../components/popup/ForexPromotionPopup";
import ComboSavingCustomerPopup from "../../components/popup/ComboSavingCustomerPopup";
import ComboCreditCustomerPopup from "../../components/popup/ComboCreditCustomerPopup";
import ComboBondCustomerPopup from "../../components/popup/ComboBondCustomerPopup";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import ContactFormSection from "../../components/ui/ContactFormSection";
import CheckInSection from "../../components/ui/CheckInSection";
import ComboSection from "../../components/ui/ComboSection";
import {
  prizeData,
  checkInStats,
  serviceCards,
  comboCards,
  navItems,
  bgImage,
  bg2Image,
  car,
  motobike,
  appstore,
  googleplay,
  qr,
  iconZalo,
  logoHeader,
  logo,
  coin,
  giftBox,
  light,
  flagRibbon,
} from "../../data.ts";
import AnniversaryPromotionSection from "../../components/ui/AnniversaryPromotionSection";

export const LandingPageDesktop = (): JSX.Element => {
  const visibleCount = 3; // Hiển thị 3 thẻ mỗi lần
  const extendedCards = [
    ...serviceCards.slice(-visibleCount),
    ...serviceCards,
    ...serviceCards.slice(0, visibleCount),
  ];
  const [sliderIndex, setSliderIndex] = useState(visibleCount); // Bắt đầu ở phần tử thực đầu tiên
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1920;
      const currentWidth = window.innerWidth;
      setScale(currentWidth / baseWidth);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const scaled = (value: number) => value * scale;
  // Helper for numeric scaling
  const scaledNum = (value: number) => value * scale;

  const handleServicePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSliderIndex((prev) => prev - 1);
  };

  const handleServiceNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSliderIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;
    const timeout = setTimeout(() => {
      if (sliderIndex === 0) {
        setIsTransitioning(false);
        setSliderIndex(serviceCards.length);
      } else if (sliderIndex === serviceCards.length + visibleCount) {
        setIsTransitioning(false);
        setSliderIndex(visibleCount);
      } else {
        setIsTransitioning(false);
      }
    }, 300); // 300ms là thời gian transition
    return () => clearTimeout(timeout);
  }, [sliderIndex, isTransitioning, visibleCount]);

  // Header hide/show on scroll
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            if (showHeader) setShowHeader(false);
          } else if (currentScrollY < lastScrollY.current) {
            if (!showHeader) setShowHeader(true);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHeader]);

  const [openPopupId, setOpenPopupId] = useState<string | null>(null);

  const popupMap: Record<string, JSX.Element> = {
    saving: (
      <SavingPromotionPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
    credit: (
      <CreditCardPromotionPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
    myshop: (
      <MyShopPromotionPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
    bond: (
      <BondPromotionPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
    forex: (
      <ForexPromotionPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
    comboSaving: (
      <ComboSavingCustomerPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
    comboCredit: (
      <ComboCreditCustomerPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
    comboBond: (
      <ComboBondCustomerPopup
        open={true}
        onClose={() => setOpenPopupId(null)}
        scale={scale}
      />
    ),
  };

  return (
    <div className="bg-[#f8f8f8] flex flex-row justify-center overflow-y-hidden overflow-x-hidden w-full">
      {/* Popup Overlay and Popup */}
      {openPopupId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          onClick={() => setOpenPopupId(null)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {popupMap[openPopupId]}
          </div>
        </div>
      )}
      <div
        id="home"
        className="bg-[#f8f8f8] relative"
        style={{ width: scaled(1920), height: scaled(8640) }}
      >
        {/* Header Navigation */}
        <Header
          showHeader={showHeader}
          scale={scale}
          navItems={navItems}
          logoHeader={logoHeader}
        />

        {/* Main Banner Section */}
        <div
          className="absolute left-0"
          style={{
            width: scaled(1920),
            height: scaled(3317),
            top: scaled(140),
          }}
        >
          <section
            className="absolute left-0"
            style={{
              width: scaled(1920),
              height: scaled(940),
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Banner Navigation Controls
          <div
            className="absolute flex justify-between"
            style={{
              width: scaled(1699),
              height: scaled(32),
              top: scaled(438),
              left: scaled(111),
            }}
          >
            <Button
              variant="outline"
              style={{
                width: scaled(32),
                height: scaled(32),
                borderRadius: "100%",
                backgroundColor: "white",
                border: 0,
                outline: "none",
                padding: 0,
              }}
            >
              <MdOutlineArrowBackIos
                size={scaled(32)}
                style={{ color: "#293546", padding: 0, margin: 0 }}
              />
            </Button>
            <Button
              variant="outline"
              style={{
                width: scaled(32),
                height: scaled(32),
                borderRadius: "100%",
                backgroundColor: "white",
                border: 0,
                outline: "none",
                padding: 0,
              }}
            >
              <MdArrowForwardIos
                size={scaled(32)}
                style={{ color: "#293546", padding: 0, margin: 0 }}
              />
            </Button>
          </div> */}

          {/* Prize Section Background */}
          <section
            id="lucky-draw"
            className="absolute"
            style={{
              width: scaled(1920),
              height: scaled(2160),
              top: scaled(940),
              backgroundImage: `url(${bg2Image})`,
              backgroundSize: "100%",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
            }}
          />

          <img
            style={{
              position: "absolute",
              width: scaled(1380),
              height: scaled(776),
              top: scaled(1903),
              left: scaled(536),
              objectFit: "cover",
            }}
            alt="Flag ribbon"
            src={flagRibbon}
            loading="lazy"
          />

          <img
            style={{
              width: scaled(360),
              height: scaled(360),
              top: scaled(1881),
              left: scaled(-103),
              position: "absolute",
              objectFit: "cover",
            }}
            alt="Qu"
            src={giftBox}
            loading="lazy"
          />

          {/* Prize Section Title */}
          <div
            style={{
              position: "absolute",
              width: scaled(808),
              top: scaled(1011),
              left: scaled(592),
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              color: "#00e5ff",
              fontSize: scaled(46),
              textAlign: "center",
              lineHeight: "120%",
              letterSpacing: "0",
              height: scaled(100),
            }}
          >
            QUAY SỐ RINH QUÀ
            <br />
            TRÚNG THƯỞNG THẢ GA
          </div>

          <div
            style={{
              position: "absolute",
              width: scaled(1010),
              top: scaled(1138),
              left: scaled(491),
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              color: "white",
              fontSize: scaled(32),
              textAlign: "center",
              letterSpacing: 0,
              lineHeight: "100%",
            }}
          >
            GIAO DỊCH CÀNG NHIỀU – CƠ HỘI TRÚNG QUÀ CÀNG LỚN!
          </div>

          {/* Prize Cards */}
          <div
            style={{
              position: "absolute",
              width: scaled(400),
              height: scaled(227),
              top: scaled(1209),
              left: scaled(350),
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: scaled(300),
                height: scaled(227),
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: scaled(186),
                textAlign: "center",
                background:
                  "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",

                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                lineHeight: "100%",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0",
                justifyContent: "center",
              }}
            >
              {prizeData[0].count}
            </div>
            <div>
              <div
                style={{
                  width: scaled(230),
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontSize: scaled(24),
                  textAlign: "center",
                  lineHeight: "100%",
                  letterSpacing: "0",
                }}
              >
                {prizeData[0].title}
              </div>
              <div
                style={{
                  width: scaled(230),
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  color: "white",
                  fontSize: scaled(18),
                  textAlign: "center",
                  lineHeight: "100%",
                  letterSpacing: "0",
                  marginTop: "5px",
                }}
              >
                {prizeData[0].description}
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: scaled(234),
              top: scaled(1245),
              left: scaled(1077),
              height: scaled(161),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: scaled(230),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: scaled(96),
                textAlign: "center",
                background:
                  "linear-gradient(90deg, rgba(0,97,254,1) 0%, rgba(255,159,254,1) 41%, rgba(255,56,156,1) 77%, rgba(255,179,84,1) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text", // ⚠️ Thêm dòng này
                WebkitTextFillColor: "transparent",
                color: "transparent", // ⚠️ Tăng tương thích, đặc biệt với Firefox
                lineHeight: "100%", // ⚠️ Để tránh chữ bị lệch
                letterSpacing: "0",
                height: scaled(100),
              }}
            >
              {prizeData?.[1]?.count ?? "0"}
            </div>
            <div
              style={{
                width: scaled(230),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "white",
                fontSize: scaled(24),
                textAlign: "center",
                lineHeight: "100%",
                letterSpacing: "0",
                whiteSpace: "nowrap",
              }}
            >
              {prizeData[1].title}
            </div>
            <div
              style={{
                width: scaled(222),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "white",
                fontSize: scaled(18),
                textAlign: "center",
                // lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              {prizeData[1].description}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: scaled(1078),
              top: scaled(1720),
              left: scaled(421),
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: scaled(188),
            }}
          >
            {[2, 3, 4].map((index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: scaled(234),
                    height: scaled(161),
                  }}
                >
                  <div
                    style={{
                      width: scaled(230),
                      top: 0,
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 700,
                      fontSize: scaled(96),
                      textAlign: "center",
                      background:
                        "linear-gradient(90deg, rgba(0,97,254,1) 0%, rgba(255,159,254,1) 41%, rgba(255,56,156,1) 77%, rgba(255,179,84,1) 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      lineHeight: "100%",
                      letterSpacing: "0",
                      height: scaled(100),
                    }}
                  >
                    {prizeData[index].count}
                  </div>
                  <div
                    style={{
                      width: scaled(230),
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 700,
                      color: "white",
                      fontSize: scaled(24),
                      textAlign: "center",
                      lineHeight: "100%",
                      letterSpacing: "0",
                    }}
                  >
                    {prizeData[index].title}
                  </div>

                  <div
                    style={{
                      width: scaled(230),
                      top: scaled(136),
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: scaled(18),
                      textAlign: "center",
                      letterSpacing: "0",
                    }}
                  >
                    {prizeData[index].description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prize Images */}
          <img
            style={{
              position: "absolute",
              width: scaled(581.7409057617188),
              height: scaled(289.7473449707031),
              top: scaled(1354),
              left: scaled(351.2),
              zIndex: 1,
            }}
            alt="Group"
            src={car}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              width: scaled(1776.0888671875),
              height: scaled(1378),
              top: scaled(750),
              left: scaled(-45),
              zIndex: 0,
              backgroundImage: `url(${light})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              mixBlendMode: "screen",
            }}
          />

          <img
            style={{
              position: "absolute",
              width: scaled(546),
              height: scaled(331),
              top: scaled(1318),
              left: scaled(1196),
            }}
            alt="Group"
            src={motobike}
            loading="lazy"
          />

          <img
            style={{
              position: "absolute",
              width: scaled(1672),
              height: scaled(896),
              top: scaled(896),
              left: scaled(160),
              objectFit: "cover",
            }}
            alt="Coin copy"
            src={coin}
          />

          {/* Service Cards - Infinite Loop Slider */}
          <div
            style={{
              position: "absolute",
              width: scaled(1594),
              height: scaled(693),
              top: scaled(2082),
              left: scaled(162),
              borderRadius: scaled(20),
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: scaledNum(29),
                width: scaledNum(
                  extendedCards.length * 512 + (extendedCards.length - 1) * 29
                ),
                transform: `translateX(-${scaledNum(
                  sliderIndex * (512 + 29)
                )}px)`,
                transition: isTransitioning ? "transform 0.3s" : "none",
              }}
            >
              {extendedCards.map((card, idx) => (
                <LuckyDraw
                  key={idx}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  description2={card.description2}
                  scaled={scaled}
                  positionLeft={idx * (512 + 29)}
                  onClick={() => setOpenPopupId(card.id)}
                />
              ))}
            </div>
          </div>
          {/* Nút chuyển trái/phải */}
          <div
            className="absolute flex justify-between"
            style={{
              width: scaled(1699),
              height: scaled(32),
              top: scaled(2412),
              left: scaled(111),
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <Button
                onClick={handleServicePrev}
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
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: scaled(0),
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <Button
                onClick={handleServiceNext}
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
          {/* Terms and Conditions Section */}
          <div
            style={{
              position: "absolute",
              width: scaled(878),
              top: scaled(2871),
              left: scaled(520),
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              color: "white",
              fontSize: scaled(48),
              textAlign: "center",
              letterSpacing: 0,
              lineHeight: "100%",
            }}
          >
            THỂ LỆ CHƯƠNG TRÌNH
          </div>

          <a
            href="https://kienlongbank.com/Data/Sites/1/media/khuyenmai/2025/kienlongbank-megasale-dieu-khoan-dieu-kien-chung.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              width: scaled(182),
              height: scaled(42),
              top: scaled(2956),
              left: scaled(869),
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
              gap: scaled(19),
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "white",
                fontSize: scaled(16),
              }}
            >
              Xem thêm
            </span>
            <ChevronRightIcon
              style={{
                height: scaled(25),
                width: scaled(25),
                background: "#2239bb",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
        </div>
        <img
          style={{
            position: "absolute",
            width: scaled(242.95),
            height: scaled(242.95),
            top: scaled(3105),
            left: scaled(1568),
            objectFit: "cover",
            transform: "rotate(42.66deg)",
          }}
          alt="Qu"
          src={giftBox}
        />
        {/* Combo Section */}
        <ComboSection
          scale={scale}
          comboCards={comboCards}
          setOpenPopupId={setOpenPopupId}
          ChevronRightIcon={ChevronRightIcon}
          CardContent={CardContent}
        />

        {/* Check-in Section */}
        <CheckInSection scale={scale} checkInStats={checkInStats} />

        <div
          id="birthday"
          style={{ position: "absolute", top: scaled(5420) }}
        ></div>

        {/* Anniversary Promotion Section */}
        <AnniversaryPromotionSection
          scale={scale}
          Button={Button}
          MdOutlineArrowBackIos={MdOutlineArrowBackIos}
          MdArrowForwardIos={MdArrowForwardIos}
          visibleCount={visibleCount}
        />

        {/* Contact Form Section */}
        <ContactFormSection
          scale={scale}
          Input={Input}
          Textarea={Textarea}
          Button={Button}
          ChevronRightIcon={ChevronRightIcon}
        />

        {/* Footer */}
        <Footer
          scale={scale}
          appstore={appstore}
          googleplay={googleplay}
          qr={qr}
          iconZalo={iconZalo}
          logo={logo}
        />
      </div>
    </div>
  );
};
