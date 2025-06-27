import React from "react";
import { bondPopup } from "../../../data";

type BondPromotionPopupMobileProps = { scaled: (value: number) => number };
const BondPromotionPopupMobile: React.FC<BondPromotionPopupMobileProps> = ({
  scaled,
}) => {
  return (
    <div
      style={{
        background: `url(${bondPopup}) no-repeat center center`,
        backgroundSize: "contain",
        borderRadius: scaled(16),
        paddingTop: scaled(44),
        paddingLeft: scaled(13),
        paddingRight: scaled(13),
        color: "#fff",
        fontFamily: "Montserrat, Arial, sans-serif",
        maxWidth: scaled(400),
        margin: "0 auto",
        height: scaled(771),
        boxShadow: `0 ${scaled(4)}px ${scaled(24)}px rgba(0,0,0,0.15)`,
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: scaled(20),
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          TRÁI PHIẾU KIENLONGBANK
        </span>
      </div>
      <div style={{ marginBottom: 12, marginTop: 23 }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
            color: "#fff",
          }}
        >
          Đối tượng ưu đãi
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#F3F3F3",
            lineHeight: "150%",
            letterSpacing: "0",
            textAlign: "justify",
          }}
        >
          KHCN tham gia mua Trái phiếu KienlongBank phát hành ra công chúng Đợt
          3 năm 2024 sẽ được nhận mã số dự thưởng để tham gia quay số trúng
          thưởng chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 54 }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(2),
            color: "#fff",
            lineHeight: "100%",
            letterSpacing: "0",
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
            marginBottom: scaled(6),
            width: scaled(356),
            height: scaled(93),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: scaled(20),
          }}
        >
          <span style={{ fontWeight: 600, fontSize: scaled(10) }}>
            Số lượng MSDT =
          </span>

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
                borderBottom: `1px solid ${scaled(242)}`,
              }}
            >
              <div>Số tiền mua trái phiếu </div>
              <div>x</div>
              <div>Kỳ hạn trái phiếu</div>
            </div>
            <span
              style={{ fontWeight: 700, fontSize: scaled(10), color: "#fff" }}
            >
              100.000.000
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: scaled(16),
          color: "#204295",
          padding: scaled(14),
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
            letterSpacing: "-2%",
          }}
        >
          <li style={{ marginBottom: scaled(4) }}>
            - Trường hợp KH chuyển nhượng một phần/toàn bộ trái phiếu trước thời
            điểm quay số: KienlongBank sẽ loại các mã số dự thưởng tương ứng với
            số tiền mà KH chuyển nhượng ra khỏi dữ liệu quay số. Thời gian chốt
            dữ liệu để loại MSDT là 2 ngày trước khi diễn ra quay số.
          </li>
          <li style={{ marginBottom: scaled(4) }}>
            - Trường hợp KH có tên trong danh sách trúng thưởng nhưng chuyển
            nhượng một phần/toàn bộ trái phiếu trước thời điểm trái phiếu được
            bàn giao thực tế thì hủy trao thưởng: KienlongBank sẽ thu hồi giải
            thưởng và trao cho khách hàng dự bị theo thứ tự ưu tiên.
          </li>
          <li>
            - Trường hợp KH trúng thưởng chuyển nhượng một phần/toàn bộ trái
            phiếu trước thời điểm trái phiếu đáo hạn và sau thời gian trao
            thưởng: Không thu hồi giải thưởng đã trao cho KH.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BondPromotionPopupMobile;
