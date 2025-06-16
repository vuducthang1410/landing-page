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
  return (
    <div className="home-page relative">
      <Header />
      <main className="w-full ">
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
