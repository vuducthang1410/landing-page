import bg2Image from "../../assets/bg2.png";

const LuckyDraw = () => {
  return (
    <div className="relative w-screen h-[2160px] overflow-hidden">
      <section
        className="absolute"
        style={{
          width: "3841px",
          height: "2160px",
          left: "-900px",
          top:"-167px",
          backgroundImage: `url(${bg2Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
      </section>
    </div>
  );
};


export default LuckyDraw;
