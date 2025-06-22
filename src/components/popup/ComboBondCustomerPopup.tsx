import React from "react";

export interface ComboBondCustomerPopupProps {
  open: boolean;
  onClose: () => void;
}

const bowlImg = "https://cdn-icons-png.flaticon.com/512/3075/3075977.png";

const ComboBondCustomerPopup: React.FC<ComboBondCustomerPopupProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative w-[1460px] h-[824px] rounded-lg shadow-lg overflow-auto text-left bg-gradient-to-br from-fuchsia-500 via-blue-500 to-purple-400">
        <button
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-200"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        <h2 className="flex justify-center items-center w-[932px] h-[99px] mt-[22px] ml-[264px] text-[40px] leading-[100%] font-bold uppercase text-[#00E5FF] text-center align-middle font-montserrat tracking-[0%]">
          COMBO DÀNH CHO KHÁCH HÀNG TRÁI PHIẾU
        </h2>

        {/* Left Section */}
        <div className="absolute top-[143px] left-[54px] w-[444px] text-white">
          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">Thời gian áp dụng:</h3>
          <p className="text-[14px] mb-4 font-montserrat leading-[150%]">Từ 25/06/2025 - 31/10/2025</p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">Sản phẩm áp dụng:</h3>
          <p className="text-[14px] mb-4 font-montserrat leading-[150%]">Trái phiếu KienlongBank phát hành ra công chúng.</p>

          <h3 className="text-[20px] font-bold underline mb-2 font-montserrat">Điều khoản áp dụng:</h3>
          <ul className="list-disc pl-5 text-sm mb-4 space-y-1 font-montserrat leading-[150%]">
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
        <div className="absolute top-[143px] left-[535px] w-[893px] h-[595px] p-[20px] rounded-[20px] flex flex-col gap-[4px] bg-white text-[#204295]">
          <h3 className="text-[20px] leading-[100%] font-bold font-montserrat underline">
            Điều kiện:
          </h3>
          <div className="text-[14px] leading-[150%] font-medium font-montserrat space-y-4">
            <div>
              <p className="font-semibold">Combo 1</p>
              <ul className="list-disc pl-5 space-y-1">
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
              <p className="font-semibold">Combo 2</p>
              <ul className="list-disc pl-5 space-y-1">
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
