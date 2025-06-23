import React from "react";

const MyShopPromotionPopupMobile: React.FC = () => {
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
            color: "#3DE1F3",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          MYSHOP
        </span>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Đối tượng ưu đãi
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Khách hàng sử dụng dịch vụ MyShop hoặc MyShop cao cấp và duy trì số dư bình quân trên tài khoản thanh toán từ 5 triệu đồng trở lên, tối thiểu 1 tháng trong thời gian diễn ra chương trình.
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
            Số dư bình quân trên TKTT x SL tháng duy trì (tối thiểu 5 triệu đồng)
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 600, fontSize: 13 }}>SỐ LƯỢNG MSDT =</span>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>5.000.000</span>
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
          Phương Thức Nhận Mã Số Dự Thưởng
        </div>
        <div style={{ marginBottom: 6 }}>
          Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:
        </div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 4 }}>
            Thời gian duy trì số dư bình quân trên tài khoản thanh toán để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025
          </li>
          <li>
            Thời gian thông báo mã số dự thưởng: Trước ngày 15/11/2025
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyShopPromotionPopupMobile; 