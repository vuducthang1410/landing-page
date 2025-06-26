import React, { useState } from "react";
import bg2 from "../../assets/Rectangle 62.webp";
import SuccessPopup from "../popup/SuccessPopup";
import { kiloba } from "../../data";
import type { ContactFormData } from "../../types/ContactFormData";
import FailurePopup from "../popup/FailurePopup";
import { EmailNoticeService } from "../../service/EmailNoticeService";
import { validate, buildHtmlEmail, encodeHtmlToBase64 } from "../../lib/contactFormUtils";

interface ContactFormSectionProps {
  scale: number;
  Input: React.ElementType;
  Textarea: React.ElementType;
  Button: React.ElementType;
  ChevronRightIcon: React.ElementType;
}


const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  scale,
  Input,
  Textarea,
  Button,
  ChevronRightIcon,
}) => {
  const scaled = (value: number) => value * scale;
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
    console.log("aaaa")
    console.log(email)
    // Dữ liệu form đã gom vào formData, có thể gọi service tại đây
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
      clearFormData();
    } catch (error) {
      console.log('hehe'+error)
      setFailurePopupOpen(true);
    } finally {
      setIsLoading(false);
    }
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
        objectFit: "contain",
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
            lineHeight: "100%",
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
            lineHeight: "100%",
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
        src={kiloba}
        loading="lazy"
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
          <div style={{ width: scaled(756) }}>
            <Input
              className="placeholder-[#6B7280]"
              style={inputStyle}
              placeholder="Nhập họ và tên"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {errors.name && (
              <div
                style={{
                  color: "red",
                  fontSize: scaled(13),
                  marginTop: 2,
                  textAlign: "left",
                }}
              >
                {errors.name}
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: scaled(400),
            left: scaled(1000),
            display: "flex",
            flexDirection: "row",
            width: scaled(756),
            gap: scaled(16),
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: `calc(50% - ${scaled(8)}px)`,
              gap: scaled(6),
            }}
          >
            <div style={labelStyle}>Email</div>
            <div>
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
              {errors.email && (
                <div
                  style={{
                    color: "red",
                    fontSize: scaled(13),
                    marginTop: 2,
                    textAlign: "left",
                  }}
                >
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: `calc(50% - ${scaled(8)}px)`,
              gap: scaled(6),
            }}
          >
            <div style={labelStyle}>Số điện thoại</div>
            <div>
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
              {errors.phone && (
                <div
                  style={{
                    color: "red",
                    fontSize: scaled(13),
                    marginTop: 2,
                    textAlign: "left",
                  }}
                >
                  {errors.phone}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: scaled(490),
            left: scaled(1000),
            display: "flex",
            flexDirection: "row",
            width: scaled(756),
            gap: scaled(16),
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: scaled(6),
            }}
          >
            <div style={labelStyle}>Khu vực</div>
            <div>
              <Input
                className="placeholder-[#6B7280]"
                style={inputStyle}
                placeholder="Tỉnh/Thành phố"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              {errors.province && (
                <div
                  style={{
                    color: "red",
                    fontSize: scaled(13),
                    marginTop: 2,
                    textAlign: "left",
                  }}
                >
                  {errors.province}
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: scaled(6),
            }}
          >
            <div style={labelStyle}>Quận huyện</div>
            <div>
              <Input
                className="placeholder-[#6B7280]"
                style={inputStyle}
                placeholder="Quận/Huyện"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              {errors.district && (
                <div
                  style={{
                    color: "red",
                    fontSize: scaled(13),
                    marginTop: 2,
                    textAlign: "left",
                  }}
                >
                  {errors.district}
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: scaled(6),
            }}
          >
            <div style={labelStyle}>Phường/xã</div>
            <div>
              <Input
                className="placeholder-[#6B7280]"
                style={inputStyle}
                placeholder="Phường/Xã"
                name="ward"
                value={formData.ward}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              {errors.ward && (
                <div
                  style={{
                    color: "red",
                    fontSize: scaled(13),
                    marginTop: 2,
                    textAlign: "left",
                  }}
                >
                  {errors.ward}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: scaled(580),
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
            value={formData.message}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          {errors.message && (
            <div style={{ color: "red", fontSize: scaled(13), marginTop: 2 }}>
              {errors.message}
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
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
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.6 : 1,
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
            {isLoading ? "Đang gửi..." : "Gửi thông tin"}
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
      <FailurePopup
        open={isFailurePopupOpen}
        onClose={() => setFailurePopupOpen(false)}
        scale={scale}
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
              padding: scaled(40),
              borderRadius: scaled(16),
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div
              style={{
                width: scaled(40),
                height: scaled(40),
                border: `${scaled(4)}px solid #f3f3f3`,
                borderTop: `${scaled(4)}px solid #0061FE`,
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto",
                marginBottom: scaled(16),
              }}
            />
            <div
              style={{
                fontFamily: "Montserrat, Helvetica",
                fontSize: scaled(16),
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

export default ContactFormSection;
