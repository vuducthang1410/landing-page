import React, { useState } from "react";
import bg2 from "../../assets/Rectangle 62.webp";
import SuccessPopup from "../popup/SuccessPopup";
import { kiloba } from "../../data";
import { EmailNoticeService } from "../../service/EmailNoticeService";
import FailurePopup from "../popup/FailurePopup";

interface ContactFormSectionProps {
  scale: number;
  Input: React.ElementType;
  Textarea: React.ElementType;
  Button: React.ElementType;
  ChevronRightIcon: React.ElementType;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  message: string;
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

  const validate = (data: ContactFormData) => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!data.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!data.email.trim()) newErrors.email = "Vui lòng nhập email";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      newErrors.email = "Email không hợp lệ";
    if (!data.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!/^(0|\+84)[0-9]{9,10}$/.test(data.phone))
      newErrors.phone = "Số điện thoại không hợp lệ";
    if (!data.province.trim())
      newErrors.province = "Vui lòng nhập tỉnh/thành phố";
    if (!data.district.trim()) newErrors.district = "Vui lòng nhập quận/huyện";
    if (!data.ward.trim()) newErrors.ward = "Vui lòng nhập phường/xã";
    if (!data.message.trim()) newErrors.message = "Vui lòng nhập nội dung";
    return newErrors;
  };
  const buildHtmlEmail = (formData: ContactFormData): string => {
    return `
    <div style="max-width: 498px; margin: 0 auto; font-family: 'Montserrat', sans-serif; border-radius: 16px; border: 1px solid #e0e0e0; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      <div style="background-image: url('https://landing-page-beige-three-75.vercel.app/assets/Rectangle%2062-CSJLDXqH.png'); background-size: cover; background-position: center; border-radius: 16px 16px 0 0; padding: 24px 24px 16px 24px; color: #fff; text-align: center;">
        <img src="https://landing-page-beige-three-75.vercel.app/assets/logoKlbMobile-CWnSS4Rb.png" alt="KienlongBank" style="height: 28px; margin-bottom: 12px;">
        <div style="font-size: 24px; font-weight: bold; margin-bottom: 6px;">MEGASALE SINH NHẬT 30 NĂM</div>
        <div style="font-size: 14px; margin-bottom: 2px;font-weight:400">KienlongBank xin trân trọng thông báo,</div>
        <div style="font-size: 14px;font-weight:400">Thông tin khách hàng đăng ký tư vấn<br>Chương trình MegaSale Sinh nhật 30 năm</div>
      </div>
      <div style="padding: 24px;background-color:#F9F9F9;font-size: 16px">
        <div style="margin-bottom: 10px;color: #333333;"><b>Họ và tên:</b> ${formData.name}</div>
        <div style="margin-bottom: 10px;color: #333333;"><b>Số điện thoại:</b> ${formData.phone}</div>
        <div style="margin-bottom: 10px;color: #333333;"><b>Email:</b> ${formData.email}</div>
        <div style="margin-bottom: 10px;color: #333333;"><b>Nơi ở hiện tại:</b> ${formData.ward}, ${formData.district}, ${formData.province}</div>
        <div style="margin-bottom: 18px;color: #333333;"><b>Nội dung cần tư vấn:</b> ${formData.message}</div>
        <div style="font-style: italic; color: #333333;">
          Kính chuyển thông tin đăng ký đến Trung tâm Dịch vụ Khách hàng để xử lý các bước tư vấn tiếp theo!
        </div>
      </div>
    </div>
    `;
  };
  const encodeHtmlToBase64 = (html: string): string => {
    return btoa(unescape(encodeURIComponent(html)));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Dữ liệu form đã gom vào formData, có thể gọi service tại đây
    const html = buildHtmlEmail(formData);
    const base64Encoded = encodeHtmlToBase64(html);
    try {
      EmailNoticeService.sendEmailNotice({
        cifNumber: "00000",
        email: "thangvd@kienlongbank.com",
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
          />
          {errors.message && (
            <div style={{ color: "red", fontSize: scaled(13), marginTop: 2 }}>
              {errors.message}
            </div>
          )}
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
      <FailurePopup
        open={isFailurePopupOpen}
        onClose={() => setFailurePopupOpen(false)}
        scale={scale}
      />
    </div>
  );
};

export default ContactFormSection;
