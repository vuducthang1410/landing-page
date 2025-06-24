import React from "react";
import logoKLB from "../../../assets/logo-kienlongbank.png";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { appstore, googleplay, iconZalo, qr } from "../../../data";

interface FooterMobileProps {
  scaled: (value: number) => number;
}

const FooterMobile: React.FC<FooterMobileProps> = ({ scaled }) => {
  return (
    <div
      style={{
        width: scaled(375),
        height: scaled(812),
        position: "absolute",
        top: scaled(5684),
        color: "#333333",
        paddingLeft: scaled(12.5),
        paddingRight: scaled(12.5),
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logoKLB}
            alt="KienlongBank"
            style={{
              width: scaled(177),
              height: scaled(33),
              marginTop: scaled(31),
              marginBottom: scaled(44),
            }}
          />
        </button>
      </div>

      <div
        style={{
          width: scaled(350),
          height: scaled(27),
          fontFamily: "Montserrat",
          fontWeight: 700,
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "left",
          fontSize: scaled(12),
          marginBottom: scaled(7),
        }}
      >
        Ngân hàng TMCP Kiên Long (KienlongBank)
      </div>
      <div
        style={{
          width: scaled(350),
          height: scaled(30),
          fontSize: scaled(10),
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: scaled(7),
        }}
      >
        <span style={{ fontWeight: 600 }}>Hội sở:</span> 40-42-44 Phạm Hồng
        Thái, P.Vĩnh Thanh Vân, Tp.Rạch Giá, T.Kiên Giang
      </div>
      <div
        style={{
          width: scaled(350),
          height: scaled(30),
          fontSize: scaled(10),
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: scaled(7),
        }}
      >
        <span style={{ fontWeight: 600 }}>Điện thoại:</span> (0297) 3869 950
        hoặc (028) 3933 3393
      </div>
      <div
        style={{
          width: scaled(350),
          height: scaled(30),
          fontSize: scaled(10),
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: scaled(7),
        }}
      >
        <span style={{ fontWeight: 600 }}>
          Hotline gọi trong lãnh thổ Việt Nam:
        </span>{" "}
        1900 6929
      </div>
      <div
        style={{
          width: scaled(350),
          height: scaled(30),
          fontSize: scaled(10),
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: scaled(7),
        }}
      >
        <span style={{ fontWeight: 600 }}>
          Hotline gọi từ nước ngoài về Việt Nam:
        </span>{" "}
        (+84) 287309 6929
      </div>
      <div
        style={{
          width: scaled(350),
          height: scaled(30),
          fontSize: scaled(10),
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: scaled(7),
        }}
      >
        <span style={{ fontWeight: 600 }}>Mã SWIFT:</span> KLBKVNVX
      </div>
      <div
        style={{
          width: scaled(350),
          height: scaled(30),
          fontSize: scaled(10),
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
        }}
      >
        <span style={{ fontWeight: 600 }}>Email:</span>{" "}
        kienlong@kienlongbank.com hoặc chamsockhachhang@kienlongbank.com
      </div>

      <div
        className="flex flex-col items-center"
        style={{ marginTop: scaled(46) }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: scaled(12),
            fontWeight: 700,
            lineHeight: "27.55px",
            letterSpacing: "0%",
            height: scaled(27.26),
            width: scaled(375),
          }}
        >
          KienlongBank Mobile Banking
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: scaled(6),
            marginTop: scaled(8.74),
          }}
        >
          <a
            href="https://apps.apple.com/vn/app/kienlongbank-plus/id1562823941?l=vi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appstore}
              alt="App Store"
              style={{
                height: scaled(50),
                width: scaled(172),
                borderRadius: scaled(8),
                background: "#000",
                objectFit: "cover",
              }}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.sunshine.ksbank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googleplay}
              alt="Google Play"
              style={{
                height: scaled(50),
                width: scaled(172),
                borderRadius: scaled(8),
                background: "#000",
                objectFit: "cover",
              }}
            />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: scaled(18),
            marginBottom: scaled(21),
          }}
        >
          <img
            src={qr}
            alt="QR code"
            style={{
              height: scaled(116),
              width: scaled(116),
              borderRadius: scaled(8),
              background: "#fff",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          style={{
            fontWeight: 700,
            fontSize: scaled(12),
            textAlign: "center",
            width: scaled(180.92),
            height: scaled(27.26457405090332),
            lineHeight: "100%",
            letterSpacing: "0%",
            marginBottom: scaled(4.74),
          }}
        >
          Liên kết nhanh
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: scaled(22),
            marginBottom: scaled(8),
          }}
        >
          <a href="tel:19006929" target="_blank" rel="noopener noreferrer">
            <div
              style={{
                width: scaled(57.39910125732422),
                height: scaled(57.39910125732422),
                borderRadius: "50%",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MdOutlinePhoneIphone size={scaled(28)} color="#fff" />
            </div>
          </a>
          <a
            href="https://www.facebook.com/NganhangKienLong"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                width: scaled(57.39910125732422),
                height: scaled(57.39910125732422),
                borderRadius: "50%",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaFacebookF size={scaled(28)} color="#fff" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCgGTWNEzPqKaMSU8smHKr0g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                width: scaled(57.39910125732422),
                height: scaled(57.39910125732422),
                borderRadius: "50%",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaYoutube size={scaled(28)} color="#fff" />
            </div>
          </a>
          <a
            href="https://zalo.me/nganhangkienlong"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                width: scaled(57.39910125732422),
                height: scaled(57.39910125732422),
                borderRadius: "50%",
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
                  width: scaled(28),
                  height: scaled(28),
                  background: "transparent",
                  objectFit: "contain",
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
