import React from "react";

export interface SavingPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

function SavingPromotionPopup({ open, onClose }: SavingPromotionPopupProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="relative w-full max-w-5xl p-6 bg-gradient-to-br from-fuchsia-500 via-blue-500 to-purple-400 rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">TIỀN GỬI TIẾT KIỆM</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Đối tượng ưu đãi</h3>
            <p className="mb-4 text-sm">
              Khách hàng cá nhân gửi mới/tái tục tại quầy hoặc trực tuyến (qua App KienlongBank Plus hoặc Internet Banking) bằng VND từ 30 triệu đồng trở lên, kỳ hạn từ 6 tháng trở lên trong thời gian chương trình sẽ nhận được Mã số dự thưởng (MSDT) tương ứng với số tiền gửi và kỳ hạn gửi để tham gia quay số trúng thưởng.
            </p>
            <h3 className="text-lg font-bold mb-2">Số lượng Mã số dự thưởng (MSDT)</h3>
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
            <div className="text-xs mt-2">(*) Số tiền gửi: Là số tiền gửi tại thời điểm cấp MSDT</div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Điều Khoản Và Điều Kiện Áp Dụng:</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Trường hợp KH tất toán tiền gửi trước hạn* trước thời gian quay số: KienlongBank sẽ loại tất cả các mã số dự thưởng của sổ tiết kiệm/hợp đồng tiền gửi tiết kiệm đã tất toán ra khỏi dữ liệu quay số. Thời gian chốt dữ liệu để lọc MSDT là 2 ngày trước khi diễn ra quay số.</li>
              <li>Trường hợp KH trong danh sách trúng thưởng tất toán tiền gửi trước hạn* sau thời điểm quay số xác định trúng thưởng nhưng trước thời điểm KienlongBank trao thưởng cho KH: KienlongBank sẽ thu hồi giải thưởng và không thực hiện trao thưởng cho KH.</li>
              <li>Trường hợp KH không đến nhận thưởng trong thời hạn* sau ngày KienlongBank trao thưởng cho KH: Không thực hiện giải thưởng trao cho KH.</li>
              <li>Tiền gửi trước hạn bao gồm tất toán một phần hoặc tất toán toàn bộ số tiền gửi.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-blue-900">Phương Thức Nhận Mã Số Dự Thưởng</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Đối với khách hàng gửi tiết kiệm tại quầy: KH sẽ nhận được mã số dự thưởng thông qua Phiếu Thông tin mã số dự thưởng sau khi KH gửi tiền thành công.</li>
              <li>Đối với khách hàng gửi tiền Online qua App KienlongBank Plus và Internet Banking sẽ nhận được thông báo mã số dự thưởng trên ứng dụng.</li>
            </ul>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="px-2 py-1 border">ĐỢT</th>
                    <th className="px-2 py-1 border">Thời Gian Phát Sinh Giao Dịch Gửi Tiền<br/>Qua App K+ Và Internet Banking</th>
                    <th className="px-2 py-1 border">Thời Gian Thông Báo<br/>Mã Số Dự Thưởng</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">Từ 25/06/2025 Đến Hết Ngày 31/07/2025</td>
                    <td className="border px-2 py-1 text-blue-700 underline cursor-pointer">Chậm nhất ngày 10/08/2025</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">2</td>
                    <td className="border px-2 py-1">Từ 01/08/2025 Đến Hết Ngày 31/08/2025</td>
                    <td className="border px-2 py-1 text-blue-700 underline cursor-pointer">Chậm nhất ngày 10/09/2025</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3</td>
                    <td className="border px-2 py-1">Từ 01/09/2025 Đến Hết Ngày 30/09/2025</td>
                    <td className="border px-2 py-1 text-blue-700 underline cursor-pointer">Chậm nhất ngày 10/10/2025</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">4</td>
                    <td className="border px-2 py-1">Từ 01/10/2025 Đến Hết Ngày 31/10/2025</td>
                    <td className="border px-2 py-1 text-blue-700 underline cursor-pointer">Chậm nhất ngày 10/11/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingPromotionPopup; 