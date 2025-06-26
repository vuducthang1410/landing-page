import React, { useState } from "react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { ChevronRightIcon } from "lucide-react";
import { bgCheckInMobile, kiloba } from "../../../data";
import type { ContactFormData } from "../../../types/ContactFormData";
import { validate, buildHtmlEmail, encodeHtmlToBase64 } from "../../../lib/contactFormUtils";
import { EmailNoticeService } from "../../../service/EmailNoticeService";
import SuccessPopup from "../../popup/mobile/SuccessPopupMobile";
import FailurePopup from "../../popup/mobile/FailurePopupMobile";

interface ContactFormSectionMobileProps {
  scaled: (value: number) => number;
}

const ContactFormSectionMobile: React.FC<ContactFormSectionMobileProps> = ({
  scaled,
}) => {
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const email= import.meta.env.VITE_EMAIL_RECEIVER_CUSTOMER_INFO;
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const getFirstError = () => {
    const errorKeys = Object.keys(errors) as (keyof ContactFormData)[];
    if (errorKeys.length > 0) {
      return errors[errorKeys[0]];
    }
    return null;
  };

  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      province: "",
      district: "",
      ward: "",
      message: "",
    });
    setErrors({});
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsLoading(true);
    const html = buildHtmlEmail(formData);
    const base64Encoded = encodeHtmlToBase64(html);
    try {
      await EmailNoticeService.sendEmailNotice({
        cifNumber: "00000",
        email: email,
        requestId: "requestId",
        emailMessage: base64Encoded,
        subject:
          "Thông tin Khách hàng đăng ký tư vấn Chương trình Khuyến mại MegaSale",
        source: "CMS",
      });
      setSuccessPopupOpen(true);
    } catch (error) {
      console.log('hehe'+error)
      setFailurePopupOpen(true);
    } finally {
      setIsLoading(false);
      clearFormData();
    }
  };

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
        loading="lazy"
      />

      <div
        style={{
          position: "absolute",
          fontFamily: "Montserrat",
          fontWeight: 700,
          color: "#00E5FF",
          fontSize: scaled(20),
          textAlign: "center",
          top: scaled(50),
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
          top: scaled(80),
          width: scaled(375),
          fontSize: scaled(12),
        }}
      >
        HÃY GỬI THÔNG TIN ĐỂ ĐƯỢC LIÊN HỆ TƯ VẤN
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: scaled(349),
          display: "flex",
          flexDirection: "column",
          gap: scaled(11),
          marginTop: scaled(120),
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
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isLoading}
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
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
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isLoading}
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
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              disabled={isLoading}
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
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              disabled={isLoading}
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
              name="ward"
              value={formData.ward}
              onChange={handleInputChange}
              disabled={isLoading}
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
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <div
            style={{
              color: "red",
              fontSize: scaled(12),
              textAlign: "left",
              paddingTop: scaled(8),
              borderRadius: scaled(4),
              minHeight: scaled(25),
            }}
          >
            {getFirstError()}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
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
            // marginTop: scaled(8),
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.6 : 1,
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
            {isLoading ? "Đang gửi..." : "Gửi thông tin"}
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

      <SuccessPopup
        open={isSuccessPopupOpen}
        onClose={() => setSuccessPopupOpen(false)}
        scale={scaled(1)}
      />
      <FailurePopup
        open={isFailurePopupOpen}
        onClose={() => setFailurePopupOpen(false)}
        scale={scaled(1)}
      />
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: scaled(30),
              borderRadius: scaled(12),
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div
              style={{
                width: scaled(30),
                height: scaled(30),
                border: `${scaled(3)}px solid #f3f3f3`,
                borderTop: `${scaled(3)}px solid #0061FE`,
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto",
                marginBottom: scaled(12),
              }}
            />
            <div
              style={{
                fontFamily: "Montserrat, Helvetica",
                fontSize: scaled(14),
                fontWeight: 500,
                color: "#333",
              }}
            >
              Đang gửi thông tin...
            </div>
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactFormSectionMobile;
