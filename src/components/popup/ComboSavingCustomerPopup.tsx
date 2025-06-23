import React from "react";
import { bgPopup } from "../../data";
import mubaohiem from "../../assets/mubaohiem.png";
import aomua from "../../assets/aomua.png";

export interface ComboSavingCustomerPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const ComboSavingCustomerPopup: React.FC<ComboSavingCustomerPopupProps> = ({
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
            fontFamily: "Montserrat",
          }}
        >
          COMBO DÀNH CHO KHÁCH HÀNG TIỀN GỬI
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
          {/* Đối tượng ưu đãi */}
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
            Tiền gửi tiết kiệm tiền gửi có kỳ hạn tại quầy hoặc trực tuyến, tài
            khoản thanh toán số đẹp, dịch vụ MyShop.
          </p>

          {/* Thời gian áp dụng */}
          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat",
            }}
          >
            Thời gian áp dụng
          </h3>
          <ul
            className="leading-[150%] font-medium"
            style={{
              fontSize: scaled(14),
              marginBottom: scaled(16),
              gap: scaled(6),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat",
            }}
          >
            <li>Từ 25/06/2025 - 31/10/2025</li>
          </ul>

          {/* Điều khoản & điều kiện áp dụng */}
          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat",
            }}
          >
            Điều khoản và điều kiện áp dụng
          </h3>
          <ul
            className="leading-[150%] font-medium"
            style={{
              fontSize: scaled(14),
              gap: scaled(6),
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat",
            }}
          >
            <ul
              className="leading-[150%] font-medium"
              style={{
                fontSize: scaled(14),
                gap: scaled(6),
                display: "flex",
                flexDirection: "column",
                fontFamily: "Montserrat",
              }}
            >
              <li>
                • Khách hàng được tham gia đồng thời combo Tiền gửi, combo Tín
                dụng và Combo Trái phiếu và nhận tối đa 01 quà tặng trong mỗi
                combo.
              </li>
              <li>
                • Trường hợp hết quà tặng, KienlongBank được phép sử dụng linh
                hoạt quà tặng trong phạm vi combo 1 và 2.
              </li>
              <li>
                • Khách hàng cam kết duy trì số dư tối thiểu 45 ngày kể từ ngày
                mở mới/tái tục. Trường hợp tất toán trước hạn một phần/toàn bộ
                số tiền gửi/tiết kiệm trong vòng 45 ngày kể từ ngày mở mới/tái
                tục, khách hàng hoàn trả lại giá trị quà tặng đã nhận bằng tiền
                cho KienlongBank.
              </li>
              <li>
                • Khách hàng được tham gia đồng thời các chương trình ưu đãi,
                khuyến mại khác và vẫn được áp dụng chính sách cộng lãi suất ưu
                đãi (nếu có) theo quy định của KienlongBank từng thời kỳ.
              </li>
            </ul>
          </ul>
        </div>

        {/* Right Section */}
        <div
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(595),
            padding: scaled(20),
            borderRadius: scaled(20),
            gap: scaled(4),
          }}
        >
          <h3
            className="leading-[100%] font-bold underline"
            style={{ fontSize: scaled(20), fontFamily: "Montserrat" }}
          >
            Điều kiện:
          </h3>
          <div
            style={{
              maxWidth: 720,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              borderRadius: 8,
              padding: 16,
            }}
          >
            {/* Combo 1 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: 480 }}>
                <h5>Combo 1</h5>
                <span>
                  - KHCN gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi
                  mới và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên,
                  và <br />- Mua TKSĐ tại quầy có phí thực thu từ 500 nghìn đồng
                  trở lên
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    marginTop: 8,
                    fontSize: 42,
                    background:
                      "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    fontFamily: "Montserrat",
                  }}
                >
                  1500
                </span>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "100%",
                    letterSpacing: 0,
                    textAlign: "center",
                    textTransform: "uppercase",
                    width: 122,
                    height: 23,
                    margin: "0 auto",
                    marginBottom: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  MŨ BẢO HIỂM
                </div>
                <img
                  src={mubaohiem}
                  alt="Mũ bảo hiểm"
                  style={{
                    width: 180,
                    height: "auto",
                    marginLeft: 152,
                    marginTop: -50,
                  }}
                />
              </div>
            </div>

            {/* Combo 2 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: 480 }}>
                <h5>Combo 2</h5>
                <span>
                  - KHCN gửi tiền VND tại quầy hoặc gửi trực tuyến (bao gồm gửi
                  mới và tái tục) từ 50 triệu đồng, kỳ hạn từ 6 tháng trở lên,
                  và <br />- Đăng ký thành công dịch vụ Myshop
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    marginTop: 8,
                    fontSize: 42,
                    background:
                      "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  1500
                </span>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "100%",
                    letterSpacing: 0,
                    textAlign: "center",
                    textTransform: "uppercase",
                    width: 122,
                    height: 23,
                    margin: "0 auto",
                    marginBottom: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ÁO MƯA
                </div>
                <img
                  src={aomua}
                  alt="Áo mưa"
                  style={{
                    width: 180,
                    height: "auto",
                    marginLeft: 152,
                    marginTop: -50,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboSavingCustomerPopup;
