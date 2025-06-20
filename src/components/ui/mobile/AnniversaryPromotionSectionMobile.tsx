import { images } from "../../../screens/LandingPageDesktop/data";

const AnniversaryPromotionSectionMobile = () => (
  <div className="absolute w-[375px] h-[812px] top-[4060px]">
    <div
      className=" w-[375px]  [font-family:'Montserrat',Helvetica] text-center tracking-[0] leading-[normal]"
      style={{
        marginTop: "66px",
        height: "51px",
        fontSize: "20px",
        fontWeight: 700,
        color: "#2239bb",
      }}
    >
      VÔ VÀN ƯU ĐÃI
      <br />
      MỪNG SINH NHẬT 30 NĂM
    </div>

    <div
      className="w-[374px] [font-family:'Montserrat',Helvetica] text-center tracking-[0] leading-[normal]"
      style={{
        marginTop: "10px",
        height: "38px",
        fontSize: "10px",
        fontWeight: 500,
        color: "#54A4FF",
        lineHeight: "100%",
        textAlign: "center",
      }}
    >
      VAY VỐN
    </div>
    <div className="flex" style={{gap: '15px',padding: '0 12.5px'}}>
      {images.map((image, index) => (
        <div
          key={index}
          className="w-[350px] h-[530px] bg-[100%_100%]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        >
          <div className="w-[349px] h-[284px] rounded-[0px_0px_10px_10px] bg-[linear-gradient(0deg,rgba(8,15,104,1)_0%,rgba(25,160,234,0)_100%)]" />
        </div>
      ))}
    </div>

    {/* Pagination Dots */}
    {/* Chấm tròn dưới slider combo */}
    <div style={{ display: "flex", gap: 15.75, marginTop: 25 }}>
      {images.map((_, i) => (
        <div
          key={i}
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            // background: comboActiveIndex === i ? "#0CCBEF" : "#D9D9D9",
            background: "#D9D9D9",
            transition: "background 0.2s",
          }}
        />
      ))}
    </div>
  </div>
);

export default AnniversaryPromotionSectionMobile;
