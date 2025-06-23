import React from "react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { ChevronRightIcon } from "lucide-react";
import { bgCheckInMobile, kiloba } from "../../../data";

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
        background: `url(${bgCheckInMobile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        className="absolute object-cover"
        alt="Element"
        src={kiloba}
        style={{
          width: scaled(237),
          height: scaled(201),
          top: scaled(612),
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
      <form
        style={{
          width: scaled(349),
          display: "flex",
          flexDirection: "column",
          gap: scaled(12),
          marginTop: scaled(130),
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: scaled(1.5) }}
        >
          <div style={labelStyle}>Họ và tên</div>
          <Input
            className="placeholder-[#6B7280]"
            style={inputStyle}
            placeholder="Nhập họ và tên"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: scaled(1.5) }}
        >
          <div style={labelStyle}>Email</div>
          <Input
            className="placeholder-[#6B7280]"
            style={inputStyle}
            placeholder="Nhập địa chỉ email"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: scaled(1.5) }}
        >
          <div style={labelStyle}>Số điện thoại</div>
          <Input
            className="placeholder-[#6B7280]"
            style={inputStyle}
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: scaled(8) }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: scaled(1.5),
            }}
          >
            <div style={labelStyle}>Khu vực</div>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Tỉnh/Thành phố"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: scaled(1.5),
            }}
          >
            <div style={labelStyle}>Quận/Huyện</div>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Quận/Huyện"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: scaled(1.5),
            }}
          >
            <div style={labelStyle}>Phường/Xã</div>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Phường/Xã"
            />
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: scaled(1.5) }}
        >
          <div style={labelStyle}>Bạn cần hỗ trợ vấn đề gì?</div>
          <Textarea
            className="placeholder-[#6B7280]"
            style={textareaStyle}
            placeholder="Nhập nội dung"
          />
        </div>
        <button
          type="submit"
          style={{
            width: scaled(150),
            alignSelf: "center",
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
            marginTop: scaled(8),
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
      </form>
    </div>
  );
};

export default ContactFormSectionMobile;
