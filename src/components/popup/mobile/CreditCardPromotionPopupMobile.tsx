import React from "react";
import { creditPopup } from "../../../data";

const CreditCardPromotionPopupMobile: React.FC = () => {
  return (
    <div
      className="inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div
        style={{
          width: 375,
          height: 1062,
          background: `url(${creditPopup}) no-repeat center center`,
          borderRadius: 20,
          paddingTop: 44,
          paddingLeft: 13,
          paddingRight: 13,
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
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Montserrat",
            textTransform: "uppercase",
            marginBottom: 23,
            letterSpacing: "0",
            lineHeight: "100%",
            height: 33,
          }}
        >
          THẺ TÍN DỤNG
        </div>

        {/* Nội dung chính */}
        <div style={{ color: "#fff", fontFamily: "Montserrat", fontSize: 14 }}>
          <div
            className="font-bold underline"
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: 16,
              marginBottom: 2,
              lineHeight: "100%",
              letterSpacing: "0",
              height: 26,
            }}
          >
            Đối tượng ưu đãi
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "-2%",
              textAlign: "justify",
              lineHeight: "100%",
              height: 89,
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
              fontSize: 16,
              lineHeight: "100%",
              letterSpacing: "0",
              height: 38,
            }}
          >
            Số lượng Mã số dự thưởng (MSDT)
          </div>
          <div
            style={{
              marginBottom: 8,
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "150%",
              letterSpacing: "-2%",
            }}
          >
            <div
              style={{
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "100%",
                letterSpacing: "0",
                marginBottom: 12,
              }}
            >
              Đối với Chủ thẻ tín dụng quốc tế cao cấp KienlongBank Visa Elite:
            </div>
            <div style={{ marginBottom: 30 }}>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)",

                  borderRadius: 8,
                  padding: 10,
                  marginTop: 6,
                  marginBottom: 6,
                  width: 344,
                  height: 84,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 10 }}>
                  SỐ LƯỢNG MSDT/ THẺ =
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 10,
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
                      textAlign: "center",
                      fontWeight: 700,
                      width: 164,
                    }}
                  >
                    <div>
                      Tổng doanh số giao dịch hợp lệ thẻ KienlongBank Visa Elite
                    </div>
                  </div>
                  <span
                    style={{ fontWeight: 700, fontSize: 10, color: "#fff" }}
                  >
                    500.000
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "100%",
                letterSpacing: "0",
                marginBottom: 12,
              }}
            >
              Đối với Chủ thẻ tín dụng KienlongBank khác (tính trên doanh số
              giao dịch từng thẻ):
            </div>
            <div style={{ marginBottom: 28 }}>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)",

                  borderRadius: 8,
                  padding: 10,
                  marginTop: 6,
                  marginBottom: 6,
                  width: 344,
                  height: 84,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 10 }}>
                  SỐ LƯỢNG MSDT/ THẺ =
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 10,
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
                      textAlign: "center",
                      fontWeight: 700,
                      width: 164,
                    }}
                  >
                    <div>
                      Tổng doanh số giao dịch hợp lệ từng Thẻ tín dụng khác
                    </div>
                  </div>
                  <span
                    style={{ fontWeight: 700, fontSize: 10, color: "#fff" }}
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
              borderRadius: 20,
              padding: 20,
              fontSize: 13,
              width: 349,
              height: 443,
            }}
          >
            <div
              className="font-bold underline"
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: "#204295",
                height: 34,
              }}
            >
              Điều Khoản Và Điều Kiện Áp Dụng:
            </div>
            <ul
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#204295",
                height: 196,
                lineHeight: "120%",
                letterSpacing: "0",
                textAlign: "justify",
              }}
            >
              <li style={{ marginBottom: 10 }}>
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
                fontSize: 16,
                color: "#204295",
                height: 26,
                width: 309,
                lineHeight: "100%",
                letterSpacing: "-0.5px",
              }}
            >
              Phương Thức Nhận Mã Số Dự Thưởng
            </div>
            <ul
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#204295",
                textAlign: "justify",
              }}
            >
              <li style={{ marginBottom: 10 }}>
                Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua
                Notification trên App KienlongBank Plus khi phát sinh giao dịch
                đủ xét sinh mã:
              </li>
              <li style={{ marginBottom: 10 }}>
                - Từ 26/05/2025 đến hết ngày 31/10/2025
              </li>
              <li>
                - Thời gian thông báo mã số dự thưởng: Trước ngày 19/11/2025
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPromotionPopupMobile;
