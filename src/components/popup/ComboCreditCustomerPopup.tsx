import React from "react";

export interface ComboCreditCustomerPopupProps {
  open: boolean;
  onClose: () => void;
}

const helmetImg = "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_mu-bao-hiem.png"; // Replace with your actual image path if needed
const bagImg = "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_tui-mua-sam.png"; // Replace with your actual image path if needed

const ComboCreditCustomerPopup: React.FC<ComboCreditCustomerPopupProps> = ({ open, onClose }) => {
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
        <h2 className="text-center text-3xl font-bold text-cyan-100 mb-6 tracking-wide">COMBO DÀNH CHO KHÁCH HÀNG TÍN DỤNG</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 text-white min-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Thời gian áp dụng:</h3>
            <p className="mb-4 text-sm">Từ 25/06/2025 - 31/10/2025</p>
            <h3 className="text-lg font-bold mb-2">Đối tượng được hưởng khuyến mại:</h3>
            <p className="mb-4 text-sm">Khách hàng cá nhân phát sinh khoản vay vốn (không có tài sản bảo đảm hoặc vay cầm cố tiết kiệm cá nhân/giấy tờ có giá; trả góp/ngày; cấp hạn mức thẻ tín dụng; các khoản vay tín chấp) trong thời gian diễn ra chương trình.</p>
            <h3 className="text-lg font-bold mb-2">Sản phẩm áp dụng:</h3>
            <p className="mb-4 text-sm">Khoản vay hợp lệ của Khách hàng cá nhân phát sinh khoản vay vốn trong thời gian chương trình (không bao gồm các khoản vay cầm cố tiết kiệm cá nhân/giấy tờ có giá; trả góp/ngày; cấp hạn mức thẻ tín dụng; các khoản vay tín chấp).</p>
            <h3 className="text-lg font-bold mb-2">Điều khoản áp dụng:</h3>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>Khoản vay có Hợp đồng tín dụng và Khế ước nhận nợ (KUNN) ký và giải ngân trong thời gian của chương trình.</li>
              <li>Sau khi giải ngân thành công, khách hàng nhận quà tại chi nhánh/phòng giao dịch KienlongBank, khi khách hàng vay vốn.</li>
              <li>Mỗi KH/1 mã số dự thưởng/1 lần nhận quà trong suốt thời gian diễn ra chương trình.</li>
              <li>Quà tặng không có giá trị quy đổi thành tiền hoặc các quà tặng khác.</li>
              <li>Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến mãi khác.</li>
              <li>Khách hàng cam kết duy trì khoản vay tối thiểu 3 tháng. KienlongBank có quyền thu hồi quà tặng trong trường hợp khách hàng tất toán (sớm) khoản vay và không thỏa điều kiện khi thời gian duy trì khoản vay tối thiểu 3 tháng.</li>
            </ul>
          </div>
          {/* Right Section */}
          <div className="flex-1 bg-white rounded-lg p-6 text-gray-800 min-w-[320px] shadow-md flex flex-col gap-4 justify-between">
            <h3 className="text-lg font-bold mb-2 text-blue-900 underline">Điều kiện:</h3>
            <div className="mb-4">
              <div className="font-semibold mb-1">Combo 1 – dành cho KHCN vay SXKD</div>
              <ul className="list-disc pl-5 text-sm mb-2 space-y-1">
                <li>Khoản vay SXKD</li>
                <li>TKSB tối thiểu 1,5%*giá trị hạn mức vay hoặc số tiền vay</li>
                <li>Đăng ký thành công dịch vụ Myshop.</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">2000</span>
                <span className="text-base font-semibold text-gray-700">ÁO MƯA</span>
                <img src={bagImg} alt="Áo mưa" className="h-16 w-auto rounded" />
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Combo 2 – dành cho KHCN vay PVDS</div>
              <ul className="list-disc pl-5 text-sm mb-2 space-y-1">
                <li>TKSB tối thiểu 2%* Giá trị hạn mức vay hoặc số tiền vay</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">1000</span>
                <span className="text-base font-semibold text-gray-700">MŨ BẢO HIỂM</span>
                <img src={helmetImg} alt="Mũ bảo hiểm" className="h-16 w-auto rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCreditCustomerPopup; 