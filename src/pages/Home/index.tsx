import React from "react";
import Header from "../../components/Header";
import HomeSection from "../../sections/Home";
import LuckyDrawSection from "../../sections/LuckyDraw";
import CoinOverlay from "../../components/CoinOverlay";
import DiscountCombo from "../../sections/DiscountCombo";
import CheckIn from "../../sections/CheckIn";
import ContactForm from "../../sections/ContactForm";
import QuickCall from "../../sections/QuickCall";
import PromoSlider from "../../sections/PromoSlider";

const Home: React.FC = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  return (
    <div className="home-page relative overflow-y-hidden">
      {!isMobile && <Header />}
      <main className="w-screen ">
        <HomeSection />
        <LuckyDrawSection />
        <CoinOverlay />
        <DiscountCombo />
        <CheckIn />
        <PromoSlider />
        <ContactForm />
        <QuickCall />
      </main>
    </div>
  );
};

export default Home;
