import React from "react";
import {
  combo1Mobile,
  comboSavingPopup1,
  comboSavingPopup2,
} from "../../../data";

interface ComboSavingCustomerPopupMobileProps {
  scaled: (value: number) => number;
}

const ComboSavingCustomerPopupMobile: React.FC<
  ComboSavingCustomerPopupMobileProps
> = ({ scaled }) => {
  return (
    <div
      style={{
        background: `url(${combo1Mobile}) no-repeat center center`,
        backgroundSize: "cover",
        borderRadius: scaled(5),
        paddingLeft: scaled(13),
        paddingRight: scaled(13),
        color: "#fff",
        fontFamily: "Montserrat",
        width: scaled(375),
        height: scaled(1178),
        boxShadow: `0 ${scaled(4)}px ${scaled(24)}px rgba(0,0,0,0.15)`,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: scaled(16),
          paddingTop: scaled(44),
        }}
      >
        <span
          style={{
            color: "#3DE1F3",
            fontWeight: 700,
            fontSize: scaled(20),
            letterSpacing: scaled(1),
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
            fontSize: scaled(16),
            marginTop: scaled(23),
            width: scaled(231),
            height: scaled(26),
            textAlign: "left",
            lineHeight: "100%",
            color: "#FFFFFF",
          }}
        >
          Sản phẩm áp dụng:
        </div>
        <div
          style={{
            fontSize: scaled(12),
            color: "#FFFFFF",
            textAlign: "left",
            width: scaled(349),
            height: scaled(45),
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
            fontSize: scaled(16),
            marginBottom: scaled(2),
            width: scaled(348),
            height: scaled(28),
            lineHeight: "100%",
          }}
        >
          Thời gian áp dụng
        </div>
        <div
          style={{ fontSize: scaled(12), color: "#FFFFFF", height: scaled(29) }}
        >
          Từ 25/06/2025 - 31/10/2025
        </div>
      </div>
      <div style={{ marginBottom: scaled(64), textAlign: "left" }}>
        <div
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
            textAlign: "justify", // <== Căn đều chữ
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
            - KH cam kết duy trì số dư tối thiểu 45 ngày kể từ ngày mở mới/tái
            tục. Trường hợp tất toán trước hạn một phần/toàn bộ số tiền gửi/tiết
            kiệm trong vòng 45 ngày kể từ ngày mở mới/tái tục, khách hàng hoàn
            trả lại giá trị quà tặng đã nhận bằng tiền cho KienlongBank.
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
          borderRadius: scaled(16),
          color: "#2B217F",
          padding: scaled(20),
          fontSize: scaled(12),
          textAlign: "left",
          lineHeight: "150%",
          height: scaled(523),
          width: scaled(349),
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: scaled(16),
            marginBottom: scaled(6),
          }}
        >
          Điều Kiện:
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: scaled(12),
              marginBottom: scaled(2),
            }}
          >
            Combo 1
            <div style={{ fontWeight: 500, fontSize: scaled(12) }}>
              - KHCN gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới
              và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và
            </div>
          </div>

          <div>- Mua TKST trả góp phí thực thu từ 500 nghìn đồng trở lên</div>
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
              </span>{" "}
              <div
                style={{
                  fontWeight: 600,
                  fontSize: scaled(14),
                  color: "#2B217F",
                  textAlign: "center",
                }}
              >
                MŨ BẢO HIỂM
              </div>
            </div>

            <img
              src={comboSavingPopup1}
              alt="Mũ bảo hiểm"
              style={{ width: scaled(165.3258819580078), height: scaled(115) }}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: scaled(14),
              marginBottom: scaled(5),
            }}
          >
            Combo 2
          </div>
          <div
            style={{
              fontSize: scaled(12),
              marginBottom: scaled(4),
              display: "flex",
              flexDirection: "column",
              gap: scaled(4),
            }}
          >
            <div>
              - KHCN gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới
              và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và
            </div>
            <div>- Đăng ký thành công dịch vụ MyShop</div>
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
              src={comboSavingPopup2}
              alt="Áo mưa"
              style={{ width: scaled(165.3258819580078), height: scaled(115) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboSavingCustomerPopupMobile;
