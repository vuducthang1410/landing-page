import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToLuckyDraw = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const luckyDrawSection = document.getElementById('lucky-draw');
    if (luckyDrawSection) {
      luckyDrawSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDiscountCombo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const discountComboSection = document.getElementById('discount-combo');
    if (discountComboSection) {
      discountComboSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCheckIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const checkInSection = document.getElementById('check-in');
    if (checkInSection) {
      checkInSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactFormSection = document.getElementById('contact-form');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToQuickCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const quickCallSection = document.getElementById('quick-call');
    if (quickCallSection) {
      quickCallSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        height: 'clamp(60px, 6vw, 140px)',
        transition: 'transform 0.7s',
        background: 'white',
        width: '100vw',
        zIndex: 50,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="flex flex-row items-center justify-between h-full w-screen">
        <div className="flex-shrink-0" style={{ marginLeft: '7vw' }}>
          <img src={logo} alt="Logo" style={{ width: '18vw', minWidth: 120, maxWidth: 351, height: 'auto' }} />
        </div>
        <nav className="hidden md:flex items-center justify-between flex-1" style={{ margin: '0 4vw' }}>
          <a 
            href="/" 
            onClick={scrollToTop}
            style={{
              color: 'black',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.1vw, 20px)',
              lineHeight: '100%',
              letterSpacing: 0,
              transition: 'color 0.3s',
              alignItems: 'center',
              marginRight: '2vw',
            }}
            className="hover:text-purple-600"
          >
            Trang chủ
          </a>
          <a 
            href="/lucky-draw" 
            onClick={scrollToLuckyDraw}
            style={{
              color: 'black',
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.1vw, 20px)',
              lineHeight: '100%',
              letterSpacing: 0,
              transition: 'color 0.3s',
              alignItems: 'center',
              marginRight: '2vw',
            }}
            className="hover:text-purple-600"
          >
            Quay số trúng thưởng
          </a>
          <a 
            href="/combo" 
            onClick={scrollToDiscountCombo}
            style={{
              color: 'black',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.1vw, 20px)',
              lineHeight: '100%',
              letterSpacing: 0,
              transition: 'color 0.3s',
              alignItems: 'center',
              marginRight: '2vw',
            }}
            className="hover:text-purple-600"
          >
            Combo ưu đãi
          </a>
          <a 
            href="/checkin" 
            onClick={scrollToCheckIn}
            style={{
              color: 'black',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.1vw, 20px)',
              lineHeight: '100%',
              letterSpacing: 0,
              transition: 'color 0.3s',
              alignItems: 'center',
              marginRight: '2vw',
            }}
            className="hover:text-purple-600"
          >
            Checkin
          </a>
          <a 
            href="/contact" 
            onClick={scrollToContactForm}
            style={{
              color: 'black',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.1vw, 20px)',
              lineHeight: '100%',
              letterSpacing: 0,
              transition: 'color 0.3s',
              alignItems: 'center',
              marginRight: '2vw',
            }}
            className="hover:text-purple-600"
          >
            Liên hệ
          </a>
          <a 
            href="/contact" 
            onClick={scrollToQuickCall}
            style={{
              color: 'black',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 1.1vw, 20px)',
              lineHeight: '100%',
              letterSpacing: 0,
              transition: 'color 0.3s',
              alignItems: 'center',
            }}
            className="hover:text-purple-600"
          >
            Gọi ngay
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 