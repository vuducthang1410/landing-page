import React from "react";

const BondPromotionPopupMobile: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #A259E6 0%, #5F3EEC 100%)",
        borderRadius: 16,
        padding: 16,
        color: "#fff",
        fontFamily: 'Montserrat, Arial, sans-serif',
        maxWidth: 400,
        margin: "0 auto",
        minHeight: 600,
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span
          style={{
            color: "#FF4FC2",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          TRÁI PHIẾU KIENLONGBANK
        </span>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Đối tượng ưu đãi
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          KHCH tham gia mua Trái phiếu KienlongBank phát hành ra công chúng Đợt 3 năm 2024 sẽ được nhận mã số dự thưởng để tham gia quay số trúng thưởng chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Số lượng Mã số dự thưởng (MSDT)
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: 8,
            padding: 10,
            marginTop: 6,
            marginBottom: 6,
          }}
        >
          <div style={{ fontSize: 12, color: "#F3F3F3", marginBottom: 4 }}>
            Số tiền mua trái phiếu / Kỳ hạn trái phiếu
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 600, fontSize: 13 }}>Số lượng MSDT =</span>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>100.000.000</span>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          color: "#2B217F",
          padding: 14,
          fontSize: 13,
          marginTop: 18,
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
          Điều Khoản Và Điều Kiện Áp Dụng:
        </div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 4 }}>
            Trường hợp KH chuyển nhượng một phần/toàn bộ trái phiếu trước thời điểm quay số: KienlongBank sẽ loại các mã số dự thưởng tương ứng với số tiền mà KH chuyển nhượng ra khỏi dữ liệu quay số. Thời gian chốt dữ liệu để loại MSDT là 2 ngày trước khi diễn ra quay số.
          </li>
          <li style={{ marginBottom: 4 }}>
            Trường hợp KH có tên trong danh sách trúng thưởng nhưng chuyển nhượng một phần/toàn bộ trái phiếu trước thời điểm trái phiếu được bàn giao thực tế thì hủy trao thưởng: KienlongBank sẽ thu hồi giải thưởng và trao cho khách hàng dự bị theo thứ tự ưu tiên.
          </li>
          <li>
            Trường hợp KH trúng thưởng nhưng nhượng một phần hoặc toàn bộ trái phiếu không đúng theo hồ sơ đã xác suất trúng thưởng: KienlongBank thu hồi giải thưởng trao cho KH.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BondPromotionPopupMobile; 