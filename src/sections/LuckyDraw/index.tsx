import bg2Image from "../../assets/bg2.png";
import carImage from "../../assets/car.png";
import motorImage from "../../assets/motobike.png";
import gift2Image from "../../assets/Gitf2.png";

const LuckyDraw = () => {
  return (
    <div
      id="lucky-draw"
      className="w-screen h-[112.5vw] overflow-hidden relative"
    >
      <section
        className="w-[200.05vw] h-[112.5vw] bg-cover bg-center bg-no-repeat absolute top-[0] left-1/2 transform -translate-x-1/2"
        style={{
          backgroundImage: `url(${bg2Image})`,
        }}
      >
        {/* Gift2 Images */}
        <img
          src={gift2Image}
          alt="gift2"
          style={{
            width: "18.75vw", // 360/1920*100
            height: "18.75vw",
            position: "absolute",
            top: "49.01vw", // (2021-1080)/1920*100
            left: "854px", // -103/1920*100
            zIndex: 2,
          }}
        />
        <img
          src={gift2Image}
          alt="gift2-rotated"
          style={{
            width: "12.65vw", // 242.95/1920*100
            height: "12.65vw",
            position: "absolute",
            top: "102.92vw", // (3056-1080)/1920*100
            left: "1880px", // 1732.65/1920*100
            transform: "rotate(42.66deg)",
            zIndex: 2,
          }}
        />
        <div className="text-center mt-[3.75vw]">
          <h2 className="font-montserrat font-bold text-[2.4vw] leading-[100%] tracking-[0%] text-center uppercase text-[#00E5FF] h-[5.16vw]">
            QUAY SỐ RINH QUÀ <br /> TRÚNG THƯỞNG THẢ GA
          </h2>
          <div className="font-montserrat font-medium text-[1.67vw] leading-[100%] tracking-[0%] text-center uppercase text-[#FFF] mt-[0.5vw]">
            Giao dịch càng nhiều – Cơ hội trúng quà càng lớn!
          </div>
        </div>
        {/* Prize Blocks Row 1 */}
        <div className="flex justify-center gap-[6vw] mt-[5vw]">
          {/* Special Prize */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "12.19vw", height: "8.39vw" }}
          >
            <img
              src={carImage}
              alt="Vinfast VF3"
              className="w-[4.69vw] h-[3.13vw] object-contain mb-[0.42vw] mx-auto"
            />
            <div
              className="font-montserrat font-bold uppercase text-center"
              style={{
                fontSize: "5vw",
                lineHeight: "100%",
                letterSpacing: 0,
                background:
                  "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              03
            </div>
            <div className="font-montserrat font-bold text-[1.25vw] leading-[100%] text-center uppercase text-white mt-[-0.52vw]">
              Giải đặc biệt
            </div>
            <div className="font-montserrat font-medium text-[0.94vw] leading-[100%] text-center uppercase text-white mt-[0.1vw]">
              Xe Vinfast VF3
            </div>
          </div>
          {/* First Prize */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "12.19vw", height: "8.39vw" }}
          >
            <img
              src={motorImage}
              alt="Xe máy điện Icon E"
              className="w-[4.69vw] h-[3.13vw] object-contain mb-[0.42vw] mx-auto"
            />
            <div
              className="font-montserrat font-bold uppercase text-center"
              style={{
                fontSize: "5vw",
                lineHeight: "100%",
                letterSpacing: 0,
                background:
                  "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              10
            </div>
            <div className="font-montserrat font-bold text-[1.25vw] leading-[100%] text-center uppercase text-white mt-[-0.52vw]">
              Giải nhất
            </div>
            <div className="font-montserrat font-medium text-[0.94vw] leading-[100%] text-center uppercase text-white mt-[0.1vw]">
              Xe máy điện Icon E
            </div>
          </div>
        </div>
        {/* Prize Blocks Row 2 */}
        <div className="flex justify-center gap-[3vw] mt-[3vw]">
          {/* Second Prize */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "12.19vw", height: "8.39vw" }}
          >
            <div
              className="font-montserrat font-bold uppercase text-center"
              style={{
                fontSize: "5vw",
                lineHeight: "100%",
                letterSpacing: 0,
                background:
                  "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              30
            </div>
            <div className="font-montserrat font-bold text-[1.25vw] leading-[100%] text-center uppercase text-white mt-[-0.52vw]">
              Giải nhì
            </div>
            <div className="font-montserrat font-medium text-[0.94vw] leading-[100%] text-center uppercase text-white mt-[0.1vw]">
              10 triệu đồng/giải
            </div>
          </div>
          {/* Third Prize */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "12.19vw", height: "8.39vw" }}
          >
            <div
              className="font-montserrat font-bold uppercase text-center"
              style={{
                fontSize: "5vw",
                lineHeight: "100%",
                letterSpacing: 0,
                background:
                  "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              60
            </div>
            <div className="font-montserrat font-bold text-[1.25vw] leading-[100%] text-center uppercase text-white mt-[-0.52vw]">
              Giải ba
            </div>
            <div className="font-montserrat font-medium text-[0.94vw] leading-[100%] text-center uppercase text-white mt-[0.1vw]">
              5 triệu đồng/giải
            </div>
          </div>
          {/* Lucky Prize */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "12.19vw", height: "8.39vw" }}
          >
            <div
              className="font-montserrat font-bold uppercase text-center"
              style={{
                fontSize: "5vw",
                lineHeight: "100%",
                letterSpacing: 0,
                background:
                  "linear-gradient(90deg, #0061FE 0%, #FF9FFE 41%, #FF389C 77%, #FFB354 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              300
            </div>
            <div className="font-montserrat font-bold text-[1.25vw] leading-[100%] text-center uppercase text-white mt-[-0.52vw]">
              Giải may mắn
            </div>
            <div className="font-montserrat font-medium text-[0.94vw] leading-[100%] text-center uppercase text-white mt-[0.1vw]">
              3 triệu đồng/giải
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuckyDraw;
