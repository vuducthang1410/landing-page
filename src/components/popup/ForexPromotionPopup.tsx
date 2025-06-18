import React from "react";

export interface ForexPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

const ForexPromotionPopup: React.FC<ForexPromotionPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="relative w-full max-w-5xl p-6 bg-gradient-to-br from-fuchsia-500 via-blue-500 to-purple-400 rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">NGOẠI TỆ</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Đối tượng ưu đãi</h3>
            <p className="mb-4 text-sm">
              Khách hàng cá nhân tham gia mua bán ngoại tệ với KienlongBank trong thời gian diễn ra chương trình.
            </p>
            <h3 className="text-lg font-bold mb-2">Số lượng mã số dự thưởng (MSDT)</h3>
            <div className="mb-2">
              <div className="font-semibold">Giá trị giao dịch quy đổi ra VND × Hệ số loại giao dịch</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold">số lượng MSDT =</span>
                <span>Giá trị giao dịch quy đổi ra VND × Hệ số loại giao dịch</span>
                <span className="ml-2">/ 10.000.000</span>
              </div>
            </div>
            <div className="text-xs mt-2">
              - Giá trị giao dịch quy đổi ra VND = Số lượng ngoại tệ giao dịch × Tỷ giá giao dịch<br/>
              - Hệ số loại giao dịch:<br/>
              + Giao dịch phục vụ thanh toán quốc tế (có chứng từ, như học phí, viện phí, du lịch, chuyển tiền hợp pháp...): <b>4</b><br/>
              + Giao dịch phục vụ nhu cầu cá nhân trong nước (mua/bán đổi tiền mặt, không kèm chứng từ): <b>2</b>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Điều khoản và Điều kiện áp dụng:</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Mỗi giao dịch từ 10 triệu VND quy đổi trở lên mới được tính tích lũy MSDT.</li>
              <li>Giao dịch phải có chứng từ hợp lệ nếu muốn áp dụng hệ số cao hơn (thanh toán quốc tế).</li>
              <li>Giao dịch bị huỷ/điều chỉnh sau khi phát sinh và trước 2 ngày so với ngày quay số sẽ bị loại MSDT tương ứng.</li>
              <li>KH trúng thưởng nhưng bị phát hiện kê khai sai mục đích giao dịch (ví dụ: khai là thanh toán quốc tế nhưng không có chứng từ hợp lệ) có thể bị thu hồi giải thưởng.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-blue-900">Phương thức nhận mã số dự thưởng</h3>
            <p className="text-sm mb-2">Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</p>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Thời gian thực hiện các giao dịch mua bán ngoại tệ để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025</li>
              <li>Thời gian thông báo mã số dự thưởng: Trước thời gian quay số 2 ngày làm việc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexPromotionPopup; 