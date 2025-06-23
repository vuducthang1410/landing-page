import React from "react";

interface ComboCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ComboSectionProps {
  scale: number;
  comboCards: ComboCard[];
  setOpenPopupId: (id: string) => void;
  ChevronRightIcon: React.ElementType;
  Card: React.ElementType;
  CardContent: React.ElementType;
  Button: React.ElementType;
}

const ComboSection: React.FC<ComboSectionProps> = ({ scale, comboCards, setOpenPopupId, ChevronRightIcon, Card, CardContent, Button }) => {
  const scaled = (value: number) => value * scale;
  return (
    <>
      <div
        id="combo"
        style={{ position: "absolute", top: scaled(3240), left: scaled(71) }}
      />
      <div
        style={{
          position: "absolute",
          width: scaled(1776),
          top: scaled(3349),
          left: scaled(71),
          fontFamily: "Montserrat",
          fontWeight: 700,
          color: "#2239bb",
          fontSize: scaled(48),
          textAlign: "center",
          letterSpacing: 0,
          lineHeight: "120%",
          height: scaled(99),
        }}
      >
        CHỌN COMBO NGAY - QUÀ TẶNG TRAO TAY
      </div>

      <div
        style={{
          position: "absolute",
          width: scaled(1116),
          top: scaled(3420),
          left: scaled(402),
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 500,
          color: "#54a4ff",
          fontSize: scaled(32),
          textAlign: "center",
          letterSpacing: 0,
          lineHeight: "120%",
          whiteSpace: "nowrap",
          height: scaled(38),
        }}
      >
        NHẬN NGAY TỚI 30.000 QUÀ TẶNG KHI SỬ DỤNG COMBO DỊCH VỤ
      </div>

      {comboCards.map((card, idx) => (
        <Card
          key={card.id}
          style={{
            position: "absolute",
            background: "white",
            width: scaled(512),
            height: scaled(653),
            top: scaled(3544),
            left: scaled(162 + idx * 541),
            borderRadius: scaled(20),
          }}
        >
          <CardContent
            style={{
              padding: 0,
              boxShadow: "none",
              position: "relative",
              height: scaled(632),
            }}
          >
            <img
              style={{
                width: scaled(463),
                height: scaled(413),
                marginTop: scaled(21),
                marginLeft: "auto",
                marginRight: "auto",
                objectFit: "cover",
                borderRadius: scaled(20),
                display: "block",
              }}
              alt="Rectangle"
              src={card.image}
            />
            <div
              style={{
                width: scaled(497),
                marginTop: scaled(36),
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#2239bb",
                fontSize: scaled(32),
                textAlign: "center",
                letterSpacing: scaled(-0.96),
                lineHeight: "100%",
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                width: scaled(466),
                marginTop: scaled(20),
                height: scaled(54),
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "left",
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                color: "#333333",
                fontSize: scaled(16),
                letterSpacing: 0,
                lineHeight: "100%",
              }}
            >
              {card.description}
            </div>
            <Button
              style={{
                marginLeft: scaled(23),
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: scaled(8),
                backgroundColor: "white",
                outline: "none",
                border: "none",
                boxShadow: "none",
                color: "#333333",
                fontSize: scaled(16),
                textAlign: "left",
                textDecoration: "none",
                position: "absolute",
                bottom: scaled(21.35),
                height: scaled(15.81),
              }}
              onClick={() => setOpenPopupId(card.id)}
            >
              <span
                style={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 400,
                  fontSize: scaled(16),
                  textDecoration: "none",
                }}
              >
                Chi tiết
              </span>
              <ChevronRightIcon
                style={{
                  height: scaled(16 + 2 * idx),
                  width: scaled(16 + 2 * idx),
                  background: "#2239bb",
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ComboSection; 