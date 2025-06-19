import React from "react";

interface ContactFormSectionProps {
  scale: number;
  Input: React.ElementType;
  Textarea: React.ElementType;
  Button: React.ElementType;
  ChevronRightIcon: React.ElementType;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ scale, Input, Textarea, Button, ChevronRightIcon }) => {
  const scaled = (value: number) => value * scale;
  return (
    <div
      id="contact"
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
          className="placeholder-[#6B7280]"
          style={{
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
          className="placeholder-[#6B7280]"
          style={{
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
          className="placeholder-[#6B7280]"
          style={{
            width: scaled(756),
            height: scaled(206),
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
          <ChevronRightIcon
            style={{
              height: scaled(20),
              width: scaled(20),
              color: "white",
            }}
          />
        </div>
      </Button>
    </div>
  );
};

export default ContactFormSection; 