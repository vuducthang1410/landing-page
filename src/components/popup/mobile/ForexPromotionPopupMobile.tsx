import React from "react";

const ForexPromotionPopupMobile: React.FC = () => {
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
        minHeight: 700,
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
            textTransform: "uppercase",
          }}
        >
          NGOẠI TỆ
        </span>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Đối tượng Ưu đãi
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Khách hàng cá nhân tham gia mua bán ngoại tệ với KienlongBank trong thời gian diễn ra chương trình.
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
            Giá trị giao dịch quy đổi ra VND / Hệ số loại giao dịch
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 600, fontSize: 13 }}>Số lượng MSDT =</span>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>100.000.000</span>
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#F3F3F3", marginTop: 4, marginBottom: 4 }}>
          - Giá trị giao dịch quy đổi ra VND = Số lượng ngoại tệ giao dịch x Tỷ giá giao dịch<br/>
          - Hệ số loại giao dịch<br/>
          - Giao dịch phục vụ thanh toán quốc tế (có chứng từ hợp pháp, phù hợp quy định, chuyển tiền hợp pháp,...)<br/>
          - Giao dịch chuyển đổi và chi trả trong nước (mua/bán đổi tiền mặt, không kèm chứng từ).<br/>
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
            Mỗi giao dịch từ 10 triệu VND quy đổi trở lên mới được tính khi lấy MSDT.
          </li>
          <li style={{ marginBottom: 4 }}>
            Giao dịch phải có chứng từ hợp lệ nội ngoại tệ áp dụng và sử dụng đúng mục đích.
          </li>
          <li style={{ marginBottom: 4 }}>
            Giao dịch bị huỷ/đảo chiều sau khi phát sinh sẽ không được tính MSDT.
          </li>
          <li style={{ marginBottom: 4 }}>
            KH trúng thưởng nhưng bị phát hiện kê khai sai mục đích giao dịch/vi phạm thì sẽ bị huỷ giải thưởng và không được nhận thưởng.
          </li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 15, margin: '12px 0 6px 0' }}>
          Phương Thức Nhận Mã Số Dự Thưởng
        </div>
        <div style={{ marginBottom: 6 }}>
          Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:
        </div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 4 }}>
            Thời gian phát hiện các giao dịch mua bán ngoại tệ sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025
          </li>
          <li>
            Thời gian thông báo mã số dự thưởng: Trước thời gian quay số 2 ngày làm việc.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForexPromotionPopupMobile; 