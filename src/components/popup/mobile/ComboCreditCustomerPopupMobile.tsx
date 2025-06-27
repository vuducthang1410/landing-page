import React from "react";
import {
  combo2Mobile,
  comboSavingPopup1,
  comboSavingPopup2,
} from "../../../data";

interface ComboCreditCustomerPopupMobileProps {
  scaled: (value: number) => number;
}

const ComboCreditCustomerPopupMobile: React.FC<
  ComboCreditCustomerPopupMobileProps
> = ({ scaled }) => {
  return (
    <div
      style={{
        background: `url(${combo2Mobile}) no-repeat center center`,
        backgroundSize: "contain",
        borderRadius: scaled(8),
        paddingLeft: scaled(13),
        paddingRight: scaled(13),
        color: "#fff",
        fontFamily: "Montserrat",
        width: scaled(375),
        margin: "0 auto",
        height: scaled(1465),
        boxShadow: `0 ${scaled(4)}px ${scaled(24)}px rgba(0,0,0,0.15)`,
        paddingTop: scaled(44),
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: scaled(23) }}>
        <span
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: scaled(20),
            letterSpacing: 0,
            textTransform: "uppercase",
            lineHeight: "100%",
            height: scaled(33),
          }}
        >
          COMBO DÀNH CHO
          <br />
          KHÁCH HÀNG TÍN DỤNG
        </span>
      </div>
      <div style={{ marginBottom: scaled(10) }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
          }}
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
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
          }}
        >
          Đối tượng được hưởng khuyến mại:
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#FFFFFF",
            textAlign: "justify",
          }}
        >
          Khách hàng cá nhân phát sinh khoản vay mới (không bao gồm cá nhân vay
          cầm cố sổ tiết kiệm) tại các đơn vị kinh doanh của KienlongBank và đáp
          ứng điều kiện về thời gian giải ngân, số tiền vay theo quy định tại
          chương trình.
        </div>
      </div>
      <div style={{ marginBottom: scaled(10) }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
          }}
        >
          Sản phẩm áp dụng:
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#FFFFFF",
            textAlign: "justify",
          }}
        >
          Khoản vay hợp lệ của khách hàng cá nhân phát sinh khoản vay mới trong
          thời gian diễn ra chương trình (không bao gồm vay cầm cố sổ tiết kiệm)
          và đáp ứng điều kiện về thời gian giải ngân, số tiền vay theo quy định
          tại chương trình.
        </div>
      </div>
      <div style={{ marginBottom: scaled(37), textAlign: "left" }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
            lineHeight: "100%",
            height: scaled(26),
            color: "#FFFFFF",
          }}
        >
          Điều khoản áp dụng:
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            gap: scaled(5),
            textAlign: "justify",
          }}
        >
          <span>
            - Khoản vay có Hợp đồng tín dụng và Khế ước nhận nợ (KUNN) ký và
            giải ngân trong thời gian của chương trình.
          </span>
          <span>
            - Sau khi giải ngân thành công, khách hàng nhận quà tại Chi
            nhánh/Phòng giao dịch KienlongBank, nơi khách hàng vay vốn..
          </span>
          <span>
            - Mỗi khách hàng nhận tối đa 01 quà tặng trong thời gian diễn ra
            chương trình.
          </span>
          <span>
            - Trường hợp hết quà tặng theo combo của khách hàng, KienlongBank sẽ
            tặng KH quà tặng có giá trị thấp hơn liền kề nếu khách hàng đồng ý
            và KienlongBank còn quà.
          </span>
          <span>- Quà tặng không có giá trị quy đổi thành tiền mặt.</span>
          <span>
            - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến
            mại khác.
          </span>
          <span>
            - Khách hàng cam kết duy trì khoản vay tối thiểu 3 tháng.
            KienlongBank có quyền thu hồi quà tặng trong trường hợp khách hàng
            tất toán (sớm) khoản vay và không thỏa điều kiện thời gian duy trì
            khoản vay tối thiểu.
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
          height: scaled(523),
        }}
      >
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(15),
            marginBottom: scaled(6),
          }}
        >
          Điều Kiện:
        </div>
        <div style={{ marginBottom: scaled(10) }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: scaled(14),
              marginBottom: scaled(2),
            }}
          >
            Combo 1 – dành cho KHCN vay SXKD
          </div>
          <div style={{ fontSize: scaled(12), marginBottom: scaled(4),fontWeight:500 }}>
            - Khoản vay SXKD
            <br />
            - TKSĐ tối thiểu 1,5%*Giá trị hạn mức vay hoặc số tiền vay
            <br />- Đăng ký thành công dịch vụ MyShop.
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
                2.000
              </span>{" "}
              <div
                style={{
                  fontWeight: 600,
                  fontSize: scaled(14),
                  color: "#2B217F",
                  textAlign: "center",
                }}
              >
                ÁO MƯA
              </div>
            </div>

            <img
              src={comboSavingPopup2}
              alt="Áo mưa"
              style={{ width: scaled(176.90838623046875), height: scaled(103) }}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: scaled(14),
              marginBottom: scaled(2),
            }}
          >
            Combo 2 – dành cho KHCN vay PVĐS
          </div>
          <div style={{ fontSize: scaled(12), marginBottom: scaled(4),fontWeight:500 }}>
            - Khoản vay PVĐS
            <br />- TKSĐ tối thiểu 2%* Giá trị hạn mức vay hoặc số tiền vay
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
                1.500
              </span>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: scaled(14),
                  color: "#2B217F",
                  textAlign: "center",
                }}
              >
                ÁO MƯA
              </div>
            </div>

            <img
              src={comboSavingPopup1}
              alt="Áo mưa"
              style={{ width: scaled(165.3258819580078), height: scaled(115) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCreditCustomerPopupMobile;
