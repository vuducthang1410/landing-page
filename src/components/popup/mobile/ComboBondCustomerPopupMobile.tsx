import React from "react";
import { combo2 } from "../../../data";

const ComboBondCustomerPopupMobile: React.FC = () => {
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
        minHeight: 950,
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
          COMBO DÀNH CHO<br />KHÁCH HÀNG TRÁI PHIẾU
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
          Sản phẩm áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Trái phiếu KienlongBank phát hành ra công chúng.
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
          Điều khoản áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          - Khách hàng không được hủy đầu tư trái phiếu cho đến hết ngày kết thúc đợt chào bán.<br />
          - Sau khi nộp tiền và phong tỏa tiền thành công, khách hàng nhận quà tại các chi nhánh/Phòng giao dịch KienlongBank, hoặc khách hàng đăng ký mua trái phiếu online sẽ nhận quà tại nhà.<br />
          - Mỗi KH nhận tối đa 01 quà tặng trong thời gian diễn ra chương trình.<br />
          - Trường hợp hợp nhất quà tặng, KienlongBank được chủ động linh hoạt quà tặng theo quy định của KienlongBank từng thời kỳ.<br />
          - Quà tặng không có giá trị quy đổi thành tiền mặt.<br />
          - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến mại khác.<br />
          - Khách hàng cam kết nắm giữ trái phiếu tối thiểu 4 tháng. KienlongBank có quyền thu hồi quà tặng trong trường hợp khách hàng chuyển nhượng trái phiếu sớm và không thỏa điều kiện thời gian nắm giữ trái phiếu tối thiểu.
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
            - Tham gia tối thiểu 75 triệu trái phiếu Đợt 3 và<br />
            - Mua TKSD (tối thiểu 500 nghìn đồng)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#A259E6', minWidth: 80 }}>750</span>
            <div>
              <img src={combo2} alt="Bộ 10 chén (bát)" style={{ width: 90, marginBottom: 2 }} />
              <div style={{ fontWeight: 600, fontSize: 14, color: '#2B217F', textAlign: 'center' }}>BỘ 10 CHÉN (BÁT)</div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Combo 2</div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - Lũy kế tham gia mua trái phiếu trong 3 đợt từ 100 triệu đồng, trong đó đợt 3 tối thiểu 25 triệu đồng trở lên<br />
            - Đăng ký dịch vụ MyShop gói Start Up trở lên
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#A259E6', minWidth: 80 }}>250</span>
            <div>
              <img src={combo2} alt="Bộ 10 chén (bát)" style={{ width: 90, marginBottom: 2 }} />
              <div style={{ fontWeight: 600, fontSize: 14, color: '#2B217F', textAlign: 'center' }}>BỘ 10 CHÉN (BÁT)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBondCustomerPopupMobile; 