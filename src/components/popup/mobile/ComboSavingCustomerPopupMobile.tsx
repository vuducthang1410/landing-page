import React from "react";
import muBaoHiem from "../../assets/mubaohiem.png";
import aoMua from "../../assets/aomua.png";

const ComboSavingCustomerPopupMobile: React.FC = () => {
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
        minHeight: 900,
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
          COMBO DÀNH CHO<br />KHÁCH HÀNG TIỀN GỬI
        </span>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Sản phẩm áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Tiền gửi tiết kiệm tiền gửi có kỳ hạn tại quầy hoặc trực tuyến, tài khoản thanh toán số đẹp, dịch vụ MyShop.
        </div>
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
          Điều khoản áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          - KH được tham gia đồng thời combo Tiền gửi, combo Tín dụng và Combo Trái phiếu và nhận tối đa 01 quà tặng trong mỗi combo.<br />
          - Trường hợp hợp nhất quà tặng, KienlongBank được chủ động linh hoạt quà tặng trong phạm vi combo 1 và 2.<br />
          - Mỗi cá nhân chỉ được nhận tối đa 01 phần quà/01 mã/01 lượt. Trường hợp bất kỳ toàn trước hạn một phần/ toàn bộ số tiền gửi, số dư TKTT, số dư MyShop thì giá trị quà tặng sẽ bị thu hồi lại theo chính sách của KienlongBank.<br />
          - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến mại khác và áp dụng các chương trình chính sách lãi suất ưu đãi (nếu có) theo quy định của KienlongBank từng thời kỳ.
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
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Combo 1</div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - KHCM gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và<br />
            - Mua TKST trả góp phí thực thu từ 500 nghìn đồng trở lên
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#A259E6', minWidth: 80 }}>1.500</span>
            <div>
              <img src={muBaoHiem} alt="Mũ bảo hiểm" style={{ width: 90, marginBottom: 2 }} />
              <div style={{ fontWeight: 600, fontSize: 14, color: '#2B217F', textAlign: 'center' }}>MŨ BẢO HIỂM</div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Combo 2</div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - KHCM gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và<br />
            - Đăng ký thành công dịch vụ MyShop
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#A259E6', minWidth: 80 }}>1.500</span>
            <div>
              <img src={aoMua} alt="Áo mưa" style={{ width: 90, marginBottom: 2 }} />
              <div style={{ fontWeight: 600, fontSize: 14, color: '#2B217F', textAlign: 'center' }}>ÁO MƯA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboSavingCustomerPopupMobile; 