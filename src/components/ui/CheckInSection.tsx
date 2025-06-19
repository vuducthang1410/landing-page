import React from "react";

interface CheckInStat {
  count: string;
  title: string;
  img: string;
}

interface CheckInSectionProps {
  scale: number;
  checkInStats: CheckInStat[];
}

const CheckInSection: React.FC<CheckInSectionProps> = ({ scale, checkInStats }) => {
  const scaled = (value: number) => value * scale;
  return (
    <div
      id="check-in"
      className="absolute"
      style={{
        width: scaled(1920),
        height: scaled(1080),
        top: scaled(4336),
        left: scaled(0),
        background:
          "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
      }}
    >
      <div
        className="relative"
        style={{
          width: scaled(1551),
          height: scaled(869),
          top: scaled(74),
          left: scaled(185),
        }}
      >
        <div
          style={{
            position: "absolute",
            width: scaled(1116),
            height: scaled(118),
            top: 0,
            left: scaled(217),
          }}
        >
          <div
            style={{
              position: "absolute",
              width: scaled(932),
              top: 0,
              left: scaled(92),
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              color: "#00e5ff",
              fontSize: scaled(48),
              textAlign: "center",
              letterSpacing: 0,
              lineHeight: "normal",
            }}
          >
            CHỤP CHECK-IN - NHẬN QUÀ XINH
          </div>

          <div
            style={{
              position: "absolute",
              width: scaled(1116),
              top: scaled(80),
              left: 0,
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              color: "white",
              fontSize: scaled(32),
              textAlign: "center",
              letterSpacing: 0,
              lineHeight: "normal",
              whiteSpace: "nowrap",
            }}
          >
            TỚI KIENLONGBANK LÀ CÓ QUÀ!
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: scaled(866),
            top: scaled(134),
            left: scaled(342),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            color: "white",
            fontSize: scaled(16),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "normal",
          }}
        >
          Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành
          tặng 01 phần quà theo sở thích khi Khách hàng chụp hình check-in
          và chia sẻ hình lên mạng xã hội để chế độ công khai để nhận quà.
        </div>
        <div
          style={{
            position: "absolute",
            width: scaled(1545),
            height: scaled(607),
            gap: scaled(78),
            top: scaled(262),
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Check-in Stats */}
          {checkInStats.map((stat, index) => (
            <div
              key={index}
              style={{
                width: scaled(463),
                height: scaled(463),
                gap: scaled(16),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Check-in Images */}
              <img
                style={{
                  width: scaled(463),
                  height: scaled(413),
                  objectFit: "cover",
                  borderRadius: scaled(20),
                }}
                alt="Rectangle"
                src={stat.img}
              />
              <div
                style={{
                  width: "100%",
                  height: scaled(112.43),
                  marginTop: scaled(-1),
                  background:
                    "linear-gradient(90deg, rgba(0,97,254,1) 0%, rgba(255,159,254,1) 41%, rgba(255,56,156,1) 77%, rgba(255,179,84,1) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 700,
                  fontSize: scaled(96),
                  textAlign: "center",
                  letterSpacing: 0,
                  lineHeight: "normal",
                  whiteSpace: "nowrap",
                }}
              >
                {stat.count}
              </div>
              <div
                style={{
                  width: "100%",
                  height: scaled(18),
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 700,
                  color: "white",
                  fontSize: scaled(24),
                  textAlign: "center",
                  letterSpacing: 0,
                  lineHeight: "normal",
                  whiteSpace: "nowrap",
                }}
              >
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckInSection; 