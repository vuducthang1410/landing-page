import React from "react";
import { bgPopup } from "../../data";
import mubaohiem from "../../assets/mubaohiem.webp";
import aomua from "../../assets/aomua.webp";

export interface ComboCreditCustomerPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const ComboCreditCustomerPopup: React.FC<ComboCreditCustomerPopupProps> = ({
  open,
  onClose,
  scale = 1,
}) => {
  if (!open) return null;

  const scaled = (value: number) => value * scale;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg shadow-lg overflow-auto text-left"
        style={{
          width: scaled(1460),
          height: scaled(824),
          backgroundImage: `url(${bgPopup})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-white hover:text-gray-200"
          style={{
            top: scaled(10),
            right: scaled(16),
            fontSize: scaled(45),
            height: scaled(45),
            lineHeight: "100%",
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>

        <h2
          className="flex justify-center items-center text-center align-middle tracking-[0%] font-bold uppercase text-[#00E5FF]"
          style={{
            width: scaled(968),
            height: scaled(99),
            marginTop: scaled(22),
            marginLeft: scaled(264),
            fontSize: scaled(40),
            lineHeight: "100%",
            fontFamily: "Montserrat",
            marginBottom: scaled(20),
          }}
        >
          COMBO DÀNH CHO KHÁCH HÀNG TÍN DỤNG
        </h2>

        {/* Left Section */}
        <div
          className=" text-white"
          style={{
            marginLeft: scaled(54),
            width: scaled(444),
            marginBottom: scaled(80),
          }}
        >
          <h3
            className=" underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat",
              fontWeight: 700,
              letterSpacing: 0,
              lineHeight: "100%",
            }}
          >
            Thời gian áp dụng:
          </h3>
          <p
            className="leading-[150%] font-medium text-justify"
            style={{
              fontSize: scaled(14),
              marginBottom: scaled(23),
              fontFamily: "Montserrat",
            }}
          >
            Từ 25/06/2025 - 31/10/2025
          </p>
          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat",
            }}
          >
            Đối tượng được hưởng khuyến mại:
          </h3>
          <p
            className="leading-[150%] font-medium text-justify"
            style={{
              fontSize: scaled(14),
              marginBottom: scaled(24),
              fontFamily: "Montserrat",
            }}
          >
            Khách hàng cá nhân phát sinh khoản vay vốn (không bao gồm các khoản
            vay cầm cố tiền gửi cá nhân/Giấy tờ có giá; trả góp ngày; cấp hạn
            mức thẻ tín dụng; các khoản vay tín chấp) trong thời gian diễn ra
            chương trình.
          </p>
          <h3
            className="font-bold underline"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(8),
              fontFamily: "Montserrat",
            }}
          >
            Sản phẩm áp dụng:
          </h3>
          <p
            className="leading-[150%] font-medium text-justify"
            style={{
              fontSize: scaled(14),
              fontFamily: "Montserrat",
              height: scaled(79),
            }}
          >
            Khoản vay hợp lệ của Khách hàng cá nhân phát sinh khoản vay vốn
            trong thời gian chương trình (không bao gồm các khoản vay cầm cố
            tiền gửi cá nhân/Giấy tờ có giá; trả góp ngày; cấp hạn mức thẻ tín
            dụng; các khoản vay tín chấp).
          </p>
        </div>

        {/* Right Section */}
        <div
          className="absolute flex flex-col bg-white text-[#204295]"
          style={{
            top: scaled(143),
            left: scaled(535),
            width: scaled(893),
            height: scaled(421),
            paddingTop: scaled(20),
            paddingBottom: scaled(20),
            paddingLeft: scaled(20),
            paddingRight: scaled(13),
            borderRadius: scaled(20),
            gap: scaled(4),
          }}
        >
          <h3
            className="font-bold underline"
            style={{ fontSize: scaled(20), fontFamily: "Montserrat" }}
          >
            Điều kiện:
          </h3>

          {/* Combo 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ width: scaled(522), height: scaled(154) }}>
              <h5
                style={{
                  fontFamily: "Montserrat",
                  fontSize: scaled(14),
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "left",
                }}
              >
                Combo 1 – dành cho KHCN vay SXKD
              </h5>
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: scaled(14),
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "left",
                  textTransform: "none",
                }}
              >
                - Khoản vay SXKD
                <br />
                - TKSĐ tối thiểu 1,5%*Giá trị hạn mức vay hoặc số tiền vay
                <br />- Đăng ký thành công dịch vụ Myshop.
              </span>
            </div>
            <div
              style={{
                textAlign: "center",
                position: "relative",
                width: scaled(310),
                height: scaled(142),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: scaled(-26),
                  left: scaled(0),
                  height: scaled(65),
                  width: scaled(122),
                  zIndex: 4,
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: scaled(42),
                    background:
                      "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Montserrat",
                    height: scaled(50),
                    lineHeight: "100%",
                    letterSpacing: 0,
                  }}
                >
                  2000
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: scaled(14),
                    lineHeight: "100%",
                    textTransform: "uppercase",
                  }}
                >
                  ÁO MƯA
                </div>
              </div>

              <img
                src={aomua}
                alt="Áo mưa"
                style={{
                  width: scaled(225),
                  height: scaled(131),
                  position: "absolute",
                  bottom: scaled(0),
                  right: scaled(0),
                  zIndex: 3,
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
            <div style={{ width: scaled(522), height: scaled(154) }}>
              <h5
                style={{
                  fontFamily: "Montserrat",
                  fontSize: scaled(14),
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "left",
                }}
              >
                Combo 2 – dành cho KHCN vay PVĐS
              </h5>
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: scaled(14),
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "left",
                  textTransform: "none",
                  height:scaled(30)
                }}
              >
                - Khoản vay PVĐS
                <br />- TKSĐ tối thiểu 2%* Giá trị hạn mức vay hoặc số tiền vay
              </span>
            </div>
            <div
              style={{
                textAlign: "center",
                position: "relative",
                width: scaled(310),
                height: scaled(142),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: scaled(-15),
                  left: scaled(0),
                  height: scaled(65),
                  width: scaled(122),
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: scaled(42),
                    background:
                      "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Montserrat",
                    height: scaled(50),
                    lineHeight: "100%",
                    letterSpacing: 0,
                  }}
                >
                  1000
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: scaled(14),
                    lineHeight: "100%",
                    textTransform: "uppercase",
                  }}
                >
                  MŨ BẢO HIỂM
                </div>
              </div>

              <img
                src={mubaohiem}
                alt="Mũ bảo hiểm"
                style={{
                  width: scaled(166),
                  height: scaled(115),
                  position: "absolute",
                  bottom: scaled(0),
                  right: scaled(0),
                }}
              />
            </div>
          </div>
        </div>

        {/* Terms Below Sections */}
        <div
          className="text-white"
          style={{
            marginLeft: scaled(54),
            borderRadius: scaled(12),
            fontFamily: "Montserrat",
            fontSize: scaled(14),
          }}
        >
          <h3
            className="font-bold underline text-white"
            style={{
              fontSize: scaled(20),
              marginBottom: scaled(4),
              width: scaled(853),
              height: scaled(38),
            }}
          >
            Điều khoản áp dụng:
          </h3>
          <div
            className="leading-[150%] font-medium"
            style={{
              display: "flex",
              flexDirection: "column",
              height: scaled(159),
              width: scaled(1374),
              fontFamily: "Montserrat",
              fontSize: scaled(14),
              fontWeight: 500,
              letterSpacing: 0,
              // lineHeight: "100%",
              gap: scaled(2),
            }}
          >
            - Khoản vay có Hợp đồng tín dụng và Khế ước nhận nợ (KUNN) ký và
            giải ngân trong thời gian của chương trình.
            <br />
            - Sau khi giải ngân thành công, khách hàng nhận quà tại Chi
            nhánh/Phòng giao dịch KienlongBank nơi khách hàng vay vốn.
            <br />
            - Mỗi KH nhận tối đa 01 quà tặng trong thời gian triển khai chương
            trình.
            <br />
            - Trường hợp hết quà tặng theo combo của khách hàng, KienlongBank sẽ
            tặng KH quà tặng có giá trị thấp hơn liền kề nếu khách hàng đồng ý
            và KienlongBank còn quà.
            <br />
            - Quà tặng không có giá trị quy đổi thành tiền mặt.
            <br />
            - Khách hàng được tham gia đồng thời các chương trình ưu đãi, khuyến
            mại khác.
            <br />- Khách hàng cam kết duy trì khoản vay tối thiểu 3 tháng.
            KienlongBank có quyền thu hồi quà tặng trong trường hợp khách hàng
            tất toán (sớm) khoản vay và không thỏa điều kiện thời gian duy trì
            khoản vay tối thiểu.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCreditCustomerPopup;
