import React, { type JSX } from "react";
import { Button } from "../../components/ui/button.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";
import { Input } from "../../components/ui/input.tsx";
import { Textarea } from "../../components/ui/textarea.tsx";
import bgMobile from "../../assets/bgMobile.jpg";
import logo from "../../assets/logoKlbMobile.png";
import bg2 from "../../assets/bg2.png";
import coin from "../../assets/coin.png";
import car from "../../assets/car.png";
import motorbike from "../../assets/motobike.png";
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

// Gift data for check-in section
const checkInGifts = [
  {
    image: "https://c.animaapp.com/mc1lkipkKgkPq8/img/rectangle-42.png",
    title: "Kiloba Dễ Thương",
    count: "6000",
    top: "252px",
    left: "5px",
    titleTop: "337px",
    titleLeft: "217px",
    countTop: "284px",
    countLeft: "217px",
    titleAlign: "left",
  },
  {
    image: "https://c.animaapp.com/mc1lkipkKgkPq8/img/rectangle-43.png",
    title: "Cốc Sứ",
    count: "7000",
    top: "417px",
    left: "184px",
    titleTop: "502px",
    titleLeft: "0px",
    countTop: "449px",
    countLeft: "37px",
    titleAlign: "right",
  },
  {
    image: "https://c.animaapp.com/mc1lkipkKgkPq8/img/rectangle-44.png",
    title: "Hộp Inochi",
    count: "7000",
    top: "582px",
    left: "5px",
    titleTop: "667px",
    titleLeft: "217px",
    countTop: "614px",
    countLeft: "217px",
    titleAlign: "left",
  },
];

// Contact info data
const contactInfo = [
  {
    label: "Hội sở:",
    value:
      "40-42-44 Phạm Hồng Thái, P.Vĩnh Thanh Vân, Tp.Rạch Giá, T.Kiên Giang",
  },
  {
    label: "Điện thoại:",
    value: "(0297) 3869 950 hoặc (028) 3933 3393",
  },
  {
    label: "Hotline gọi trong lãnh thổ Việt Nam:",
    value: "1900 6929",
  },
  {
    label: "Hotline gọi từ nước ngoài về Việt Nam:",
    value: "(+84) 287309 6929",
  },
  {
    label: "Mã SWIFT:",
    value: "KLBKVNVX",
  },
  {
    label: "Email:",
    value: "kienlong@kienlongbank.com hoặc chamsockhachhang@kienlongbank.com",
  },
];

