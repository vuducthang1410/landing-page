import React from "react";

export interface BondPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

const BondPromotionPopup: React.FC<BondPromotionPopupProps> = ({ open, onClose }) => {
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
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">TRÁI PHIẾU KIENLONGBANK</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Đối tượng ưu đãi</h3>
            <p className="mb-4 text-sm">
              KH cá nhân tham gia mua Trái phiếu KienlongBank phát hành ra công chúng Đợt 3 năm 2024 sẽ được nhận mã số dự thưởng để tham gia quay số trúng thưởng chương trình.
            </p>
            <h3 className="text-lg font-bold mb-2">Số Lượng Mã Số Dự Thưởng (MSDT)</h3>
            <div className="mb-2">
              <div className="font-semibold">Số tiền mua trái phiếu × Kỳ hạn trái phiếu</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold">số lượng MSDT =</span>
                <span>Số tiền mua trái phiếu × Kỳ hạn trái phiếu</span>
                <span className="ml-2">/ 100.000.000</span>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Điều khoản và Điều kiện áp dụng:</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Trường hợp KH chuyển nhượng một phần/toàn bộ trái phiếu trước thời gian quay số: KienlongBank sẽ loại các mã số dự thưởng tương ứng với số tiền mà KH chuyển nhượng ra khỏi dữ liệu quay số. Thời gian chốt dữ liệu để loại MSDT là 2 ngày trước khi diễn ra quay số</li>
              <li>Trường hợp KH có tên trong danh sách trúng thưởng chuyển nhượng một phần/toàn bộ trái phiếu sau thời điểm xác định trúng thưởng nhưng trước thời điểm trao thưởng: KienlongBank sẽ thu hồi giải thưởng và không thực hiện việc trao thưởng cho KH.</li>
              <li>Trường hợp KH không đến nhận thưởng trong thời hạn hoặc bán toàn bộ trái phiếu trước thời điểm trái phiếu đáo hạn và sau thời gian trao thưởng: Không thực hiện giải thưởng đã trao cho KH.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-blue-900">Phương thức nhận mã số dự thưởng</h3>
            <p className="text-sm mb-2">Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</p>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Thời gian phát sinh mua trái phiếu KienlongBank phát hành ra công chúng Đợt 3: Dự kiến từ 25/06/2025 đến hết ngày 26/07/2025</li>
              <li>Thời gian thông báo mã số dự thưởng: Trước ngày 10/08/2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondPromotionPopup; 