import React from "react";
import bgImage from "../../assets/bg2.png";

export interface CreditCardPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}



const CreditCardPromotionPopup: React.FC<CreditCardPromotionPopupProps> = ({ open, onClose }) => {

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className=" relative w-[1460px] h-[824px] rounded-lg shadow-lg overflow-auto text-left"
        style={{
          backgroundImage: `linear-gradient(117.74deg, #55A4FF 12.84%, #2239BB 65.89%, #FF389C 102.84%), url(${bgImage})`
        }}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>
        {/* Title */}
        <h2 className=" flex justify-center items-center w-[932px] h-[99px] mt-[22px] ml-[264px] text-[40px] leading-[100%] font-bold uppercase text-[#00E5FF] text-center align-middle font-montserrat tracking-[0%]">
          THẺ TÍN DỤNG
        </h2>

        {/* Left Section */}

        <h3
          className="w-[317px] h-[33px] absolute top-[143px] left-[54px] text-[20px] leading-[100%] font-bold underline text-[#FFFFFF] font-montserrat"
        >
          Đối tượng ưu đãi
        </h3>


        <p
          className="w-[444px] h-[80px] absolute top-[181px] left-[54px] text-[14px]  leading-[150%] font-medium text-justify tracking-[-0.02em] font-montserrat text-[#FFFFFF]"
        >
          Chủ Thẻ tín dụng KienlongBank có các giao dịch thanh toán hợp lệ (mua hàng hóa, dịch vụ, thanh toán hóa đơn) bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch và được ghi nhận thành công vào hệ thống trong thời gian diễn ra chương trình.
        </p>


        <h3
          className="w-[485px] h-[38px] absolute top-[287px] left-[54px] text-[20px] leading-[100%] font-bold underline font-montserrat text-[#FFFFFF]"
        >
          Số lượng Mã số dự thưởng (MSDT)
        </h3>

        <p
          className="w-[473px] h-[50px] absolute top-[325px] left-[54px] text-[14px] leading-[100%] font-medium tracking-[-0.03em] font-montserrat text-[#FFFFFF]"
        >
          Đối với chủ Thẻ tín dụng quốc tế cao cấp KienlongBank Visa Elite:
        </p>

        <div
          className="w-[480px] h-[90px] absolute top-[375px] left-[41px] text-[#FFFFFF]"
          style={{
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
          }}
        >
          <span
            className="w-[204px] h-[38px] absolute top-[45px] left-[13px] text-[14px] leading-[100%] font-bold font-montserrat"
          >
            SỐ LƯỢNG MSDT/ THẺ =
          </span>
          <span
            className="absolute top-[12px] left-[215px] w-[250px] h-[42px] px-[10px] py-[4px] border-b border-white font-montserrat text-[14px] flex items-center text-center"
          >
            Tổng doanh số giao dịch hợp lệ KienlongBank Visa Elite
          </span>
          <span
            className="absolute top-[62px] left-[320px] w-[60px] h-[17px] text-[14px] leading-[100%] font-bold font-montserrat lowercase"
          >
            500.000
          </span>

        </div>

        <p
          className="absolute top-[497px] left-[54px] w-[453px] h-[48px] text-[14px] leading-[100%] font-medium font-montserrat text-[#FFFFFF]"
        >
          Đối với chủ Thẻ tín dụng KienlongBank khác (tính trên doanh số giao dịch từng thẻ):
        </p>

        <div
          className="w-[480px] h-[90px] absolute top-[558px] left-[41px] text-[#FFFFFF]"
          style={{
            background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
          }}
        >
          <span
            className="w-[204px] h-[38px] absolute top-[45px] left-[13px] text-[14px] leading-[100%] font-bold font-montserrat"
          >
            SỐ LƯỢNG MSDT/ THẺ =
          </span>
          <span
            className="absolute top-[12px] left-[215px] w-[250px] h-[42px] px-[10px] py-[4px] border-b border-white font-montserrat text-[14px] flex items-center text-center"
          >
            Tổng doanh số giao dịch hợp lệ từng Thẻ tín dụng khác
          </span>
          <span
            className="absolute top-[62px] left-[320px] w-[60px] h-[17px] text-[14px] leading-[100%] font-bold font-montserrat lowercase"
          >
            1.000.000
          </span>

        </div>
        <div
          className="absolute top-[143px] left-[535px] w-[893px] h-[348px] p-[20px] rounded-[20px] flex flex-col gap-[4px] bg-white text-[#204295] ;
"
        >
          <h3
            className="w-[853px] h-[38px] text-[20px] leading-[100%] font-bold font-montserrat underline"
          >
            Điều khoản và Điều kiện áp dụng:
          </h3>
          <div className="w-[853px] h-[141px] text-[14px] leading-[150%] font-medium font-montserrat flex flex-col space-y-1">
            <p>Giao dịch hợp lệ là giao dịch thanh toán mua hàng hóa, dịch vụ, thanh toán hóa đơn bằng Thẻ tín dụng KienlongBank, có thời gian giao dịch cũng như được ghi nhận thành công vào hệ thống trong thời gian diễn ra chương trình; không bao gồm giao dịch rút, lãi, rút tiền mặt từ thẻ tín dụng, giao dịch phát sinh do sơ suất của hệ thống, giao dịch hoàn trả, giao dịch chối hủy.</p>
            <p>Giao dịch hợp lệ của thẻ phụ được tính vào doanh số giao dịch của thẻ chính để tính tổng doanh số giao dịch.</p>
          </div>

          <h3 className="w-[853px] h-[38px] text-[20px] leading-[100%] font-bold font-montserrat underline">
            Phương thức nhận mã số dự thưởng
          </h3>
          <div className="w-[853px] h-[95px] text-[14px] leading-[100%] font-medium font-montserrat flex flex-col space-y-1">
            <p>Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</p>
            <p>- Thời gian phát sinh giao dịch để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025</p>
            <p>- Thời gian thông báo mã số dự thưởng: Trước ngày 19/11/2025</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreditCardPromotionPopup; 