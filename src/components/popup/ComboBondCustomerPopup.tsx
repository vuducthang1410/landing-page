import React from "react";
import { bgPopup } from "../../data";

export interface ComboBondCustomerPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const ComboBondCustomerPopup: React.FC<ComboBondCustomerPopupProps> = ({ open, onClose, scale = 1 }) => {
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
        {/* Close Button */}
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
          COMBO VAY MƯỢT
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
            Khách hàng cá nhân mua trái phiếu KienlongBank từ 50 triệu VNĐ trở lên trong thời gian diễn ra chương trình.
          </p>

          <h3 
            className="font-bold underline"
            style={{ 
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat"
            }}
          >
            Quà tặng
          </h3>
          <div 
            style={{ 
              fontSize: scaled(14),
              fontFamily: "Montserrat"
            }}
          >
            <p>Nhận ngay 1 trong 2 món quà sau:</p>
            <ul 
              className="list-disc list-inside"
              style={{ 
                marginTop: scaled(8),
                gap: scaled(4),
                display: "flex",
                flexDirection: "column",
                fontFamily: "Montserrat"
              }}
            >
              <li style={{ marginBottom: scaled(4) }}>Mũ bảo hiểm cao cấp</li>
              <li style={{ marginBottom: scaled(4) }}>Áo mưa chất lượng cao</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
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
            Điều khoản và Điều kiện áp dụng:
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
            <li style={{ marginBottom: scaled(8) }}>- Chương trình áp dụng cho giao dịch mua trái phiếu từ 50 triệu VNĐ trở lên.</li>
            <li style={{ marginBottom: scaled(8) }}>- Quà tặng sẽ được trao ngay sau khi giao dịch thành công.</li>
            <li style={{ marginBottom: scaled(8) }}>- Mỗi giao dịch chỉ được nhận 1 món quà.</li>
            <li style={{ marginBottom: scaled(8) }}>- KienlongBank có quyền thay đổi quà tặng mà không báo trước.</li>
          </ul>

          <h3 
            className="leading-[100%] font-bold underline"
            style={{ 
              fontSize: scaled(20),
              marginTop: scaled(16),
              fontFamily: "Montserrat"
            }}
          >
            Thời gian áp dụng
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
            <li style={{ marginBottom: scaled(8) }}>- Từ 25/06/2025 đến hết ngày 31/10/2025</li>
            <li style={{ marginBottom: scaled(8) }}>- Áp dụng tại tất cả các chi nhánh KienlongBank</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComboBondCustomerPopup;
