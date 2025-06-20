import React from "react";

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

const CheckInSectionMobile = () => (
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
          className={`absolute w-[172px] top-[${gift.titleTop}] left-[${gift.titleLeft}
            ] [font-family:'Montserrat',Helvetica] font-bold text-white text-sm ${gift.titleAlign === "right" ? "text-right" : ""
            } tracking-[0] leading-[normal]`}
        >
          {gift.title}
        </div>
        <div
          className={`w-[135px] top-[${gift.countTop}] left-[${gift.countLeft}
            ] text-5xl ${gift.titleAlign === "right" ? "text-right" : ""
            } absolute bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent tracking-[0] leading-[normal]`}
        >
          {gift.count}
        </div>
      </React.Fragment>
    ))}
  </div>
);

export default CheckInSectionMobile; 