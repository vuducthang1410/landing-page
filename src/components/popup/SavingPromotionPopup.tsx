import React from "react";
import { bgPopup } from "../../data";

export interface SavingPromotionPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const SavingPromotionPopup: React.FC<SavingPromotionPopupProps> = ({ open, onClose, scale = 1 }) => {
  if (!open) return null;

  const scaled = (value: number) => value * scale;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative rounded-lg shadow-lg overflow-auto text-left"
        style={{
          width: scaled(1460),
          height: scaled(824),
          backgroundImage: `url(${bgPopup})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute text-white hover:text-gray-200"
          style={{
            top: scaled(16),
            right: scaled(16),
            fontSize: scaled(24),
            backgroundColor: "transparent",
          }}
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        {/* Title */}
        <h2
          className="flex justify-center items-center text-center align-middle tracking-[0%] font-bold uppercase text-[#00E5FF]"
          style={{
            width: scaled(932),
            height: scaled(99),
            marginTop: scaled(22),
            marginLeft: scaled(264),
            fontSize: scaled(40),
            lineHeight: "100%",
            fontFamily: "Montserrat"
          }}
        >
          TIỀN GỬI TIẾT KIỆM
        </h2>

        {/* Left Section */}
        <div
          className="absolute text-white"
          style={{
            top: scaled(143),
            left: scaled(54),
            width: scaled(444),
          }}
        >
          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat"
            }}
          >
            Đối tượng ưu đãi
          </h3>
          <p
            className="leading-[110%] font-medium text-justify tracking-[-0.02em]"
            style={{
              fontSize: scaled(14),
              marginBottom: scaled(16),
              fontFamily: "Montserrat"
            }}
          >
            Khách hàng cá nhân gửi mới/tái tục tại quầy hoặc trực tuyến (qua App KienlongBank Plus hoặc Internet Banking) bằng VND từ 30 triệu đồng trở lên, kỳ hạn từ 6 tháng trở lên trong thời gian chương trình sẽ nhận được Mã số dự thưởng (MSDT) tương ứng với số tiền gửi và kỳ hạn gửi để tham gia quay số trúng thưởng.
          </p>

          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat"
            }}
          >
            Số lượng Mã số dự thưởng (MSDT)
          </h3>
          {/* Gửi tại quầy */}
          <div
            className="relative"
            style={{
              width: scaled(480),
              height: scaled(90),
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`,
              marginBottom: scaled(16)
            }}
          >
            <span
              className="absolute font-bold"
              style={{
                top: scaled(45),
                left: scaled(13),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              Số lượng MSDT =
            </span>
            <span
              className="absolute border-b border-white items-center text-center"
              style={{
                top: scaled(12),
                left: scaled(150),
                width: scaled(200),
                height: scaled(42),
                fontSize: scaled(14),
                paddingLeft: scaled(10),
                paddingRight: scaled(10),
                paddingTop: scaled(4),
                paddingBottom: scaled(4),
                fontFamily: "Montserrat"
              }}
            >
              Số tiền gửi × kỳ hạn gửi
            </span>
            <span
              className="absolute font-bold lowercase"
              style={{
                top: scaled(62),
                left: scaled(206),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              100.000.000
            </span>
          </div>

          {/* Gửi Online */}
          <div
            className="relative"
            style={{
              width: scaled(480),
              height: scaled(90),
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
            }}
          >
            <span
              className="absolute font-bold"
              style={{
                top: scaled(45),
                left: scaled(13),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              Số lượng MSDT =
            </span>
            <span
              className="absolute border-b border-white items-center text-center"
              style={{
                top: scaled(12),
                left: scaled(150),
                width: scaled(200),
                height: scaled(42),
                fontSize: scaled(14),
                paddingLeft: scaled(10),
                paddingRight: scaled(10),
                paddingTop: scaled(4),
                paddingBottom: scaled(4),
                fontFamily: "Montserrat"
              }}
            >
              Số tiền gửi × kỳ hạn gửi
            </span>
            <span
              className="absolute font-bold lowercase"
              style={{
                top: scaled(62),
                left: scaled(206),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              50.000.000
            </span>
          </div>

          <div
            style={{
              fontSize: scaled(12),
              marginTop: scaled(12),
              fontFamily: "Montserrat"
            }}
          >
            (*) Số tiền gửi: Là số tiền gửi tại thời điểm cấp MSDT
          </div>
        </div>

        {/* Right Section */}
        <div
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(595),
            padding: scaled(20),
            borderRadius: scaled(20),
            gap: scaled(4),
          }}
        >
          <h3
            className="leading-[100%] font-bold underline"
            style={{
              fontSize: scaled(20),
              fontFamily: "Montserrat"
            }}
          >
            Điều Khoản Và Điều Kiện Áp Dụng:
          </h3>
          <ul
            className="leading-[110%] font-medium"
            style={{
              fontSize: scaled(14),
              marginTop: scaled(16),
              // gap: scaled(8),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat"
            }}
          >
            <li style={{  }}>- Trường hợp KH tất toán tiền gửi trước hạn* trước thời gian quay số: KienlongBank sẽ loại tất cả các mã số dự thưởng của sổ tiết kiệm/hợp đồng tiền gửi tiết kiệm đã tất toán ra khỏi dữ liệu quay số. Thời gian chốt dữ liệu để lọc MSDT là 2 ngày trước khi diễn ra quay số.</li>
            <li style={{  }}>- Trường hợp KH trong danh sách trúng thưởng tất toán tiền gửi trước hạn* sau thời điểm quay số xác định trúng thưởng nhưng trước thời điểm KienlongBank trao thưởng cho KH: KienlongBank sẽ thu hồi giải thưởng và không thực hiện trao thưởng cho KH.</li>
            <li style={{ }}>- Trường hợp KH không đến nhận thưởng trong thời hạn* sau ngày KienlongBank trao thưởng cho KH: Không thực hiện giải thưởng trao cho KH.</li>
            <li style={{ }}> (*)Tất toán tiền gửi trước hạn bao gồm tất toán một phần hoặc tất toán toàn bộ số tiền gửi.</li>
          </ul>

          <h3
            className="leading-[100%] font-bold underline"
            style={{ 
              fontSize: scaled(20),
              marginTop: scaled(16),
              fontFamily: "Montserrat"
            }}
          >
            Phương Thức Nhận Mã Số Dự Thưởng
          </h3>
          <ul
            className="leading-[110%] font-medium"
            style={{
              fontSize: scaled(14),
              marginTop: scaled(16),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat"
            }}
          >
            <li style={{}}>- Đối với khách hàng gửi tiết kiệm tại quầy: KH sẽ nhận được mã số dự thưởng thông qua Phiếu Thông tin mã số dự thưởng sau khi KH gửi tiền thành công.</li>
            <li style={{}}>- Đối với khách hàng gửi tiền Online qua App KienlongBank Plus và Internet Banking sẽ nhận được thông báo mã số dự thưởng trên ứng dụng.</li>
          </ul>

          <div 
            className="overflow-x-hidden"
            style={{ marginTop: scaled(8),height: scaled(595) }}
          >
            <table
              className="min-w-full text-center text-[#204295]"
              style={{
                fontSize: scaled(14),
                fontFamily: "Montserrat"
              }}
            >
              <thead>
                <tr>
                  <th style={{ padding: scaled(8), fontFamily: "Montserrat" }}>ĐỢT</th>
                  <th style={{ padding: scaled(8), minWidth: scaled(80), fontFamily: "Montserrat" }}></th>
                  <th style={{ padding: scaled(8), maxWidth: scaled(240), whiteSpace: "normal", wordBreak: "break-word", fontFamily: "Montserrat" }}>
                    Thời Gian Phát Sinh Giao Dịch Gửi Tiền Qua App K+ Và Internet Banking
                  </th>
                  <th style={{ padding: scaled(8), minWidth: scaled(80), fontFamily: "Montserrat" }}></th>
                  <th style={{ padding: scaled(8), maxWidth: scaled(200), whiteSpace: "normal", wordBreak: "break-word", fontFamily: "Montserrat" }}>
                    Thời Gian Thông Báo Mã Số Dự Thưởng
                  </th>
                </tr>
              </thead>
              <tbody style={{height: scaled(100)}}>
                {["1", "2", "3", "4"].map((_, i) => (
                  <tr key={i}>
                    <td style={{ padding: scaled(8), textDecoration: "underline", fontFamily: "Montserrat" }}>{i + 1}</td>
                    <td style={{ fontFamily: "Montserrat" }}></td>
                    <td style={{ padding: scaled(8), textDecoration: "underline",fontSize: scaled(14), whiteSpace: "normal", wordBreak: "break-word", fontFamily: "Montserrat" }}>
                      {[
                        "Từ 25/06/2025 Đến Hết Ngày 31/07/2025",
                        "Từ 01/08/2025 Đến Hết Ngày 31/08/2025",
                        "Từ 01/09/2025 Đến Hết Ngày 30/09/2025",
                        "Từ 01/10/2025 Đến Hết Ngày 31/10/2025"
                      ][i]}
                    </td>
                    <td style={{ fontFamily: "Montserrat" }}></td>
                    <td style={{ padding: scaled(8),fontSize: scaled(14), textDecoration: "underline", whiteSpace: "normal", wordBreak: "break-word", fontFamily: "Montserrat" }}>
                      {[
                        "Chậm nhất ngày 10/08/2025",
                        "Chậm nhất ngày 10/09/2025",
                        "Chậm nhất ngày 10/10/2025",
                        "Chậm nhất ngày 10/11/2025"
                      ][i]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SavingPromotionPopup;