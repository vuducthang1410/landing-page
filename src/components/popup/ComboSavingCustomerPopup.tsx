import React from "react";
import bgImage from "../../assets/bg2.png";

export interface ComboSavingCustomerPopupProps {
  open: boolean;
  onClose: () => void;
}

const helmetImg =
  "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_mu-bao-hiem.png";
const bagImg =
  "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_tui-mua-sam.png";

const ComboSavingCustomerPopup: React.FC<ComboSavingCustomerPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative w-[1460px] h-[824px] rounded-lg shadow-lg overflow-auto text-left"
        style={{
          backgroundImage: `linear-gradient(117.74deg, #55A4FF 12.84%, #2239BB 65.89%, #FF389C 102.84%), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
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
          COMBO DÀNH CHO KHÁCH HÀNG TIỀN GỬI
        </h2>

        {/* Left Section */}
        <div className="absolute top-[143px] left-[54px] w-[444px] text-white">
          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">
            Sản phẩm áp dụng:
          </h3>
          <p className="text-[14px] leading-[150%] font-medium text-justify tracking-[-0.02em] font-montserrat mb-4">
            Tiền gửi tiết kiệm tiền gửi có kỳ hạn tại quầy hoặc trực tuyến, tài khoản thanh toán số đẹp, ví dụ MyShop.
          </p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">
            Thời gian áp dụng:
          </h3>
          <p className="text-[14px] leading-[150%] font-medium font-montserrat mb-4">
            Từ 25/06/2025 - 31/10/2025
          </p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">
            Điều khoản áp dụng:
          </h3>
          <ul className="list-disc pl-5 text-[14px] leading-[150%] font-medium font-montserrat space-y-1">
            <li>KH được tham gia đồng thời combo Tiền gửi, combo tiền gửi và Combo Trái phiếu và nhận tối đa 01 quà tặng trong mỗi combo.</li>
            <li>Trường hợp hội đủ điều kiện, KienlongBank được phép sử dụng hình ảnh quà tặng trong mỗi combo 1 và 2.</li>
            <li>KH cam kết duy trì số dư tối thiểu 45 ngày kể từ ngày mở mới/tái tục. Trường hợp tất toán trước hạn hoặc rút một phần/hoặc bổ sung tiết kiệm trước trong vòng 45 ngày kể từ ngày mở mới/tái tục, khách hàng không đủ điều kiện tặng mã dự thưởng của KienlongBank.</li>
            <li>Khách hàng được tham gia đồng thời các chương trình khuyến mãi nếu và chỉ nếu được áp dụng theo chính sách quy định của từng chương trình của KienlongBank từng kỳ.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="absolute top-[143px] left-[535px] w-[893px] h-[348px] p-[20px] rounded-[20px] flex flex-col gap-[4px] bg-white text-[#204295]">
          <h3 className="w-full text-[20px] leading-[100%] font-bold font-montserrat underline">
            Điều kiện:
          </h3>

          <div className="text-[14px] leading-[150%] font-medium font-montserrat space-y-2">
            <div>
              <p className="font-semibold mb-1">Combo 1 – Khách hàng gửi tiết kiệm + TKSB</p>
              <ul className="list-disc pl-5 space-y-1">
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
              <p className="font-semibold mb-1">Combo 2 – Gửi tiết kiệm + Đăng ký MyShop</p>
              <ul className="list-disc pl-5 space-y-1">
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
