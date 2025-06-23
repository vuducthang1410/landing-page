import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface SavingPromotionPopupMobileProps {
  open: boolean;
  onClose: () => void;
}

const SavingPromotionPopupMobile: React.FC<SavingPromotionPopupMobileProps> = ({ open, onClose }) => {
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
          TIỀN GỬI TIẾT KIỆM
        </div>

        {/* Nội dung chính */}
        <div style={{ color: "#fff", fontFamily: "Montserrat", fontSize: 14 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Đối tượng ưu đãi</div>
          <div style={{ marginBottom: 12 }}>
            Khách hàng cá nhân gửi mới/lãi tụ tại quầy hoặc trực tuyến (qua App KienlongBank Plus, Internet Banking) trong thời gian diễn ra chương trình...
          </div>

          <div style={{ fontWeight: 600, marginBottom: 4 }}>Số lượng Mã số dự thưởng (MSDT)</div>
          <div style={{ marginBottom: 8 }}>
            <div>Đối với khách hàng gửi tại quầy</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Số lượng MSDT =</span>
              <span>Số tiền gửi kỳ hạn gốc / 100.000.000</span>
            </div>
            <div>Đối với khách hàng gửi online</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Số lượng MSDT =</span>
              <span>Số tiền gửi kỳ hạn gốc / 50.000.000</span>
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
              <li>Thưởng hợp kỳ kết tiền gửi trước hạn...</li>
              <li>Thưởng hợp kỳ trúng giải...</li>
              <li>Thưởng hợp kỳ kết tiền gửi trước hạn sau ngày KienlongBank trả thưởng...</li>
            </ul>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              Phương Thức Nhận Mã Số Dự Thưởng
            </div>
            <ul style={{ paddingLeft: 16 }}>
              <li>Đối với khách hàng gửi tại quầy...</li>
              <li>Đối với khách hàng gửi online...</li>
            </ul>
          </div>

          {/* Bảng thời gian phát hành và quay số */}
          <div style={{ background: "#fff", color: "#2239bb", borderRadius: 16, padding: 12, fontSize: 13 }}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              Thời Gian Phát Hành Và Quay Số
            </div>
            <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>ĐỢT</th>
                  <th>Thời gian phát hành</th>
                  <th>Thời gian quay số</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>12/06/2024</td>
                  <td>20/06/2024</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>21/06/2024</td>
                  <td>28/06/2024</td>
                </tr>
                {/* ...Thêm các dòng khác nếu cần */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingPromotionPopupMobile; 