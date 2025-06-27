import React from "react";
import { combo3Mobile, comboBondPopup1 } from "../../../data";

interface ComboBondCustomerPopupMobileProps {
  scaled: (value: number) => number;
}

const ComboBondCustomerPopupMobile: React.FC<ComboBondCustomerPopupMobileProps> = ({ scaled }) => {
  return (
    <div
      style={{
        background: `url(${combo3Mobile}) no-repeat center center`,
        backgroundSize: "contain",
        borderRadius: scaled(8),
        padding: scaled(16),
        color: "#fff",
        fontFamily: "Montserrat",
        maxWidth: scaled(400),
        margin: "0 auto",
        height: scaled(1043),
        paddingTop: scaled(44),
        boxShadow: `0 ${scaled(4)}px ${scaled(24)}px rgba(0,0,0,0.15)`,
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: scaled(16) }}>
        <span
          style={{
            color: "#3DE1F3",
            fontWeight: 700,
            fontSize: scaled(20),
            letterSpacing: scaled(1),
            textTransform: "uppercase",
            height: scaled(33),
          }}
        >
          COMBO DÀNH CHO
          <br />
          KHÁCH HÀNG TRÁI PHIẾU
        </span>
      </div>
      <div style={{ marginBottom: scaled(10) }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: scaled(16), marginBottom: scaled(2) }}
        >
          Thời gian áp dụng
        </div>
        <div style={{ fontSize: scaled(12), color: "#F3F3F3" }}>
          Từ 25/06/2025 - 31/10/2025
        </div>
      </div>
      <div style={{ marginBottom: scaled(10) }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: scaled(16), marginBottom: scaled(2) }}
        >
          Sản phẩm áp dụng:
        </div>
        <div style={{ fontSize: scaled(12), color: "#F3F3F3" }}>
          Trái phiếu KienlongBank phát hành ra công chúng.
        </div>
      </div>
      <div style={{ marginBottom: scaled(10) }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: scaled(16), marginBottom: scaled(2) }}
        >
          Điều khoản áp dụng:
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#F3F3F3",
            display: "flex",
            flexDirection: "column",
            gap: scaled(5),
            textAlign: "justify",
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          <span>
            - Khách hàng không được hủy đặt mua trái phiếu cho đến hết ngày kết
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
          borderRadius: scaled(16),
          color: "#2B217F",
          padding: scaled(14),
          fontSize: scaled(13),
          marginTop: scaled(40),
        }}
      >
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: scaled(16), marginBottom: scaled(6) }}
        >
          Điều Kiện:
        </div>
        <div style={{ marginBottom: scaled(10) }}>
          <div style={{ fontWeight: 700, fontSize: scaled(14), marginBottom: scaled(2) }}>
            Combo 1
          </div>
          <div style={{ fontSize: scaled(12), marginBottom: scaled(4) }}>
            - Tham gia tối thiểu 75 triệu trái phiếu Đợt 3 và
            <br />- Mua TKSD (tối thiểu 500 nghìn đồng)
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: scaled(115),
            }}
          >
            <div
              style={{
                width: scaled(122),
                height: scaled(71),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: scaled(4),
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: scaled(42),
                  background:
                    "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: scaled(80),
                  height: scaled(42),
                  lineHeight: "100%",
                }}
              >
                750
              </span>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: scaled(14),
                  color: "#2B217F",
                  textAlign: "center",
                  textTransform: "uppercase",
                  width:scaled(142)
                }}
              >
                Bộ 10 chén (bát)
              </div>
            </div>

            <img
              src={comboBondPopup1}
              alt="Áo mưa"
              style={{ width: scaled(168.32), height: scaled(98) }}
            />
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: scaled(14), marginBottom: scaled(2) }}>
            Combo 2
          </div>
          <div style={{ fontSize: scaled(12), marginBottom: scaled(4) }}>
            - Lũy kế tham gia mua trái phiếu trong 3 đợt từ 100 triệu đồng,
            trong đó đợt 3 tối thiểu 25 triệu đồng trở lên
            <br />- Đăng ký dịch vụ MyShop gói Start Up trở lên
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: scaled(115),
            }}
          >
            <div
              style={{
                width: scaled(122),
                height: scaled(71),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // gap: scaled(4),
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: scaled(42),
                  background:
                    "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: scaled(80),
                  height: scaled(42),
                  lineHeight: "100%",
                }}
              >
                250
              </span>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: scaled(14),
                  color: "#2B217F",
                  textAlign: "center",
                  textTransform: "uppercase",
                  width:scaled(142)
                }}
              >
                Bộ 10 chén (bát)
              </div>
            </div>

            <img
              src={comboBondPopup1}
              alt="Áo mưa"
              style={{ width: scaled(168.32), height: scaled(98) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBondCustomerPopupMobile;
