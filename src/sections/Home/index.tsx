import React, { useEffect, useState } from "react";
import bg1Image from "../../assets/bg1.jpg";
import bg1MobileImage from "../../assets/BG1_Mobile.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bgImage = isMobile ? bg1MobileImage : bg1Image;

  return (
    <div className="relative w-screen overflow-x-hidden">
      <section
        className={`relative w-screen overflow-x-hidden ${
          isMobile ? "h-screen" : "h-[48.96vw] mt-[7.29vw]"
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Home;
