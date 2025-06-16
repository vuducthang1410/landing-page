import React from "react";
import bg1Image from "../../assets/bg1.jpg";

const Home = () => {
  return (
    <div className="relative w-screen overflow-x-hidden">
      <section
        className="relative w-screen aspect-[3841/2160] overflow-x-hidden"
        style={{
          backgroundImage: `url(${bg1Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Home;
