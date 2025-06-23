import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface CreditCardPromotionPopupMobileProps {
  open: boolean;
  onClose: () => void;
}

const CreditCardPromotionPopupMobile: React.FC<CreditCardPromotionPopupMobileProps> = ({ open, onClose }) => {
  const [scale, setScale] = useState(1);
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div
        style={{
          width: 350,
          maxHeight: "90vh",
          background: "linear-gradient(180deg, #8B18A2 0%, #2887E2 100%)",
          borderRadius: 20,
          padding: 16,
          position: "relative",
          overflowY: "auto",
          transform: `scale(${scale})`,
          transition: "transform 0.2s",
        }}
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 28,
            zIndex: 1,
          }}
          aria-label="Đóng"
        >
          <IoClose />
        </button>
        {/* Nút zoom */}
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 8, zIndex: 2 }}>
          <button
            onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
            style={{ fontSize: 20, background: "#fff", border: "none", borderRadius: 4, width: 32, height: 32, color: '#2239bb', fontWeight: 700 }}
            aria-label="Thu nhỏ"
          >-</button>
          <button
            onClick={() => setScale(s => Math.min(2, s + 0.1))}
            style={{ fontSize: 20, background: "#fff", border: "none", borderRadius: 4, width: 32, height: 32, color: '#2239bb', fontWeight: 700 }}
            aria-label="Phóng to"
          >+</button>
        </div>

        {/* Tiêu đề */}
        <div
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: 20,
            textAlign: "center",
            marginBottom: 16,
            fontFamily: "Montserrat",
            textTransform: "uppercase",
          }}
        >
          THẺ TÍN DỤNG
        </div>

        {/* Nội dung chính */}
        <div style={{ color: "#fff", fontFamily: "Montserrat", fontSize: 14 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Đối tượng ưu đãi</div>
          <div style={{ marginBottom: 12 }}>
            Chủ Thẻ tín dụng KienlongBank có các giao dịch thanh toán hợp lệ (mua hàng hóa, dịch vụ, thanh toán hóa đơn) bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch và được ghi nhận thành công trong thời gian diễn ra chương trình.
          </div>

          <div style={{ fontWeight: 600, marginBottom: 4 }}>Số lượng Mã số dự thưởng (MSDT)</div>
          <div style={{ marginBottom: 8 }}>
            <div style={{ marginBottom: 6 }}><b>Đối với Chủ thẻ tín dụng quốc tế cao cấp KienlongBank Visa Elite:</b></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span>SỐ LƯỢNG MSDT/THẺ =</span>
              <span>Tổng doanh số giao dịch hợp lệ thẻ KienlongBank Visa Elite / 500.000</span>
            </div>
            <div style={{ marginBottom: 6 }}><b>Đối với Chủ thẻ tín dụng KienlongBank khác (tính trên doanh số giao dịch từng thẻ):</b></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>SỐ LƯỢNG MSDT/THẺ =</span>
              <span>Tổng doanh số giao dịch hợp lệ từng Thẻ tín dụng khác / 1.000.000</span>
            </div>
          </div>

          {/* Box trắng điều kiện áp dụng */}
          <div
            style={{
              background: "#fff",
              color: "#2239bb",
              borderRadius: 16,
              padding: 12,
              marginBottom: 12,
              fontSize: 13,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              Điều Khoản Và Điều Kiện Áp Dụng:
            </div>
            <ul style={{ paddingLeft: 16, marginBottom: 6 }}>
              <li>Giao dịch hợp lệ là giao dịch thanh toán mua hàng hóa, dịch vụ, thanh toán hóa đơn bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch và được ghi nhận thành công trong thời gian diễn ra chương trình, không bao gồm giao dịch rút tiền mặt, giao dịch phí, lãi, rút tiền mặt từ Thẻ tín dụng, giao dịch hoàn trả, giao dịch bị từ chối, giao dịch bị hủy.</li>
              <li>Doanh số giao dịch hợp lệ của thẻ phụ được tính vào doanh số giao dịch của thẻ chính để tính tổng doanh số giao dịch.</li>
            </ul>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              Phương Thức Nhận Mã Số Dự Thưởng
            </div>
            <ul style={{ paddingLeft: 16 }}>
              <li>Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus khi phát sinh giao dịch đủ xét sinh mã: Từ 26/05/2025 đến hết ngày 31/10/2025</li>
              <li>Thời gian thông báo mã số dự thưởng: Trước ngày 19/11/2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPromotionPopupMobile; 