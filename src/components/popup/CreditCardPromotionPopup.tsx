import React from "react";
import { bgPopup } from "../../data";

export interface CreditCardPromotionPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const CreditCardPromotionPopup: React.FC<CreditCardPromotionPopupProps> = ({ open, onClose, scale = 1 }) => {
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
          THẺ TÍN DỤNG
        </h2>

        {/* Left Section */}
        <h3
          className="absolute font-bold underline text-[#FFFFFF]"
          style={{
            width: scaled(317),
            height: scaled(33),
            top: scaled(143),
            left: scaled(54),
            fontSize: scaled(20),
            lineHeight: "100%",
            fontFamily: "Montserrat"
          }}
        >
          Đối tượng ưu đãi
        </h3>

        <p
          className="absolute font-medium text-justify tracking-[-0.02em] text-[#FFFFFF]"
          style={{
            width: scaled(444),
            height: scaled(80),
            top: scaled(181),
            left: scaled(54),
            fontSize: scaled(14),
            lineHeight: "150%",
            fontFamily: "Montserrat"
          }}
        >
          Chủ Thẻ tín dụng KienlongBank có các giao dịch thanh toán hợp lệ (mua hàng hóa, dịch vụ, thanh toán hóa đơn) bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch và được ghi nhận thành công vào hệ thống trong thời gian diễn ra chương trình.
        </p>

        <h3
          className="absolute font-bold text-[#FFFFFF]"
          style={{
            width: scaled(485),
            height: scaled(38),
            top: scaled(287),
            left: scaled(54),
            fontSize: scaled(20),
            lineHeight: "100%",
            fontFamily: "Montserrat"
          }}
        >
          Số lượng Mã số dự thưởng (MSDT)
        </h3>

        <p
          className="absolute font-medium tracking-[-0.03em] text-[#FFFFFF]"
          style={{
            width: scaled(473),
            height: scaled(50),
            top: scaled(325),
            left: scaled(54),
            fontSize: scaled(14),
            lineHeight: "100%",
            fontFamily: "Montserrat"
          }}
        >
          Đối với chủ Thẻ tín dụng quốc tế cao cấp KienlongBank Visa Elite:
        </p>

        <div
          className="absolute text-[#FFFFFF]"
          style={{
            width: scaled(480),
            height: scaled(90),
            top: scaled(375),
            left: scaled(41),
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
          }}
        >
          <span
            className="absolute font-bold"
            style={{
              width: scaled(204),
              height: scaled(38),
              top: scaled(45),
              left: scaled(13),
              fontSize: scaled(14),
              lineHeight: "100%",
              fontFamily: "Montserrat"
            }}
          >
            SỐ LƯỢNG MSDT/ THẺ =
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
            Tổng doanh số giao dịch hợp lệ KienlongBank Visa Elite
          </span>
          <span
            className="absolute font-bold lowercase"
            style={{
              top: scaled(62),
              left: scaled(320),
              width: scaled(60),
              height: scaled(17),
              fontSize: scaled(14),
              lineHeight: "100%",
              fontFamily: "Montserrat"
            }}
          >
            500.000
          </span>
        </div>

        <p
          className="absolute font-medium text-[#FFFFFF]"
          style={{
            top: scaled(497),
            left: scaled(54),
            width: scaled(453),
            height: scaled(48),
            fontSize: scaled(14),
            lineHeight: "100%",
            fontFamily: "Montserrat"
          }}
        >
          Đối với chủ Thẻ tín dụng KienlongBank khác (tính trên doanh số giao dịch từng thẻ):
        </p>

        <div
          className="absolute text-[#FFFFFF]"
          style={{
            width: scaled(480),
            height: scaled(90),
            top: scaled(558),
            left: scaled(41),
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
          }}
        >
          <span
            className="absolute font-bold"
            style={{
              width: scaled(204),
              height: scaled(38),
              top: scaled(45),
              left: scaled(13),
              fontSize: scaled(14),
              lineHeight: "100%",
              fontFamily: "Montserrat"
            }}
          >
            SỐ LƯỢNG MSDT/ THẺ =
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
            Tổng doanh số giao dịch hợp lệ từng Thẻ tín dụng khác
          </span>
          <span
            className="absolute font-bold lowercase"
            style={{
              top: scaled(62),
              left: scaled(320),
              width: scaled(60),
              height: scaled(17),
              fontSize: scaled(14),
              lineHeight: "100%",
              fontFamily: "Montserrat"
            }}
          >
            1.000.000
          </span>
        </div>
        
        <div
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(348),
            padding: scaled(20),
            borderRadius: scaled(20),
            gap: scaled(4),
          }}
        >
          <h3
            className="font-bold underline"
            style={{
              width: scaled(853),
              height: scaled(38),
              fontSize: scaled(20),
              lineHeight: "100%",
              fontFamily: "Montserrat"
            }}
          >
            Điều khoản và Điều kiện áp dụng:
          </h3>
          <div 
            className="font-medium flex flex-col space-y-1"
            style={{
              width: scaled(853),
              height: scaled(141),
              fontSize: scaled(14),
              lineHeight: "120%",
              fontFamily: "Montserrat"
            }}
          >
            <p>- Giao dịch hợp lệ là giao dịch thanh toán mua hàng hóa, dịch vụ, thanh toán hóa đơn bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch cũng như được ghi nhận thành công vào hệ thống trong thời gian diễn ra chương trình; không bao gồm giao dịch rút, lãi, rút tiền mặt từ thẻ tín dụng, giao dịch phát sinh do sơ suất của hệ thống, giao dịch hoàn trả, giao dịch chối hủy.</p>
            <p>- Giao dịch hợp lệ của thẻ phụ được tính vào doanh số giao dịch của thẻ chính để tính tổng doanh số giao dịch.</p>
          </div>

          <h3 
            className="font-bold underline"
            style={{
              width: scaled(853),
              height: scaled(38),
              fontSize: scaled(20),
              lineHeight: "100%",
              fontFamily: "Montserrat"
            }}
          >
            Phương thức nhận mã số dự thưởng
          </h3>
          <div 
            className="font-medium flex flex-col space-y-1"
            style={{
              width: scaled(853),
              height: scaled(95),
              fontSize: scaled(14),
              lineHeight: "100%",
              fontFamily: "Montserrat"
            }}
          >
            <p>Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</p>
            <p>- Thời gian phát sinh giao dịch để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025</p>
            <p>- Thời gian thông báo mã số dự thưởng: Trước ngày 19/11/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPromotionPopup; 