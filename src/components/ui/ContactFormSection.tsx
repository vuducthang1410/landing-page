import React, { useState } from "react";
import bg2 from "../../assets/Rectangle 62.png";
import SuccessPopup from "../popup/SuccessPopup";

interface ContactFormSectionProps {
  scale: number;
  Input: React.ElementType;
  Textarea: React.ElementType;
  Button: React.ElementType;
  ChevronRightIcon: React.ElementType;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ scale, Input, Textarea, Button, ChevronRightIcon }) => {
  const scaled = (value: number) => value * scale;
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle form submission here,
    // e.g., send data to a server.
    console.log("Form submitted");
    setSuccessPopupOpen(true);
  };

  const labelStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    color: "#fff",
    fontSize: scaled(14),
    textAlign: "left" as const,
    marginTop: scaled(-1),
  };

  const inputStyle = {
    fontFamily: "Roboto, sans-serif",
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
  };

  return (
    <div
      id="contact"
      style={{
        position: "absolute",
        width: scaled(1920),
        height: scaled(1080),
        top: scaled(6480),
        left: scaled(0),
        background: `url(${bg2})`,
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: scaled(20),
          width: scaled(1920),
          height: scaled(210),
          paddingTop: scaled(92),
        }}
      >
        <div
          style={{
            width: scaled(932),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            color: "#00e5ff",
            fontSize: scaled(48),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "normal",
          }}
        >
          BẠN CÒN CÂU HỎI?
        </div>

        <div
          style={{
            width: scaled(1116),
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
        src={"https://c.animaapp.com/mc1e20wi1KPjVw/img/12-1.png"}
      />

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: scaled(756),
            alignItems: "flex-start",
            gap: scaled(6),
            position: "absolute",
            top: scaled(310),
            left: scaled(1000),
          }}
        >
          <div style={labelStyle}>Họ và tên</div>
          <Input
            className="placeholder-[#6B7280]"
            style={inputStyle}
            placeholder="Nhập họ và tên"
            name="name"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: scaled(392),
            left: scaled(1000),
            display: "flex",
            flexDirection: "row",
            width: scaled(756),
            gap: scaled(16),
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: `calc(50% - ${scaled(8)}px)`, gap: scaled(6) }}>
            <div style={labelStyle}>Email</div>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Nhập địa chỉ email"
              name="email"
              type="email"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: `calc(50% - ${scaled(8)}px)`, gap: scaled(6) }}>
            <div style={labelStyle}>Số điện thoại</div>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Nhập số điện thoại"
              name="phone"
              type="tel"
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: scaled(473),
            left: scaled(1000),
            display: "flex",
            flexDirection: "row",
            width: scaled(756),
            gap: scaled(16),
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: scaled(6) }}>
            <div style={labelStyle}>Khu vực</div>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Tỉnh/Thành phố"
              name="province"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: scaled(6), alignSelf: "flex-end" }}>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Quận/Huyện"
              name="district"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: scaled(6), alignSelf: "flex-end" }}>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Phường/Xã"
              name="ward"
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: scaled(567),
            left: scaled(1000),
            display: "flex",
            flexDirection: "column",
            width: scaled(756),
            alignItems: "flex-start",
            gap: scaled(6),
          }}
        >
          <div style={labelStyle}>Bạn cần hỗ trợ vấn đề gì?</div>
          <Textarea
            className="placeholder-[#6B7280]"
            style={{
              fontFamily: "Roboto, sans-serif",
              width: scaled(756),
              height: scaled(206),
              background: "white",
              borderRadius: scaled(8),
              fontSize: scaled(16),
              padding: scaled(12),
              color: "black",
              outline: "none",
              boxShadow: "none",
              border: "none",
              resize: "none",
            }}
            placeholder="Nhập nội dung"
            name="message"
          />
        </div>

        <Button
          type="submit"
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
      </form>

      <SuccessPopup
        open={isSuccessPopupOpen}
        onClose={() => setSuccessPopupOpen(false)}
        scale={scale}
      />
    </div>
  );
};

export default ContactFormSection; 