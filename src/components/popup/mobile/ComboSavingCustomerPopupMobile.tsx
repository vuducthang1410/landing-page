import React from "react";
import { combo1, combo1Mobile, combo3 } from "../../../data";

const ComboSavingCustomerPopupMobile: React.FC = () => {
  return (
    <div
      style={{
        background: `url(${combo1Mobile}) no-repeat center center`,
        backgroundSize: "cover",
        borderRadius: 5,
        paddingLeft: 13,
        paddingRight: 13,
        color: "#fff",
        fontFamily: "Montserrat",
        width:375,
        margin: "0 auto",
        height:'1178px',
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16, paddingTop: 44 }}>
        <span
          style={{
            color: "#3DE1F3",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          COMBO DÀNH CHO
          <br />
          KHÁCH HÀNG TIỀN GỬI
        </span>
      </div>
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 16,
            marginTop: 23,
            width: 231,
            height: 26,
            textAlign: "left",
            lineHeight: "100%",
            color: "#FFFFFF",
          }}
        >
          Sản phẩm áp dụng:
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#FFFFFF",
            textAlign: "left",
            width: 349,
            height: 45,
          }}
        >
          Tiền gửi tiết kiệm tiền gửi có kỳ hạn tại quầy hoặc trực tuyến, tài
          khoản thanh toán số đẹp, dịch vụ MyShop.
        </div>
      </div>
      <div style={{ textAlign: "left", marginBottom: 2 }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 2,
            width: 348,
            height: 28,
            lineHeight: "100%",
          }}
        >
          Thời gian áp dụng
        </div>
        <div style={{ fontSize: 12, color: "#FFFFFF", height: 29 }}>
          Từ 25/06/2025 - 31/10/2025
        </div>
      </div>
      <div style={{ marginBottom: 64, textAlign: "left" }}>
        <div
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
          }}
        >
          <span>
            - KH được tham gia đồng thời combo Tiền gửi, combo Tín dụng và Combo
            Trái phiếu và nhận tối đa 01 quà tặng trong mỗi combo.
          </span>
          <span>
            - Trường hợp hợp nhất quà tặng, KienlongBank được chủ động linh hoạt
            quà tặng trong phạm vi combo 1 và 2.
          </span>
          <span>
            - Mỗi cá nhân chỉ được nhận tối đa 01 phần quà/01 mã/01 lượt. Trường
            hợp bất kỳ toàn trước hạn một phần/ toàn bộ số tiền gửi, số dư TKTT,
            số dư MyShop thì giá trị quà tặng sẽ bị thu hồi lại theo chính sách
            của KienlongBank.
          </span>
          <span>
            - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến
            mại khác và áp dụng các chương trình chính sách lãi suất ưu đãi (nếu
            có) theo quy định của KienlongBank từng thời kỳ.
          </span>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          color: "#2B217F",
          padding: 20,
          fontSize: 12,
          textAlign: "left",
          lineHeight: "150%",
          height: 523,
          width: 349,
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
          Điều Kiện:
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 2 }}>
            Combo 1
            <div style={{ fontWeight: 500, fontSize: 12 }}>
              - KHCM gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới
              và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và
            </div>
          </div>

          <div>- Mua TKST trả góp phí thực thu từ 500 nghìn đồng trở lên</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
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
                  background: "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: 80,
                  height: 42,
                  lineHeight: "100%",
                }}
              >
                1.500
              </span>{" "}
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#2B217F",
                  textAlign: "center",
                }}
              >
                MŨ BẢO HIỂM
              </div>
            </div>

            <img
              src={combo1}
              alt="Mũ bảo hiểm"
              style={{ width: 165.3258819580078, height: 115 }}
            />
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 5 }}>
            Combo 2
          </div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>
            - KHCM gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới và
            tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và
            <br />- Đăng ký thành công dịch vụ MyShop
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
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
                  background: "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
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
              src={combo3}
              alt="Áo mưa"
              style={{ width: 165.3258819580078, height: 115 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboSavingCustomerPopupMobile;
