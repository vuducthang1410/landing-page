import { ChevronRightIcon } from "lucide-react";
import { useState, type JSX, useEffect } from "react";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { Input } from "../../components/ui/input.tsx";
import bgImage from "../../assets/bg1.jpg";
import bg2Image from "../../assets/bg2.png";
import car from "../../assets/car.png";
import motobike from "../../assets/motobike.png";
import appstore from "../../assets/app-store-icon-kienlongbank-mobile-banking.png";
import googleplay from "../../assets/google-play-icon-kienlongbank-mobile-banking.png";
import qr from "../../assets/qr-code-app-kienlongbank-plus-pro.png";
import iconZalo from "../../assets/card_icon_zalo.png";
import gift1 from "../../assets/GỬI-TIẾT-KIỆM-NGAY-RINH-QUÀ-CỰC-ĐÃ.png";
import gift2 from "../../assets/gift2.png";
import gift3 from "../../assets/gift3.png";
import gift4 from "../../assets/gift4.png";
import gift5 from "../../assets/gift5.png";
import combo1 from "../../assets/combo1.png";
import combo2 from "../../assets/combo2.png";

import {
  MdArrowForwardIos,
  MdOutlineArrowBackIos,
  MdOutlinePhoneIphone,
} from "react-icons/md";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { Textarea } from "../../components/ui/textarea.tsx";
import logo from "../../assets/logo-kienlongbank.png";
export const LandingPageDesktop = (): JSX.Element => {
  // Prize data
  const prizeData = [
    {
      id: 1,
      count: "03",
      title: "GIẢI ĐẶC BIỆT",
      description: "XE VINFAST VF3",
    },
    {
      id: 2,
      count: "10",
      title: "GIẢI NHẤT",
      description: "XE MÁY ĐIỆN ICON E",
    },
    {
      id: 3,
      count: "30",
      title: "GIẢI NHÌ",
      description: "10 TRIỆU ĐỒNG/GIẢI",
    },
    { id: 4, count: "60", title: "GIẢI BA", description: "5 TRIỆU ĐỒNG/GIẢI" },
    {
      id: 5,
      count: "300",
      title: "GIẢI MAY MẮN",
      description: "3 TRIỆU ĐỒNG/GIẢI",
    },
  ];
  const images = [gift1, gift2, gift3, gift4, gift5];

  // Check-in stats data
  const checkInStats = [
    { count: "6000", title: "Kiloba Dễ Thương" },
    { count: "7000", title: "Cốc Sứ" },
    { count: "7000", title: "Hộp Inochi" },
  ];

  // Service cards data
  const serviceCards = [
    {
      title: "GỬI TIẾT KIỆM",
      description: "Gửi mới/Tái tục từ 30 triệu VNĐ, Kỳ hạn từ 6 tháng",
      description2: "Nhận ngay cơ hội quay số!",
      image: "https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-10.png",
    },
    {
      title: "THANH TOÁN THẺ",
      description:
        "Thanh toán mua hàng, dịch vụ, hóa đơn bằng Thẻ tin dụng KienlongBank",
      description2: "Nhận ngay cơ hội quay số!",
      image: "https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-41.png",
    },
    {
      title: "DỊCH VỤ MYSHOP",
      description:
        "Duy trì số dư bình quân trên tài khoản từ 5 triệu VNĐ, tối thiểu 1 tháng",
      description2: "Nhận ngay cơ hội quay số!",
      image: "https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-43.png",
    },
  ];

  // Combo cards data
  const comboCards = [
    {
      title: "COMBO GỬI CHILL",
      description: "Nhận ngay Mũ bảo hiểm/Áo mưa",
      image: combo1,
    },
    {
      title: "COMBO SINH LỜI",
      description: "Nhận ngay Bộ chén ăn cao cấp",
      image: combo2,
    },
    {
      title: "COMBO VAY MƯỢT",
      description: "Nhận ngay Mũ bảo hiểm/Áo mưa",
      image: combo1,
    },
  ];

  // Navigation items
  const navItems = [
    "Trang chủ",
    "Quay số trúng thưởng",
    "Combo ưu đãi",
    "Check in",
    "Liên hệ",
    "Gọi ngay",
  ];
  const visibleCount = 3;
  const extendedImages = [
    ...images.slice(-visibleCount),
    ...images,
    ...images.slice(0, visibleCount),
  ];
  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    let timeout: ReturnType<typeof setTimeout>;
    if (currentIndex === 0) {
      // Đã về đầu, nhảy về cuối thực (không animation)
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedImages.length - visibleCount * 2);
      }, 300);
    } else if (currentIndex === extendedImages.length - visibleCount) {
      // Đã về cuối, nhảy về đầu thực (không animation)
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleCount);
      }, 300);
    } else {
      timeout = setTimeout(() => setIsTransitioning(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning, extendedImages.length, visibleCount]);
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

  const scaled = (value: number) => `${value * scale}px`;
  return (
    <div className="bg-[#f8f8f8] flex flex-row justify-center w-full">
      <div
        className="bg-[#f8f8f8] relative"
        style={{ width: scaled(1920), height: scaled(8640) }}
      >
        {/* Header Navigation */}
        <div
          className="absolute bg-white"
          style={{ width: scaled(1920), height: scaled(140), top: 0, left: 0 }}
        >
          <div className="flex">
            <img
              className="object-cover"
              alt="Logo"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/logo-1.png"
              style={{
                width: scaled(375),
                height: scaled(85),
                marginTop: scaled(34),
                marginLeft: scaled(143),
              }}
            />
            <div style={{ flex: 1, height: scaled(140), marginRight: scaled(121) }}>
              <div
                style={{
                  marginTop: scaled(63),
                  marginLeft: scaled(141.5),
                  marginBottom: scaled(52),
                }}
              >
                <div className="flex flex-row items-align-center justify-between">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="font-montserrat font-medium text-black text-xl whitespace-nowrap"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Banner Section */}
        <div
          className="absolute left-0"
          style={{ width: scaled(3841), height: scaled(3317), top: scaled(140) }}
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

          {/* Banner Navigation Controls */}
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
                size={32 * scale}
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
                size={32 * scale}
                style={{ color: "#293546", padding: 0, margin: 0 }}
              />
            </Button>
          </div>

          {/* Prize Section Background */}
          <section
            className="absolute"
            style={{
              width: scaled(3841),
              height: scaled(2160),
              top: scaled(940),
              backgroundImage: `url(${bg2Image})`,
              backgroundSize: "130%",
              backgroundPosition: "120% 45%",
              backgroundRepeat: "no-repeat",
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
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/flag-ribbon.png"
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
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/qu--2-2.png"
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
              letterSpacing: 0,
              lineHeight: "normal",
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
              lineHeight: "normal",
            }}
          >
            GIAO DỊCH CÀNG NHIỀU – CƠ HỘI TRÚNG QUÀ CÀNG LỚN!
          </div>

          {/* Prize Cards */}
          <div
            style={{
              position: "absolute",
              width: scaled(242),
              height: scaled(161),
              top: scaled(1245),
              left: scaled(290),
            }}
          >
            <div style={{ position: "relative", width: scaled(236), height: scaled(161) }}>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(105),
                left: scaled(1.5),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "white",
                fontSize: scaled(24),
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>{prizeData[0].title}</div>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(138),
                left: scaled(1.5),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "white",
                fontSize: scaled(18),
                textAlign: "center",
              }}>{prizeData[0].description}</div>
              <div style={{
                position: "absolute",
                left: 0,
                width: scaled(230),
                top: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: scaled(64),
                textAlign: "center",
                background:
                  "linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{prizeData[0].count}</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: scaled(240), // 60*4
              height: scaled(161),
              top: scaled(1245),
              left: scaled(1077),
            }}
          >
            <div style={{ position: "relative", width: scaled(234), height: scaled(161) }}>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(105),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "white",
                fontSize: scaled(24),
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>{prizeData[1].title}</div>
              <div style={{
                position: "absolute",
                width: scaled(222),
                top: scaled(138),
                left: scaled(1),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "white",
                fontSize: scaled(18),
                textAlign: "center",
              }}>{prizeData[1].description}</div>
              <div style={{
                position: "absolute",
                left: scaled(1),
                width: scaled(230),
                top: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: scaled(64),
                textAlign: "center",
                background:
                  "linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{prizeData[1].count}</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: scaled(240),
              height: scaled(161),
              top: scaled(1720),
              left: scaled(421),
            }}
          >
            <div style={{ position: "relative", width: scaled(234), height: scaled(161) }}>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(105),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "white",
                fontSize: scaled(24),
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>{prizeData[2].title}</div>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(138),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "white",
                fontSize: scaled(18),
                textAlign: "center",
              }}>{prizeData[2].description}</div>
              <div style={{
                position: "absolute",
                left: scaled(1),
                width: scaled(230),
                top: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: scaled(64),
                textAlign: "center",
                background:
                  "linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{prizeData[2].count}</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: scaled(240),
              height: scaled(161),
              top: scaled(1720),
              left: scaled(843),
            }}
          >
            <div style={{ position: "relative", width: scaled(234), height: scaled(161) }}>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(105),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "white",
                fontSize: scaled(24),
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>{prizeData[3].title}</div>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(138),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "white",
                fontSize: scaled(18),
                textAlign: "center",
              }}>{prizeData[3].description}</div>
              <div style={{
                position: "absolute",
                left: scaled(1),
                width: scaled(230),
                top: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: scaled(64),
                textAlign: "center",
                color: "#00e5ff",
              }}>{prizeData[3].count}</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: scaled(240),
              height: scaled(161),
              top: scaled(1720),
              left: scaled(1265),
            }}
          >
            <div style={{ position: "relative", width: scaled(234), height: scaled(161) }}>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(105),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "white",
                fontSize: scaled(24),
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>{prizeData[4].title}</div>
              <div style={{
                position: "absolute",
                width: scaled(230),
                top: scaled(138),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "white",
                fontSize: scaled(18),
                textAlign: "center",
              }}>{prizeData[4].description}</div>
              <div style={{
                position: "absolute",
                left: scaled(1),
                width: scaled(230),
                top: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: scaled(64),
                textAlign: "center",
                background:
                  "linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{prizeData[4].count}</div>
            </div>
          </div>

          {/* Prize Images */}
          <img
            style={{
              position: "absolute",
              width: scaled(590),
              height: scaled(298),
              top: scaled(1346),
              left: scaled(446),
            }}
            alt="Group"
            src={car}
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
          />

          <img
            style={{
              position: "absolute",
              width: scaled(1672),
              height: scaled(896),
              top: scaled(896),
              left: scaled(40),
              objectFit: "cover",
            }}
            alt="Coin copy"
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/coin-4-copy-6-1.png"
          />

          {/* Service Cards */}
          <div
            style={{
              position: "absolute",
              background: "white",
              width: scaled(512),
              height: scaled(693),
              top: scaled(2082),
              left: scaled(162),
              borderRadius: scaled(20),
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <img
              style={{
                position: "absolute",
                width: scaled(466),
                height: scaled(438),
                top: scaled(22),
                left: scaled(23),
                objectFit: "cover",
                borderRadius: scaled(20),
              }}
              alt="Rectangle"
              src={serviceCards[0].image}
            />
            <div
              style={{
                position: "absolute",
                width: scaled(497),
                top: scaled(486),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#2239bb",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: scaled(-0.96),
                lineHeight: "normal",
              }}
            >
              {serviceCards[0].title}
            </div>
            <div
              style={{
                position: "absolute",
                width: scaled(466),
                top: scaled(556),
                left: scaled(23),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "#333333",
                fontSize: scaled(16),
                textAlign: "left",
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              {serviceCards[0].description}
              <br />
              {serviceCards[0].description2}
            </div>
            <Button
              style={{
                position: "absolute",
                width: scaled(83),
                height: scaled(20),
                top: scaled(646),
                left: scaled(23),
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: scaled(8),
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: scaled(16),
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: scaled(16),
                }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon
                style={{
                  height: scaled(16),
                  width: scaled(16),
                  background: "#2239bb",
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            </Button>
          </div>

          <div
            style={{
              position: "absolute",
              background: "white",
              width: scaled(512),
              height: scaled(693),
              top: scaled(2082),
              left: scaled(703),
              borderRadius: scaled(20),
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <img
              style={{
                position: "absolute",
                width: scaled(466),
                height: scaled(438),
                top: scaled(22),
                left: scaled(23),
                objectFit: "cover",
                borderRadius: scaled(20),
              }}
              alt="Rectangle"
              src={serviceCards[1].image}
            />
            <div
              style={{
                position: "absolute",
                width: scaled(514),
                top: scaled(486),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#2239bb",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: scaled(-0.96),
                lineHeight: "normal",
              }}
            >
              {serviceCards[1].title}
            </div>
            <div
              style={{
                position: "absolute",
                width: scaled(466),
                top: scaled(556),
                left: scaled(23),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "#333333",
                fontSize: scaled(16),
                textAlign: "left",
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              {serviceCards[1].description}
              <br />
              {serviceCards[1].description2}
            </div>
            <Button
              style={{
                position: "absolute",
                width: scaled(83),
                height: scaled(20),
                top: scaled(646),
                left: scaled(23),
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: scaled(8),
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: scaled(16),
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: scaled(16),
                }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon
                style={{
                  height: scaled(16),
                  width: scaled(16),
                  background: "#2239bb",
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            </Button>
            <img
              style={{
                position: "absolute",
                width: scaled(173),
                height: scaled(261),
                top: scaled(110),
                left: scaled(192),
                objectFit: "cover",
                borderRadius: scaled(20),
              }}
              alt="Element bo thiet"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/2021-9-29-bo-thiet-ke-the-kienlongbank---ghi-no---tin-dung-final.png"
            />
            <img
              style={{
                position: "absolute",
                width: scaled(242),
                height: scaled(302),
                top: scaled(90),
                left: scaled(113),
                objectFit: "cover",
              }}
              alt="Elite"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/elite-1.png"
            />
          </div>

          <div
            style={{
              position: "absolute",
              background: "white",
              width: scaled(512),
              height: scaled(693),
              top: scaled(2082),
              left: scaled(1244),
              borderRadius: scaled(20),
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <img
              style={{
                position: "absolute",
                width: scaled(466),
                height: scaled(438),
                top: scaled(22),
                left: scaled(23),
                objectFit: "cover",
                borderRadius: scaled(20),
              }}
              alt="Rectangle"
              src={serviceCards[2].image}
            />
            <div
              style={{
                position: "absolute",
                width: scaled(514),
                top: scaled(486),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#2239bb",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: scaled(-0.96),
                lineHeight: "normal",
              }}
            >
              {serviceCards[2].title}
            </div>
            <div
              style={{
                position: "absolute",
                width: scaled(466),
                top: scaled(556),
                left: scaled(23),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "#333333",
                fontSize: scaled(16),
                textAlign: "left",
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              {serviceCards[2].description}
              <br />
              {serviceCards[2].description2}
            </div>
            <Button
              style={{
                position: "absolute",
                width: scaled(83),
                height: scaled(20),
                top: scaled(646),
                left: scaled(23),
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: scaled(8),
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: scaled(16),
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: scaled(16),
                }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon
                style={{
                  height: scaled(16),
                  width: scaled(16),
                  background: "#2239bb",
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            </Button>
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
              fontSize: scaled(40),
              textAlign: "center",
              letterSpacing: 0,
              lineHeight: "normal",
            }}
          >
            ĐIỀU KHOẢN & ĐIỀU KIỆN CHUNG
          </div>

          <Button
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
              gap: scaled(8),
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
            <ChevronRightIcon style={{ height: scaled(20), width: scaled(20), color: "white" }} />
          </Button>
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
          src="https://c.animaapp.com/mc1e20wi1KPjVw/img/qu--2-2.png"
        />
        {/* Combo Section */}
        <div
          style={{
            position: "absolute",
            width: scaled(1776),
            top: scaled(3349),
            left: scaled(71),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            color: "#2239bb",
            fontSize: scaled(40),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "normal",
          }}
        >
          CHỌN COMBO NGAY - QUÀ TẶNG TRAO TAY
        </div>

        <div
          style={{
            position: "absolute",
            width: scaled(1116),
            top: scaled(3420),
            left: scaled(402),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 500,
            color: "#54a4ff",
            fontSize: scaled(32),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "normal",
            whiteSpace: "nowrap",
          }}
        >
          NHẬN NGAY TỚI 30.000 QUÀ TẶNG KHI SỬ DỤNG COMBO DỊCH VỤ
        </div>

        {/* Combo Cards */}
        <Card
          style={{
            position: "absolute",
            background: "white",
            width: scaled(512),
            height: scaled(653),
            top: scaled(3544),
            left: scaled(162),
            borderRadius: scaled(20),
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
          shadow-none
        >
          <CardContent style={{ padding: 0 }}>
            <img
              style={{
                width: scaled(463),
                height: scaled(413),
                marginTop: scaled(21),
                marginLeft: "auto",
                marginRight: "auto",
                objectFit: "cover",
                borderRadius: scaled(20),
                display: "block",
              }}
              alt="Rectangle"
              src={comboCards[0].image}
            />
            <div
              style={{
                width: scaled(497),
                marginTop: scaled(36),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#2239bb",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: scaled(-0.96),
                lineHeight: "normal",
              }}
            >
              {comboCards[0].title}
            </div>
            <div
              style={{
                width: scaled(466),
                marginTop: scaled(20),
                height: scaled(54),
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "left",
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "#333333",
                fontSize: scaled(16),
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              {comboCards[0].description}
            </div>
            <Button
              style={{
                marginTop: scaled(34.84),
                marginLeft: scaled(23),
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: scaled(8),
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: scaled(16),
                textAlign: "left",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: scaled(16),
                  textDecoration: "none",
                }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon
                style={{
                  height: scaled(16),
                  width: scaled(16),
                  background: "#2239bb",
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            </Button>
          </CardContent>
        </Card>

        <Card
          style={{
            position: "absolute",
            background: "white",
            width: scaled(512),
            height: scaled(653),
            top: scaled(3544),
            left: scaled(703),
            borderRadius: scaled(20),
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
          shadow-none
        >
          <CardContent style={{ padding: 0 }}>
            <img
              style={{
                width: scaled(466),
                height: scaled(413),
                marginTop: scaled(21),
                marginLeft: "auto",
                marginRight: "auto",
                objectFit: "cover",
                borderRadius: scaled(20),
                display: "block",
              }}
              alt="Rectangle"
              src={comboCards[1].image}
            />
            <div
              style={{
                width: scaled(514),
                marginTop: scaled(36),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#2239bb",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: scaled(-0.96),
                lineHeight: "normal",
              }}
            >
              {comboCards[1].title}
            </div>
            <div
              style={{
                width: scaled(466),
                marginTop: scaled(20),
                height: scaled(54),
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "left",
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "#333333",
                fontSize: scaled(16),
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              {comboCards[1].description}
            </div>
            <Button
              style={{
                marginTop: scaled(34.84),
                marginLeft: scaled(23),
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: scaled(8),
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: scaled(16),
                textAlign: "left",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: scaled(16),
                  textDecoration: "none",
                }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon
                style={{
                  height: scaled(16),
                  width: scaled(16),
                  background: "#2239bb",
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            </Button>
          </CardContent>
        </Card>

        <Card
          style={{
            position: "absolute",
            background: "white",
            width: scaled(512),
            height: scaled(653),
            top: scaled(3544),
            left: scaled(1244),
            borderRadius: scaled(20),
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
          shadow-none
        >
          <CardContent style={{ padding: 0 }}>
            <img
              style={{
                width: scaled(466),
                height: scaled(413),
                marginTop: scaled(21),
                marginLeft: "auto",
                marginRight: "auto",
                objectFit: "cover",
                borderRadius: scaled(20),
                display: "block",
              }}
              alt="Rectangle"
              src={comboCards[2].image}
            />
            <div
              style={{
                width: scaled(514),
                marginTop: scaled(36),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#2239bb",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: scaled(-0.96),
                lineHeight: "normal",
              }}
            >
              {comboCards[2].title}
            </div>
            <div
              style={{
                width: scaled(466),
                marginTop: scaled(20),
                height: scaled(54),
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "left",
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "#333333",
                fontSize: scaled(16),
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              {comboCards[2].description}
            </div>
            <Button
              style={{
                marginTop: scaled(34.84),
                marginLeft: scaled(23),
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: scaled(8),
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: scaled(16),
                textAlign: "left",
                textDecoration: "none",
                marginBottom: scaled(20),
              }}
            >
              <span
                style={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: scaled(16),
                  textDecoration: "none",
                }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon
                style={{
                  height: scaled(16),
                  width: scaled(16),
                  background: "#2239bb",
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            </Button>
          </CardContent>
        </Card>

        {/* Check-in Section */}
        <div
          className="absolute"
          style={{
            width: scaled(1920),
            height: scaled(1080),
            top: scaled(4336),
            left: scaled(0),
            background:
              "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
          }}
        >
          <div
            className="relative"
            style={{
              width: scaled(1551),
              height: scaled(869),
              top: scaled(74),
              left: scaled(185),
            }}
          >
            <div
              style={{
                position: "absolute",
                width: scaled(1116),
                height: scaled(118),
                top: 0,
                left: scaled(217),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: scaled(932),
                  top: 0,
                  left: scaled(92),
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 700,
                  color: "#00e5ff",
                  fontSize: scaled(40),
                  textAlign: "center",
                  letterSpacing: 0,
                  lineHeight: "normal",
                }}
              >
                CHỤP CHECK-IN - NHẬN QUÀ XINH
              </div>

              <div
                style={{
                  position: "absolute",
                  width: scaled(1116),
                  top: scaled(80),
                  left: 0,
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  color: "white",
                  fontSize: scaled(32),
                  textAlign: "center",
                  letterSpacing: 0,
                  lineHeight: "normal",
                  whiteSpace: "nowrap",
                }}
              >
                TỚI KIENLONGBANK LÀ CÓ QUÀ!
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(866),
                top: scaled(134),
                left: scaled(342),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "white",
                fontSize: scaled(16),
                textAlign: "center",
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              {" "}
              Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành
              tặng 01 phần quà theo sở thích khi Khách hàng\u00a0\u00a0chụp hình
              check-in và chia sẻ hình lên mạng xã hội để chế độ công khai để
              nhận quà.
            </div>

            {/* Check-in Images */}
            <img
              style={{
                position: "absolute",
                width: scaled(463),
                height: scaled(413),
                top: scaled(262),
                left: scaled(0),
                objectFit: "cover",
              }}
              alt="Rectangle"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-50.png"
            />

            <img
              style={{
                position: "absolute",
                width: scaled(463),
                height: scaled(413),
                top: scaled(262),
                left: scaled(541),
                objectFit: "cover",
              }}
              alt="Rectangle"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-51.png"
            />

            <div
              style={{
                position: "absolute",
                width: scaled(463),
                height: scaled(413),
                top: scaled(262),
                left: scaled(1082),
                background: "#d9d9d9",
                borderRadius: scaled(20),
                backgroundImage:
                  "url(https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-57.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            />

            {/* Check-in Stats */}
            {checkInStats.map((stat, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  width: scaled(322),
                  height: scaled(178),
                  gap: scaled(16),
                  top: scaled(691),
                  left: scaled(70 + index * 542),
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: scaled(112.43),
                    marginTop: scaled(-1),
                    background:
                      "linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    fontSize: scaled(96),
                    textAlign: "center",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    whiteSpace: "nowrap",
                  }}
                >
                  {stat.count}
                </div>

                <div
                  style={{
                    width: "100%",
                    height: scaled(18),
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    color: "white",
                    fontSize: scaled(24),
                    textAlign: "center",
                    letterSpacing: 0,
                    lineHeight: "normal",
                    whiteSpace: "nowrap",
                  }}
                >
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anniversary Promotion Section */}
        <div
          style={{
            position: "absolute",
            width: scaled(1776),
            top: scaled(5489),
            left: scaled(71),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            color: "#2239bb",
            fontSize: scaled(40),
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
                gap: scaled(80),
                width: `${extendedImages.length * 463 * scale + (extendedImages.length - 1) * 80 * scale}px`,
                transform: `translateX(-${currentIndex * (463 + 80) * scale}px)`,
                transition: isTransitioning ? "transform 0.3s" : "none",
              }}
            >
              {extendedImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`img-${index}`}
                  style={{
                    width: scaled(463),
                    height: scaled(463),
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
              <MdOutlineArrowBackIos size={16 * scale} style={{ color: "#293546" }} />
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
              <MdArrowForwardIos size={16 * scale} style={{ color: "#293546" }} />
            </Button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          style={{
            position: "absolute",
            width: scaled(1920),
            height: scaled(1080),
            top: scaled(6480),
            left: scaled(0),
            background:
              "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: scaled(1116),
              height: scaled(118),
              top: scaled(92),
              left: scaled(402),
            }}
          >
            <div
              style={{
                position: "absolute",
                width: scaled(932),
                top: 0,
                left: scaled(92),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#00e5ff",
                fontSize: scaled(40),
                textAlign: "center",
                letterSpacing: 0,
                lineHeight: "normal",
              }}
            >
              BẠN CÒN CÂU HỎI?
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(1116),
                top: scaled(80),
                left: 0,
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "white",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: 0,
                lineHeight: "normal",
                whiteSpace: "nowrap",
              }}
            >
              HÃY GỬI THÔNG TIN ĐỂ ĐƯỢC LIÊN HỆ TƯ VẤN
            </div>
          </div>

          <img
            style={{
              position: "absolute",
              width: scaled(795),
              height: scaled(679),
              top: scaled(401),
              left: scaled(118),
              objectFit: "cover",
            }}
            alt="Element"
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/12-1.png"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: scaled(756),
              height: scaled(109),
              alignItems: "flex-start",
              gap: scaled(6),
              position: "absolute",
              top: scaled(350),
              left: scaled(1000),
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "#fff",
                fontSize: scaled(14),
                textAlign: "left",
                marginTop: scaled(-1),
              }}
            >
              Họ và tên
            </div>
            <Input
              style={{
                height: scaled(40),
                width: "100%",
                background: "white",
                border: `${scaled(1)} solid #d1d5db`,
                borderRadius: scaled(8),
                fontSize: scaled(16),
                paddingLeft: scaled(12),
              }}
              placeholder="Nhập họ và tên"
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: scaled(459),
              left: scaled(1000),
              display: "flex",
              flexDirection: "column",
              width: scaled(756),
              height: scaled(109),
              alignItems: "flex-start",
              gap: scaled(6),
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "#fff",
                fontSize: scaled(14),
                textAlign: "left",
                marginTop: scaled(-1),
              }}
            >
              Email
            </div>
            <Input
              style={{
                height: scaled(40),
                width: "100%",
                background: "white",
                border: `${scaled(1)} solid #d1d5db`,
                borderRadius: scaled(8),
                fontSize: scaled(16),
                paddingLeft: scaled(12),
              }}
              placeholder="Nhập địa chỉ email"
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: scaled(568),
              left: scaled(1000),
              display: "flex",
              flexDirection: "column",
              width: scaled(756),
              alignItems: "flex-start",
              gap: scaled(6),
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                color: "#fff",
                fontSize: scaled(14),
                textAlign: "left",
                marginTop: scaled(-1),
              }}
            >
              Bạn cần hỗ trợ vấn đề gì?
            </div>
            <Textarea
              style={{
                width: scaled(756),
                height: scaled(206),
                background: "white",
                border: `${scaled(1)} solid #d1d5db`,
                borderRadius: scaled(8),
                fontSize: scaled(16),
                paddingLeft: scaled(12),
                paddingTop: scaled(12),
              }}
              placeholder="Nhập nội dung"
            />
          </div>

          <Button
            style={{
              position: "absolute",
              width: scaled(182),
              height: scaled(42),
              top: scaled(848),
              left: scaled(1574),
              background:
                "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
              outline: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: scaled(8),
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 400,
              color: "white",
              fontSize: scaled(16),
              padding: 0,
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
              Gửi thông tin
            </span>
            <div
              style={{
                height: scaled(25),
                width: scaled(25),
                background: "#2239bb",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: scaled(8),
              }}
            >
              <ChevronRightIcon style={{ height: scaled(20), width: scaled(20), color: "white" }} />
            </div>
          </Button>
        </div>

        {/* Footer */}
        <footer
          className="absolute text-left bg-transparent"
          style={{
            width: scaled(1916),
            height: scaled(640),
            top: scaled(8000),
            left: scaled(0.5),
          }}
        >
          <div
            style={{
              position: "absolute",
              width: scaled(1636),
              height: scaled(427),
              top: scaled(45),
              left: scaled(165),
            }}
          >
            <div
              style={{
                position: "absolute",
                width: scaled(499),
                height: scaled(27),
                top: scaled(24),
                left: 0,
                fontFamily: "'Montserrat',Helvetica",
                fontWeight: "bold",
                color: "#333333",
                fontSize: scaled(21.5),
                lineHeight: scaled(25.8),
                whiteSpace: "nowrap",
                letterSpacing: 0,
              }}
            >
              Ngân hàng TMCP Kiên Long (KienlongBank)
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(775),
                height: scaled(181),
                top: scaled(70),
                left: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: scaled(688),
                  height: scaled(22),
                  top: scaled(3),
                  left: 0,
                  fontFamily: "'Montserrat',Helvetica",
                  fontWeight: "normal",
                  color: "#333333",
                  fontSize: scaled(17.2),
                  lineHeight: scaled(30.1),
                  whiteSpace: "nowrap",
                  letterSpacing: 0,
                }}
              >
                <span className="font-semibold">Hội sở: </span>
                <span>
                  40-42-44 Phạm Hồng Thái, P.Vĩnh Thanh Vân, Tp.Rạch Giá, T.Kiên Giang
                </span>
              </div>

              <div
                style={{
                  position: "absolute",
                  width: scaled(422),
                  height: scaled(22),
                  top: scaled(33),
                  left: 0,
                  fontFamily: "'Montserrat',Helvetica",
                  fontWeight: "normal",
                  color: "#333333",
                  fontSize: scaled(17.2),
                  lineHeight: scaled(30.1),
                  whiteSpace: "nowrap",
                  letterSpacing: 0,
                }}
              >
                <span className="font-semibold">Điện thoại:</span>
                <span> (0297) 3869 950 hoặc (028) 3933 3393</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  width: scaled(462),
                  height: scaled(21),
                  top: scaled(63),
                  left: 0,
                  fontFamily: "'Montserrat',Helvetica",
                  fontWeight: "normal",
                  color: "#333333",
                  fontSize: scaled(17.2),
                  lineHeight: scaled(30.1),
                  whiteSpace: "nowrap",
                  letterSpacing: 0,
                  textAlign: "left",
                }}
              >
                <span className="font-semibold">Hotline gọi trong lãnh thổ Việt Nam:</span>
                <span> 1900 6929</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  width: scaled(520),
                  height: scaled(22),
                  top: scaled(93),
                  left: 0,
                  fontFamily: "'Montserrat',Helvetica",
                  fontWeight: "normal",
                  color: "#333333",
                  fontSize: scaled(17.2),
                  lineHeight: scaled(30.1),
                  whiteSpace: "nowrap",
                  letterSpacing: 0,
                }}
              >
                <span className="font-semibold">Hotline gọi từ nước ngoài về Việt Nam: </span>
                <span>(+84) 287309 6929</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  width: scaled(218),
                  height: scaled(17),
                  top: scaled(123),
                  left: 0,
                  fontFamily: "'Montserrat',Helvetica",
                  fontWeight: "normal",
                  color: "#333333",
                  fontSize: scaled(17.2),
                  lineHeight: scaled(30.1),
                  whiteSpace: "nowrap",
                  letterSpacing: 0,
                }}
              >
                <span className="font-semibold">Mã SWIFT: </span>
                <span>KLBKVNVX</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  width: scaled(775),
                  height: scaled(30),
                  top: scaled(151),
                  left: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: scaled(730),
                    height: scaled(22),
                    top: scaled(-1),
                    left: 0,
                    fontFamily: "'Montserrat',Helvetica",
                    fontWeight: "normal",
                    color: "#333333",
                    fontSize: scaled(17.2),
                    lineHeight: scaled(30.1),
                    whiteSpace: "nowrap",
                    letterSpacing: 0,
                  }}
                >
                  <span className="font-semibold">Email: </span>
                  <span>kienlong@kienlongbank.com hoặc chamsockhachhang@kienlongbank.com</span>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(366.9),
                height: scaled(427),
                top: scaled(-143),
                left: scaled(1221),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: scaled(366.9),
                  height: scaled(241),
                  top: scaled(186),
                  left: 0,
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: "22.96px",
                      lineHeight: "27.55px",
                      letterSpacing: "0%",
                      textAlign: "center",
                      verticalAlign: "middle",
                      marginBottom: "0.35vw",
                      color: "#333333",
                    }}
                  >
                    KienlongBank Mobile Banking
                  </div>

                  <div className="flex flex-row gap-[0.7vw] mb-[0.7vw]" style={{ gap: "0.7vw" }}>
                    <img
                      src={appstore}
                      alt="App Store"
                      style={{
                        height: "2.62vw",
                        width: "8.97vw",
                        objectFit: "cover",
                      }}
                    />
                    <img
                      src={googleplay}
                      alt="Google Play"
                      style={{
                        height: "2.62vw",
                        width: "8.97vw",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <img
                    src={qr}
                    alt="QR Code"
                    style={{ width: "8.96vw", height: "8.96vw", minWidth: 64 }}
                    className="rounded bg-white shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              width: scaled(1593),
              height: scaled(93),
              top: scaled(547),
              left: scaled(165),
              borderTop: `${scaled(1.43)} solid #e6e5e5`,
            }}
          >
            <div
              style={{
                position: "relative",
                width: scaled(1636),
                height: scaled(52),
                top: scaled(22),
                left: scaled(-22),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: scaled(498),
                  height: scaled(48),
                  top: 0,
                  left: scaled(22),
                  fontFamily: "'Montserrat',Helvetica",
                  fontWeight: 500,
                  color: "#333333",
                  fontSize: scaled(17.2),
                  lineHeight: scaled(25.8),
                }}
              >
                Copyright © 2018 Kienlongbank. All right reserved.
              </div>
            </div>
          </div>
        </footer>

        {/* Social Links */}
        <div
          style={{
            position: "absolute",
            width: scaled(181),
            height: scaled(27),
            top: scaled(7720),
            left: scaled(1484),
            fontFamily: "'Montserrat',Helvetica",
            fontWeight: "bold",
            color: "#333333",
            fontSize: scaled(23),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: scaled(27.6),
            whiteSpace: "nowrap",
          }}
        >
          Liên kết nhanh
        </div>

        <div
          style={{
            position: "absolute",
            width: scaled(366),
            height: scaled(80),
            top: scaled(7759),
            left: scaled(1390),
          }}
        >
          <div className="flex flex-row gap-[15.47px] justify-center items-center">
            <div
              style={{
                width: "2.99vw",
                height: "2.99vw",
                color: "white",
                borderRadius: "1.49vw",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MdOutlinePhoneIphone style={{ width: "1.7vw", height: "1.7vw" }} />
            </div>

            <div
              style={{
                width: "2.99vw",
                height: "2.99vw",
                color: "white",
                borderRadius: "1.49vw",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaFacebookF style={{ width: "1.7vw", height: "1.7vw" }} />
            </div>

            <div
              style={{
                width: "2.99vw",
                height: "2.99vw",
                color: "white",
                borderRadius: "1.49vw",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaYoutube style={{ width: "1.7vw", height: "1.7vw" }} />
            </div>

            <div
              style={{
                width: "2.99vw",
                height: "2.99vw",
                color: "white",
                borderRadius: "1.49vw",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={iconZalo}
                alt="Zalo"
                style={{
                  width: "2vw",
                  height: "2vw",
                  minWidth: 32,
                  minHeight: 32,
                  maxWidth: 60,
                  maxHeight: 60,
                  objectFit: "contain",
                }}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            height: scaled(90),
            top: scaled(7696),
            left: scaled(149),
            display: "inline-flex",
            justifyContent: "around",
            gap: scaled(14.35),
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            className="relative"
            style={{ width: scaled(365.92), height: scaled(68.61) }}
            alt="Logo kienlongbank"
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};