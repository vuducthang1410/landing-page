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

  return (
    <div
      className="bg-[#f8f8f8] flex flex-row justify-center w-full"
      data-model-id="1:5"
    >
      <div className="bg-[#f8f8f8] w-[1920px] h-[8640px] relative">
        {/* Header Navigation */}
        <div className="absolute w-[1920px] h-[140px] top-0 left-0 bg-white">
          <div className="flex">
            <img
              className=" w-[375px] h-[85px] mt-[34px] ml-[143px] object-cover"
              alt="Logo"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/logo-1.png"
            />
            <div className="flex-1 h-[140px] mr-[121px]">
              <div className=" mt-[63px] ml-[141.5px] mb-[52px] right-0">
                <div className="flex  flex-row items-align-center justify-between right-0">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap"
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
        <div className="absolute w-[3841px] h-[3317px] top-[140px] left-0">
          <section
            className="absolute w-[1920px] h-[940px] top-0 left-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              // height: isMobile ? "100vh" : `1080px`,
              // marginTop: isMobile ? "0px" : `${scaleByWidth(140)}px`,
            }}
          />

          {/* Banner Navigation Controls */}
          <div className="absolute w-[1699px] h-8 top-[438px] left-[111px] flex justify-between">
            <Button
              variant="outline"
              className="bg-white h-[32px] w-[32px] rounded-full flex items-center justify-center"
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                border: 0,
                outline: "none",
                padding: 0,
              }}
            >
              <MdOutlineArrowBackIos
                size={32}
                style={{ color: "#293546", padding: 0, margin: 0 }}
              />
            </Button>
            <Button
              variant="outline"
              className="bg-white h-[32px] w-[32px] rounded-full flex items-center justify-center"
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                border: 0,
                outline: "none",
                padding: 0,
              }}
            >
              <MdArrowForwardIos
                size={32}
                style={{ color: "#293546", padding: 0, margin: 0 }}
              />
            </Button>
          </div>

          {/* Prize Section Background */}
          <section
            className="absolute w-[3841px] h-[2160px] top-[940px]"
            style={{
              backgroundImage: `url(${bg2Image})`,
              backgroundSize: "130%",
              backgroundPosition: "120% 45%",
              backgroundRepeat: "no-repeat",
            }}
          />

          <img
            className="absolute w-[1380px] h-[776px] top-[1903px] left-[536px] object-cover"
            alt="Flag ribbon"
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/flag-ribbon.png"
          />

          <img
            className="w-[360px] h-[360px] top-[1881px] left-[-103px] absolute object-cover"
            alt="Qu"
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/qu--2-2.png"
          />

          {/* Prize Section Title */}
          <div className="absolute w-[808px] top-[1011px] left-[592px] [font-family:'Montserrat',Helvetica] font-bold text-[#00e5ff] text-[46px] text-center tracking-[0] leading-[normal]">
            QUAY SỐ RINH QUÀ
            <br />
            TRÚNG THƯỞNG THẢ GA
          </div>

          <div className="absolute w-[1010px] top-[1138px] left-[491px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[normal]">
            GIAO DỊCH CÀNG NHIỀU – CƠ HỘI TRÚNG QUÀ CÀNG LỚN!
          </div>

          {/* Prize Cards */}
          <div className="absolute w-[242px] h-[161px] top-[1245px] left-[290px]">
            <div className="relative w-[236px] h-[161px]">
              <div className="absolute w-[230px] top-[105px] left-1.5 [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {prizeData[0].title}
              </div>
              <div className="absolute w-[230px] top-[138px] left-1.5 [font-family:'Montserrat',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                {prizeData[0].description}
              </div>
              <div className="left-0 absolute w-[230px] top-0 bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-8xl text-center tracking-[0] leading-[normal]">
                {prizeData[0].count}
              </div>
            </div>
          </div>

          <div className="absolute w-60 h-[161px] top-[1245px] left-[1077px]">
            <div className="relative w-[234px] h-[161px]">
              <div className="absolute w-[230px] top-[105px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {prizeData[1].title}
              </div>
              <div className="absolute w-[222px] top-[138px] left-1 [font-family:'Montserrat',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                {prizeData[1].description}
              </div>
              <div className="left-1 absolute w-[230px] top-0 bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-8xl text-center tracking-[0] leading-[normal]">
                {prizeData[1].count}
              </div>
            </div>
          </div>

          {/* Additional Prize Cards */}
          <div className="absolute w-60 h-[161px] top-[1720px] left-[421px]">
            <div className="relative w-[234px] h-[161px]">
              <div className="absolute w-[230px] top-[105px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {prizeData[2].title}
              </div>
              <div className="absolute w-[230px] top-[138px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                {prizeData[2].description}
              </div>
              <div className="left-1 absolute w-[230px] top-0 bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-8xl text-center tracking-[0] leading-[normal]">
                {prizeData[2].count}
              </div>
            </div>
          </div>

          <div className="absolute w-60 h-[161px] top-[1720px] left-[843px]">
            <div className="relative w-[234px] h-[161px]">
              <div className="absolute w-[230px] top-[105px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {prizeData[3].title}
              </div>
              <div className="absolute w-[230px] top-[138px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                {prizeData[3].description}
              </div>
              <div className="left-1 absolute w-[230px] top-0 bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-8xl text-center tracking-[0] leading-[normal]">
                {prizeData[3].count}
              </div>
            </div>
          </div>

          <div className="absolute w-60 h-[161px] top-[1720px] left-[1265px]">
            <div className="relative w-[234px] h-[161px]">
              <div className="absolute w-[230px] top-[105px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {prizeData[4].title}
              </div>
              <div className="absolute w-[230px] top-[138px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                {prizeData[4].description}
              </div>
              <div className="left-1 absolute w-[230px] top-0 bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-8xl text-center tracking-[0] leading-[normal]">
                {prizeData[4].count}
              </div>
            </div>
          </div>

          {/* Prize Images */}
          <img
            className="absolute w-[590px] h-[298px] top-[1346px] left-[446px]"
            alt="Group"
            src={car}
          />

          <img
            className="absolute w-[546px] h-[331px] top-[1318px] left-[1196px]"
            alt="Group"
            src={motobike}
          />

          <img
            className="absolute w-[1672px] h-[896px] top-[896px] left-40 object-cover"
            alt="Coin copy"
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/coin-4-copy-6-1.png"
          />

          {/* Service Cards */}
          <div className="absolute w-[512px] h-[693px] top-[2082px] left-[162px] bg-white rounded-[20px]">
            <img
              className="absolute w-[466px] h-[438px] top-[22px] left-[23px] object-cover rounded-[20px]"
              alt="Rectangle"
              src={serviceCards[0].image}
            />
            <div className="absolute w-[497px] top-[486px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-[32px] text-center tracking-[-0.96px] leading-[normal]">
              {serviceCards[0].title}
            </div>
            <div className="absolute w-[466px] top-[556px] text-left left-[23px] [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-base tracking-[0] leading-[normal]">
              {serviceCards[0].description}
              <br />
              {serviceCards[0].description2}
            </div>
            <Button
              className="absolute w-[83px] h-5 top-[646px] left-[23px] p-0 flex items-center gap-2 text-[#333333]"
              style={{
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: "16px",
                padding: 0,
              }}
            >
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-base">
                Chi tiết
              </span>
              <ChevronRightIcon className="h-4 w-4 text-white bg-[#2239bb] rounded-full" />
            </Button>
          </div>

          <div className="absolute w-[512px] h-[693px] top-[2082px] left-[703px] bg-white rounded-[20px]">
            <img
              className="absolute w-[466px] h-[438px] top-[22px] left-[23px] object-cover   rounded-[20px]"
              alt="Rectangle"
              src={serviceCards[1].image}
            />
            <div className="absolute w-[514px] top-[486px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-[32px] text-center tracking-[-0.96px] leading-[normal]">
              {serviceCards[1].title}
            </div>
            <div className="absolute w-[466px] top-[556px] text-left left-[23px] [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-base tracking-[0] leading-[normal]">
              {serviceCards[1].description}
              <br />
              {serviceCards[1].description2}
            </div>
            <Button
              className="absolute w-[83px] h-5 top-[646px] left-[23px] p-0 flex items-center gap-2 text-[#333333]"
              style={{
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: "16px",
                padding: 0,
              }}
            >
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-base">
                Chi tiết
              </span>
              <ChevronRightIcon className="h-4 w-4 text-white bg-[#2239bb] rounded-full" />
            </Button>

            <img
              className="absolute w-[173px] h-[261px] top-[110px] left-[192px] object-cover rounded-[20px]"
              alt="Element bo thiet"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/2021-9-29-bo-thiet-ke-the-kienlongbank---ghi-no---tin-dung-final.png"
            />
            <img
              className="absolute w-[242px] h-[302px] top-[90px] left-[113px] object-cover"
              alt="Elite"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/elite-1.png"
            />
          </div>

          <div className="absolute w-[512px] h-[693px] top-[2082px] left-[1244px] bg-white rounded-[20px]">
            <img
              className="absolute w-[466px] h-[438px] top-[22px] left-[23px] object-cover rounded-[20px]"
              alt="Rectangle"
              src={serviceCards[2].image}
            />
            <div className="absolute w-[514px] top-[486px] left-0 [font-family:'Montserrat'] font-bold text-[#2239bb] text-[32px] text-center tracking-[-0.96px] leading-[normal]">
              {serviceCards[2].title}
            </div>
            <div className="absolute w-[466px] top-[556px] text-left left-[23px] [font-family:'Montserrat'] font-normal text-[#333333] text-base tracking-[0] leading-[normal]">
              {serviceCards[2].description}
              <br />
              {serviceCards[2].description2}
            </div>
            <Button
              className="absolute w-[83px] h-5 top-[646px] left-[23px] p-0 flex items-center gap-2 text-[#333333]"
              style={{
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: "16px",
                padding: 0,
              }}
            >
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-base">
                Chi tiết
              </span>
              <ChevronRightIcon className="h-4 w-4 text-white bg-[#2239bb] rounded-full" />
            </Button>
          </div>

          {/* Terms and Conditions Section */}
          <div className="absolute w-[878px] top-[2871px] left-[520px] [font-family:'Montserrat',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[normal]">
            ĐIỀU KHOẢN &amp; ĐIỀU KIỆN CHUNG
          </div>

          <Button
            className="absolute w-[182px] h-[42px] top-[2956px] left-[869px] bg-[100%_100%] flex items-center justify-center"
            style={{
              background:
                "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
              backgroundSize: "100% 100%",
              border: "none",
              boxShadow: "none",
              color: "white",
              fontSize: "16px",
              padding: 0,
              outline: "none",
            }}
          >
            <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-base">
              Xem thêm
            </span>
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </Button>
        </div>
        <img
          className="w-[242.95px] h-[242.95px] top-[3105px] left-[1568px] absolute object-cover rotate-[42.66deg]"
          alt="Qu"
          src="https://c.animaapp.com/mc1e20wi1KPjVw/img/qu--2-2.png"
        />
        {/* Combo Section */}
        <div className="absolute w-[1776px] top-[3349px] left-[71px] [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-5xl text-center tracking-[0] leading-[normal]">
          CHỌN COMBO NGAY - QUÀ TẶNG TRAO TAY
        </div>

        <div className="absolute w-[1116px] top-[3420px] left-[402px] [font-family:'Montserrat',Helvetica] font-medium text-[#54a4ff] text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          NHẬN NGAY TỚI 30.000 QUÀ TẶNG KHI SỬ DỤNG COMBO DỊCH VỤ
        </div>

        {/* Combo Cards */}
        <Card className="absolute w-[512px] h-[653px] top-[3544px] left-[162px] bg-white rounded-[20px] shadow-none">
          <CardContent className="p-0">
            <img
              className="w-[463px] h-[413px] mt-[21px] mx-auto object-cover rounded-[20px]"
              alt="Rectangle"
              src={comboCards[0].image}
            />
            <div className="w-[497px] mt-[36px] [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-[32px] text-center tracking-[-0.96px] leading-[normal]">
              {comboCards[0].title}
            </div>
            <div className="w-[466px] mt-[20px] h-[54px] mx-auto text-left [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-base tracking-[0] leading-[normal]">
              {comboCards[0].description}
            </div>
            <Button
              className="mt-[34.84px] ml-[23px] p-0 flex items-center gap-2 text-left no-underline"
              style={{
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: "16px",
                padding: 0,
              }}
            >
              <span
                className="[font-family:'Montserrat',Helvetica] font-normal text-base "
                style={{ textDecoration: "none" }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon className="h-4 w-4 text-white bg-[#2239bb] rounded-full" />
            </Button>
          </CardContent>
        </Card>

        <Card className="absolute w-[512px] h-[653px] top-[3544px] left-[703px] bg-white rounded-[20px] shadow-none">
          <CardContent className="p-0">
            <img
              className="w-[466px] h-[413px] mt-[21px] mx-auto object-cover rounded-[20px]"
              alt="Rectangle"
              src={comboCards[1].image}
            />
            <div className="w-[514px] mt-[36px] [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-[32px] text-center tracking-[-0.96px] leading-[normal]">
              {comboCards[1].title}
            </div>
            <div className="w-[466px] mt-[20px] h-[54px] mx-auto text-left [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-base tracking-[0] leading-[normal]">
              {comboCards[1].description}
            </div>
            <Button
              className="mt-[34.84px] ml-[23px] p-0 flex items-center gap-2 text-left no-underline"
              style={{
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: "16px",
                padding: 0,
              }}
            >
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-base ">
                Chi tiết
              </span>
              <ChevronRightIcon className="h-4 w-4 text-white bg-[#2239bb] rounded-full" />
            </Button>
          </CardContent>
        </Card>

        <Card className="absolute w-[512px] h-[653px] top-[3544px] left-[1244px] bg-white rounded-[20px] shadow-none">
          <CardContent className="p-0">
            <img
              className="w-[466px] h-[413px] mt-[21px] mx-auto object-cover rounded-[20px]"
              alt="Rectangle"
              src={comboCards[2].image}
            />
            <div className="w-[514px] mt-[36px] [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-[32px] text-center tracking-[-0.96px] leading-[normal]">
              {comboCards[2].title}
            </div>
            <div className="w-[466px] mt-[20px] mx-auto h-[54px] text-left [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-base tracking-[0] leading-[normal]">
              {comboCards[2].description}
            </div>
            <Button
              className="mt-[34.84px] ml-[23px] p-0 flex items-center gap-2 text-left no-underline"
              style={{
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: "16px",
                padding: 0,
                marginBottom: "20px",
              }}
            >
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-base ">
                Chi tiết
              </span>
              <ChevronRightIcon className="h-4 w-4 text-white bg-[#2239bb] rounded-full" />
            </Button>
          </CardContent>
        </Card>

        {/* Check-in Section */}
        <div
          className="absolute w-[1920px] h-[1080px] top-[4336px] left-0 "
          style={{
            background:
              "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
          }}
        >
          <div className="relative w-[1551px] h-[869px] top-[74px] left-[185px]">
            <div className="absolute w-[1116px] h-[118px] top-0 left-[217px]">
              <div className="absolute w-[932px] top-0 left-[92px] [font-family:'Montserrat',Helvetica] font-bold text-[#00e5ff] text-5xl text-center tracking-[0] leading-[normal]">
                CHỤP CHECK-IN - NHẬN QUÀ XINH
              </div>

              <div className="absolute w-[1116px] top-20 left-0 [font-family:'Montserrat',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                TỚI KIENLONGBANK LÀ CÓ QUÀ!
              </div>
            </div>

            <div className="absolute w-[866px] top-[134px] left-[342px] [font-family:'Montserrat',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
              {" "}
              Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành
              tặng 01 phần quà theo sở thích khi Khách hàng&nbsp;&nbsp;chụp hình
              check-in và chia sẻ hình lên mạng xã hội để chế độ công khai để
              nhận quà.
            </div>

            {/* Check-in Images */}
            <img
              className="absolute w-[463px] h-[413px] top-[262px] left-0 object-cover"
              alt="Rectangle"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-50.png"
            />

            <img
              className="absolute w-[463px] h-[413px] top-[262px] left-[541px] object-cover"
              alt="Rectangle"
              src="https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-51.png"
            />

            <div className="absolute w-[463px] h-[413px] top-[262px] left-[1082px] bg-[#d9d9d9] rounded-[20px] bg-[url(https://c.animaapp.com/mc1e20wi1KPjVw/img/rectangle-57.png)] bg-cover bg-[50%_50%]" />

            {/* Check-in Stats */}
            {checkInStats.map((stat, index) => (
              <div
                key={index}
                className="flex w-[322px] h-[178px] gap-4 top-[691px] left-[70px] flex-col items-center absolute"
                style={{ left: `${70 + index * 542}px` }}
              >
                <div
                  className="relative self-stretch h-[112.43px] mt-[-1.00px] bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] text-transparent text-center tracking-[0] leading-[normal] whitespace-nowrap"
                  style={{
                    fontSize: "96px",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                  }}
                >
                  {stat.count}
                </div>

                <div className="relative self-stretch h-[17.96px] [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anniversary Promotion Section */}
        <div className="absolute w-[1776px] top-[5489px] left-[71px] [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-5xl text-center tracking-[0] leading-[normal]">
          VÔ VÀN ƯU ĐÃI MỪNG SINH NHẬT 30 NĂM
        </div>

        {/* Promotion Carousel */}
        <div className="absolute w-[1699px] h-[463px] top-[5733px] left-[111px]">
          <div className="relative w-[1549px] h-[463px] overflow-hidden mx-auto">
            <div
              className="flex gap-[80px]"
              style={{
                width: `${
                  extendedImages.length * 463 + (extendedImages.length - 1) * 80
                }px`,
                transform: `translateX(-${currentIndex * (463 + 80)}px)`,
                transition: isTransitioning ? "transform 0.3s" : "none",
              }}
            >
              {extendedImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`img-${index}`}
                  className="w-[463px] h-[463px] object-cover rounded-[20px]"
                />
              ))}
            </div>
          </div>
          {/* Nút chuyển trái/phải */}
          <div className="absolute top-[216px] left-0 w-full flex justify-between px-[20px]">
            <Button
              onClick={handlePrev}
              className="bg-white h-[32px] w-[32px] rounded-full flex items-center justify-center"
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                border: 0,
                outline: "none",
                padding: 0,
                boxShadow: "0 0 0 0 ",
              }}
            >
              <MdOutlineArrowBackIos size={16} style={{ color: "#293546" }} />
            </Button>
            <Button
              onClick={handleNext}
              className="bg-white h-[32px] w-[32px] rounded-full flex items-center justify-center"
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                border: 0,
                outline: "none",
                padding: 0,
                boxShadow: "0 0 0 0 ",
              }}
            >
              <MdArrowForwardIos size={16} style={{ color: "#293546" }} />
            </Button>
          </div>
          {/* <Button
            variant="link"
            className="absolute w-[83px] h-5 top-[420px] left-[97px] p-0 flex items-center gap-2 text-white"
          >
            <span className="[font-family:'Montserrat',Helvetica] font-normal text-base">
              Chi tiết
            </span>
            <ChevronRightIcon className="h-4 w-4 text-white bg-[#2239bb] rounded-full" />
          </Button> */}
        </div>

        {/* Contact Form Section */}
        <div
          className="absolute w-[1920px] h-[1080px] top-[6480px] left-0 "
          style={{
            background:
              "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
          }}
        >
          <div className="absolute w-[1116px] h-[118px] top-[92px] left-[402px]">
            <div className="absolute w-[932px] top-0 left-[92px] [font-family:'Montserrat',Helvetica] font-bold text-[#00e5ff] text-5xl text-center tracking-[0] leading-[normal]">
              BẠN CÒN CÂU HỎI?
            </div>

            <div className="absolute w-[1116px] top-20 left-0 [font-family:'Montserrat',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              HÃY GỬI THÔNG TIN ĐỂ ĐƯỢC LIÊN HỆ TƯ VẤN
            </div>
          </div>

          <img
            className="absolute w-[795px] h-[679px] top-[401px] left-[118px] object-cover"
            alt="Element"
            src="https://c.animaapp.com/mc1e20wi1KPjVw/img/12-1.png"
          />

          <div className="flex flex-col w-[756px] h-[109px] items-start gap-1.5 absolute top-[350px] left-[1000px]">
            <div className="text-montserrat relative self-stretch mt-[-1.00px] font-text-sm-font-medium text-left font-[number:var(--text-sm-font-medium-font-weight)] text-globalgraywhite text-[14px] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
              Họ và tên
            </div>

            <Input
              className="h-10 bg-white border border-gray-300 placeholder-gray-500"
              placeholder="Nhập họ và tên"
            />
          </div>

          <div className="top-[459px] flex flex-col w-[756px] h-[109px] items-start gap-1.5 absolute left-[1000px]">
            <div className="relative self-stretch mt-[-1.00px] font-text-sm-font-medium text-left font-[number:var(--text-sm-font-medium-font-weight)] text-globalgraywhite text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
              Email
            </div>
            <Input
              className="h-10 bg-white border border-gray-300 placeholder-gray-500"
              placeholder="Nhập địa chỉ email"
            />
          </div>

          <div className="top-[568px] flex flex-col w-[756px] items-start gap-1.5 absolute left-[1000px]">
            <div className="relative self-stretch mt-[-1.00px] font-text-sm-font-medium text-left font-[number:var(--text-sm-font-medium-font-weight)] text-globalgraywhite text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
              Bạn cần hỗ trợ vấn đề gì?
            </div>
            <Textarea
              className="w-[756px] h-[206px] bg-white border border-gray-300 rounded-[8px] placeholder-gray-500"
              placeholder="Nhập nội dung"
            />
          </div>

          <Button
            className="absolute w-[182px] h-[42px] top-[848px] left-[1574px] bg-[100%_100%] flex items-center justify-center"
            style={{
              background:
                " linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
              outline: "none",
              border: "none",
            }}
          >
            <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-base">
              Gửi thông tin
            </span>
            <div className="h-[25px] w-[25px] bg-[#2239bb] rounded-full flex items-center justify-center">
              <ChevronRightIcon className="h-5 w-5 text-white" />
            </div>
          </Button>
        </div>

        {/* Footer */}
        <footer className="absolute w-[1916px] text-left h-[640px] top-[8000px] left-0.5 bg-transparent">
          <div className="absolute w-[1636px] h-[427px] top-[45px] left-[165px]">
            <div className="absolute w-[499px] h-[27px] top-6 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#333333] text-[21.5px] tracking-[0] leading-[25.8px] whitespace-nowrap">
              Ngân hàng TMCP Kiên Long (KienlongBank)
            </div>

            <div className="absolute w-[775px] h-[181px] top-[70px] left-0">
              <div className="absolute w-[688px] h-[22px] top-[3px] left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px] whitespace-nowrap">
                <span className="font-semibold">Hội sở: </span>
                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px]">
                  40-42-44 Phạm Hồng Thái, P.Vĩnh Thanh Vân, Tp.Rạch Giá, T.Kiên
                  Giang
                </span>
              </div>

              <div className="absolute w-[422px] h-[22px] top-[33px] left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px] whitespace-nowrap">
                <span className="font-semibold">Điện thoại:</span>
                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px]">
                  {" "}
                  (0297) 3869 950 hoặc (028) 3933 3393
                </span>
              </div>

              <div className="absolute w-[462px] text-left h-[21px] top-[63px] left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px] whitespace-nowrap">
                <span className="font-semibold">
                  Hotline gọi trong lãnh thổ Việt Nam:
                </span>
                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px]">
                  {" "}
                  1900 6929
                </span>
              </div>

              <div className="absolute w-[520px] h-[22px] top-[93px] left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px] whitespace-nowrap">
                <span className="font-semibold">
                  Hotline gọi từ nước ngoài về Việt Nam:{" "}
                </span>
                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px]">
                  (+84) 287309 6929
                </span>
              </div>

              <div className="absolute w-[218px] h-[17px] top-[123px] left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px] whitespace-nowrap">
                <span className="font-semibold">Mã SWIFT: </span>
                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px]">
                  KLBKVNVX
                </span>
              </div>

              <div className="absolute w-[775px] h-[30px] top-[151px] left-0">
                <div className="absolute w-[730px] h-[22px] -top-px left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px] whitespace-nowrap">
                  <span className="font-semibold">Email: </span>
                  <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[17.2px] tracking-[0] leading-[30.1px]">
                    kienlong@kienlongbank.com hoặc
                    chamsockhachhang@kienlongbank.com
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute w-[366.9px] h-[427px] top-[-143px] left-[1221px]">
              {/* <div className="absolute w-px h-[26px] top-[118px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#333333] text-[20.1px] tracking-[0] leading-[30.1px] whitespace-nowrap">
                {""}
              </div> */}

              <div className="absolute w-[366.9px] h-[241px] top-[186px] left-0">
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

                  <div className="flex flex-row gap-[0.7vw] mb-[0.7vw]">
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

          <div className="absolute w-[1593px] h-[93px] top-[547px] left-[165px] border-t-[1.43px] [border-top-style:solid] border-[#e6e5e5]">
            <div className="relative w-[1636px] h-[52px] top-[22px] left-[-22px]">
              <div className="absolute w-[498px] h-12 top-[0px] left-[22px] [font-family:'Montserrat',Helvetica] font-medium text-[#333333] text-[17.2px] tracking-[0] leading-[25.8px]">
                Copyright © 2018 Kienlongbank. All right reserved.
              </div>
            </div>
          </div>
        </footer>

        {/* Social Links */}
        <div className="absolute w-[181px] h-[27px] top-[7720px] left-[1484px] [font-family:'Montserrat',Helvetica] font-bold text-[#333333] text-[23px] text-center tracking-[0] leading-[27.6px] whitespace-nowrap">
          Liên kết nhanh
        </div>

        <div className="absolute w-[366px] h-20 top-[7759px] left-[1390px]">
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
              <MdOutlinePhoneIphone
                style={{ width: "1.7vw", height: "1.7vw" }}
              />
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

        <div className="inline-flex h-[90px] justify-around gap-[14.35px] top-[7696px] left-[149px] flex-col items-center absolute">
          <img
            className="relative w-[365.92px] h-[68.61px]"
            alt="Logo kienlongbank"
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};
