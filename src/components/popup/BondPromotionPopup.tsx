import React from "react";
import { bgPopup } from "../../data";

export interface BondPromotionPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const BondPromotionPopup: React.FC<BondPromotionPopupProps> = ({ open, onClose, scale = 1 }) => {
  if (!open) return null;

  const scaled = (value: number) => value * scale;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative rounded-lg shadow-lg overflow-auto text-left"
        style={{
          width: scaled(1460),
          height: scaled(824),
          backgroundImage: `url(${bgPopup})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute text-white hover:text-gray-200"
          style={{
            top: scaled(16),
            right: scaled(16),
            fontSize: scaled(24),
          }}
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        {/* Title */}
        <h2
          className="flex justify-center items-center text-center align-middle tracking-[0%] font-bold uppercase text-[#00E5FF]"
          style={{
            width: scaled(932),
            height: scaled(99),
            marginTop: scaled(22),
            marginLeft: scaled(264),
            fontSize: scaled(40),
            lineHeight: "100%",
            fontFamily: "Montserrat"
          }}
        >
          TRÁI PHIẾU KIENLONGBANK
        </h2>

        {/* Left Section */}
        <div
          className="absolute text-white"
          style={{
            top: scaled(143),
            left: scaled(54),
            width: scaled(444),
          }}
        >
          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat"
            }}
          >
            Đối tượng ưu đãi
          </h3>
          <p
            className="leading-[150%] font-medium text-justify tracking-[-0.02em]"
            style={{
              fontSize: scaled(14),
              marginBottom: scaled(16),
              fontFamily: "Montserrat"
            }}
          >
            Khách hàng cá nhân mua trái phiếu KienlongBank từ 50 triệu VNĐ trở lên trong thời gian diễn ra chương trình.
          </p>

          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat"
            }}
          >
            Số lượng Mã số dự thưởng (MSDT)
          </h3>

          <div
            className="relative text-[#FFFFFF]"
            style={{
              width: scaled(480),
              height: scaled(130),
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`
            }}
          >
            <span
              className="absolute font-bold"
              style={{
                top: scaled(81),
                left: scaled(13),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              SỐ LƯỢNG MSDT =
            </span>

            <span
              className="absolute items-center text-center"
              style={{
                top: scaled(12),
                left: scaled(205),
                width: scaled(190),
                height: scaled(42),
                fontSize: scaled(14),
                paddingLeft: scaled(10),
                paddingRight: scaled(10),
                paddingTop: scaled(4),
                paddingBottom: scaled(4),
                fontFamily: "Montserrat"
              }}
            >
              Số tiền mua trái phiếu
            </span>

            <span
              className="absolute items-center text-center"
              style={{
                top: scaled(30),
                left: scaled(205),
                width: scaled(190),
                height: scaled(42),
                fontSize: scaled(14),
                paddingLeft: scaled(10),
                paddingRight: scaled(10),
                paddingTop: scaled(4),
                paddingBottom: scaled(4),
                fontFamily: "Montserrat"
              }}
            >
              ×
            </span>

            <span
              className="absolute border-b border-white items-center text-center"
              style={{
                top: scaled(48),
                left: scaled(205),
                width: scaled(190),
                height: scaled(42),
                fontSize: scaled(14),
                paddingLeft: scaled(10),
                paddingRight: scaled(10),
                paddingTop: scaled(4),
                paddingBottom: scaled(4),
                fontFamily: "Montserrat"
              }}
            >
              Kỳ hạn trái phiếu
            </span>

            <span
              className="absolute font-bold lowercase"
              style={{
                top: scaled(99),
                left: scaled(260),
                width: scaled(80),
                height: scaled(17),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat"
              }}
            >
              100.000.000
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(425),
            padding: scaled(20),
            borderRadius: scaled(20),
            gap: scaled(4),
          }}
        >
          <h3
            className="leading-[100%] font-bold underline"
            style={{
              fontSize: scaled(20),
              fontFamily: "Montserrat"
            }}
          >
            Điều khoản và Điều kiện áp dụng:
          </h3>
          <ul
            className="leading-[150%] font-medium"
            style={{
              fontSize: scaled(14),
              marginTop: scaled(16),
              gap: scaled(8),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat"
            }}
          >
            <li style={{}}>- Trường hợp KH chuyển nhượng một phần/toàn bộ trái phiếu trước thời gian quay số: KienlongBank sẽ loại các mã dự thưởng tương ứng với số tiền mà KH chuyển nhượng ra khỏi dữ liệu quay số. Thời gian chốt dữ liệu để loại MSDT là 2 ngày trước khi diễn ra quay số.</li>
            <li style={{}}>- Trường hợp KH có tên trong danh sách trúng thưởng chuyển nhượng một phần/toàn bộ trái phiếu trước thời điểm trái phiếu đáo hạn và trước thời hạn trao thưởng: KienlongBank sẽ thu hồi giải thưởng và không thực hiện trao thưởng cho KH.</li>
            <li style={{}}>- Trường hợp KH trúng thưởng chuyển nhượng một phần/toàn bộ trái phiếu trước thời điểm trái phiếu đáo hạn và sau thời gian trao thưởng: Không thu hồi giải thưởng đã trao cho KH.</li>
          </ul>

          <h3
            className="leading-[100%] font-bold underline"
            style={{
              fontSize: scaled(20),
              marginTop: scaled(16),
              fontFamily: "Montserrat"
            }}
          >
            Phương Thức Nhận Mã Số Dự Thưởng
          </h3>
          <ul
            className="leading-[150%] font-medium"
            style={{
              fontSize: scaled(14),
              marginTop: scaled(16),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat"
            }}
          >
            <li style={{}}>Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua Notification trên App KienlongBank Plus như sau:</li>
            <li style={{}}>- Thời gian phát sinh mua trái phiếu KienlongBank phát hành ra công chúng Đợt 3: Dự kiến từ 26/06/2025 đến hết ngày 26/07/2025</li>
            <li style={{}}>- Thời gian thông báo mã số dự thưởng: Trước ngày 10/08/2025</li>
        </ul>


      </div>
    </div>
    </div >
  );
};

export default BondPromotionPopup;