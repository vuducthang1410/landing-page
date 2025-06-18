import React from "react";

export interface CreditCardPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

const CreditCardPromotionPopup: React.FC<CreditCardPromotionPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="relative w-full max-w-4xl p-6 bg-gradient-to-br from-fuchsia-500 via-blue-500 to-purple-400 rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">THẺ TÍN DỤNG</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Đối tượng ưu đãi</h3>
            <p className="mb-4 text-sm">
              Chủ Thẻ tín dụng KienlongBank có các giao dịch thanh toán hợp lệ (mua hàng hóa, dịch vụ, thanh toán hóa đơn) bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch và được ghi nhận thành công vào hệ thống trong thời gian diễn ra chương trình.
            </p>
            <h3 className="text-lg font-bold mb-2">Số lượng Mã số dự thưởng (MSDT)</h3>
            <div className="mb-2">
              <div className="font-semibold">Đối với chủ Thẻ tín dụng quốc tế cao cấp KienlongBank Visa Elite</div>
              <div className="flex items-center gap-2">
                <span className="font-bold">SỐ LƯỢNG MSDT/THẺ =</span>
                <span>Tổng doanh số giao dịch hợp lệ KienlongBank Visa Elite</span>
                <span className="ml-2">/ 500.000</span>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Đối với chủ Thẻ tín dụng KienlongBank khác (tính trên doanh số giao dịch hợp lệ)</div>
              <div className="flex items-center gap-2">
                <span className="font-bold">SỐ LƯỢNG MSDT/THẺ =</span>
                <span>Tổng doanh số giao dịch hợp lệ từng Thẻ tín dụng khác</span>
                <span className="ml-2">/ 1.000.000</span>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Điều khoản và Điều kiện áp dụng:</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Giao dịch hợp lệ là giao dịch thanh toán mua hàng hóa, dịch vụ, thanh toán hóa đơn bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch cũng như được ghi nhận thành công vào hệ thống trong thời gian diễn ra chương trình; không bao gồm giao dịch rút, lãi, rút tiền mặt từ thẻ tín dụng, giao dịch phát sinh do sơ suất của hệ thống, giao dịch hoàn trả, giao dịch chối hủy.</li>
              <li>Giao dịch hợp lệ của thẻ phụ được tính vào doanh số giao dịch của thẻ chính để tính tổng doanh số giao dịch.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-blue-900">Phương thức nhận mã số dự thưởng</h3>
            <p className="text-sm mb-2">Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</p>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Thời gian phát sinh giao dịch để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025</li>
              <li>Thời gian thông báo mã số dự thưởng: Trước ngày 19/11/2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPromotionPopup; 