import React from "react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import kiloba from "../../../assets/kiloba.png";
import { ChevronRightIcon } from "lucide-react";
const labelStyle: React.CSSProperties = {
  fontFamily: "Roboto",
  fontWeight: 500,
  color: "#fff",
  fontSize: 14,
  textAlign: "left",
  marginTop: -1,
};

const inputStyle: React.CSSProperties = {
  height: 40,
  width: "100%",
  background: "white",
  borderRadius: 8,
  fontSize: 16,
  paddingLeft: 12,
  color: "black",
  outline: "none",
  boxShadow: "none",
  border: "none",
  fontFamily: "Roboto",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  height: 109,
  background: "white",
  borderRadius: 8,
  fontSize: 16,
  paddingLeft: 12,
  paddingTop: 12,
  color: "black",
  outline: "none",
  boxShadow: "none",
  border: "none",
  resize: "none",
  fontFamily: "Roboto",
};

const ContactFormSectionMobile: React.FC = () => {
  return (
    <div className="absolute w-[375px] h-[812px] top-[4872px] flex flex-col items-center">
      <div
        className="absolute w-[375px] h-[812px] top-0 left-0"
        style={{
          background:
            "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
        }}
      />
      <img
        className="absolute w-[323px] h-[275px] top-[538px] object-cover"
        alt="Element"
        src={kiloba}
      />

      <div
        style={{
          position: "absolute",
          fontFamily: "Montserrat",
          fontWeight: 700,
          color: "#00E5FF",
          fontSize: "20px",
          textAlign: "center",
          top: 55,
          left: 0,
          width: "375px",
          height: "24px",
        }}
      >
        BẠN CÒN CÂU HỎI?
      </div>

      <div className="absolute w-[375px] top-[88px] [font-family:'Montserrat',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[normal]">
        HÃY GỬI THÔNG TIN ĐỂ ĐƯỢC LIÊN HỆ TƯ VẤN
      </div>

      {/* Contact Form */}
      <div className="flex flex-col w-[349px] h-[109px] items-start gap-1.5 absolute top-[142px] ">
        <div style={labelStyle}>Họ và tên</div>
        <Input
          className="placeholder-[#6B7280]"
          style={inputStyle}
          placeholder="Nhập họ và tên"
        />
      </div>

      <div className="top-[231px] flex flex-col w-[349px] h-[109px] items-start gap-1.5 absolute ]">
        <div style={labelStyle}>Email</div>
        <Input
          className="placeholder-[#6B7280]"
          style={inputStyle}
          placeholder="Nhập địa chỉ email"
        />
      </div>

      <div className="top-80 flex flex-col w-[349px] h-[104px] items-start gap-1.5 absolute ">
        <div style={labelStyle}>Bạn cần hỗ trợ vấn đề gì?</div>
        <Textarea
          className="placeholder-[#6B7280]"
          style={textareaStyle}
          placeholder="Nhập nội dung"
        />
      </div>

      <button
        className="absolute w-[150px] h-[35px] top-[482px] p-0"
        style={{
          background:
            "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
          height: "34.61538314819336px",
          outline: "none",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: "Montserrat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16.66px",
        }}
      >
        <div
          className="w-[73.35164642333984px] left-0 [font-family:'Montserrat',Helvetica]"
          style={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "white",
          }}
        >
          Xem thêm
        </div>
        <ChevronRightIcon
            style={{
              height: '20.6px',
              width: '20.6px',
              color: "white",
              background: "#2239bb",
              borderRadius: "50%",
            }}
          />
      </button>
    </div>
  );
};

export default ContactFormSectionMobile;
