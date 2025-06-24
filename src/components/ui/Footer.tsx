import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";

interface FooterProps {
  scale: number;
  appstore: string;
  googleplay: string;
  qr: string;
  iconZalo: string;
  logo: string;
}

const Footer: React.FC<FooterProps> = ({
  scale,
  appstore,
  googleplay,
  qr,
  iconZalo,
  logo,
}) => {
  const scaled = (value: number) => value * scale;
  return (
    <>
      <footer
        id="call-now"
        className="absolute text-left bg-transparent"
        style={{
          width: scaled(1916),
          height: scaled(640),
          top: scaled(8000),
          left: scaled(0.5),
        }}
      >
        <div
          style={{
            position: "absolute",
            width: scaled(1636),
            height: scaled(427),
            top: scaled(45),
            left: scaled(165),
          }}
        >
          <div
            style={{
              position: "absolute",
              width: scaled(499),
              height: scaled(27),
              top: scaled(24),
              left: 0,
              fontFamily: "'Montserrat',Helvetica",
              fontWeight: "bold",
              color: "#333333",
              fontSize: scaled(21.5),
              whiteSpace: "nowrap",
              letterSpacing: 0,
            }}
          >
            Ngân hàng TMCP Kiên Long (KienlongBank)
          </div>

          <div
            style={{
              position: "absolute",
              width: scaled(775),
              height: scaled(181),
              top: scaled(70),
              left: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: scaled(688),
                height: scaled(22),
                top: scaled(3),
                left: 0,
                fontFamily: "'Montserrat',Helvetica",
                fontWeight: "normal",
                color: "#333333",
                fontSize: scaled(17.2),
                whiteSpace: "nowrap",
                letterSpacing: 0,
              }}
            >
              <span className="font-semibold">Hội sở: </span>
              <span>
                40-42-44 Phạm Hồng Thái, P.Vĩnh Thanh Vân, Tp.Rạch Giá, T.Kiên
                Giang
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(422),
                height: scaled(22),
                top: scaled(33),
                left: 0,
                fontFamily: "'Montserrat',Helvetica",
                fontWeight: "normal",
                color: "#333333",
                fontSize: scaled(17.2),
                whiteSpace: "nowrap",
                letterSpacing: 0,
              }}
            >
              <span className="font-semibold">Điện thoại:</span>
              <span> (0297) 3869 950 hoặc (028) 3933 3393</span>
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(462),
                height: scaled(21),
                top: scaled(63),
                left: 0,
                fontFamily: "'Montserrat',Helvetica",
                fontWeight: "normal",
                color: "#333333",
                fontSize: scaled(17.2),
                whiteSpace: "nowrap",
                letterSpacing: 0,
                textAlign: "left",
              }}
            >
              <span className="font-semibold">
                Hotline gọi trong lãnh thổ Việt Nam:
              </span>
              <span> 1900 6929</span>
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(520),
                height: scaled(22),
                top: scaled(93),
                left: 0,
                fontFamily: "'Montserrat',Helvetica",
                fontWeight: "normal",
                color: "#333333",
                fontSize: scaled(17.2),
                whiteSpace: "nowrap",
                letterSpacing: 0,
              }}
            >
              <span className="font-semibold">
                Hotline gọi từ nước ngoài về Việt Nam:{" "}
              </span>
              <span>(+84) 287309 6929</span>
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(218),
                height: scaled(17),
                top: scaled(123),
                left: 0,
                fontFamily: "'Montserrat',Helvetica",
                fontWeight: "normal",
                color: "#333333",
                fontSize: scaled(17.2),
                whiteSpace: "nowrap",
                letterSpacing: 0,
              }}
            >
              <span className="font-semibold">Mã SWIFT: </span>
              <span>KLBKVNVX</span>
            </div>

            <div
              style={{
                position: "absolute",
                width: scaled(775),
                height: scaled(30),
                top: scaled(151),
                left: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: scaled(730),
                  height: scaled(22),
                  top: scaled(-1),
                  left: 0,
                  fontFamily: "'Montserrat',Helvetica",
                  fontWeight: "normal",
                  color: "#333333",
                  fontSize: scaled(17.2),
                  whiteSpace: "nowrap",
                  letterSpacing: 0,
                }}
              >
                <span className="font-semibold">Email: </span>
                <span>
                  kienlong@kienlongbank.com hoặc
                  chamsockhachhang@kienlongbank.com
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              width: scaled(366.9),
              height: scaled(427),
              top: scaled(-185),
              left: scaled(1225),
            }}
          >
            <div
              style={{
                position: "absolute",
                width: scaled(366.9),
                height: scaled(241),
                top: scaled(186),
                left: 0,
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: scaled(22.96),
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    marginBottom: "0.35vw",
                    color: "#333333",
                  }}
                >
                  KienlongBank Mobile Banking
                </div>

                <div
                  className="flex flex-row items-center"
                  style={{ gap: scaled(5.43), marginBottom: scaled(8.61) }}
                >
                  <img
                    src={appstore}
                    alt="App Store"
                    style={{
                      height: scaled(50.22),
                      width: scaled(172.2),
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src={googleplay}
                    alt="Google Play"
                    style={{
                      height: scaled(50.22),
                      width: scaled(172.2),
                      objectFit: "cover",
                    }}
                  />
                </div>
                <img
                  src={qr}
                  alt="QR Code"
                  style={{
                    width: scaled(172.2),
                    height: scaled(172.2),
                    minWidth: 64,
                  }}
                  className="rounded bg-white shadow"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: scaled(1593),
            height: scaled(93),
            top: scaled(547),
            left: scaled(165),
            borderTop: `1.43px solid #e6e5e5`,
          }}
        >
          <div
            style={{
              position: "relative",
              width: scaled(1636),
              height: scaled(52),
              top: scaled(22),
              left: scaled(-22),
            }}
          >
            <div
              style={{
                position: "absolute",
                width: scaled(498),
                height: scaled(48),
                top: 0,
                left: scaled(22),
                fontFamily: "'Montserrat',Helvetica",
                fontWeight: 500,
                color: "#333333",
                fontSize: scaled(17.2),
              }}
            >
              Copyright © 2025 Kienlongbank. All right reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Social Links */}
      <div
        style={{
          position: "absolute",
          width: scaled(181),
          height: scaled(27),
          top: scaled(7720),
          left: scaled(1484),
          fontFamily: "'Montserrat',Helvetica",
          fontWeight: "bold",
          color: "#333333",
          fontSize: scaled(23),
          textAlign: "center",
          letterSpacing: 0,
          whiteSpace: "nowrap",
        }}
      >
        Liên kết nhanh
      </div>

      <div
        style={{
          position: "absolute",
          width: scaled(366),
          height: scaled(80),
          top: scaled(7759),
          left: scaled(1390),
        }}
      >
        <div className="flex flex-row gap-[15.47px] justify-center items-center">
          <a
            href="tel:1900 6929"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "2.99vw",
              height: "2.99vw",
              color: "white",
              borderRadius: "1.49vw",
              background:
                "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdOutlinePhoneIphone style={{ width: "1.7vw", height: "1.7vw" }} />
          </a>

          <a
            href="https://www.facebook.com/NganhangKienLong"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "2.99vw",
              height: "2.99vw",
              color: "white",
              borderRadius: "1.49vw",
              background:
                "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaFacebookF style={{ width: "1.7vw", height: "1.7vw" }} />
          </a>

          <a
            href="https://www.youtube.com/channel/UCgGTWNEzPqKaMSU8smHKr0g"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "2.99vw",
              height: "2.99vw",
              color: "white",
              borderRadius: "1.49vw",
              background:
                "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaYoutube style={{ width: "1.7vw", height: "1.7vw" }} />
          </a>

          <a
            href="https://zalo.me/nganhangkienlong"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "2.99vw",
              height: "2.99vw",
              color: "white",
              borderRadius: "1.49vw",
              background:
                "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={iconZalo}
              alt="Zalo"
              style={{
                width: scaled(25),
                height: scaled(25),
                minWidth: 32,
                minHeight: 32,
                maxWidth: 60,
                maxHeight: 60,
                objectFit: "contain",
              }}
              className="rounded-full"
            />
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          height: scaled(90),
          top: scaled(7696),
          left: scaled(149),
          display: "inline-flex",
          justifyContent: "around",
          gap: scaled(14.35),
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          className="relative"
          style={{ width: scaled(365.92), height: scaled(68.61) }}
          alt="Logo kienlongbank"
          src={logo}
        />
      </div>
    </>
  );
};

export default Footer;