export const LandingPageMobile = (): JSX.Element => {
  return (
    <div
      className="bg-[#f8f8f8] flex flex-row justify-center w-full"
      data-model-id="4094:398"
    >
      <div className="bg-[#f8f8f8] overflow-hidden w-[375px] h-[6496px] relative">
        {/* Header Section */}
        <div className="absolute w-[546px] h-[812px] top-0 left-0">
          <div className="absolute w-[546px] h-[127px] top-[163px] left-0">
            <div className="h-[127px]">
              <div className="w-[546px] h-[127px]">
                <div className="relative h-[127px]">
                  <div className="absolute w-[546px] h-[111px] top-4 left-0">
                    <div className="relative h-[111px]">
                      <img
                        className="w-[546px] h-[91px] top-5 absolute left-0"
                        alt="Vector"
                        src="https://c.animaapp.com/mc1lkipkKgkPq8/img/vector-3.svg"
                      />
                      <div className="absolute w-[546px] h-[91px] top-0 left-0 bg-[url(https://c.animaapp.com/mc1lkipkKgkPq8/img/vector-1.svg)] bg-[100%_100%]">
                        <img
                          className="w-[375px] h-[91px] absolute top-0 left-0"
                          alt="Clip path group"
                          src="https://c.animaapp.com/mc1lkipkKgkPq8/img/clip-path-group-2.png"
                        />
                      </div>
                      <div className="absolute w-[546px] h-[91px] top-0 left-0 bg-[url(https://c.animaapp.com/mc1lkipkKgkPq8/img/vector.svg)] bg-[100%_100%]">
                        <img
                          className="w-[375px] h-[91px] absolute top-0 left-0"
                          alt="Clip path group"
                          src="https://c.animaapp.com/mc1lkipkKgkPq8/img/clip-path-group-3.png"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute w-[324px] h-[91px] top-0 left-[51px]"
                    alt="Group"
                    src="https://c.animaapp.com/mc1lkipkKgkPq8/img/group-1.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[450px] h-[268px] top-0 left-[18px]">
            <div className="relative w-[357px] h-[268px]">
              {[0, 1, 2, 3, 4].map((index) => (
                <img
                  key={index}
                  className={`absolute w-[${
                    306 - index * 36
                  }px] h-[204px] top-${index * 4} left-${
                    index * 9
                  } object-cover`}
                  alt="Element"
                  src="https://c.animaapp.com/mc1lkipkKgkPq8/img/1-5-2.png"
                />
              ))}
            </div>
            ff
          </div>

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
          <div className="absolute w-10 h-10 top-[13px] left-[13px] bg-white rounded-[5px]">
            <div className="absolute w-6 h-[3px] top-[25px] left-[21px] bg-[#1d29af] rounded-sm" />
            <div className="absolute w-6 h-[3px] top-8 left-[21px] bg-[#1d29af] rounded-sm" />
            <div className="absolute w-6 h-[3px] top-[39px] left-[21px] bg-[#1d29af] rounded-sm" />
          </div>
        </div>

        {/* Main Prize Section */}
        <div className="absolute w-[2886px] h-[1705px] top-[812px] left-0">
          <img
            className="h-[1624px] left-0 absolute w-[2886px] top-0 left-[-1651px]"
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
            &amp; ĐIỀU KIỆN CHUNG
          </div>

          <img
            className="w-[93px] h-[152px] top-[790px] left-0 absolute object-cover"
            alt="Qu"
            src="https://c.animaapp.com/mc1lkipkKgkPq8/img/qu--2-2.png"
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
            className="w-[116px] h-[189px] top-[1516px] left-[259px] absolute object-cover"
            alt="Qu"
            src="https://c.animaapp.com/mc1lkipkKgkPq8/img/qu--2-2.png"
          />
        </div>

        {/* Combo Promotion Section */}
        <div className="absolute w-[375px] h-[99px] top-[2529px] left-0">
          <div className="absolute w-[375px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-xl text-center tracking-[0] leading-[normal]">
            CHỌN COMBO NGAY
            <br />
            QUÀ TẶNG TRAO TAY
          </div>
          <div className="absolute w-[374px] top-[61px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#54a4ff] text-[10px] text-center tracking-[0] leading-[normal]">
            NHẬN NGAY TỚI 30.000 QUÀ TẶNG
            <br />
            KHI SỬ DỤNG COMBO DỊCH VỤ
          </div>
        </div>

        {/* Second Savings Card */}
        <Card className="absolute w-[345px] h-[467px] top-[2668px] left-[17px] bg-white rounded-[10px] border-none">
          <CardContent className="p-0">
            <img
              className="w-[315px] h-[295px] mt-[15px] mx-auto object-cover"
              alt="Savings promotion"
              src="https://c.animaapp.com/mc1lkipkKgkPq8/img/rectangle-41.png"
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

        {/* Pagination Dots */}
        <div className="absolute w-[68px] h-3 top-[3160px] left-[156px] flex space-x-4">
          <div className="bg-[#0ccbef] w-3 h-3 rounded-md" />
          <div className="bg-[#d9d9d9] w-3 h-3 rounded-md" />
          <div className="bg-[#d9d9d9] w-3 h-3 rounded-md" />
        </div>

        {/* Check-in Section */}
        <div className="absolute w-[389px] h-[813px] top-[3248px] left-[-7px]">
          <img
            className="h-[813px] left-[7px] absolute w-[375px] top-0"
            alt="Background"
            src="https://c.animaapp.com/mc1lkipkKgkPq8/img/bg-3.png"
          />

          <div className="absolute w-[375px] top-[78px] left-[7px] [font-family:'Montserrat',Helvetica] font-bold text-[#00e5ff] text-xl text-center tracking-[0] leading-[normal]">
            CHỤP CHECK-IN
            <br />
            NHẬN QUÀ XINH
          </div>

          <div className="absolute w-[375px] top-[134px] left-[7px] [font-family:'Montserrat',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[normal]">
            TỚI KIENLONGBANK LÀ CÓ QUÀ!
          </div>

          <div className="absolute w-[349px] top-40 left-5 [font-family:'Montserrat',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[normal]">
            {" "}
            Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành
            tặng 01 phần quà theo sở thích khi Khách hàng&nbsp;&nbsp;chụp hình
            check-in và chia sẻ hình lên mạng xã hội để chế độ công khai để nhận
            quà.
          </div>

          {/* Check-in Gifts */}
          {checkInGifts.map((gift, index) => (
            <React.Fragment key={index}>
              <img
                className={`absolute w-[185px] h-[155px] top-[${gift.top}] left-[${gift.left}]`}
                alt="Gift item"
                src={gift.image}
              />
              <div
                className={`absolute w-[172px] top-[${gift.titleTop}] left-[${
                  gift.titleLeft
                }] [font-family:'Montserrat',Helvetica] font-bold text-white text-sm ${
                  gift.titleAlign === "right" ? "text-right" : ""
                } tracking-[0] leading-[normal]`}
              >
                {gift.title}
              </div>
              <div
                className={`w-[135px] top-[${gift.countTop}] left-[${
                  gift.countLeft
                }] text-5xl ${
                  gift.titleAlign === "right" ? "text-right" : ""
                } absolute bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent tracking-[0] leading-[normal]`}
              >
                {gift.count}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Anniversary Promotion Section */}
        <div className="absolute w-[375px] top-[4126px] left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#2239bb] text-xl text-center tracking-[0] leading-[normal]">
          VÔ VÀN ƯU ĐÃI
          <br />
          MỪNG SINH NHẬT 30 NĂM
        </div>

        <div className="absolute w-[374px] top-[4187px] left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#54a4ff] text-[10px] text-center tracking-[0] leading-[normal]">
          VAY VỐN
        </div>

        <div className="absolute w-[350px] h-[530px] top-[4257px] left-[13px] bg-[url(https://c.animaapp.com/mc1lkipkKgkPq8/img/rectangle-53.png)] bg-[100%_100%]">
          <div className="absolute w-[349px] h-[284px] top-[246px] left-0 rounded-[0px_0px_10px_10px] bg-[linear-gradient(0deg,rgba(8,15,104,1)_0%,rgba(25,160,234,0)_100%)]" />

          <div className="absolute w-[45px] top-[500px] left-[17px] [font-family:'Montserrat',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            Chi tiết
          </div>

          <div className="top-[503px] left-16 absolute w-3 h-3 bg-[#2239bb] rounded-[6.07px] -rotate-180">
            <img
              className="absolute w-[3px] h-1.5 top-[3px] left-1 rotate-180"
              alt="Layer"
              src="https://c.animaapp.com/mc1lkipkKgkPq8/img/layer-1-3.svg"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute w-[68px] h-3 top-[4824px] left-[156px] flex space-x-4">
          <div className="bg-[#0ccbef] w-3 h-3 rounded-md" />
          <div className="bg-[#d9d9d9] w-3 h-3 rounded-md" />
          <div className="bg-[#d9d9d9] w-3 h-3 rounded-md" />
        </div>

        {/* Contact Form Section */}
        <div className="absolute w-[1920px] h-[813px] top-[4872px] left-[-190px]">
          <div className="absolute w-[1920px] h-[812px] top-0 left-0 [background:conic-gradient(from_161deg_at_30%_52%,rgba(13,5,115,1)_0%,rgba(139,24,162,1)_29%,rgba(40,135,226,1)_53%,rgba(10,30,120,1)_79%,rgba(41,11,142,1)_100%)]" />

          <img
            className="absolute w-[323px] h-[275px] top-[538px] left-56 object-cover"
            alt="Element"
            src="https://c.animaapp.com/mc1lkipkKgkPq8/img/12-1.png"
          />

          <div className="absolute w-[375px] top-[55px] left-[190px] [font-family:'Montserrat',Helvetica] font-bold text-[#00e5ff] text-xl text-center tracking-[0] leading-[normal]">
            BẠN CÒN CÂU HỎI?
          </div>

          <div className="absolute w-[375px] top-[88px] left-[190px] [font-family:'Montserrat',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[normal]">
            HÃY GỬI THÔNG TIN ĐỂ ĐƯỢC LIÊN HỆ TƯ VẤN
          </div>

          {/* Contact Form */}
          <div className="flex flex-col w-[349px] h-[109px] items-start gap-1.5 absolute top-[142px] left-[203px]">
            <div className="relative self-stretch mt-[-1.00px] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-globalgraywhite text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
              Họ và tên
            </div>
            <Input
              className="h-10 bg-inputtext-fieldbackground-default rounded-lg border border-solid border-gray-300"
              placeholder="Nhập họ và tên"
            />
          </div>

          <div className="top-[231px] flex flex-col w-[349px] h-[109px] items-start gap-1.5 absolute left-[203px]">
            <div className="relative self-stretch mt-[-1.00px] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-globalgraywhite text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
              Email
            </div>
            <Input
              className="h-10 bg-inputtext-fieldbackground-default rounded-lg border border-solid border-gray-300"
              placeholder="Nhập địa chỉ email"
            />
          </div>

          <div className="top-80 flex flex-col w-[349px] h-[109px] items-start gap-1.5 absolute left-[203px]">
            <div className="relative self-stretch mt-[-1.00px] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-globalgraywhite text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
              Bạn cần hỗ trợ vấn đề gì?
            </div>
            <Textarea
              className="bg-inputtext-fieldbackground-default rounded-lg border border-solid border-gray-300 mb-[-21.00px]"
              placeholder="Nhập nội dung"
            />
          </div>

          <Button className="absolute w-[150px] h-[35px] top-[482px] left-[311px] bg-[url(https://c.animaapp.com/mc1lkipkKgkPq8/img/layer-1-1.svg)] bg-[100%_100%] p-0">
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
        </div>

        {/* Footer Section */}
        <div className="absolute w-[366px] h-[374px] top-[5930px] left-[5px]">
          <div className="absolute w-[366px] h-[367px] top-[7px] left-0">
            <img
              className="absolute w-[190px] h-3 top-[153px] left-[91px]"
              alt="Kienlongbank mobile"
              src="https://c.animaapp.com/mc1lkipkKgkPq8/img/kienlongbank-mobile-banking.png"
            />
            <img
              className="absolute w-[366px] h-[298px] top-[179px] left-0"
              alt="P"
              src="https://c.animaapp.com/mc1lkipkKgkPq8/img/p.png"
            />
          </div>

          <img
            className="absolute w-[177px] h-[33px] top-[-214px] left-[93px]"
            alt="Logo kienlongbank"
            src="https://c.animaapp.com/mc1lkipkKgkPq8/img/logo-kienlongbank-png.png"
          />

          <div className="absolute w-[350px] h-[27px] top-[-138px] left-[-2px] [font-family:'Montserrat',Helvetica] font-bold text-[#333333] text-xs tracking-[0] leading-[25.8px] whitespace-nowrap">
            Ngân hàng TMCP Kiên Long (KienlongBank)
          </div>

          {/* Contact Information */}
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`absolute w-[350px] h-[30px] top-[${
                index < 3 ? 5826 + index * 37 - 5930 : index * 37 - 5930
              }px] left-${
                index < 3 ? 3 : 7
              }px [font-family:'Montserrat',Helvetica] font-normal text-[#333333] text-[10px] tracking-[0] leading-[10px]`}
            >
              <span className="font-semibold leading-[30.1px]">
                {info.label}{" "}
              </span>
              <span className="leading-[30.1px]">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
