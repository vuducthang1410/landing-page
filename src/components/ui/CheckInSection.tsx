import React from "react";
import bg from "../../assets/Rectangle 62.webp";

interface CheckInStat {
  count: string;
  title: string;
  img: string;
}

interface CheckInSectionProps {
  scale: number;
  checkInStats: CheckInStat[];
}

const CheckInSection: React.FC<CheckInSectionProps> = ({
  scale,
  checkInStats,
}) => {
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
        background: `url(${bg})`,
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: scaled(1920),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: scaled(74),
            width: scaled(932),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            color: "#00e5ff",
            fontSize: scaled(48),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "100%",
          }}
        >
          CHỤP CHECK-IN - NHẬN QUÀ XINH
        </div>

        <div
          style={{
            width: scaled(1116),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 500,
            color: "white",
            fontSize: scaled(32),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "100%",
            marginTop: scaled(20),
            marginBottom: scaled(10),
          }}
        >
          TỚI KIENLONGBANK LÀ CÓ QUÀ!
        </div>
        <div
          style={{
            marginTop: scaled(16),
            width: scaled(866),
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            color: "white",
            fontSize: scaled(16),
            textAlign: "center",
            letterSpacing: 0,
            lineHeight: "100%",
          }}
        >
          Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành tặng
          01 phần quà theo sở thích khi Khách hàng chụp hình check-in và chia sẻ
          hình lên mạng xã hội để chế độ công khai để nhận quà.
        </div>
      </div>

      <div
        style={{
          marginTop: scaled(74),
          width: scaled(1545),
          height: scaled(607),
          gap: scaled(78),
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
                marginTop: scaled(16),
                height: scaled(178),
                width: scaled(322),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: scaled(322),
                  height: scaled(112.43),
                  background:
                    "linear-gradient(90deg, rgba(0,97,254,1) 0%, rgba(255,159,254,1) 41%, rgba(255,56,156,1) 77%, rgba(255,179,84,1) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: scaled(96),
                  textAlign: "center",
                  letterSpacing: 0,
                  lineHeight: "100%",
                }}
              >
                {stat.count}
              </div>
              <div
                style={{
                  width: scaled(322),
                  height: scaled(18),
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "white",
                  fontSize: scaled(24),
                  textAlign: "center",
                  letterSpacing: 0,
                  lineHeight: "100%",
                  marginTop: scaled(16),
                }}
              >
                {stat.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckInSection;
