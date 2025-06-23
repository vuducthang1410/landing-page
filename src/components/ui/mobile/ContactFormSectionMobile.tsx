import React from "react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { ChevronRightIcon } from "lucide-react";
import { kiloba } from "../../../data";

interface ContactFormSectionMobileProps {
  scaled: (value: number) => number;
}

const ContactFormSectionMobile: React.FC<ContactFormSectionMobileProps> = ({
  scaled,
}) => {
  const labelStyle: React.CSSProperties = {
    fontFamily: "Roboto",
    fontWeight: 500,
    color: "#fff",
    fontSize: scaled(14),
    textAlign: "left",
    marginTop: scaled(-1),
  };

  const inputStyle: React.CSSProperties = {
    height: scaled(40),
    width: "100%",
    background: "white",
    borderRadius: scaled(8),
    fontSize: scaled(16),
    paddingLeft: scaled(12),
    color: "black",
    outline: "none",
    boxShadow: "none",
    border: "none",
    fontFamily: "Roboto",
  };

  const textareaStyle: React.CSSProperties = {
    width: "100%",
    height: scaled(109),
    background: "white",
    borderRadius: scaled(8),
    fontSize: scaled(16),
    paddingLeft: scaled(12),
    paddingTop: scaled(12),
    color: "black",
    outline: "none",
    boxShadow: "none",
    border: "none",
    resize: "none",
    fontFamily: "Roboto",
  };

  return (
    <div
      style={{
        width: scaled(375),
        height: scaled(812),
        position: "absolute",
        top: scaled(4872),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: scaled(375),
          height: scaled(812),
          top: 0,
          left: 0,
          background:
            "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
        }}
      />
      <img
        className="absolute object-cover"
        alt="Element"
        src={kiloba}
        style={{
          width: scaled(323),
          height: scaled(275),
          top: scaled(538),
        }}
      />

      <div
        style={{
          position: "absolute",
          fontFamily: "Montserrat",
          fontWeight: 700,
          color: "#00E5FF",
          fontSize: scaled(20),
          textAlign: "center",
          top: scaled(55),
          left: 0,
          width: scaled(375),
          height: scaled(24),
        }}
      >
        BẠN CÒN CÂU HỎI?
      </div>

      <div
        className="absolute [font-family:'Montserrat',Helvetica] font-medium text-white text-center tracking-[0] leading-[normal]"
        style={{
          top: scaled(88),
          width: scaled(375),
          fontSize: scaled(12),
        }}
      >
        HÃY GỬI THÔNG TIN ĐỂ ĐƯỢC LIÊN HỆ TƯ VẤN
      </div>

      {/* Contact Form */}
      <div
        className="flex flex-col items-start absolute"
        style={{
          width: scaled(349),
          height: scaled(109),
          gap: scaled(1.5),
          top: scaled(142),
        }}
      >
        <div style={labelStyle}>Họ và tên</div>
        <Input
          className="placeholder-[#6B7280]"
          style={inputStyle}
          placeholder="Nhập họ và tên"
        />
      </div>

      <div
        className="flex flex-col items-start absolute"
        style={{
          top: scaled(231),
          width: scaled(349),
          height: scaled(109),
          gap: scaled(1.5),
        }}
      >
        <div style={labelStyle}>Email</div>
        <Input
          className="placeholder-[#6B7280]"
          style={inputStyle}
          placeholder="Nhập địa chỉ email"
        />
      </div>

      <div
        className="flex flex-col items-start absolute"
        style={{
          top: scaled(320),
          width: scaled(349),
          height: scaled(104),
          gap: scaled(1.5),
        }}
      >
        <div style={labelStyle}>Bạn cần hỗ trợ vấn đề gì?</div>
        <Textarea
          className="placeholder-[#6B7280]"
          style={textareaStyle}
          placeholder="Nhập nội dung"
        />
      </div>

      <button
        className="absolute p-0"
        style={{
          width: scaled(150),
          top: scaled(482),
          background:
            "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
          height: scaled(34.62),
          outline: "none",
          border: "none",
          borderRadius: scaled(8),
          color: "white",
          fontSize: scaled(14),
          fontWeight: "500",
          fontFamily: "Montserrat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: scaled(16.66),
        }}
      >
        <div
          className="left-0 [font-family:'Montserrat',Helvetica]"
          style={{
            width: scaled(73.35),
            fontWeight: 400,
            fontSize: scaled(12),
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "white",
          }}
        >
          Xem thêm
        </div>
        <ChevronRightIcon
          style={{
            height: scaled(20.6),
            width: scaled(20.6),
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
