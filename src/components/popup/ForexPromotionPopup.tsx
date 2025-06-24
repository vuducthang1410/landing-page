import React from "react";
import { bgPopup } from "../../data";

export interface ForexPromotionPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const ForexPromotionPopup: React.FC<ForexPromotionPopupProps> = ({
  open,
  onClose,
  scale = 1,
}) => {
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
        <button
          className="absolute text-white hover:text-gray-200"
          style={{
            top: scaled(16),
            right: scaled(16),
            fontSize: scaled(24),
            backgroundColor: "transparent",
          }}
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        <h2
          className="flex justify-center items-center text-center align-middle tracking-[0%] font-bold uppercase text-[#00E5FF]"
          style={{
            width: scaled(932),
            height: scaled(99),
            marginTop: scaled(22),
            marginLeft: scaled(264),
            fontSize: scaled(40),
            lineHeight: "100%",
            fontFamily: "Montserrat",
          }}
        >
          NGOẠI TỆ
        </h2>

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
              fontFamily: "Montserrat",
            }}
          >
            Đối tượng ưu đãi
          </h3>
          <p
            className="leading-[150%] font-medium text-justify tracking-[-0.02em]"
            style={{
              fontSize: scaled(14),
              marginBottom: scaled(16),
              fontFamily: "Montserrat",
            }}
          >
            Khách hàng cá nhân tham gia mua bán ngoại tệ với KienlongBank trong
            thời gian diễn ra chương trình.
          </p>

          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat",
            }}
          >
            Số lượng Mã số dự thưởng (MSDT)
          </h3>

          <div
            className="relative text-[#FFFFFF]"
            style={{
              width: scaled(480),
              height: scaled(130),
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 56.25%, rgba(255, 255, 255, 0) 100%)`,
            }}
          >
            <span
              className="absolute font-bold"
              style={{
                top: scaled(68),
                left: scaled(13),
                fontSize: scaled(14),
                lineHeight: "120%",
                fontFamily: "Montserrat",
              }}
            >
              SỐ LƯỢNG MSDT =
            </span>
            <span
              className="absolute items-center text-center"
              style={{
                top: scaled(12),
                left: scaled(155),
                width: scaled(250),
                height: scaled(42),
                paddingBottom: scaled(4),
                fontSize: scaled(14),
                fontFamily: "Montserrat",
              }}
            >
              Giá trị giao dịch quy đổi ra VNĐ x
            </span>
            <span
              className="absolute items-center text-center"
              style={{
                top: scaled(30),
                left: scaled(155),
                width: scaled(250),
                height: scaled(42),
                paddingBottom: scaled(4),
                fontSize: scaled(14),
                fontFamily: "Montserrat",
              }}
            >
              x
            </span>
            <span
              className="absolute border-b border-white items-center text-center"
              style={{
                top: scaled(50),
                left: scaled(155),
                width: scaled(250),
                paddingBottom: scaled(4),
                fontSize: scaled(14),
                fontFamily: "Montserrat",
              }}
            >
              Hệ số loại giao dịch
            </span>
            <span
              className="absolute font-bold lowercase"
              style={{
                top: scaled(82),
                left: scaled(240),
                fontSize: scaled(14),
                lineHeight: "100%",
                fontFamily: "Montserrat",
              }}
            >
              10.000.000
            </span>
          </div>
          <p
            className="leading-[150%] font-medium text-justify tracking-[-0.02em]"
            style={{
              marginTop: scaled(22),
              fontSize: scaled(14),
              marginBottom: scaled(16),
              fontFamily: "Montserrat",
            }}
          >
            - Giá trị giao dịch quy đổi ra VND = Số lượng ngoại tệ giao dịch ×
            Tỷ giá giao dịch
            <br />
            - Hệ số loại giao dịch:
            <br />
            + Giao dịch phục vụ thanh toán quốc tế (có chứng từ, như học phí,
            viện phí, du lịch, chuyển tiền hợp pháp…): 4<br />+ Giao dịch phục
            vụ nhu cầu cá nhân trong nước (mua/bán đổi tiền mặt, không kèm chứng
            từ): 2
          </p>
        </div>

        <div
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(395),
            padding: scaled(20),
            borderRadius: scaled(20),
            gap: scaled(4),
          }}
        >
          <h3
            className="leading-[100%] font-bold underline"
            style={{
              fontSize: scaled(20),
              fontFamily: "Montserrat",
            }}
          >
            Điều khoản và Điều kiện áp dụng:
          </h3>
          <ul
            className="leading-[150%] font-medium"
            style={{
              fontSize: scaled(14),
              marginTop: scaled(16),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat",
            }}
          >
            <li style={{}}>
              - Mỗi giao dịch từ 10 triệu VND quy đổi trở lên mới được tính tích
              lũy MSDT.
            </li>
            <li style={{}}>
              - Giao dịch phải có chứng từ hợp lệ nếu muốn áp dụng hệ số cao hơn
              (thanh toán quốc tế).
            </li>
            <li style={{}}>
              - Giao dịch bị hủy/điều chỉnh sau khi phát sinh và trước 2 ngày so
              với ngày quay số sẽ bị loại MSDT tương ứng.
            </li>
            <li style={{}}>
              - KH trúng thưởng nhưng bị phát hiện kê khai sai mục đích giao
              dịch (ví dụ: khai là thanh toán quốc tế nhưng không có chứng từ
              hợp lệ) có thể bị thu hồi giải thưởng
            </li>
          </ul>

          <h3
            className="leading-[100%] font-bold underline"
            style={{
              fontSize: scaled(20),
              marginTop: scaled(16),
              fontFamily: "Montserrat",
            }}
          >
            Phương thức nhận mã số dự thưởng
          </h3>
          <ul
            className="leading-[150%] font-medium"
            style={{
              fontSize: scaled(14),
              marginTop: scaled(16),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat",
            }}
          >
            <li style={{}}>
              Khách hàng sẽ nhận được thông báo về mã số dự thưởng qua
              Notification trên App KienlongBank Plus như sau:
            </li>
            <li style={{}}>
              {" "}
              - Thời gian thực hiện các giao dịch mua bán ngoại tệ để xét sinh
              mã: Từ 25/06/2025 đến hết ngày 31/10/2025
            </li>
            <li style={{}}>
              {" "}
              - Thời gian thông báo mã số dự thưởng: Trước thời gian quay số 2
              ngày làm việc
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForexPromotionPopup;
