import React from "react";
import { bgPopup, giftPopUp } from "../../data";

export interface ComboBondCustomerPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const ComboBondCustomerPopup: React.FC<ComboBondCustomerPopupProps> = ({
  open,
  onClose,
  scale = 1,
}) => {
  if (!open) return null;

  const scaled = (value: number) => value * scale;

  const listStyle: React.CSSProperties = {
    fontSize: scaled(14),
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "column",
    gap: scaled(8),
    listStylePosition: "inside",
    paddingLeft: scaled(4),
    width: scaled(444),
    lineHeight: "100%",
    letterSpacing: 0,
    wordBreak: "break-word",
    overflowWrap: "break-word",
    textAlign: "justify",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
    onClick={onClose}>
      <div
        className="relative rounded-lg shadow-lg overflow-hidden text-left"
        style={{
          width: scaled(1460),
          height: scaled(824),
          backgroundImage: `url(${bgPopup})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
        }}
        onClick={e => e.stopPropagation()}
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

        {/* Title */}
        <h2
          className="flex justify-center items-center text-center tracking-[0%] font-bold uppercase text-[#00E5FF]"
          style={{
            width: "100%",
            marginTop: scaled(40),
            fontSize: scaled(40),
            fontFamily: "Montserrat",
          }}
        >
          COMBO DÀNH CHO KHÁCH HÀNG TRÁI PHIẾU
        </h2>

        {/* Content Body */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: scaled(40),
            padding: `0 ${scaled(50)}px`,
            marginTop: scaled(40),
          }}
        >
          {/* Left Column */}
          <div
            className="text-white"
            style={{
              width: scaled(450),
              display: "flex",
              flexDirection: "column",
              gap: scaled(16),
            }}
          >
            <div>
              <h3
                className="font-bold underline"
                style={{
                  fontSize: scaled(18),
                  marginBottom: scaled(8),
                  fontFamily: "Montserrat",
                }}
              >
                Thời gian áp dụng:
              </h3>
              <p
                style={{
                  fontSize: scaled(16),
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
              >
                Từ 25/06/2025 - 31/10/2025
              </p>
            </div>

            <div>
              <h3
                className="font-bold underline"
                style={{
                  fontSize: scaled(18),
                  marginBottom: scaled(8),
                  fontFamily: "Montserrat",
                }}
              >
                Sản phẩm áp dụng:
              </h3>
              <p
                style={{
                  fontSize: scaled(16),
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
              >
                Trái phiếu KienlongBank phát hành ra công chúng.
              </p>
            </div>

            <div>
              <h3
                className="font-bold underline"
                style={{
                  fontSize: scaled(18),
                  marginBottom: scaled(8),
                  fontFamily: "Montserrat",
                }}
              >
                Điều khoản áp dụng:
              </h3>
              <ul style={listStyle}>
                <li>
                  - Khách hàng không được hủy đặt mua trái phiếu cho đến hết
                  ngày kết thúc đợt chào bán.
                </li>
                <li>
                  - Sau khi nộp tiền và phong tỏa tiền thành công, khách hàng
                  nhận quà tại Chi nhánh/Phòng giao dịch KienlongBank, nơi khách
                  hàng đăng ký mua trái phiếu.
                </li>
                <li>
                  - Khách hàng được tham gia đồng thời các chương trình ưu đãi,
                  khuyến mãi khác (nếu có) theo quy định của KienlongBank từng
                  thời kỳ.
                </li>
                <li>
                  - Mỗi KH nhận tối đa 01 quà tặng trong thời gian triển khai
                  chương trình.
                </li>
                <li>- Quà tặng không có giá trị quy đổi thành tiền mặt.</li>
                <li>
                  - Khách hàng được tham gia đồng thời các chương trình ưu đãi,
                  khuyến mại khác.
                </li>
                <li>
                  - Khách hàng cam kết nắm giữ trái phiếu tối thiểu 4 tháng.
                  KienlongBank có quyền thu hồi quà tặng trong trường hợp khách
                  hàng chuyển nhượng trái phiếu sớm và không thỏa điều kiện thời
                  gian nắm giữ trái phiếu tối thiểu.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="bg-white"
            style={{
              width: scaled(893),
              height: scaled(421),
              padding: scaled(20),
              borderRadius: scaled(20),
              color: "#0D0573",
              position: "relative",
            }}
          >
            <h3
              className="font-bold underline"
              style={{
                fontSize: scaled(20),
                fontFamily: "Montserrat",
                height: scaled(38),
                fontWeight: 700,
                letterSpacing: 0,
                lineHeight: "100%",
              }}
            >
              Điều kiện:
            </h3>

            {/* Combo 1 Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: scaled(522),
                  height: scaled(167),
                }}
              >
                <h4
                  className="font-bold"
                  style={{
                    fontSize: scaled(18),
                    fontFamily: "Montserrat",
                    marginBottom: scaled(12),
                  }}
                >
                  Combo 1
                </h4>
                <ul style={listStyle}>
                  <li>- Tham gia tối thiểu 75 triệu trái phiếu Đợt 3 và</li>
                  <li>- Mua TKSD (tối thiểu 500 nghìn đồng)</li>
                </ul>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: scaled(295),
                  height: scaled(147.71),
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: scaled(138),
                    height: scaled(71),
                    position: "absolute",
                    top: scaled(-26),
                    left: scaled(0),
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(90deg, #7F00FF 0%, #00E5FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: scaled(42),
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      height: scaled(55),
                    }}
                  >
                    750
                  </div>
                  <p
                    style={{
                      fontSize: scaled(14),
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      color: "#204295",
                      letterSpacing: 0,
                      lineHeight: "100%",
                    }}
                  >
                    BỘ 10 CHÉN (BÁT)
                  </p>
                </div>

                <img
                  src={giftPopUp}
                  alt="Bộ 10 chén"
                  style={{
                    width: scaled(203),
                    position: "absolute",
                    bottom: scaled(0),
                    right: scaled(0),
                    zIndex: 1,
                  }}
                />
              </div>
            </div>

            {/* Combo 2 Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: scaled(522),
                  height: scaled(134),
                }}
              >
                <h4
                  className="font-bold"
                  style={{
                    fontSize: scaled(18),
                    fontFamily: "Montserrat",
                    marginBottom: scaled(12),
                  }}
                >
                  Combo 2
                </h4>
                <ul style={listStyle}>
                  <li>
                    - Lũy kế tham gia mua trái phiếu trong 3 đợt từ 100 triệu
                    đồng, trong đó đợt 3 tối thiểu 25 triệu đồng và
                  </li>
                  <li>- Đăng ký dịch vụ MyShop gói Start Up trở lên</li>
                </ul>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: scaled(295),
                  height: scaled(147.71),
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: scaled(138),
                    height: scaled(71),
                    position: "absolute",
                    top: scaled(-26),
                    left: scaled(0),
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(90deg, #7F00FF 0%, #00E5FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: scaled(42),
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      height: scaled(55),
                    }}
                  >
                    250
                  </div>
                  <p
                    style={{
                      fontSize: scaled(14),
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      color: "#204295",
                      letterSpacing: 0,
                      lineHeight: "100%",
                    }}
                  >
                    BỘ 10 CHÉN (BÁT)
                  </p>
                </div>
                <img
                  src={giftPopUp}
                  alt="Bộ 10 chén"
                  style={{
                    width: scaled(203),
                    height: scaled(118.19110870361328),
                    position: "absolute",
                    bottom: scaled(0),
                    right: scaled(0),
                    zIndex: 1,
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

export default ComboBondCustomerPopup;
