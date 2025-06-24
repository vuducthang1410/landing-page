import React from "react";
import { IoClose } from "react-icons/io5";
import { savingPopup } from "../../../data";

const SavingPromotionPopupMobile: React.FC = () => {
  return (
    <div
      style={{
        width: 375,
        height: 1465,
        background: `url(${savingPopup}) no-repeat center center`,
        borderRadius: 20,
        paddingTop: 44,
        paddingLeft: 13,
        paddingRight: 13,
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
          marginBottom: 23,
          fontFamily: "Montserrat",
          textTransform: "uppercase",
          lineHeight: "100%",
          letterSpacing: "0",
          height: 33,
        }}
      >
        TIỀN GỬI TIẾT KIỆM
      </div>

      {/* Nội dung chính */}
      <div style={{ color: "#fff", fontFamily: "Montserrat", fontSize: 14 }}>
        <div
          className="underline"
          style={{
            height: 26,
            fontSize: 16,
            fontWeight: 700,
            lineHeight: "100%",
          }}
        >
          Đối tượng ưu đãi
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 500,
            lineHeight: "150%",
            letterSpacing: "-2%",
            textAlign: "justify",
            color: "#fff",
            height: 120,
          }}
        >
          Khách hàng cá nhân gửi mới/tái tục tại quầy hoặc trực tuyến (qua App
          KienlongBank Plus hoặc Internet Banking) bằng VNĐ từ 30 triệu đồng trở
          lên, kỳ hạn từ 6 tháng trở lên trong thời gian chương trình sẽ nhận
          được Mã số dự thưởng (MSDT) tương ứng với số tiền gửi và kỳ hạn gửi để
          tham gia quay số trúng thưởng.
        </div>

        <div
          className="underline"
          style={{
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "100%",
            height: 38,
            color: "#fff",
          }}
        >
          Số lượng Mã số dự thưởng (MSDT)
        </div>
        <div
          style={{
            marginBottom: 8,
            fontSize: 12,
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "-2%",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "-2%",
              height: 27,
            }}
          >
            Đối với khách hàng gửi tại quầy
          </div>
          <div style={{ marginBottom: 17 }}>
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)",

                borderRadius: 8,
                padding: 10,
                width: 344,
                height: 84,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 10 }}>
                Số lượng MSDT =
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
                  <div>Số tiền gửi x kỳ hạn gửi</div>
                </div>
                <span style={{ fontWeight: 700, fontSize: 10, color: "#fff" }}>
                  100.000.000
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "-2%",
              height: 27,
            }}
          >
            Đối với khách hàng gửi online
          </div>
          <div style={{ marginBottom: 49 }}>
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)",

                borderRadius: 8,
                padding: 10,
                width: 344,
                height: 84,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 10 }}>
                Số lượng MSDT =
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
                  <div>Số tiền gửi x kỳ hạn gửi</div>
                </div>
                <span style={{ fontWeight: 700, fontSize: 10, color: "#fff" }}>
                  50.000.000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Box trắng điều kiện áp dụng */}
        <div
          style={{
            background: "#fff",
            color: "#2239bb",
            borderRadius: 20,
            padding: 20,
            fontSize: 13,
            height: 823,
            width: 349,
          }}
        >
          <div
            className="underline"
            style={{
              fontWeight: 700,
              fontSize: 16,
              height: 34,
              lineHeight: "100%",
              color: "#204295",
            }}
          >
            Điều Khoản Và Điều Kiện Áp Dụng:
          </div>
          <ul
            style={{
              marginBottom: 4,
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "120%",
              letterSpacing: "0",
              textAlign: "justify",
              height: 288,
            }}
          >
            <li style={{ marginBottom: 15 }}>
              - Trường hợp KH tất toán tiền gửi trước hạn* trước thời gian quay
              số: KienlongBank sẽ loại tất cả các mã dự thưởng của sổ tiết
              kiệm/hợp đồng tiền gửi tương ứng với số tiền tất toán ra khỏi dữ
              liệu quay số. Thời gian chốt dữ liệu để loại MSDT là 2 ngày trước
              khi diễn ra quay số.
            </li>
            <li style={{ marginBottom: 15 }}>
              - Trường hợp KH trong danh sách trúng thưởng tất toán tiền gửi
              trước hạn* sau thời gian quay số xác định danh sách trúng thưởng
              và trước ngày KienlongBank trao thưởng cho KH: KienlongBank sẽ thu
              hồi giải thưởng và không thực hiện trao thưởng cho KH.
            </li>
            <li style={{ marginBottom: 15 }}>
              - Trường hợp KH trúng thưởng tất toán tiền gửi trước hạn* sau ngày
              KienlongBank trao thưởng cho KH: Không thu hồi giải thưởng đã trao
              cho KH.(*) Tất toán tiền gửi trước hạn bao gồm tất toán một phần
              hoặc tất toán toàn bộ tiền gửi.
            </li>
          </ul>
          <div
            className="underline"
            style={{
              fontWeight: 700,
              fontSize: 16,
              height: 34,
              lineHeight: "100%",
              color: "#204295",
              letterSpacing: "-0.5px",
              marginBottom: 4,
            }}
          >
            Phương Thức Nhận Mã Số Dự Thưởng
          </div>
          <ul
            style={{
              marginBottom: 4,
              fontSize: 12,
              fontWeight: 500,
              lineHeight: "120%",
              letterSpacing: "0",
              textAlign: "justify",
              height: 155,
            }}
          >
            <li style={{ marginBottom: 15 }}>
              - Đối với khách hàng gửi tiền tại quầy: KH sẽ nhận được mã số dự
              thưởng thông qua Phiếu Thông tin mã số dự thưởng sau khi KH gửi
              tiền thành công.
            </li>
            <li>
              - Đối với khách hàng gửi tiền Online qua App KienlongBank Plus và
              Internet Banking sẽ nhận được thông báo về mã số dự thưởng theo
              các đợt như sau:
            </li>
          </ul>
          <table
            style={{
              width: "100%",
              fontSize: 10,
              color: "#204295",
              borderCollapse: "collapse",
              marginBottom: 16,
              marginTop: 8,
              fontWeight: 500,
            }}
          >
            <thead>
              <tr
                style={{
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <th style={{ width: 46.6659049987793 }}>ĐỢT 1</th>
                <th style={{ width: 149, paddingLeft: 15, paddingRight: 15 }}>
                  Thời Gian Phát Sinh Giao Dịch Gửi Tiền Qua App K+ Và Internet
                  Banking
                </th>
                <th style={{ width: 113 }}>
                  Thời Gian Thông Báo Mã Số Dự Thưởng
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                textAlign: "center",
                lineHeight: "181%",
                letterSpacing: "0",
              }}
            >
              <tr>
                <td style={{ padding: 4, textAlign: "center" }}>1</td>
                <td style={{ padding: 4 }}>
                  Từ 25/06/2025 Đến Hết
                  <br />
                  Ngày 31/07/2025
                </td>
                <td style={{ padding: 4 }}>
                  Chậm nhất ngày
                  <br />
                  10/08/2025
                </td>
              </tr>
              <tr>
                <td style={{ padding: 4, textAlign: "center" }}>2</td>
                <td style={{ padding: 4 }}>
                  Từ 01/08/2025 Đến Hết
                  <br />
                  Ngày 31/08/2025
                </td>
                <td style={{ padding: 4 }}>
                  Chậm nhất ngày
                  <br />
                  10/09/2025
                </td>
              </tr>
              <tr>
                <td style={{ padding: 4, textAlign: "center" }}>3</td>
                <td style={{ padding: 4 }}>
                  Từ 01/09/2025 Đến Hết
                  <br />
                  Ngày 30/09/2025
                </td>
                <td style={{ padding: 4 }}>
                  Chậm nhất ngày
                  <br />
                  10/10/2025
                </td>
              </tr>
              <tr>
                <td style={{ padding: 4, textAlign: "center" }}>4</td>
                <td style={{ padding: 4 }}>
                  Từ 01/10/2025 Đến Hết
                  <br />
                  Ngày 31/10/2025
                </td>
                <td style={{ padding: 4 }}>
                  Chậm nhất ngày
                  <br />
                  10/11/2025
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SavingPromotionPopupMobile;
