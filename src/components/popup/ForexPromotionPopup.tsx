import React from "react";
import bgImage from "../../assets/bg2.png";

export interface ForexPromotionPopupProps {
  open: boolean;
  onClose: () => void;
}

const ForexPromotionPopup: React.FC<ForexPromotionPopupProps> = ({ open, onClose }) => {
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
          NGOẠI TỆ
        </h2>

        <h3 className="w-[317px] h-[33px] absolute top-[143px] left-[54px] text-[20px] leading-[100%] font-bold underline text-[#FFFFFF] font-montserrat">
          Đối tượng ưu đãi
        </h3>

        <p className="w-[444px] h-auto absolute top-[181px] left-[54px] text-[14px] leading-[150%] font-medium text-justify tracking-[-0.02em] font-montserrat text-[#FFFFFF]">
          Khách hàng cá nhân tham gia mua bán ngoại tệ với KienlongBank trong thời gian diễn ra chương trình.
        </p>

        <h3 className="w-[485px] h-[38px] absolute top-[265px] left-[54px] text-[20px] leading-[100%] font-bold underline font-montserrat text-[#FFFFFF]">
          Số lượng Mã số dự thưởng (MSDT)
        </h3>

        <div className="w-[480px] h-[90px] absolute top-[313px] left-[41px] text-[#FFFFFF]" style={{ background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)` }}>
          <span className="absolute top-[45px] left-[13px] text-[14px] leading-[100%] font-bold font-montserrat">
            SỐ LƯỢNG MSDT =
          </span>
          <span className="absolute top-[12px] left-[215px] w-[250px] h-[42px] px-[10px] py-[4px] border-b border-white font-montserrat text-[14px] flex items-center text-center">
            Giá trị giao dịch quy đổi ra VND × Hệ số loại giao dịch
          </span>
          <span className="absolute top-[62px] left-[320px] w-[100px] h-[17px] text-[14px] leading-[100%] font-bold font-montserrat lowercase">
            10.000.000
          </span>
        </div>

        <div className="absolute top-[420px] left-[54px] w-[470px] text-white text-[13px] font-montserrat leading-[140%]">
          <p>- Giá trị giao dịch quy đổi ra VND = Số lượng ngoại tệ giao dịch × Tỷ giá giao dịch</p>
          <p>- Hệ số loại giao dịch:</p>
          <p>+ Giao dịch phục vụ thanh toán quốc tế (có chứng từ, như học phí, viện phí, du lịch, chuyển tiền hợp pháp…): <b>4</b></p>
          <p>+ Giao dịch phục vụ nhu cầu cá nhân trong nước (mua/bán đổi tiền mặt, không kèm chứng từ): <b>2</b></p>
        </div>

        <div className="absolute top-[143px] left-[535px] w-[893px] h-auto p-[20px] rounded-[20px] flex flex-col gap-[4px] bg-white text-[#204295]">
          <h3 className="w-full text-[20px] leading-[100%] font-bold font-montserrat underline">
            Điều khoản và Điều kiện áp dụng:
          </h3>
          <div className="text-[14px] leading-[150%] font-medium font-montserrat space-y-2">
            <p>Mỗi giao dịch từ 10 triệu VND quy đổi trở lên mới được tính tích lũy MSDT.</p>
            <p>Giao dịch phải có chứng từ hợp lệ nếu muốn áp dụng hệ số cao hơn (thanh toán quốc tế).</p>
            <p>Giao dịch bị hủy/điều chỉnh sau khi phát sinh và trước 2 ngày so với ngày quay số sẽ bị loại MSDT tương ứng.</p>
            <p>KH trúng thưởng nhưng bị phát hiện kê khai sai mục đích giao dịch (ví dụ: khai là thanh toán quốc tế nhưng không có chứng từ hợp lệ) có thể bị thu hồi giải thưởng.</p>
          </div>

          <h3 className="w-full text-[20px] leading-[100%] font-bold font-montserrat underline mt-4">
            Phương thức nhận mã số dự thưởng
          </h3>
          <div className="text-[14px] leading-[150%] font-medium font-montserrat space-y-1">
            <p>Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</p>
            <p>- Thời gian thực hiện các giao dịch mua bán ngoại tệ để xét sinh mã: Từ 25/06/2025 đến hết ngày 31/10/2025</p>
            <p>- Thời gian thông báo mã số dự thưởng: Trước thời gian quay số 2 ngày làm việc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexPromotionPopup;
