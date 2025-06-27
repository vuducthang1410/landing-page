import { type JSX, useState, useRef, useEffect } from "react";
import bgMobile from "../../assets/bgMobile.webp";
import logo from "../../assets/logoKlbMobile.png";
import bg2 from "../../assets/bg2Mobile.webp";
import car from "../../assets/car_rs.png";
import motorbike from "../../assets/motobike_rs.png";
import {
  serviceCards,
  comboCards,
  coinMb,
  flagRibbon,
  prizeData,
  logoMobileMenu,
  light,
  giftBox,
} from "../../data.ts";
import FooterMobile from "../../components/ui/mobile/FooterMobile";
import ComboSectionMobile from "../../components/ui/mobile/ComboSectionMobile";
import ContactFormSectionMobile from "../../components/ui/mobile/ContactFormSectionMobile";
import AnniversaryPromotionSectionMobile from "../../components/ui/mobile/AnniversaryPromotionSectionMobile";
import CheckInSectionMobile from "../../components/ui/mobile/CheckInSectionMobile";
import { IoMenu, IoClose } from "react-icons/io5";
import { ChevronRightIcon } from "lucide-react";
import MobileMenuPopup from "../../components/ui/mobile/MobileMenuPopup";
import MyShopPromotionPopupMobile from "../../components/popup/mobile/MyShopPromotionPopupMobile";
import BondPromotionPopupMobile from "../../components/popup/mobile/BondPromotionPopupMobile";
import ForexPromotionPopupMobile from "../../components/popup/mobile/ForexPromotionPopupMobile";
import SavingPromotionPopupMobile from "../../components/popup/mobile/SavingPromotionPopupMobile";
import CreditCardPromotionPopupMobile from "../../components/popup/mobile/CreditCardPromotionPopupMobile";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const LandingPageMobile = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scale, setScale] = useState(window.innerWidth / 375);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  // Khai báo các ref cho từng section
  const homeRef = useRef<HTMLDivElement>(null);
  const prizeRef = useRef<HTMLDivElement>(null);
  const comboRef = useRef<HTMLDivElement>(null);
  const checkinRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const anniversaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / 375);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaled = (value: number) => value * scale;

  // Đặt hàm này trước return
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Mapping index to popup name (5 serviceCards)
  const popupMap = [
    "saving", // 0
    "credit", // 1
    "myshop", // 2
    "bond", // 3
    "forex", // 4
  ];

  // Đóng popup khi ấn nút back trên mobile cho các popup
  useEffect(() => {
    if (openPopup) {
      window.history.pushState({ popup: true }, "");
      const handlePopState = () => {
        setOpenPopup(null);
      };
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
        if (window.history.state && window.history.state.popup) {
          window.history.back();
        }
      };
    }
  }, [openPopup]);

  return (
    <div
      className="bg-[#f8f8f8] flex flex-row justify-center w-full"
      data-model-id="4094:398"
    >
      <div
        ref={homeRef}
        className="bg-[#f8f8f8] overflow-hidden relative"
        style={{
          height: scaled(6496),
          overflow: menuOpen ? 'hidden' : undefined,
          position: menuOpen ? 'fixed' : 'relative',
          top: menuOpen ? 0 : undefined,
          left: menuOpen ? 0 : undefined,
          width: menuOpen ? '100vw' : scaled(375),
        }}
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
            src={menuOpen ? logoMobileMenu : logo}
            style={{
              width: scaled(214),
              height: scaled(38),
              top: scaled(12),
              left: scaled(80),
              zIndex: 1000,
            }}
          />

          {/* Hamburger Menu */}
          <button
            type="button"
            className="absolute bg-white rounded-[5px] flex items-center justify-center z-20"
            style={{
              width: scaled(40),
              height: scaled(40),
              top: scaled(13),
              left: scaled(13),
              padding: "none",
              border: "none",
            }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <IoClose size={scaled(26)} color="#1D29AF" />
            ) : (
              <IoMenu size={scaled(26)} color="#1D29AF" />
            )}
          </button>

          {/* Thay thế menu popup cũ bằng component mới */}
          <MobileMenuPopup
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            prizeRef={prizeRef}
            comboRef={comboRef}
            checkinRef={checkinRef}
            anniversaryRef={anniversaryRef}
            contactRef={contactRef}
            scaled={scaled}
          />
        </div>

        {/* Main Prize Section */}
        <div
          ref={prizeRef}
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
            loading="lazy"
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
              letterSpacing: "0",
              textAlign: "center",
              width: scaled(375),
              marginTop: scaled(36),
              height: scaled(50),
              lineHeight: "125%",
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
              marginTop: scaled(10),
            }}
          >
            GIAO DỊCH CÀNG NHIỀU – CƠ HỘI TRÚNG QUÀ CÀNG LỚN!
          </div>
          <div
            style={{
              height: scaled(179.4),
              marginTop: scaled(12),
              width: scaled(351),
              position: "relative",
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
                  style={{
                    fontSize: scaled(64),
                    height: scaled(68),
                    letterSpacing: "0",
                    lineHeight: "100%",
                  }}
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
              className="absolute"
              style={{
                width: scaled(271),
                height: scaled(135),
                marginTop: scaled(35.27),
                zIndex: 1,
                bottom: scaled(0),
                right: scaled(0),
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
                  style={{
                    fontSize: scaled(64),
                    height: scaled(68),
                    letterSpacing: "0",
                    lineHeight: "100%",
                  }}
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
              loading="lazy"
            />
          </div>
          <div style={{ width: scaled(122), height: scaled(107) }}>
            <div
              className="relative"
              style={{ width: scaled(116), height: scaled(107) }}
            >
              <div
                className="bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-center tracking-[0] leading-[normal] whitespace-nowrap"
                style={{
                  fontSize: scaled(64),
                  height: scaled(68),
                  letterSpacing: "0",
                  lineHeight: "100%",
                }}
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
                      letterSpacing: "0",
                      lineHeight: "100%",
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
            src={giftBox}
            style={{
              width: scaled(152),
              height: scaled(152),
              top: scaled(790),
              left: scaled(-59),
            }}
            loading="lazy"
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
            <Swiper
              style={{
                width: scaled(375),
                height: scaled(467),
                paddingLeft: scaled(15),
                paddingRight: scaled(15),
              }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {serviceCards.map((card, idx) => (
                <SwiperSlide key={idx}>
                  <button
                    onClick={() => setOpenPopup(popupMap[idx])}
                    style={{
                      width: scaled(345),
                      height: scaled(467),
                      flexShrink: 0,
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
                      loading="lazy"
                    />
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: scaled(20),
                        marginTop: scaled(0),
                        height: scaled(50),
                        color: "#2239bb",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        lineHeight: "100%",
                        letterSpacing: "-3%",
                        display:'flex',
                        justifyItems:'center',
                        alignItems:'center'
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
                    <div
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
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
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
          <a
            href="https://kienlongbank.com/Data/Sites/1/media/khuyenmai/2025/kienlongbank-megasale-dieu-khoan-dieu-kien-chung.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
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
            src={giftBox}
            loading="lazy"
          />
          <img
            className="object-cover absolute"
            style={{
              width: scaled(876),
              height: scaled(680),
              mixBlendMode: "screen",
              top: scaled(-130),
              left: scaled(-100),
              zIndex: 0,
              minWidth: scaled(876),
            }}
            alt="Do min"
            src={light}
          />
        </div>

        {/* Section Combo */}
        <div>
          <div
            ref={comboRef}
            style={{ position: "absolute", top: scaled(2436), left: 0 }}
          />
          <ComboSectionMobile comboCards={comboCards} scaled={scaled} />
        </div>

        {/* Check-in Section */}
        <div>
          <div
            ref={checkinRef}
            style={{ position: "absolute", top: scaled(3248), left: 0 }}
          />
          <CheckInSectionMobile scaled={scaled} />
        </div>

        {/* Anniversary Promotion Section */}
        <div>
          <div
            ref={anniversaryRef}
            style={{ position: "absolute", top: scaled(4056), left: 0 }}
          />
          <AnniversaryPromotionSectionMobile scaled={scaled} />
        </div>

        {/* Contact Form Section  */}
        <div>
          <div
            ref={contactRef}
            style={{ position: "absolute", top: scaled(4872), left: 0 }}
          />
          <ContactFormSectionMobile scaled={scaled} />
        </div>

        {/* Footer Section */}
        <FooterMobile scaled={scaled} />

        {/* Render popup tương ứng */}
        {openPopup === "saving" && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              overflowY: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            <div
              style={{
                position: "relative",
                maxHeight: "100%",
                overflowY: "auto",
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: scaled(20),
                boxSizing: "border-box",
              }}
            >
              <button
                onClick={() => setOpenPopup(null)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: scaled(20),
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: scaled(32),
                  zIndex: 10000,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              <SavingPromotionPopupMobile scaled={scaled} />
            </div>
          </div>
        )}

        {openPopup === "credit" && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              background: "transparent",
              overflowY: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                maxHeight: "100%",
                overflowY: "auto",
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: scaled(20),
                boxSizing: "border-box",
              }}
            >
              <button
                onClick={() => setOpenPopup(null)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: scaled(20),
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: scaled(32),
                  zIndex: 10000,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              <CreditCardPromotionPopupMobile scaled={scaled} />
            </div>
          </div>
        )}

        {openPopup === "myshop" && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              background: "rgba(0,0,0,0.5)",
              overflowY: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                maxHeight: "100%",
                overflowY: "auto",
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: scaled(20),
                boxSizing: "border-box",
              }}
            >
              <button
                onClick={() => setOpenPopup(null)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: scaled(20),
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: scaled(32),
                  zIndex: 10000,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              <MyShopPromotionPopupMobile scaled={scaled} />
            </div>
          </div>
        )}

        {openPopup === "bond" && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              background: "rgba(0,0,0,0.5)",
              overflowY: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                maxHeight: "100%",
                overflowY: "auto",
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: scaled(20),
                boxSizing: "border-box",
              }}
            >
              <button
                onClick={() => setOpenPopup(null)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: scaled(20),
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: scaled(32),
                  zIndex: 10000,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              <BondPromotionPopupMobile scaled={scaled} />
            </div>
          </div>
        )}

        {openPopup === "forex" && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999,
              background: "rgba(0,0,0,0.5)",
              overflowY: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                maxHeight: "100%",
                overflowY: "auto",
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: scaled(20),
                boxSizing: "border-box",
              }}
            >
              <button
                onClick={() => setOpenPopup(null)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: scaled(20),
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: scaled(32),
                  zIndex: 10000,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              <ForexPromotionPopupMobile scaled={scaled} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
