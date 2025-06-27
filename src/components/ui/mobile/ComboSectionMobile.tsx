import { ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import ComboSavingCustomerPopupMobile from "../../popup/mobile/ComboSavingCustomerPopupMobile";
import ComboCreditCustomerPopupMobile from "../../popup/mobile/ComboCreditCustomerPopupMobile";
import ComboBondCustomerPopupMobile from "../../popup/mobile/ComboBondCustomerPopupMobile";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ComboCard {
  image: string;
  title: string;
  description: string;
  description2?: string;
  id: string;
}

interface ComboSectionMobileProps {
  comboCards: ComboCard[];
  scaled: (value: number) => number;
}

const ComboSectionMobile: React.FC<ComboSectionMobileProps> = ({
  comboCards,
  scaled,
}) => {
  const [comboActiveIndex, setComboActiveIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  // Đóng popup khi ấn nút back trên mobile
  useEffect(() => {
    if (openPopup) {
      window.history.pushState({ popup: true }, "");
      const handlePopState = () => {
        setOpenPopup(null);
      };
      window.addEventListener("popstate", handlePopState);
      return () => {
        window.removeEventListener("popstate", handlePopState);
        if (window.history.state && window.history.state.popup) {
          window.history.back();
        }
      };
    }
  }, [openPopup]);

  return (
    <div
      style={{
        position: "absolute",
        top: scaled(2436),
        left: "0",
        width: scaled(375),
        padding: `${scaled(94)}px 0 0 0`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#F8F8F8",
        height: scaled(812),
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: scaled(20),
          color: "#2239bb",
          textAlign: "center",
          fontFamily: "Montserrat",
          marginBottom: scaled(8),
        }}
      >
        CHỌN COMBO NGAY
        <br />
        QUÀ TẶNG TRAO TAY
      </div>
      <div
        style={{
          fontWeight: 500,
          fontSize: scaled(14),
          color: "#54a4ff",
          textAlign: "center",
          fontFamily: "Montserrat",
          marginBottom: scaled(16),
        }}
      >
        NHẬN NGAY TỚI 30.000 QUÀ TẶNG
        <br />
        KHI SỬ DỤNG COMBO DỊCH VỤ
      </div>
      {/* Swiper Slider */}
      <Swiper
        style={{
          width: scaled(375),
          height: scaled(467),
          marginTop: scaled(39),
          padding: `0 ${scaled(15)}px`,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setComboActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setComboActiveIndex(swiper.realIndex)}
      >
        {comboCards.map((card, idx) => (
          <SwiperSlide key={idx}>
            <button
              style={{
                width: scaled(345),
                height: scaled(467),
                flex: `none`,
                scrollSnapAlign: "center",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                marginRight: `${scaled(20)}px`,
                padding: `${scaled(15)}px`,
                background: "#fff",
                borderRadius: scaled(20),
                flexShrink: 0,
              }}
              onClick={() => setOpenPopup(card.id)}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: scaled(315),
                  height: scaled(295),
                  objectFit: "cover",
                  borderRadius: scaled(16),
                  // marginTop: scaled(12),
                }}
                loading="lazy"
              />
              <div
                style={{
                  fontWeight: 700,
                  fontSize: scaled(18),
                  marginTop: scaled(16),
                  color: "#2239bb",
                  textAlign: "center",
                  fontFamily: "Montserrat",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: scaled(15),
                  color: "#333",
                  textAlign: "left",
                  marginTop: scaled(8),
                  fontFamily: "Montserrat",
                  width: scaled(315),
                }}
              >
                {card.description}
              </div>
              <div
                style={{
                  background: "none",
                  border: "none",
                  color: "#333333",
                  fontWeight: 400,
                  fontSize: scaled(12),
                  display: "flex",
                  alignItems: "center",
                  gap: scaled(6),
                  cursor: "pointer",
                  position: "absolute",
                  bottom: scaled(15),
                  left: scaled(15),
                }}
              >
                Chi tiết
                <ChevronRightIcon
                  style={{
                    height: scaled(12.13),
                    width: scaled(12.13),
                    color: "white",
                    background: "#2239bb",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Chấm tròn dưới slider combo */}
      <div style={{ display: "flex", gap: scaled(8), marginTop: scaled(16) }}>
        {comboCards.map((_, i) => (
          <div
            key={i}
            style={{
              width: scaled(10),
              height: scaled(10),
              borderRadius: "50%",
              background: comboActiveIndex === i ? "#1976ff" : "#e0e0e0",
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
      {/* Popup hiển thị theo combo được chọn */}
      {openPopup === "comboSaving" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: scaled(375),
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            overflowY: "auto", // Cho phép cuộn dọc
          }}
        >
          <div style={{ position: "relative", height: scaled(812), margin: "0 auto", background: "#fff", borderRadius: 8 }}>
            <button
              onClick={() => setOpenPopup(null)}
              style={{
                position: "absolute",
                top: 8,
                right: scaled(8),
                zIndex: scaled(2),
                border: "none",
                borderRadius: scaled(16),
                width: scaled(32),
                height: scaled(32),
                fontSize: scaled(20),
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <ComboSavingCustomerPopupMobile scaled={scaled} />
          </div>
        </div>
      )}

      {openPopup === "comboCredit" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: scaled(375),
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            overflowY: "auto", // Cho phép cuộn dọc
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "600px",
              margin: "0 auto",
              background: "#fff",
              borderRadius: 8,
            }}
          >
            <button
              onClick={() => setOpenPopup(null)}
              style={{
                position: "absolute",
                top: scaled(8),
                right: scaled(8),
                zIndex: scaled(2),
                border: "none",
                borderRadius: scaled(16),
                width: scaled(32),
                height: scaled(32),
                fontSize: scaled(20),
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <ComboCreditCustomerPopupMobile scaled={scaled} />
          </div>
        </div>
      )}

      {openPopup === "comboBond" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: scaled(375),
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            overflowY: "auto",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "600px",
              margin: "0 auto",
              background: "#fff",
              borderRadius: scaled(8),
            }}
          >
            <button
              onClick={() => setOpenPopup(null)}
              style={{
                position: "absolute",
                top: scaled(8),
                right: scaled(8),
                zIndex: scaled(2),
                border: "none",
                borderRadius: scaled(16),
                width: scaled(32),
                height: scaled(32),
                fontSize: scaled(20),
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <ComboBondCustomerPopupMobile scaled={scaled} />
          </div>
        </div>
      )}

    </div>
  );
};

export default ComboSectionMobile;
