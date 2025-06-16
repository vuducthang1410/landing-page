import React from "react";
import Header from "../../components/Header";
import HomeSection from "../../sections/Home";
import LuckyDrawSection from "../../sections/LuckyDraw";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* <Header /> */}
      <main className="w-full relative">
        <HomeSection />
        <LuckyDrawSection />
      </main>
    </div>
  );
};

export default Home;
