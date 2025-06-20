import React from "react";
import bg from "../../assets/bg2.png";

export interface SavingPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

const SavingPromotionPopup: React.FC<SavingPromotionPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative w-[1460px] h-[824px] rounded-lg shadow-lg overflow-auto text-left"
        style={{
          backgroundImage: `linear-gradient(117.74deg, #55A4FF 12.84%, #2239BB 65.89%, #FF389C 102.84%), url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="flex justify-center items-center w-[932px] h-[99px] mt-[22px] ml-[264px] text-[40px] leading-[100%] font-bold uppercase text-[#00E5FF] text-center align-middle font-montserrat tracking-[0%]">
          TIỀN GỬI TIẾT KIỆM
        </h2>

        {/* Left Section */}
        <div className="absolute top-[143px] left-[54px] w-[444px] text-white">
          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">
            Đối tượng ưu đãi
          </h3>
          <p className="text-[14px] leading-[110%] font-medium text-justify tracking-[-0.02em] font-montserrat mb-4">
            Khách hàng cá nhân gửi mới/tái tục tại quầy hoặc trực tuyến (qua App KienlongBank Plus hoặc Internet Banking) bằng VND từ 30 triệu đồng trở lên, kỳ hạn từ 6 tháng trở lên trong thời gian chương trình sẽ nhận được Mã số dự thưởng (MSDT) tương ứng với số tiền gửi và kỳ hạn gửi để tham gia quay số trúng thưởng.
          </p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">
            Số lượng Mã số dự thưởng (MSDT)
          </h3>
          {/* Gửi tại quầy */}
          <div
            className="w-[480px] h-[90px] relative mb-4"
            style={{
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
            }}
          >
            <span className="absolute top-[45px] left-[13px] text-[14px] leading-[100%] font-bold font-montserrat">
              GỬI TẠI QUẦY:
            </span>
            <span className="absolute top-[12px] left-[215px] w-[250px] h-[42px] px-[10px] py-[4px] border-b border-white font-montserrat text-[14px] flex items-center text-center">
              Số tiền gửi × kỳ hạn gửi
            </span>
            <span className="absolute top-[62px] left-[320px] text-[14px] leading-[100%] font-bold font-montserrat lowercase">
              100.000.000
            </span>
          </div>

          {/* Gửi Online */}
          <div
            className="w-[480px] h-[90px] relative"
            style={{
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
            }}
          >
            <span className="absolute top-[45px] left-[13px] text-[14px] leading-[100%] font-bold font-montserrat">
              GỬI ONLINE:
            </span>
            <span className="absolute top-[12px] left-[215px] w-[250px] h-[42px] px-[10px] py-[4px] border-b border-white font-montserrat text-[14px] flex items-center text-center">
              Số tiền gửi × kỳ hạn gửi
            </span>
            <span className="absolute top-[62px] left-[320px] text-[14px] leading-[100%] font-bold font-montserrat lowercase">
              50.000.000
            </span>
          </div>

          <div className="text-xs mt-2 font-montserrat">
            (*) Số tiền gửi: Là số tiền gửi tại thời điểm cấp MSDT
          </div>
        </div>

        {/* Right Section */}
        <div className="absolute top-[143px] left-[535px] w-[893px] h-[595px] p-[20px] rounded-[20px] flex flex-col gap-[4px] bg-white text-[#204295]">
          <h3 className="text-[20px] leading-[100%] font-bold font-montserrat underline">
            Điều Khoản Và Điều Kiện Áp Dụng:
          </h3>
          <ul className="text-[14px] leading-[110%] font-medium font-montserrat space-y-2 mt-4">
            <li>- Trường hợp KH tất toán tiền gửi trước hạn* trước thời gian quay số: KienlongBank sẽ loại tất cả các mã số dự thưởng của sổ tiết kiệm/hợp đồng tiền gửi tiết kiệm đã tất toán ra khỏi dữ liệu quay số. Thời gian chốt dữ liệu để lọc MSDT là 2 ngày trước khi diễn ra quay số.</li>
            <li>- Trường hợp KH trong danh sách trúng thưởng tất toán tiền gửi trước hạn* sau thời điểm quay số xác định trúng thưởng nhưng trước thời điểm KienlongBank trao thưởng cho KH: KienlongBank sẽ thu hồi giải thưởng và không thực hiện trao thưởng cho KH.</li>
            <li>- Trường hợp KH không đến nhận thưởng trong thời hạn* sau ngày KienlongBank trao thưởng cho KH: Không thực hiện giải thưởng trao cho KH.</li>
            <li> (*)Tất toán tiền gửi trước hạn bao gồm tất toán một phần hoặc tất toán toàn bộ số tiền gửi.</li>
          </ul>

          <h3 className="text-[20px] leading-[100%] font-bold font-montserrat underline mt-4">
            Phương Thức Nhận Mã Số Dự Thưởng
          </h3>
          <ul className="text-[14px] leading-[110%] font-medium font-montserrat space-y-2 mt-4">
            <li>- Đối với khách hàng gửi tiết kiệm tại quầy: KH sẽ nhận được mã số dự thưởng thông qua Phiếu Thông tin mã số dự thưởng sau khi KH gửi tiền thành công.</li>
            <li>- Đối với khách hàng gửi tiền Online qua App KienlongBank Plus và Internet Banking sẽ nhận được thông báo mã số dự thưởng trên ứng dụng.</li>
          </ul>

          <div className="overflow-x-auto mt-2">
            <table className="min-w-full text-[14px] font-montserrat text-[#204295] text-center">
              <thead>
                <tr>
                  <th className="py-2 px-2">ĐỢT</th>
                  <th className="py-2 px-2 min-w-[80px]"></th>
                  <th className="py-2 px-2 max-w-[240px] whitespace-normal break-words">
                    Thời Gian Phát Sinh Giao Dịch Gửi Tiền Qua App K+ Và Internet Banking
                  </th>
                  <th className="py-2 px-2 min-w-[80px]"></th>
                  <th className="py-2 px-2 max-w-[200px] whitespace-normal break-words">
                    Thời Gian Thông Báo Mã Số Dự Thưởng
                  </th>
                </tr>
              </thead>
              <tbody>
                {["1", "2", "3", "4"].map((_, i) => (
                  <tr key={i}>
                    <td className="py-2 px-2 underline">{i + 1}</td>
                    <td></td>
                    <td className="py-2 px-2 underline whitespace-normal break-words">
                      {[
                        "Từ 25/06/2025 Đến Hết Ngày 31/07/2025",
                        "Từ 01/08/2025 Đến Hết Ngày 31/08/2025",
                        "Từ 01/09/2025 Đến Hết Ngày 30/09/2025",
                        "Từ 01/10/2025 Đến Hết Ngày 31/10/2025"
                      ][i]}
                    </td>
                    <td></td>
                    <td className="py-2 px-2 underline whitespace-normal break-words">
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