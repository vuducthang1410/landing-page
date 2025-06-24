import React from "react";
import {
  combo2Mobile,
  comboSavingPopup1,
  comboSavingPopup2,
} from "../../../data";

const ComboCreditCustomerPopupMobile: React.FC = () => {
  return (
    <div
      style={{
        background: `url(${combo2Mobile}) no-repeat center center`,
        borderRadius: 8,
        paddingLeft: 13,
        paddingRight: 13,
        color: "#fff",
        fontFamily: "Montserrat",
        width: "375px",
        margin: "0 auto",
        height: "1465px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        paddingTop: 44,
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 23 }}>
        <span
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 0,
            textTransform: "uppercase",
            lineHeight: "100%",
            height: 33,
          }}
        >
          COMBO DÀNH CHO
          <br />
          KHÁCH HÀNG TÍN DỤNG
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
          Đối tượng được hưởng khuyến mại:
        </div>
        <div style={{ fontSize: 12, color: "#FFFFFF", textAlign: "justify" }}>
          Khách hàng cá nhân phát sinh khoản vay mới (không bao gồm cá nhân vay
          cầm cố sổ tiết kiệm) tại các đơn vị kinh doanh của KienlongBank và đáp
          ứng điều kiện về thời gian giải ngân, số tiền vay theo quy định tại
          chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}
        >
          Sản phẩm áp dụng:
        </div>
        <div style={{ fontSize: 12, color: "#FFFFFF", textAlign: "justify" }}>
          Khoản vay hợp lệ của khách hàng cá nhân phát sinh khoản vay mới trong
          thời gian diễn ra chương trình (không bao gồm vay cầm cố sổ tiết kiệm)
          và đáp ứng điều kiện về thời gian giải ngân, số tiền vay theo quy định
          tại chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 37, textAlign: "left" }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 2,
            lineHeight: "100%",
            height: 26,
            color: "#FFFFFF",
          }}
        >
          Điều khoản áp dụng:
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            gap: 5,
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
          borderRadius: 16,
          color: "#2B217F",
          padding: 14,
          fontSize: 13,
          height: 523,
        }}
      >
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}
        >
          Điều Kiện:
        </div>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
            Combo 1 – dành cho KHCN vay SXKD
          </div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - Khoản vay SXKD
            <br />
            - TKST gửi tối thiểu 15% giá trị hợp đồng mức vay hoặc số tiền vay
            <br />- Đăng ký thành công dịch vụ MyShop.
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
                2.000
              </span>{" "}
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#2B217F",
                  textAlign: "center",
                }}
              >
                ÁO MƯAMƯA
              </div>
            </div>

            <img
              src={comboSavingPopup2}
              alt="Áo mưa"
              style={{ width: 165.3258819580078, height: 115 }}
            />
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
            Combo 2 – dành cho KHCN vay PVĐS
          </div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - Khoản vay PVĐS
            <br />- TKST gửi tối thiểu 25% giá trị hợp đồng mức vay hoặc số tiền
            vay
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
                1.500
              </span>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
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
              style={{ width: 165.3258819580078, height: 115 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCreditCustomerPopupMobile;
