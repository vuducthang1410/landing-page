import React from "react";

export interface MyShopPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

const MyShopPromotionPopup: React.FC<MyShopPromotionPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
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
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">MYSHOP</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Đối tượng ưu đãi</h3>
            <p className="mb-4 text-sm">
              Khách hàng sử dụng dịch vụ MyShop hoặc MyShop cao cấp và duy trì số dư bình quân trên tài khoản thanh toán từ 5 triệu đồng trở lên, tối thiểu 1 tháng trong thời gian diễn ra chương trình.
            </p>
            <h3 className="text-lg font-bold mb-2">Số lượng Mã số dự thưởng (MSDT)</h3>
            <div className="mb-2">
              <div className="font-semibold">Số dư bình quân trên TKTT x SL tháng duy trì (≥ 5 triệu đồng)</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold">SỐ LƯỢNG MSDT =</span>
                <span>Số dư bình quân trên TKTT × SL tháng duy trì (≥ 5 triệu đồng)</span>
                <span className="ml-2">/ 5.000.000</span>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Phương thức nhận mã số dự thưởng</h3>
            <p className="text-sm mb-2">Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</p>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Thời gian duy trì số dư bình quân trên tài khoản thanh toán để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025</li>
              <li>Thời gian thông báo mã số dự thưởng: Trước ngày 15/11/2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShopPromotionPopup; 