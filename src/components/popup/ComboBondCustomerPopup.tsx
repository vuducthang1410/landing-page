import React from "react";

export interface ComboBondCustomerPopupProps {
  open: boolean;
  onClose: () => void;
}

const bowlImg = "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"; // Replace with your actual image path if needed

const ComboBondCustomerPopup: React.FC<ComboBondCustomerPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
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
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">COMBO DÀNH CHO KHÁCH HÀNG TRÁI PHIẾU</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Thời gian áp dụng:</h3>
            <p className="mb-4 text-sm">Từ 25/06/2025 - 31/10/2025</p>
            <h3 className="text-lg font-bold mb-2">Sản phẩm áp dụng:</h3>
            <p className="mb-4 text-sm">Trái phiếu KienlongBank phát hành ra công chúng.</p>
            <h3 className="text-lg font-bold mb-2">Điều khoản áp dụng:</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Khách hàng không được hủy đặt mua trái phiếu cho đến hết ngày kết thúc đợt chào bán.</li>
              <li>Sau khi nộp tiền và phong tỏa tiền thành công, khách hàng nhận quà tại Chi nhánh/Phòng giao dịch KienlongBank, nơi khách hàng đăng ký mua trái phiếu.</li>
              <li>Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến mãi khác (nếu có) theo quy định của KienlongBank từng thời kỳ.</li>
              <li>Mỗi KH nhận tối đa 01 quà tặng trong thời gian triển khai chương trình.</li>
              <li>Quà tặng không có giá trị quy đổi thành tiền mặt.</li>
              <li>Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến mãi khác.</li>
              <li>Khách hàng cam kết nắm giữ trái phiếu tối thiểu 6 tháng. KienlongBank có quyền thu hồi quà tặng trong trường hợp khách hàng bán lại hoặc chuyển nhượng trái phiếu trước thời gian nắm giữ trái phiếu tối thiểu.</li>
            </ul>
          </div>
          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md flex flex-col gap-4 justify-between">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Điều kiện:</h3>
            <div className="mb-4">
              <div className="font-semibold mb-1">Combo 1</div>
              <ul className="list-disc pl-5 text-sm mb-2 space-y-1">
                <li>Tham gia tối thiểu 75 triệu trái phiếu Đợt 3 và</li>
                <li>Mua TKSB (tối thiểu 500 nghìn đồng)</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">750</span>
                <span className="text-base font-semibold text-gray-700">BỘ 10 CHÉN (BÁT)</span>
                <img src={bowlImg} alt="Bộ 10 chén" className="h-16 w-auto rounded" />
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Combo 2</div>
              <ul className="list-disc pl-5 text-sm mb-2 space-y-1">
                <li>Lũy kế tham gia mua trái phiếu trong 3 đợt từ 100 triệu đồng, trong đó 3 đợt tối thiểu 25 triệu đồng và</li>
                <li>Đăng ký dịch vụ MyShop gói Start Up trở lên</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">250</span>
                <span className="text-base font-semibold text-gray-700">BỘ 10 CHÉN (BÁT)</span>
                <img src={bowlImg} alt="Bộ 10 chén" className="h-16 w-auto rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBondCustomerPopup; 