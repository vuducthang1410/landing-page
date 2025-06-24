import React from "react";
import { creditPopup } from "../../../data";

type CreditCardPromotionPopupMobileProps = { scaled: (value: number) => number };
const CreditCardPromotionPopupMobile: React.FC<CreditCardPromotionPopupMobileProps> = ({ scaled }) => {
  return (
      <div
        style={{
          width: scaled(375),
          height: scaled(1062),
          background: `url(${creditPopup}) no-repeat center center`,
          backgroundSize: "contain",
          borderRadius: scaled(20),
          paddingTop: scaled(44),
          paddingLeft: scaled(13),
          paddingRight: scaled(13),
          position: "relative",
          overflowY: "auto",
          transition: "transform 0.2s",
          textAlign: "left",
          fontFamily: "Montserrat",
        }}
      >
        {/* Tiêu đề */}
        <div
          style={{
            color: "#00E5FF",
            fontWeight: 700,
            fontSize: scaled(20),
            textAlign: "center",
            fontFamily: "Montserrat",
            textTransform: "uppercase",
            marginBottom: scaled(23),
            letterSpacing: "0",
            lineHeight: "100%",
            height: scaled(33),
          }}
        >
          THẺ TÍN DỤNG
        </div>

        {/* Nội dung chính */}
        <div style={{ color: "#fff", fontFamily: "Montserrat", fontSize: scaled(14) }}>
          <div
            className="font-bold underline"
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: scaled(16),
              marginBottom: scaled(2),
              lineHeight: "100%",
              letterSpacing: "0",
              height: scaled(26),
            }}
          >
            Đối tượng ưu đãi
          </div>
          <div
            style={{
              fontSize: scaled(12),
              fontWeight: 500,
              letterSpacing: "-2%",
              textAlign: "justify",
              lineHeight: "100%",
              height: scaled(89),
            }}
          >
            Chủ Thẻ tín dụng KienlongBank có các giao dịch thanh toán hợp lệ
            (mua hàng hóa, dịch vụ, thanh toán hóa đơn) bằng Thẻ tín dụng
            KienlongBank, có thời gian giao dịch và được ghi nhận thành công vào
            hệ thống trong thời gian diễn ra chương trình.
          </div>

          <div
            className="font-bold underline"
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: scaled(16),
              lineHeight: "100%",
              letterSpacing: "0",
              height: scaled(38),
            }}
          >
            Số lượng Mã số dự thưởng (MSDT)
          </div>
          <div
            style={{
              marginBottom: scaled(8),
              fontSize: scaled(12),
              fontWeight: 500,
              lineHeight: "150%",
              letterSpacing: "-2%",
            }}
          >
            <div
              style={{
                fontWeight: 500,
                fontSize: scaled(12),
                lineHeight: "100%",
                letterSpacing: "0",
                marginBottom: scaled(12),
              }}
            >
              Đối với Chủ thẻ tín dụng quốc tế cao cấp KienlongBank Visa Elite:
            </div>
            <div style={{ marginBottom: scaled(30) }}>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)",

                  borderRadius: scaled(8),
                  padding: scaled(10),
                  marginTop: scaled(6),
                  marginBottom: scaled(6),
                  width: scaled(344),
                  height: scaled(84),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: scaled(20),
                }}
              >
                <span style={{ fontWeight: 600, fontSize: scaled(10) }}>
                  SỐ LƯỢNG MSDT/ THẺ =
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: scaled(10),
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
                      textAlign: "center",
                      fontWeight: 700,
                      width: scaled(164),
                    }}
                  >
                    <div>
                      Tổng doanh số giao dịch hợp lệ thẻ KienlongBank Visa Elite
                    </div>
                  </div>
                  <span
                    style={{ fontWeight: 700, fontSize: scaled(10), color: "#fff" }}
                  >
                    500.000
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: scaled(12),
                lineHeight: "100%",
                letterSpacing: "0",
                marginBottom: scaled(12),
              }}
            >
              Đối với Chủ thẻ tín dụng KienlongBank khác (tính trên doanh số
              giao dịch từng thẻ):
            </div>
            <div style={{ marginBottom: scaled(28) }}>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)",

                  borderRadius: scaled(8),
                  padding: scaled(10),
                  marginTop: scaled(6),
                  marginBottom: scaled(6),
                  width: scaled(344),
                  height: scaled(84),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: scaled(20),
                }}
              >
                <span style={{ fontWeight: 600, fontSize: scaled(10) }}>
                  SỐ LƯỢNG MSDT/ THẺ =
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: scaled(10),
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
                      textAlign: "center",
                      fontWeight: 700,
                      width: scaled(164),
                    }}
                  >
                    <div>
                      Tổng doanh số giao dịch hợp lệ từng Thẻ tín dụng khác
                    </div>
                  </div>
                  <span
                    style={{ fontWeight: 700, fontSize: scaled(10), color: "#fff" }}
                  >
                    1.000.000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Box trắng điều kiện áp dụng */}
          <div
            style={{
              background: "#fff",
              color: "#204295",
              borderRadius: scaled(20),
              padding: scaled(20),
              fontSize: scaled(13),
              width: scaled(349),
              height: scaled(443),
            }}
          >
            <div
              className="font-bold underline"
              style={{
                fontWeight: 700,
                fontSize: scaled(16),
                color: "#204295",
                height: scaled(34),
              }}
            >
              Điều Khoản Và Điều Kiện Áp Dụng:
            </div>
            <ul
              style={{
                fontSize: scaled(12),
                fontWeight: 500,
                color: "#204295",
                height: scaled(196),
                lineHeight: "120%",
                letterSpacing: "0",
                textAlign: "justify",
              }}
            >
              <li style={{ marginBottom: scaled(10) }}>
                - Giao dịch hợp lệ là giao dịch thanh toán mua hàng hóa, dịch
                vụ, thanh toán hóa đơn bằng Thẻ tín dụng KienlongBank, có thời
                gian giao dịch và được ghi nhận thành công trong thời gian diễn
                ra chương trình, không bao gồm giao dịch rút tiền mặt, giao dịch
                phí, lãi, rút tiền mặt từ Thẻ tín dụng, giao dịch hoàn trả, giao
                dịch bị từ chối, giao dịch bị hủy.
              </li>
              <li>
                - Doanh số giao dịch hợp lệ của thẻ phụ được tính vào doanh số
                giao dịch của thẻ chính để tính tổng doanh số giao dịch.
              </li>
            </ul>
            <div
              className="font-bold underline"
              style={{
                fontWeight: 700,
                fontSize: scaled(16),
                color: "#204295",
                height: scaled(26),
                width: scaled(309),
                lineHeight: "100%",
                letterSpacing: "-0.5px",
              }}
            >
              Phương Thức Nhận Mã Số Dự Thưởng
            </div>
            <ul
              style={{
                fontSize: scaled(12),
                fontWeight: 500,
                color: "#204295",
                textAlign: "justify",
              }}
            >
              <li style={{ marginBottom: scaled(10) }}>
                Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua
                Notification trên App KienlongBank Plus khi phát sinh giao dịch
                đủ xét sinh mã:
              </li>
              <li style={{ marginBottom: scaled(10) }}>
                - Từ 26/05/2025 đến hết ngày 31/10/2025
              </li>
              <li>
                - Thời gian thông báo mã số dự thưởng: Trước ngày 19/11/2025
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default CreditCardPromotionPopupMobile;
