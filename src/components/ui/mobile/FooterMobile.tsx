import React from "react";
import logoKLB from "../../../assets/logo-kienlongbank.png";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import {
  appstore,
  googleplay,
  iconZalo,
  qr,
} from "../../../data";

const FooterMobile: React.FC = () => {
  return (
    <div
      style={{
        width: 375,
        background: "#fff",
        fontFamily: "'Montserrat', Helvetica",
        color: "#333",
        textAlign: "left",
        paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height:'812px'
      }}
    >
      <img
        src={logoKLB}
        alt="KienlongBank"
        style={{
          width: "177px",
          height: "33px",
          marginTop: "31px",
          marginBottom: "44px",
        }}
      />
      <div
        style={{
          width: "350px",
          height: "27px",
          fontFamily: "Montserrat",
          fontWeight: 700,
          lineHeight: "25.83px",
          letterSpacing: "0%",
          textAlign: "left",
          fontSize: "12px",
          marginBottom: "7px",
        }}
      >
        Ngân hàng TMCP Kiên Long (KienlongBank)
      </div>
      <div
        style={{
          width: "350px",
          height: "30px",
          fontSize: "10px",
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: "7px",
        }}
      >
        <span style={{ fontWeight: 600 }}>Hội sở:</span> 40-42-44 Phạm Hồng
        Thái, P.Vĩnh Thanh Vân, Tp.Rạch Giá, T.Kiên Giang
      </div>
      <div
        style={{
          width: "350px",
          height: "30px",
          fontSize: "10px",
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: "7px",
        }}
      >
        <span style={{ fontWeight: 600 }}>Điện thoại:</span> (0297) 3869 950
        hoặc (028) 3933 3393
      </div>
      <div
        style={{
          width: "350px",
          height: "30px",
          fontSize: "10px",
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: "7px",
        }}
      >
        <span style={{ fontWeight: 600 }}>
          Hotline gọi trong lãnh thổ Việt Nam:
        </span>{" "}
        1900 6929
      </div>
      <div
        style={{
          width: "350px",
          height: "30px",
          fontSize: "10px",
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: "7px",
        }}
      >
        <span style={{ fontWeight: 600 }}>
          Hotline gọi từ nước ngoài về Việt Nam:
        </span>{" "}
        (+84) 287309 6929
      </div>
      <div
        style={{
          width: "350px",
          height: "30px",
          fontSize: "10px",
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
          marginBottom: "7px",
        }}
      >
        <span style={{ fontWeight: 600 }}>Mã SWIFT:</span> KLBKVNVX
      </div>
      <div
        style={{
          width: "350px",
          height: "30px",
          fontSize: "10px",
          textAlign: "left",
          fontFamily: "Montserrat",
          fontWeight: 400,
        }}
      >
        <span style={{ fontWeight: 600 }}>Email:</span>{" "}
        kienlong@kienlongbank.com hoặc chamsockhachhang@kienlongbank.com
      </div>

      <div className="flex flex-col items-center" style={{ marginTop: "46px" }}>
        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "27.55px",
            letterSpacing: "0%",
            height: "27.26px",
            width: "375px",
          }}
        >
          KienlongBank Mobile Banking
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "6px",
            marginTop: "8.74px",
          }}
        >
          <img
            src={appstore}
            alt="App Store"
            style={{
              height: "50px",
              width: "172px",
              borderRadius: 8,
              background: "#000",
              objectFit: "cover",
            }}
          />
          <img
            src={googleplay}
            alt="Google Play"
            style={{
              height: "50px",
              width: "172px",
              borderRadius: 8,
              background: "#000",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "18px",
            marginBottom: "21px",
          }}
        >
          <img
            src={qr}
            alt="QR code"
            style={{
              height: "116px",
              width: "116px",
              borderRadius: 8,
              background: "#fff",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          style={{
            fontWeight: 700,
            fontSize: "12px",
            textAlign: "center",
            width: "180.92px",
            height: "27.26457405090332px",
            lineHeight: "27.55px",
            letterSpacing: "0%",
            marginBottom: "4.74px",
          }}
        >
          Liên kết nhanh
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 22,
            marginBottom: 8,
          }}
        >
          <a href="tel:19006929" target="_blank" rel="noopener noreferrer">
            <div
              style={{
                width: "57.39910125732422px",
                height: "57.39910125732422px",
                borderRadius: "50%",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MdOutlinePhoneIphone size={28} color="#fff" />
            </div>
          </a>
          <a
            href="https://facebook.com/kienlongbank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                width: "57.39910125732422px",
                height: "57.39910125732422px",
                borderRadius: "50%",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaFacebookF size={28} color="#fff" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/@KienlongBank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                width: "57.39910125732422px",
                height: "57.39910125732422px",
                borderRadius: "50%",
                background:
                  "linear-gradient(54.15deg, #0061FE 20.97%, #FF9FFE 92.3%, #FF389C 154.92%, #FFB354 194.93%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaYoutube size={28} color="#fff" />
            </div>
          </a>
          <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer">
            <div
              style={{
                width: "57.39910125732422px",
                height: "57.39910125732422px",
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
                style={{ width: 28, height: 28, background: "transparent",objectFit: "contain" }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
