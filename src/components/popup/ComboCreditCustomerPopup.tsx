import React from "react";
import bgImage from "../../assets/bg2.png";

export interface ComboCreditCustomerPopupProps {
  open: boolean;
  onClose: () => void;
}

const helmetImg = "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_mu-bao-hiem.png";
const bagImg = "https://kienlongbank.vn/uploads/news/2023/09/21/1695279647_tui-mua-sam.png";

const ComboCreditCustomerPopup: React.FC<ComboCreditCustomerPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative w-[1460px] h-[824px] rounded-lg shadow-lg overflow-auto text-left"
        style={{
          backgroundImage: `linear-gradient(117.74deg, #55A4FF 12.84%, #2239BB 65.89%, #FF389C 102.84%), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        <h2 className="flex justify-center items-center w-[932px] h-[99px] mt-[22px] ml-[264px] text-[40px] leading-[100%] font-bold uppercase text-[#00E5FF] text-center align-middle font-montserrat tracking-[0%]">
          COMBO DÀNH CHO KHÁCH HÀNG TÍN DỤNG
        </h2>

        {/* Left Section */}
        <div className="absolute top-[143px] left-[54px] w-[444px] text-white">
          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">Thời gian áp dụng:</h3>
          <p className="text-[14px] mb-4 font-montserrat leading-[150%]">Từ 25/06/2025 - 31/10/2025</p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">Đối tượng được hưởng khuyến mại:</h3>
          <p className="text-[14px] mb-4 font-montserrat leading-[150%]">Khách hàng cá nhân phát sinh khoản vay vốn (không bao gồm các khoản vay cầm cố tiền gửi cá nhân/Giấy tờ có giá; trả góp ngày; cấp hạn mức thẻ tín dụng; các khoản vay tín chấp) trong thời gian diễn ra chương trình.</p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">Sản phẩm áp dụng:</h3>
          <p className="text-[14px] mb-4 font-montserrat leading-[150%]">Khoản vay hợp lệ của Khách hàng cá nhân phát sinh khoản vay vốn trong thời gian chương trình (không bao gồm các khoản vay cầm cố tiền gửi cá nhân/Giấy tờ có giá; trả góp ngày; cấp hạn mức thẻ tín dụng; các khoản vay tín chấp).</p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">Điều khoản áp dụng:</h3>
          <ul className="list-disc pl-5 text-sm mb-4 space-y-1 font-montserrat leading-[150%]">
            <li>Khoản vay có Hợp đồng tín dụng và Khế ước nhận nợ (KUNN) ký và giải ngân trong thời gian của chương trình.</li>
            <li>Sau khi giải ngân thành công, khách hàng nhận quà tại Chi nhánh/Phòng giao dịch KienlongBank, nơi khách hàng vay vốn.</li>
            <li>Mỗi KH nhận tối đa 01 quà tặng trong thời gian triển khai chương trình.</li>
            <li>Trường hợp hết quà tặng theo combo của khách hàng, KienlongBank sẽ tặng KH quà tặng có giá trị thấp hơn liền kề nếu khách hàng đồng ý và KienlongBank còn quà.</li>
            <li>Quà tặng không có giá trị quy đổi thành tiền mặt.</li>
            <li>Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến mại khác.</li>
            <li>Khách hàng cam kết duy trì khoản vay tối thiểu 3 tháng. KienlongBank có quyền thu hồi quà tặng trong trường hợp khách hàng tất toán (sớm) khoản vay và không thỏa điều kiện thời gian duy trì khoản vay tối thiểu.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="absolute top-[143px] left-[535px] w-[893px] h-[595px] p-[20px] rounded-[20px] flex flex-col gap-[4px] bg-white text-[#204295]">
          <h3 className="text-[20px] leading-[100%] font-bold font-montserrat underline">
            Điều kiện:
          </h3>
          <div className="text-[14px] leading-[150%] font-medium font-montserrat space-y-4">
            <div>
              <p className="font-semibold">Combo 1 – dành cho KHCN vay SXKD</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Khoản vay SXKD</li>
                <li>TKSĐ tối thiểu 1,5%*Giá trị hạn mức vay hoặc số tiền vay</li>
                <li>Đăng ký thành công dịch vụ Myshop.</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">2.000</span>
                <span className="text-base font-semibold text-gray-700">ÁO MƯA</span>
                <img src={bagImg} alt="Áo mưa" className="h-16 w-auto rounded" />
              </div>
            </div>
            <div>
              <p className="font-semibold">Combo 2 – dành cho KHCN vay PVĐS</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Khoản vay PVĐS</li>
                <li>TKSĐ tối thiểu 2%* Giá trị hạn mức vay hoặc số tiền vay</li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl font-bold text-fuchsia-600">1.000</span>
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