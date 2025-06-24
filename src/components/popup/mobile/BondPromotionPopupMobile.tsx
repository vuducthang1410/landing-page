import React from "react";
import { bondPopup } from "../../../data";

const BondPromotionPopupMobile: React.FC = () => {
  return (
    <div
      style={{
        background: `url(${bondPopup}) no-repeat center center`,
        borderRadius: 16,
        paddingTop: 44,
        paddingLeft: 13,
        paddingRight: 13,
        color: "#fff",
        fontFamily: "Montserrat, Arial, sans-serif",
        maxWidth: 400,
        margin: "0 auto",
        height: 771,
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        textAlign: "left",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: 20,
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
            fontSize: 16,
            marginBottom: 2,
            color: "#fff",
          }}
        >
          Đối tượng ưu đãi
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#F3F3F3",
            lineHeight: "150%",
            letterSpacing: "0",
            textAlign: "justify",
          }}
        >
          KHCH tham gia mua Trái phiếu KienlongBank phát hành ra công chúng Đợt
          3 năm 2024 sẽ được nhận mã số dự thưởng để tham gia quay số trúng
          thưởng chương trình.
        </div>
      </div>
      <div style={{ marginBottom: 54 }}>
        <div
          className="font-bold underline"
          style={{
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 2,
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
            borderRadius: 8,
            padding: 10,
            marginTop: 6,
            marginBottom: 6,
            width: 356,
            height: 93,
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
              <div>Số tiền mua trái phiếu </div>
              <div>x</div>
              <div>Kỳ hạn trái phiếu</div>
            </div>
            <span style={{ fontWeight: 700, fontSize: 10, color: "#fff" }}>
              100.000.000
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          color: "#204295",
          padding: 14,
          fontSize: 13,
          marginTop: 18,
        }}
      >
        <div
          className="font-bold underline"
          style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: "#2B217F" }}
        >
          Điều Khoản Và Điều Kiện Áp Dụng:
        </div>
        <ul style={{ fontSize: 12,fontWeight:500, textAlign: "justify",lineHeight:'150%',letterSpacing:'-2%' }}>
          <li style={{ marginBottom: 4 }}>
            - Trường hợp KH chuyển nhượng một phần/toàn bộ trái phiếu trước thời
            điểm quay số: KienlongBank sẽ loại các mã số dự thưởng tương ứng với
            số tiền mà KH chuyển nhượng ra khỏi dữ liệu quay số. Thời gian chốt
            dữ liệu để loại MSDT là 2 ngày trước khi diễn ra quay số.
          </li>
          <li style={{ marginBottom: 4 }}>
            - Trường hợp KH có tên trong danh sách trúng thưởng nhưng chuyển
            nhượng một phần/toàn bộ trái phiếu trước thời điểm trái phiếu được
            bàn giao thực tế thì hủy trao thưởng: KienlongBank sẽ thu hồi giải
            thưởng và trao cho khách hàng dự bị theo thứ tự ưu tiên.
          </li>
          <li>
            - Trường hợp KH trúng thưởng nhưng nhượng một phần hoặc toàn bộ trái
            phiếu không đúng theo hồ sơ đã xác suất trúng thưởng: KienlongBank
            thu hồi giải thưởng trao cho KH.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BondPromotionPopupMobile;
