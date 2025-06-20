import { type JSX, useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import bgMobile from "../../assets/bgMobile.jpg";
import logo from "../../assets/logoKlbMobile.png";
import bg2 from "../../assets/bg2Mobile.png";
import coin from "../../assets/coin.png";
import giftbox from "../../assets/giftbox.png";
import car from "../../assets/car.png";
import motorbike from "../../assets/motobike.png";
import { serviceCards, comboCards } from "../LandingPageDesktop/data";
import FooterMobile from "../../components/ui/mobile/FooterMobile";
import ComboSectionMobile from "../../components/ui/mobile/ComboSectionMobile";
import ContactFormSectionMobile from "../../components/ui/mobile/ContactFormSectionMobile";
import AnniversaryPromotionSectionMobile from "../../components/ui/mobile/AnniversaryPromotionSectionMobile";
import CheckInSectionMobile from "../../components/ui/mobile/CheckInSectionMobile";
// Prize data for mapping
const specialPrizes = [
  {
    count: "03",
    title: "GIẢI ĐẶC BIỆT",
    description: "XE VINFAST VF3",
    top: "116px",
    left: "3px",
  },
  {
    count: "10",
    title: "GIẢI NHẤT",
    description: "XE ĐIỆN ICON E",
    top: "314px",
    left: "60px",
  },
  {
    count: "30",
    title: "GIẢI NHÌ",
    description: "10 TRIỆU ĐỒNG/GIẢI",
    top: "543px",
    left: "131px",
  },
  {
    count: "60",
    title: "GIẢI BA",
    description: "5 TRIỆU ĐỒNG/GIẢI",
    top: "650px",
    left: "19px",
  },
  {
    count: "300",
    title: "GIẢI MAY MẮN",
    description: "3 TRIỆU ĐỒNG/GIẢI",
    top: "650px",
    left: "218px",
  },
];

export const LandingPageMobile = (): JSX.Element => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll handler để cập nhật chấm tròn
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = 340; // phải khớp với width card bên dưới
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(idx % serviceCards.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const cardWidth = 340;
      let next = activeIndex + 1;
      if (next >= serviceCards.length) next = 0;
      sliderRef.current.scrollTo({
        left: next * cardWidth,
        behavior: "smooth",
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      className="bg-[#f8f8f8] flex flex-row justify-center w-full"
      data-model-id="4094:398"
    >
      <div className="bg-[#f8f8f8] overflow-hidden w-[375px] h-[6496px] relative">
        {/* Header Section */}
        <div className="absolute w-[546px] h-[812px] top-0 left-0">
          <img
            className="absolute w-[375px] h-[812px] top-0 left-0 object-cover"
            alt="Mobile"
            src={bgMobile}
          />

          <img
            className="absolute w-[214px] h-[38px] top-3 left-20 object-cover"
            alt="KienlongBank Logo"
            src={logo}
          />

          {/* Hamburger Menu */}
          <div className="absolute w-10 h-10 top-[13px] left-[13px] bg-white rounded-[5px]"></div>
        </div>

        {/* Main Prize Section */}
        <div className="absolute w-[375px] h-[1624px] top-[812px] left-0">
          <img
            className="h-[1624px] left-0 absolute w-[375px] top-0"
            alt="Background"
            src={bg2}
            style={{
              objectFit: "cover",
            }}
          />

          <img
            className="absolute w-[375px] h-[425px] top-[802px] left-0 object-cover"
            alt="Flag ribbon"
            src="https://c.animaapp.com/mc1lkipkKgkPq8/img/flag-ribbon.png"
          />

          {/* Prize Counters */}
          {specialPrizes.map((prize, index) => (
            <div
              key={index}
              className={`absolute w-[122px] h-[107px] top-[${prize.top}] left-[${prize.left}]`}
            >
              <div className="relative w-[116px] h-[107px]">
                <div className="absolute w-[116px] top-[66px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[normal]">
                  {prize.title}
                </div>
                <div className="absolute w-[116px] top-[84px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[normal]">
                  {prize.description}
                </div>
                <div className="absolute w-[108px] top-0 left-0 bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-[64px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {prize.count}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute w-[374px] top-[1453px] left-px [font-family:'Montserrat',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[normal]">
            ĐIỀU KHOẢN
            <br />
            ĐIỀU KIỆN CHUNG
          </div>

          <img
            className="w-[152px] h-[152px] top-[790px] left-[-59px] absolute object-cover"
            alt="gift-box"
            src={giftbox}
          />

          <Button className="absolute w-[150px] h-[35px] top-[1528px] left-[113px] bg-[url(https://c.animaapp.com/mc1lkipkKgkPq8/img/layer-1-1.svg)] bg-[100%_100%] p-0">
            <div className="relative w-28 h-[21px] top-2 left-[26px]">
              <div className="absolute w-[73px] top-px left-0 [font-family:'Montserrat',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                Xem thêm
              </div>
              <div className="absolute w-[21px] h-[21px] top-0 left-[89px] -rotate-180">
                <div className="relative h-[21px] bg-[#2239bb] rounded-[10.3px]">
                  <img
                    className="absolute w-[5px] h-2.5 top-[5px] left-2"
                    alt="Layer"
                    src="https://c.animaapp.com/mc1lkipkKgkPq8/img/layer-1.svg"
                  />
                </div>
              </div>
            </div>
          </Button>

          {/* Savings Card */}
          <Card className="absolute w-[345px] h-[467px] top-[917px] left-[17px] bg-white rounded-[10px] border-none">
            <CardContent className="p-0">
              <img
                className="w-[315px] h-[295px] mt-[15px] mx-auto object-cover"
                alt="Savings promotion"
                src="https://c.animaapp.com/mc1lkipkKgkPq8/img/rectangle-10.png"
              />
              <div className="w-[345px] mt-[19px] [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-xl text-center tracking-[-0.60px] leading-[normal]">
                GỬI TIẾT KIỆM
              </div>
              <div className="w-[315px] mt-[10px] mx-auto [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-[normal]">
                Gửi mới/Tái tục từ 30 triệu VNĐ, Kỳ hạn từ 6 tháng
                <br />
                Nhận ngay cơ hội quay số!
              </div>
              <div className="w-[61px] h-3.5 mt-[15px] ml-[16px]">
                <div className="absolute w-[45px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                  Chi tiết
                </div>
                <div className="top-0.5 left-[47px] absolute w-3 h-3 bg-[#2239bb] rounded-[6.07px] -rotate-180">
                  <img
                    className="absolute w-[3px] h-1.5 top-[3px] left-1 rotate-180"
                    alt="Layer"
                    src="https://c.animaapp.com/mc1lkipkKgkPq8/img/layer-1-3.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <img
            className="absolute w-[425px] h-[228px] top-[317px] left-[-7px] object-cover"
            alt="Coin copy"
            src={coin}
          />

          {/* Coin Stack Animation */}
          <div className="absolute w-[229px] h-[139px] top-[358px] left-5">
            <div className="relative h-[139px]">
              <div className="absolute w-[229px] h-[53px] top-[86px] left-0">
                <div className="h-[53px]">
                  <div className="w-[229px] h-[53px]">
                    <div className="relative h-[53px]">
                      <img
                        className="absolute w-[184px] h-[38px] top-0 left-[21px]"
                        alt="Group"
                        src="https://c.animaapp.com/mc1lkipkKgkPq8/img/group.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stacked Coins */}
              {[
                { top: 0, left: 38 },
                { top: 17, left: 2 },
              ].map((position, posIndex) => (
                <div
                  key={posIndex}
                  className={`absolute w-[229px] h-[139.01px]  top-[${position.top}px] left-[${position.left}px]`}
                >
                  <div className="relative h-28">
                    <img
                      className={`absolute w-[229px] h-[139.01px] object-contain`}
                      alt="Element"
                      src={motorbike}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Car Prize Display */}
          <div className="absolute w-[230px] h-[110px] top-[151px] left-[132px]">
            <div className="relative h-[110px]">
              <div className="absolute w-[230px] h-[109.92px] top-0 left-0">
                <div className="relative h-[108px]">
                  <img
                    className="absolute w-[230px] h-[109.92px] top-0 left-0 object-contain"
                    alt="Do min"
                    src={car}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[374px] top-[35px] left-px [font-family:'Montserrat',Helvetica] font-bold text-[#00e5ff] text-xl text-center tracking-[0] leading-[normal]">
            QUAY SỐ RINH QUÀ
            <br />
            TRÚNG THƯỞNG THẢ GA
          </div>

          {/* Slider động serviceCards - giống desktop, không có button, có 3 chấm */}
          <div
            className="w-full flex flex-col items-center"
            style={{ margin: "32px 0 0 0" }}
          >
            <div
              ref={sliderRef}
              style={{
                width: 340,
                height: 420,
                overflowX: "auto",
                overflowY: "hidden",
                borderRadius: 20,
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                position: "relative",
                margin: "0 auto",
                display: "flex",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
              }}
              onScroll={handleScroll}
            >
              {serviceCards.map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    width: 340,
                    height: 420,
                    flex: "0 0 340px",
                    scrollSnapAlign: "center",
                    padding: 0,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    position: "relative",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: 320,
                      height: 220,
                      objectFit: "cover",
                      borderRadius: 16,
                      marginTop: 12,
                    }}
                  />
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 20,
                      marginTop: 16,
                      color: "#2239bb",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#333",
                      textAlign: "center",
                      marginTop: 8,
                      fontFamily: "Montserrat",
                    }}
                  >
                    {card.description}
                  </div>
                  {card.description2 && (
                    <div
                      style={{
                        fontSize: 14,
                        color: "#00e5ff",
                        textAlign: "center",
                        marginTop: 4,
                        fontFamily: "Montserrat",
                      }}
                    >
                      {card.description2}
                    </div>
                  )}
                  <button
                    style={{
                      marginTop: 18,
                      background: "none",
                      border: "none",
                      color: "#2239bb",
                      fontWeight: 500,
                      fontSize: 15,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      cursor: "pointer",
                    }}
                  >
                    Chi tiết
                    <span
                      style={{
                        display: "inline-block",
                        width: 20,
                        height: 20,
                        background: "#2239bb",
                        borderRadius: "50%",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "20px",
                        marginLeft: 4,
                        fontSize: 14,
                      }}
                    >
                      →
                    </span>
                  </button>
                </div>
              ))}
            </div>
            {/* Chấm tròn dưới slider */}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {serviceCards.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: activeIndex === i ? "#1976ff" : "#e0e0e0",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute w-[374px] top-[87px] left-px [font-family:'Montserrat',Helvetica] font-bold text-white text-[10px] text-center tracking-[0] leading-[normal]">
            GIAO DỊCH CÀNG NHIỀU – CƠ HỘI TRÚNG QUÀ CÀNG LỚN!
          </div>

          {/* Pagination Dots */}
          <div className="absolute w-[68px] h-3 top-[1409px] left-[156px] flex space-x-4">
            <div className="bg-[#0ccbef] w-3 h-3 rounded-md" />
            <div className="bg-[#d9d9d9] w-3 h-3 rounded-md" />
            <div className="bg-[#d9d9d9] w-3 h-3 rounded-md" />
          </div>

          <img
            className="w-[133.99357254542664px] h-[133.99357254542664px] top-[1515.92px] left-[258.9px] absolute object-cover"
            style={{ transform: "rotate(42.66deg)" }}
            alt="gift-box"
            src={giftbox}
          />
        </div>

        {/* Section Combo */}
        <ComboSectionMobile comboCards={comboCards} />

        {/* Check-in Section */}
        <CheckInSectionMobile />

        {/* Anniversary Promotion Section */}
        <AnniversaryPromotionSectionMobile />

        {/* Contact Form Section */}
        <ContactFormSectionMobile />

        {/* Footer Section */}
        <div className="absolute w-[375px] h-[812px] top-[5684px]">
          <FooterMobile />
        </div>
      </div>
    </div>
  );
};
