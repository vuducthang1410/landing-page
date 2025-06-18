import React from "react";

export interface ComboSavingCustomerPopupProps {
  open: boolean;
  onClose: () => void;
}

const helmetImg = "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_mu-bao-hiem.png"; // Replace with your actual image path if needed
const bagImg = "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_tui-mua-sam.png"; // Replace with your actual image path if needed

const ComboSavingCustomerPopup: React.FC<ComboSavingCustomerPopupProps> = ({ open, onClose }) => {
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
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">COMBO DÀNH CHO KHÁCH HÀNG TIỀN GỬI</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Sản phẩm áp dụng:</h3>
            <p className="mb-4 text-sm">
              Tiền gửi tiết kiệm tiền gửi có kỳ hạn tại quầy hoặc trực tuyến, tài khoản thanh toán số đẹp, ví dụ MyShop.
            </p>
            <h3 className="text-lg font-bold mb-2">Thời gian áp dụng:</h3>
            <p className="mb-4 text-sm">Từ 25/06/2025 - 31/10/2025</p>
            <h3 className="text-lg font-bold mb-2">Điều khoản áp dụng:</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>KH được tham gia đồng thời combo Tiền gửi, combo tiền gửi và Combo Trái phiếu và nhận tối đa 01 quà tặng trong mỗi combo.</li>
              <li>Trường hợp hội đủ điều kiện, KienlongBank được phép sử dụng hình ảnh quà tặng trong mỗi combo 1 và 2.</li>
              <li>KH cam kết duy trì số dư tối thiểu 45 ngày kể từ ngày mở mới/tái tục. Trường hợp tất toán trước hạn hoặc rút một phần/hoặc bổ sung tiết kiệm trước trong vòng 45 ngày kể từ ngày mở mới/tái tục, khách hàng không đủ điều kiện tặng mã dự thưởng của KienlongBank.</li>
              <li>Khách hàng được tham gia đồng thời các chương trình khuyến mãi nếu và chỉ nếu được áp dụng theo chính sách quy định của từng chương trình của KienlongBank từng kỳ.</li>
            </ul>
          </div>
          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md flex flex-col gap-4 justify-between">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Điều kiện:</h3>
            <div className="mb-4">
              <div className="font-semibold mb-1">Combo 1</div>
              <ul className="list-disc pl-5 text-sm mb-2 space-y-1">
                <li>KH gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và</li>
                <li>Mua TKSB tại quầy có phí thực thu từ 500 nghìn đồng trở lên</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">1500</span>
                <span className="text-base font-semibold text-gray-700">MŨ BẢO HIỂM</span>
                <img src={helmetImg} alt="Mũ bảo hiểm" className="h-16 w-auto rounded" />
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Combo 2</div>
              <ul className="list-disc pl-5 text-sm mb-2 space-y-1">
                <li>KH gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi mới và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên, và</li>
                <li>Đăng ký thành công dịch vụ MyShop</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">1500</span>
                <span className="text-base font-semibold text-gray-700">ÁO MƯA</span>
                <img src={bagImg} alt="Áo mưa" className="h-16 w-auto rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboSavingCustomerPopup; 