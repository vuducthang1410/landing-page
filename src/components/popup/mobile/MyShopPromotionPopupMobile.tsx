import React from "react";
import { myshopPopup } from "../../../data";

const MyShopPromotionPopupMobile: React.FC = () => {
  return (
    <div
      style={{
        background: `url(${myshopPopup}) no-repeat center center`,
        borderRadius: 16,
        paddingTop: 44,
        paddingLeft: 13,
        paddingRight: 13,
        color: "#fff",
        fontFamily: "Montserrat",
        margin: "0 auto",
        height: 700,
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
            height: 33,
            lineHeight: "100%",
            marginBottom: 23,
          }}
        >
          MYSHOP
        </span>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 2,
            color: "#fff",
            height: 26,
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          Đối tượng ưu đãi
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#F3F3F3",
            lineHeight: "120%",
            letterSpacing: "-2%",
            textAlign: "justify",
            marginBottom: 23,
            fontWeight: 500,
            height: 68,
            width: 349,
            fontFamily: "Montserrat",
          }}
        >
          Khách hàng sử dụng dịch vụ MyShop hoặc MyShop cao cấp và duy trì số dư
          bình quân trên tài khoản thanh toán từ 5 triệu đồng trở lên, tối thiểu
          1 tháng trong thời gian diễn ra chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 2,
            color: "#fff",
          }}
        >
          Số lượng Mã số dự thưởng (MSDT)
        </div>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`,
            borderRadius: 8,
            padding: 10,
            marginTop: 6,
            marginBottom: 40,
            width: 356,
            height: 79,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 10 }}>Số lượng MSDT =</span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: 15,
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: "#F3F3F3",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: 32,
                lineHeight: "100%",
                letterSpacing: "0",
                borderBottom: "1px solid #F3F3F3",
              }}
            >
              <div>Số dư bình quân trên TKTT</div>
              <div>x</div>
              <div>{"SL tháng duy trì  ( ≥ 5 triệu đồng)"}</div>
            </div>
            <span style={{ fontWeight: 700, fontSize: 10, color: "#fff" }}>
              5.000.000
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          color: "#204295F",
          padding: 20,
          fontSize: 13,
          marginTop: 18,
        }}
      >
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 6,
            color: "#2B217F",
            height: 26,
            lineHeight: "100%",
            letterSpacing: "-0.5px",
            width: 309,
          }}
        >
          Phương Thức Nhận Mã Số Dự Thưởng
        </div>
        <div
          style={{
            marginBottom: 6,
            fontSize: 12,
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
            marginBottom: 6,
            fontSize: 12,
            fontWeight: 500,
            lineHeight: "150%",
            letterSpacing: "-2%",
            color: "#204295",
            textAlign: "justify",
          }}
        >
          <li style={{ marginBottom: 4 }}>
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
