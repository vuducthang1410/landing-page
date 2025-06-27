import React from "react";
import { forexPopup } from "../../../data";

type ForexPromotionPopupMobileProps = { scaled: (value: number) => number };
const ForexPromotionPopupMobile: React.FC<ForexPromotionPopupMobileProps> = ({ scaled }) => {
  return (
    <div
      style={{
        background: `url(${forexPopup}) no-repeat center center`,
        backgroundSize: "contain",
        borderRadius: scaled(16),
        paddingTop: scaled(44),
        paddingLeft: scaled(13),
        paddingRight: scaled(13),
        color: "#fff",
        fontFamily: "Montserrat",
        maxWidth: scaled(375),
        margin: "0 auto",
        height: scaled(1078),
        boxShadow: `0 ${scaled(4)}px ${scaled(24)}px rgba(0,0,0,0.15)`,
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: scaled(16) }}>
        <span
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: scaled(20),
            letterSpacing: 0,
            textTransform: "uppercase",
            height: scaled(33),
            lineHeight: "100%",
          }}
        >
          NGOẠI TỆ
        </span>
      </div>
      <div style={{}}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: scaled(16), marginBottom: scaled(2) }}
        >
          Đối tượng Ưu đãi
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#F3F3F3",
            height: scaled(68),
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          Khách hàng cá nhân tham gia mua bán ngoại tệ với KienlongBank trong
          thời gian diễn ra chương trình.
        </div>
      </div>
      <div style={{ marginBottom: scaled(12) }}>
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: scaled(16), marginBottom: scaled(2) }}
        >
          Số lượng Mã số dự thưởng (MSDT)
        </div>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`,
            borderRadius: scaled(8),
            padding: scaled(10),
            marginTop: scaled(6),
            marginBottom: scaled(6),
            width: scaled(356),
            height: scaled(93),
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
              <div>Giá trị giao dịch quy đổi ra VND </div>
              <div>x</div>
              <div>Hệ số loại giao dịch</div>
            </div>
            <span style={{ fontWeight: 700, fontSize: scaled(10), color: "#fff" }}>
              100.000.000
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#FFFFFF",
            marginTop: scaled(23),
            marginBottom: scaled(23),
            lineHeight: "150%",
            letterSpacing: "0",
            height: scaled(113),
            width:scaled(349)
          }}
        >
          - Giá trị giao dịch quy đổi ra VND = Số lượng ngoại tệ giao dịch × Tỷ
          giá giao dịch
          <br />- Hệ số loại giao dịch: 
          <br/>+ Giao dịch phục vụ thanh toán quốc tế
          (có chứng từ, như học phí, viện phí, du lịch, chuyển tiền hợp pháp…):
          4
          <br />
          Giao dịch phục vụ nhu cầu cá nhân trong nước (mua/bán đổi tiền mặt,
          không kèm chứng từ):2
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: scaled(16),
          color: "#204295",
          padding: scaled(20),
          fontSize: scaled(13),
          marginTop: scaled(18),
          height: scaled(497),
        }}
      >
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(15),
            marginBottom: scaled(6),
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          Điều Khoản Và Điều Kiện Áp Dụng:
        </div>
        <ul
          style={{
            fontSize: scaled(12),
            fontWeight: 500,
            textAlign: "justify",
            lineHeight: "150%",
            letterSpacing: "0",
          }}
        >
          <li style={{ marginBottom: scaled(10) }}>
            - Mỗi giao dịch từ 10 triệu VND quy đổi trở lên mới được tính tích
            lũy MSDT.
          </li>
          <li style={{ marginBottom: scaled(10) }}>
            - Giao dịch phải có chứng từ hợp lệ nếu muốn áp dụng hệ số cao hơn
            (thanh toán quốc tế).
          </li>
          <li style={{ marginBottom: scaled(10) }}>
            - Giao dịch bị hủy/điều chỉnh sau khi phát sinh và trước 2 ngày so
            với ngày quay số sẽ bị loại MSDT tương ứng.
          </li>
          <li style={{ marginBottom: scaled(10) }}>
            - KH trúng thưởng nhưng bị phát hiện kê khai sai mục đích giao dịch
            (ví dụ: khai là thanh toán quốc tế nhưng không có chứng từ hợp lệ)
            có thể bị thu hồi giải thưởng
          </li>
        </ul>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(15),
            marginTop: scaled(12),
            marginBottom: scaled(6),
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          Phương Thức Nhận Mã Số Dự Thưởng
        </div>
        <div style={{ marginBottom: scaled(10) }}>
          Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification
          trên App KienlongBank Plus như sau:
        </div>
        <ul
          style={{
            fontSize: scaled(12),
            fontWeight: 500,
            textAlign: "justify",
            lineHeight: "150%",
            letterSpacing: "0",
          }}
        >
          <li style={{ marginBottom: scaled(10) }}>
            - Thời gian thực hiện các giao dịch mua bán ngoại tệ để xét sinh mã:
            Từ 25/06/2025 đến hết ngày 31/10/2025
          </li>
          <li>
            - Thời gian thông báo mã số dự thưởng: Trước thời gian quay số 2
            ngày làm việc
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForexPromotionPopupMobile;
