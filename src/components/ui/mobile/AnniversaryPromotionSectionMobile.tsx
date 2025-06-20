import React from "react";

const AnniversaryPromotionSectionMobile = () => (
  <>
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
  </>
);

export default AnniversaryPromotionSectionMobile; 