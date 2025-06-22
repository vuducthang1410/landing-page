import React from "react";
import bg from "../../assets/bg2.png";

export interface BondPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

const BondPromotionPopup: React.FC<BondPromotionPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative w-[1460px] h-[824px] rounded-lg shadow-lg overflow-auto text-left"
        style={{
          backgroundImage: `linear-gradient(117.74deg, #55A4FF 12.84%, #2239BB 65.89%, #FF389C 102.84%), url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
          TRÁI PHIẾU KIENLONGBANK
        </h2>

        {/* Left Section */}
        <div className="absolute top-[143px] left-[54px] w-[444px] text-white">
          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">
            Đối tượng ưu đãi
          </h3>
          <p className="text-[14px] leading-[150%] font-medium text-justify tracking-[-0.02em] font-montserrat mb-4">
            KHCN tham gia mua Trái phiếu KienlongBank phát hành ra công chúng Đợt 3 năm 2024 sẽ được nhận mã số dự thưởng để tham gia quay số trúng thưởng chương trình.
          </p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">
            Số lượng Mã số dự thưởng (MSDT)
          </h3>

          <div
            className="w-[480px] h-[130px] relative text-[#FFFFFF]"
            style={{
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
            }}
          >
            <span className="absolute top-[81px] left-[13px] text-[14px] leading-[100%] font-bold font-montserrat">
              SỐ LƯỢNG MSDT =
            </span>

            <span className="absolute top-[12px] left-[205px] w-[190px] h-[42px] px-[10px] py-[4px] font-montserrat text-[14px] flex items-center text-center">
              Số tiền mua trái phiếu
            </span>

            <span className="absolute top-[30px] left-[305px] w-[190px] h-[42px] px-[10px] py-[4px] font-montserrat text-[14px] flex items-center text-center">
              ×
            </span>

            <span className="absolute top-[48px] left-[205px] w-[190px] h-[42px] px-[10px] py-[4px] border-b border-white font-montserrat text-[14px] flex items-center text-center">
              Kỳ hạn trái phiếu
            </span>

            <span className="absolute top-[99px] left-[300px] w-[80px] h-[17px] text-[14px] leading-[100%] font-bold font-montserrat lowercase">
              100.000.000
            </span>
          </div>

        </div>

        {/* Right Section */}
        <div className="absolute top-[143px] left-[535px] w-[893px] h-[595px] p-[20px] rounded-[20px] flex flex-col gap-[4px] bg-white text-[#204295]">
          <h3 className="text-[20px] leading-[100%] font-bold font-montserrat underline">
            Điều khoản và Điều kiện áp dụng:
          </h3>
          <ul className="text-[14px] leading-[150%] font-medium font-montserrat space-y-2 mt-4">
            <li>- Trường hợp KH chuyển nhượng một phần/toàn bộ trái phiếu trước thời gian quay số: KienlongBank sẽ loại các mã dự thưởng tương ứng với số tiền mà KH chuyển nhượng ra khỏi dữ liệu quay số. Thời gian chốt dữ liệu để loại MSDT là 2 ngày trước khi diễn ra quay số.</li>
            <li>- Trường hợp KH có tên trong danh sách trúng thưởng chuyển nhượng một phần/toàn bộ trái phiếu trước thời điểm trái phiếu đáo hạn và trước thời hạn trao thưởng: KienlongBank sẽ thu hồi giải thưởng và không thực hiện trao thưởng cho KH.</li>
            <li>- Trường hợp KH trúng thưởng chuyển nhượng một phần/toàn bộ trái phiếu trước thời điểm trái phiếu đáo hạn và sau thời gian trao thưởng: Không thu hồi giải thưởng đã trao cho KH.</li>
          </ul>

          <h3 className="text-[20px] leading-[100%] font-bold font-montserrat underline mt-4">
            Phương Thức Nhận Mã Số Dự Thưởng
          </h3>
          <ul className="text-[14px] leading-[150%] font-medium font-montserrat space-y-2 mt-4">
            <li>Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</li>
            <li>- Thời gian phát sinh mua trái phiếu KienlongBank phát hành ra công chúng Đợt 3: Dự kiến từ 26/06/2025 đến hết ngày 26/07/2025</li>
            <li>- Thời gian thông báo mã số dự thưởng: Trước ngày 10/08/2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BondPromotionPopup;