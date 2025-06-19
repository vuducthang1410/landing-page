import bg from "../../assets/bg2.png";
export interface SavingPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

function SavingPromotionPopup({ open, onClose }: SavingPromotionPopupProps) {
  if (!open) return null;
  return (
    <div
      className="relative  p-6 from-fuchsia-500 via-blue-500 to-purple-400 rounded-lg shadow-lg overflow-auto"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        background:
          "linear-gradient(117.74deg, #55A4FF 12.84%, #2239BB 65.89%, #FF389C 102.84%),linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        backgroundBlendMode: "overlay",
        width: "1465px",
        height: "824px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
      }}
    >
      <button
        className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
        onClick={onClose}
        aria-label="Đóng"
      >
        ×
      </button>
      <div
        className=" text-cyan-100 mb-6 tracking-wide"
        style={{
          width: "932px",
          height: "99px",
          marginTop: "28px",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "700",
          color: " #00E5FF",
        }}
      >
        TIỀN GỬI TIẾT KIỆM
      </div>
      <div className="flex" style={{ gap: "37px" }}>
        <div
          className=" font-montserrat text-left bg-opacity-10 rounded-lg p-6 text-white"
          style={{ width: "444px", height: "595px", marginLeft: "54px" }}
        >
          <h3
            className="underline"
            style={{ fontSize: "24px", fontWeight: "700", color: "#ffffffff" }}
          >
            Đối tượng ưu đãi
          </h3>
          <p className="mb-4 text-sm">
            Khách hàng cá nhân gửi mới/tái tục tại quầy hoặc trực tuyến (qua App
            KienlongBank Plus hoặc Internet Banking) bằng VND từ 30 triệu đồng
            trở lên, kỳ hạn từ 6 tháng trở lên trong thời gian chương trình sẽ
            nhận được Mã số dự thưởng (MSDT) tương ứng với số tiền gửi và kỳ hạn
            gửi để tham gia quay số trúng thưởng.
          </p>
          <h3 className="text-lg font-bold mb-2">
            Số lượng Mã số dự thưởng (MSDT)
          </h3>
          <div className="mb-2">
            <div className="font-semibold">Đối với khách hàng gửi tại quầy</div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Số lượng MSDT =</span>
              <span>Số tiền gửi × kỳ hạn gửi</span>
              <span className="ml-2">/ 100.000.000</span>
            </div>
          </div>
          <div className="mb-2">
            <div className="font-semibold">Đối với khách hàng gửi online</div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Số lượng MSDT =</span>
              <span>Số tiền gửi × kỳ hạn gửi</span>
              <span className="ml-2">/ 50.000.000</span>
            </div>
          </div>
          <div className="text-xs mt-2">
            (*) Số tiền gửi: Là số tiền gửi tại thời điểm cấp MSDT
          </div>
        </div>
        <div
          className="bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md"
          style={{ width: "893px", height: "595px" }}
        >
          <div
            className="underline text-left"
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#204295",
              width: "853px",
              height: "38px",
            }}
          >
            Điều Khoản Và Điều Kiện Áp Dụng:
          </div>
          <ul
            className="text-sm mb-4 text-left font-montserrat"
            style={{
              listStyleType: "none",
              fontSize: "16px",
              fontWeight: "500",
              color: "#204295",
              width: "853px",
              height: "180px",
              marginTop: "4px",
            }}
          >
            <li
              style={{
                position: "relative",
                paddingLeft: "1em",
                lineHeight: "1.2",
              }}
            >
              <span style={{ position: "absolute", left: 0 }}>-</span>
              Trường hợp KH tất toán tiền gửi trước hạn* trước thời gian quay
              số: KienlongBank sẽ loại tất cả các mã số dự thưởng của sổ tiết
              kiệm/hợp đồng tiền gửi tiết kiệm đã tất toán ra khỏi dữ liệu quay
              số. Thời gian chốt dữ liệu để lọc MSDT là 2 ngày trước khi diễn ra
              quay số.
            </li>
            <li
              style={{
                position: "relative",
                paddingLeft: "1em",
                lineHeight: "1.2",
              }}
            >
              <span style={{ position: "absolute", left: 0 }}>-</span>
              Trường hợp KH trong danh sách trúng thưởng tất toán tiền gửi trước
              hạn* sau thời điểm quay số xác định trúng thưởng nhưng trước thời
              điểm KienlongBank trao thưởng cho KH: KienlongBank sẽ thu hồi giải
              thưởng và không thực hiện trao thưởng cho KH.
            </li>
            <li
              style={{
                position: "relative",
                paddingLeft: "1em",
                lineHeight: "1.2",
              }}
            >
              <span style={{ position: "absolute", left: 0 }}>-</span>
              Trường hợp KH không đến nhận thưởng trong thời hạn* sau ngày
              KienlongBank trao thưởng cho KH: Không thực hiện giải thưởng trao
              cho KH.
            </li>
            <li
              style={{
                position: "relative",
                paddingLeft: "1em",
                lineHeight: "1.2",
              }}
            >
              <span style={{ position: "absolute", left: 0 }}>-</span>
              Tiền gửi trước hạn bao gồm tất toán một phần hoặc tất toán toàn bộ
              số tiền gửi.
            </li>
          </ul>
          <div
            className="text-left underline "
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#204295",
              width: "853px",
              marginTop: "4px",
            }}
          >
            Phương Thức Nhận Mã Số Dự Thưởng
          </div>
          <ul
            className="text-left"
            style={{
              listStyleType: "none",
              fontSize: "16px",
              fontWeight: "500",
              color: "#204295",
              width: "853px",
              height: "95px",
              marginTop: "4px",
            }}
          >
            <li
              style={{
                position: "relative",
                paddingLeft: "1em",
                lineHeight: "1.2",
              }}
            >
              <span style={{ position: "absolute", left: 0 }}>-</span>
              Đối với khách hàng gửi tiết kiệm tại quầy: KH sẽ nhận được mã số
              dự thưởng thông qua Phiếu Thông tin mã số dự thưởng sau khi KH gửi
              tiền thành công.
            </li>
            <li
              style={{
                position: "relative",
                paddingLeft: "1em",
                lineHeight: "1.2",
              }}
            >
              <span style={{ position: "absolute", left: 0 }}>-</span>
              Đối với khách hàng gửi tiền Online qua App KienlongBank Plus và
              Internet Banking sẽ nhận được thông báo mã số dự thưởng trên ứng
              dụng.
            </li>
          </ul>
          <div className="overflow-x-auto">
            <table
              className="min-w-full text-xs rounded-lg"
              style={{ borderSpacing: "0 18px" }}
            >
              <thead>
                <tr className=" text-blue-900" style={{ marginBottom: "18px" }}>
                  <th
                    style={{
                      width: "49.25925827026367px",
                      height: "20px",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: 0,
                      textAlign: "center",
                      textTransform: "capitalize",
                      paddingBottom: "18px",
                    }}
                    className="px-2 py-1"
                  >
                    ĐỢT
                  </th>
                  <th
                    style={{
                      width: "332.5px",
                      height: "20px",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: 0,
                      textAlign: "center",
                      textTransform: "capitalize",
                      paddingBottom: "18px",
                    }}
                    className="px-2 py-1"
                  >
                    Thời Gian Phát Sinh Giao Dịch Gửi Tiền
                    <br />
                    Qua App K+ Và Internet Banking
                  </th>
                  <th
                    style={{
                      width: "199.09px",
                      height: "20px",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: 0,
                      textAlign: "center",
                      textTransform: "capitalize",
                      paddingBottom: "18px",
                    }}
                    className="px-2 py-1"
                  >
                    Thời Gian Thông Báo
                    <br />
                    Mã Số Dự Thưởng
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  [
                    "1",
                    "Từ 25/06/2025 Đến Hết Ngày 31/07/2025",
                    "Chậm nhất ngày 10/08/2025",
                  ],
                  [
                    "2",
                    "Từ 01/08/2025 Đến Hết Ngày 31/08/2025",
                    "Chậm nhất ngày 10/09/2025",
                  ],
                  [
                    "3",
                    "Từ 01/09/2025 Đến Hết Ngày 30/09/2025",
                    "Chậm nhất ngày 10/10/2025",
                  ],
                  [
                    "4",
                    "Từ 01/10/2025 Đến Hết Ngày 31/10/2025",
                    "Chậm nhất ngày 10/11/2025",
                  ],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "181%",
                          letterSpacing: 0,
                          textAlign: "center",
                          textTransform: "capitalize",
                          textDecoration: "underline solid",
                          color: "#204295",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingPromotionPopup;
