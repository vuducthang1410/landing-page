import React from "react";
import { myshopPopup } from "../../../data";

type MyShopPromotionPopupMobileProps = { scaled: (value: number) => number };
const MyShopPromotionPopupMobile: React.FC<MyShopPromotionPopupMobileProps> = ({ scaled }) => {
  return (
    <div
      style={{
        background: `url(${myshopPopup}) no-repeat center center`,
        backgroundSize: "contain",
        borderRadius: scaled(16),
        paddingTop: scaled(44),
        paddingLeft: scaled(13),
        paddingRight: scaled(13),
        color: "#fff",
        fontFamily: "Montserrat",
        margin: "0 auto",
        height: scaled(700),
        boxShadow: `0 ${scaled(4)}px ${scaled(24)}px rgba(0,0,0,0.15)`,
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: scaled(23), }}>
        <span
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: scaled(20),
            letterSpacing: 1,
            height: scaled(33),
            lineHeight: "100%",
           
          }}
        >
          MYSHOP
        </span>
      </div>
      <div style={{ marginBottom: scaled(12) }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
            color: "#fff",
            height: scaled(26),
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          Đối tượng ưu đãi
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#F3F3F3",
            lineHeight: "120%",
            letterSpacing: "-2%",
            textAlign: "justify",
            marginBottom: scaled(23),
            fontWeight: 500,
            height: scaled(68),
            width: scaled(349),
            fontFamily: "Montserrat",
          }}
        >
          Khách hàng sử dụng dịch vụ MyShop hoặc MyShop cao cấp và duy trì số dư
          bình quân trên tài khoản thanh toán từ 5 triệu đồng trở lên, tối thiểu
          1 tháng trong thời gian diễn ra chương trình.
        </div>
      </div>
      <div style={{ marginBottom: scaled(12) }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
            color: "#fff",
          }}
        >
          Số lượng Mã số dự thưởng (MSDT)
        </div>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`,
            borderRadius: scaled(8),
            padding: scaled(10),
            marginTop: scaled(6),
            marginBottom: scaled(40),
            width: scaled(356),
            height: scaled(79),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: scaled(20),
          }}
        >
          <span style={{ fontWeight: 600, fontSize: scaled(10) }}>Số lượng MSDT =</span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: scaled(15),
            }}
          >
            <div
              style={{
                fontSize: scaled(10),
                color: "#F3F3F3",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: scaled(32),
                lineHeight: "100%",
                letterSpacing: "0",
                borderBottom: "1px solid #F3F3F3",
              }}
            >
              <div>Số dư bình quân trên TKTT</div>
              <div>x</div>
              <div>{"SL tháng duy trì  ( ≥ 5 triệu đồng)"}</div>
            </div>
            <span style={{ fontWeight: 700, fontSize: scaled(10), color: "#fff" }}>
              5.000.000
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: scaled(16),
          color: "#204295F",
          padding: scaled(20),
          fontSize: scaled(13),
          marginTop: scaled(18),
        }}
      >
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(6),
            color: "#2B217F",
            height: scaled(26),
            lineHeight: "100%",
            letterSpacing: "-0.5px",
            width: scaled(309),
          }}
        >
          Phương Thức Nhận Mã Số Dự Thưởng
        </div>
        <div
          style={{
            marginBottom: scaled(6),
            fontSize: scaled(12),
            fontWeight: 500,
            lineHeight: "150%",
            letterSpacing: "-2%",
            color: "#204295",
            textAlign: "justify",
          }}
        >
          Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification
          trên App KienlongBank Plus như sau:
        </div>
        <ul
          style={{
            marginBottom: scaled(6),
            fontSize: scaled(12),
            fontWeight: 500,
            lineHeight: "150%",
            letterSpacing: "-2%",
            color: "#204295",
            textAlign: "justify",
          }}
        >
          <li style={{ marginBottom: scaled(4) }}>
            - Thời gian duy trì số dư bình quân trên tài khoản thanh toán để xét
            sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025
          </li>
          <li>- Thời gian thông báo mã số dự thưởng: Trước ngày 15/11/2025</li>
        </ul>
      </div>
    </div>
  );
};

export default MyShopPromotionPopupMobile;
