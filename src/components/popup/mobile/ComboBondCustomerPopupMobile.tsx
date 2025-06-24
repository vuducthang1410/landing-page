import React from "react";
import { combo3Mobile, comboBondPopup1 } from "../../../data";

const ComboBondCustomerPopupMobile: React.FC = () => {
  return (
    <div
      style={{
        background: `url(${combo3Mobile}) no-repeat center center`,
        borderRadius: 8,
        padding: 16,
        color: "#fff",
        fontFamily: "Montserrat, Arial, sans-serif",
        maxWidth: 400,
        margin: "0 auto",
        height: "1043px",
        paddingTop: 44,
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span
          style={{
            color: "#3DE1F3",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "100%",
            textTransform: "uppercase",
            height: 33,
          }}
        >
          COMBO DÀNH CHO
          <br />
          KHÁCH HÀNG TRÁI PHIẾU
        </span>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}
        >
          Thời gian áp dụng
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Từ 25/06/2025 - 31/10/2025
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}
        >
          Sản phẩm áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#F3F3F3" }}>
          Trái phiếu KienlongBank phát hành ra công chúng.
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}
        >
          Điều khoản áp dụng:
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#F3F3F3",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            textAlign: "justify",
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          <span>
            - Khách hàng không được hủy đầu tư trái phiếu cho đến hết ngày kết
            thúc đợt chào bán.
          </span>
          <span>
            - Sau khi nộp tiền và phong tỏa tiền thành công, khách hàng nhận quà
            tại Chi nhánh/Phòng giao dịch KienlongBank, nơi khách hàng đăng ký
            mua trái phiếu.
          </span>
          <span>
            - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến
            mãi khác (nếu có) theo quy định của KienlongBank từng thời kỳ.
          </span>
          <span>
            - Mỗi KH nhận tối đa 01 quà tặng trong thời gian triển khai chương
            trình.
          </span>
          <span>- Quà tặng không có giá trị quy đổi thành tiền mặt.</span>
          <span>
            - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến
            mại khác.
          </span>
          <span>
            - Khách hàng cam kết nắm giữ trái phiếu tối thiểu 4 tháng.
            KienlongBank có quyền thu hồi quà tặng trong trường hợp khách hàng
            chuyển nhượng trái phiếu sớm và không thỏa điều kiện thời gian nắm
            giữ trái phiếu tối thiểu.
          </span>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          color: "#2B217F",
          padding: 14,
          fontSize: 13,
          marginTop: 40,
        }}
      >
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}
        >
          Điều Kiện:
        </div>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
            Combo 1
          </div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - Tham gia tối thiểu 75 triệu trái phiếu Đợt 3 và
            <br />- Mua TKSD (tối thiểu 500 nghìn đồng)
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 115,
            }}
          >
            <div
              style={{
                width: 122,
                height: 71,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 42,
                  background:
                    "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: 80,
                  height: 42,
                  lineHeight: "100%",
                }}
              >
                750
              </span>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#2B217F",
                  textAlign: "center",
                }}
              >
                Bộ 10 chén (bát)
              </div>
            </div>

            <img
              src={comboBondPopup1}
              alt="Áo mưa"
              style={{ width: 168.32061767578125, height: 98 }}
            />
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
            Combo 2
          </div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - Lũy kế tham gia mua trái phiếu trong 3 đợt từ 100 triệu đồng,
            trong đó đợt 3 tối thiểu 25 triệu đồng trở lên
            <br />- Đăng ký dịch vụ MyShop gói Start Up trở lên
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 115,
            }}
          >
            <div
              style={{
                width: 122,
                height: 71,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 42,
                  background:
                    "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: 80,
                  height: 42,
                  lineHeight: "100%",
                }}
              >
                250
              </span>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#2B217F",
                  textAlign: "center",
                }}
              >
                Bộ 10 chén (bát)
              </div>
            </div>

            <img
              src={comboBondPopup1}
              alt="Áo mưa"
              style={{ width: 168.32061767578125, height: 98 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBondCustomerPopupMobile;
