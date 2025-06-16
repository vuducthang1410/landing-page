import React from 'react';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-[1920px] h-[140px]">
      <div className="container mx-auto h-full p-0">
        <div className="flex items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" style={{ width: '374.9532470703125px', height: '85px' }} />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300" style={{ 
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>
              Trang chủ
            </a>
            <a href="/lucky-draw" className="text-gray-700 hover:text-purple-600 transition-colors duration-300" style={{ 
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>
              Quay số trúng thưởng
            </a>
            <a href="/combo" className="text-gray-700 hover:text-purple-600 transition-colors duration-300" style={{ 
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>
              Combo ưu đãi
            </a>
            <a href="/checkin" className="text-gray-700 hover:text-purple-600 transition-colors duration-300" style={{ 
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>
              Checkin
            </a>
            <a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300" style={{ 
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}>
              Liên hệ
            </a>
            <a 
              href="tel:+1234567890" 
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
              style={{ 
                fontFamily: 'Montserrat',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Gọi ngay
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 