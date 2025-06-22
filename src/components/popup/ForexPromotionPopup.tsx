import React from "react";
import { bgPopup } from "../../data";

export interface ForexPromotionPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const ForexPromotionPopup: React.FC<ForexPromotionPopupProps> = ({ open, onClose, scale = 1 }) => {
  if (!open) return null;
  
  const scaled = (value: number) => value * scale;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative rounded-lg shadow-lg overflow-auto text-left"
        style={{
          width: scaled(1460),
          height: scaled(824),
          backgroundImage: `url(${bgPopup})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          className="absolute text-white hover:text-gray-200"
          style={{
            top: scaled(16),
            right: scaled(16),
            fontSize: scaled(24),
          }}
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        <h2 
          className="flex justify-center items-center text-center align-middle tracking-[0%] font-bold uppercase text-[#00E5FF]"
          style={{
            width: scaled(932),
            height: scaled(99),
            marginTop: scaled(22),
            marginLeft: scaled(264),
            fontSize: scaled(40),
            lineHeight: "100%",
            fontFamily: "Montserrat"
          }}
        >
          MUA/BÁN NGOẠI TỆ
        </h2>

        <div 
          className="absolute text-white"
          style={{
            top: scaled(143),
            left: scaled(54),
            width: scaled(444),
          }}
        >
          <h3 
            className="font-bold underline"
            style={{ 
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat"
            }}
          >
            Đối tượng ưu đãi
          </h3>
          <p 
            className="leading-[150%] font-medium text-justify tracking-[-0.02em]"
            style={{ 
              fontSize: scaled(14),
              marginBottom: scaled(16),
              fontFamily: "Montserrat"
            }}
          >
            Khách hàng cá nhân thực hiện giao dịch mua/bán ngoại tệ tại quầy hoặc trực tuyến (qua App KienlongBank Plus hoặc Internet Banking) từ 10 triệu VNĐ trở lên trong thời gian diễn ra chương trình.
          </p>

          <h3 
            className="font-bold underline"
            style={{ 
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat"
            }}
          >
            Số lượng Mã số dự thưởng (MSDT)
          </h3>

          <div
            className="relative text-[#FFFFFF]"
            style={{
              width: scaled(480),
              height: scaled(90),
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
            }}
          >
            <span 
              className="absolute font-bold"
              style={{
                top: scaled(45),
                left: scaled(13),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              SỐ LƯỢNG MSDT =
            </span>
            <span 
              className="absolute border-b border-white flex items-center text-center"
              style={{
                top: scaled(12),
                left: scaled(215),
                width: scaled(250),
                height: scaled(42),
                fontSize: scaled(14),
                paddingLeft: scaled(10),
                paddingRight: scaled(10),
                paddingTop: scaled(4),
                paddingBottom: scaled(4),
                fontFamily: "Montserrat"
              }}
            >
              Số tiền giao dịch mua/bán ngoại tệ
            </span>
            <span 
              className="absolute font-bold lowercase"
              style={{
                top: scaled(62),
                left: scaled(320),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              10.000.000
            </span>
          </div>
        </div>

        <div 
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(595),
            padding: scaled(20),
            borderRadius: scaled(20),
            gap: scaled(4),
          }}
        >
          <h3 
            className="leading-[100%] font-bold underline"
            style={{ 
              fontSize: scaled(20),
              fontFamily: "Montserrat"
            }}
          >
            Phương Thức Nhận Mã Số Dự Thưởng
          </h3>
          <ul 
            className="leading-[150%] font-medium"
            style={{ 
              fontSize: scaled(14),
              marginTop: scaled(16),
              gap: scaled(8),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat"
            }}
          >
            <li style={{ marginBottom: scaled(8) }}>- Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus sau khi thực hiện giao dịch mua/bán ngoại tệ thành công.</li>
            <li style={{ marginBottom: scaled(8) }}>- Thời gian thông báo mã số dự thưởng: Trước ngày 15/11/2025</li>
          </ul>

          <h3 
            className="leading-[100%] font-bold underline"
            style={{ 
              fontSize: scaled(20),
              marginTop: scaled(16),
              fontFamily: "Montserrat"
            }}
          >
            Điều Khoản Và Điều Kiện Áp Dụng:
          </h3>
          <ul 
            className="leading-[150%] font-medium"
            style={{ 
              fontSize: scaled(14),
              marginTop: scaled(16),
              gap: scaled(8),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat"
            }}
          >
            <li style={{ marginBottom: scaled(8) }}>- Chỉ áp dụng cho các giao dịch mua/bán ngoại tệ hợp lệ được thực hiện trong thời gian diễn ra chương trình.</li>
            <li style={{ marginBottom: scaled(8) }}>- Khách hàng phải đảm bảo thông tin đăng ký chính xác để nhận thông báo mã số dự thưởng.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForexPromotionPopup;
