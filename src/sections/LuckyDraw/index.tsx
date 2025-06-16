import bg2Image from "../../assets/bg2.png";

const LuckyDraw = () => {
  return (
    <div id="lucky-draw" className="w-screen h-[2160px] overflow-hidden relative">
      <section
        className="w-[3841px] h-[2160px] bg-cover bg-center bg-no-repeat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundImage: `url(${bg2Image})`
        }}
      />
    </div>
  );
};

export default LuckyDraw;
