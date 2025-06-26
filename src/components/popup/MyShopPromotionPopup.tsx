import React from "react";
import { bgPopup } from "../../data";

export interface MyShopPromotionPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const MyShopPromotionPopup: React.FC<MyShopPromotionPopupProps> = ({ open, onClose, scale = 1 }) => {
  if (!open) return null;
  
  const scaled = (value: number) => value * scale;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
    onClick={onClose}>
      <div
        className="relative rounded-lg shadow-lg overflow-auto text-left"
        style={{
          width: scaled(1460),
          height: scaled(824),
          backgroundImage: `url(${bgPopup})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={e => e.stopPropagation()}
      >
<button
          className="absolute text-white hover:text-gray-200"
          style={{
            top: scaled(10),
            right: scaled(16),
            fontSize: scaled(45),
            height:scaled(45),
            lineHeight:'100%',
            backgroundColor: "transparent",
            outline:'none',
            border:'none',
            cursor:'pointer'
          }}
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        {/* Title */}
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
          MYSHOP
        </h2>

        {/* Left Section */}
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
            Khách hàng sử dụng dịch vụ MyShop hoặc MyShop cao cấp và duy trì số dư bình quân trên tài khoản thanh toán từ 5 triệu đồng trở lên, tối thiểu 1 tháng trong thời gian diễn ra chương trình.
          </p>

          <h3 
            className="font-bold underline"
            style={{ 
              fontSize: scaled(20),
              marginBottom: scaled(8),
              marginTop: scaled(32),
              fontFamily: "Montserrat"
            }}
          >
            Số lượng Mã số dự thưởng (MSDT)
          </h3>

          <div
            className="relative text-[#FFFFFF]"
            style={{
              width: scaled(480),
              height: scaled(130),
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
            }}
          >
            <span 
              className="absolute font-bold"
              style={{
                top: scaled(81),
                left: scaled(13),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              SỐ LƯỢNG MSDT =
            </span>
            <span 
              className="absolute flex items-center text-center"
              style={{
                top: scaled(12),
                left: scaled(235),
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
              Số dư bình quân trên TKTT
            </span>
             <span 
               className="absolute flex items-center text-center"
               style={{
                 top: scaled(30),
                 left: scaled(315),
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
              ×
            </span>
             <span 
               className="absolute border-b border-white flex items-center text-center"
               style={{
                 top: scaled(48),
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
             SL tháng duy trì (≥ 5 triệu đồng)
            </span>
            <span 
              className="absolute font-bold lowercase"
              style={{
                top: scaled(99),
                left: scaled(300),
                width: scaled(80),
                height: scaled(17),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              5.000.000
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div 
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(295),
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
              marginTop: scaled(24),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat"
            }}
          >
            <li style={{ }}>Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</li>
            <li style={{ }}>- Thời gian duy trì số dư bình quân trên tài khoản thanh toán để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025</li>
            <li style={{ }}>- Thời gian thông báo mã số dự thưởng: Trước ngày 15/11/2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyShopPromotionPopup;
