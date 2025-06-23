import React from "react";
import { combo2, combo3 } from "../../../data";

const ComboCreditCustomerPopupMobile: React.FC = () => {
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
        minHeight: 1178,
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
          COMBO DÀNH CHO<br />KHÁCH HÀNG TÍN DỤNG
        </span>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Thời gian áp dụng
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Từ 25/06/2025 - 31/10/2025
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Đối tượng được hưởng khuyến mại:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Khách hàng cá nhân phát sinh khoản vay mới (không bao gồm cá nhân vay cầm cố sổ tiết kiệm) tại các đơn vị kinh doanh của KienlongBank và đáp ứng điều kiện về thời gian giải ngân, số tiền vay theo quy định tại chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Sản phẩm áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Khoản vay hợp lệ của khách hàng cá nhân phát sinh khoản vay mới trong thời gian diễn ra chương trình (không bao gồm vay cầm cố sổ tiết kiệm) và đáp ứng điều kiện về thời gian giải ngân, số tiền vay theo quy định tại chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Điều khoản áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          - Khoản vay có HĐTD được giải ngân và kết thúc nhận nợ (SUNN) với giá trị nhận nợ thỏa điều kiện chương trình.<br />
          - Mỗi KH nhận tối đa 01 quà tặng trong thời gian diễn ra chương trình.<br />
          - Trường hợp hợp nhất quà tặng, KienlongBank được chủ động linh hoạt quà tặng trong phạm vi combo 1 và 2.<br />
          - Mỗi cá nhân chỉ được nhận tối đa 01 quà tặng/01 mã/01 lượt.<br />
          - Trường hợp hợp nhất quà tặng, KienlongBank được chủ động linh hoạt quà tặng trong phạm vi combo 1 và 2.<br />
          - Quà tặng không có giá trị quy đổi thành tiền mặt.<br />
          - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến mại khác.
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
          Điều Kiện:
        </div>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Combo 1 – dành cho KHCN vay SXKD</div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - Khoản vay SXKD<br />
            - TKST gửi tối thiểu 15% giá trị hợp đồng mức vay hoặc số tiền vay<br />
            - Đăng ký thành công dịch vụ MyShop.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#A259E6', minWidth: 80 }}>2.000</span>
            <div>
              <img src={combo3} alt="Áo mưa" style={{ width: 90, marginBottom: 2 }} />
              <div style={{ fontWeight: 600, fontSize: 14, color: '#2B217F', textAlign: 'center' }}>ÁO MƯA</div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Combo 2 – dành cho KHCN vay PVĐS</div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - Khoản vay PVĐS<br />
            - TKST gửi tối thiểu 25% giá trị hợp đồng mức vay hoặc số tiền vay
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#A259E6', minWidth: 80 }}>1.500</span>
            <div>
              <img src={combo2} alt="Mũ bảo hiểm" style={{ width: 90, marginBottom: 2 }} />
              <div style={{ fontWeight: 600, fontSize: 14, color: '#2B217F', textAlign: 'center' }}>MŨ BẢO HIỂM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCreditCustomerPopupMobile; 