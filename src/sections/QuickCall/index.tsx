import React from 'react';
import logo from '../../assets/logo-kienlongbank.png';
import appstore from '../../assets/app-store-icon-kienlongbank-mobile-banking.png';
import googleplay from '../../assets/google-play-icon-kienlongbank-mobile-banking.png';
import qr from '../../assets/qr-code-app-kienlongbank-plus-pro.png';
import iconZalo from '../../assets/card_icon_zalo.png';

const QuickCall = () => {
  return (
    <div id="quick-call" className="w-screen min-h-screen bg-[#fafafa] flex flex-col items-center py-[2vw] rounded-t-xl">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-[2vw] px-[1vw] md:px-[3vw]">
        {/* 1,1: Logo */}
        <div className="row-start-1 col-start-1 flex items-start" style={{ justifyContent: 'space-between' }}>
          <img src={logo} alt="KienlongBank" style={{ width: '19vw', height: '4.7vw', marginLeft: '7.75vw' }} />
        </div>
        {/* 1,2: Liên hệ nhanh */}
        <div className="flex flex-col items-center justify-center row-start-1 col-start-2">
          <div className="font-semibold text-[1.3vw] mb-[0.7vw] font-montserrat">Liên kết nhanh</div>
          <div className="flex flex-row gap-[1vw]">
            <img src={iconZalo} alt="Zalo" style={{ width: '3vw', height: '3vw', minWidth: 32, minHeight: 32, maxWidth: 60, maxHeight: 60 }} className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 p-[0.2vw]" />
          </div>
        </div>
        {/* 2,1: Thông tin ngân hàng */}
        <div className="row-start-2 col-start-1 text-left">
          <h2 className="font-montserrat font-bold text-[1.12vw] leading-[1.35vw] w-[25.97vw] align-middle mb-[1vw]">Ngân hàng TMCP Kiên Long (KienlongBank)</h2>
          <div className="space-y-[0.5vw]">
            <div>
              <span className="font-montserrat font-semibold text-[0.9vw] leading-[1.6vw] align-middle">Hội sở:</span>
              <span className="font-montserrat font-normal text-[0.9vw] leading-[1.6vw] align-middle"> 40-42-44 Phạm Hồng Thái, P.Vĩnh Thanh Vân, Tp.Rạch Giá, T.Kiên Giang</span>
            </div>
            <div>
              <span className="font-montserrat font-semibold text-[0.9vw] leading-[1.6vw] align-middle">Điện thoại:</span>
              <span className="font-montserrat font-normal text-[0.9vw] leading-[1.6vw] align-middle"> (0297) 3869 950 hoặc (028) 3933 3393</span>
            </div>
            <div>
              <span className="font-montserrat font-semibold text-[0.9vw] leading-[1.6vw] align-middle">Hotline gọi trong lãnh thổ Việt Nam:</span>
              <span className="font-montserrat font-normal text-[0.9vw] leading-[1.6vw] align-middle"> 1900 6929</span>
            </div>
            <div>
              <span className="font-montserrat font-semibold text-[0.9vw] leading-[1.6vw] align-middle">Hotline gọi từ nước ngoài về Việt Nam:</span>
              <span className="font-montserrat font-normal text-[0.9vw] leading-[1.6vw] align-middle"> (+84) 287309 6929</span>
            </div>
            <div>
              <span className="font-montserrat font-semibold text-[0.9vw] leading-[1.6vw] align-middle">Mã SWIFT:</span>
              <span className="font-montserrat font-normal text-[0.9vw] leading-[1.6vw] align-middle"> KLBKVNVX</span>
            </div>
            <div>
              <span className="font-montserrat font-semibold text-[0.9vw] leading-[1.6vw] align-middle">Email:</span>
              <span className="font-montserrat font-normal text-[0.9vw] leading-[1.6vw] align-middle"> kienlong@kienlongbank.com hoặc chamsockhachhang@kienlongbank.com</span>
            </div>
          </div>
        </div>
        {/* 2,2: Thông tin tải app */}
        <div className="flex flex-col items-center md:items-end justify-center row-start-2 col-start-2">
          <div className="font-bold font-montserrat text-[1.3vw] mb-[0.7vw]">KienlongBank Mobile Banking</div>
          <div className="flex flex-row gap-[0.7vw] mb-[0.7vw]">
            <img src={appstore} alt="App Store" style={{ height: '3vw', minHeight: 32, maxHeight: 48 }} />
            <img src={googleplay} alt="Google Play" style={{ height: '3vw', minHeight: 32, maxHeight: 48 }} />
          </div>
          <img src={qr} alt="QR Code" style={{ width: '7vw', height: '7vw', minWidth: 64, minHeight: 64, maxWidth: 140, maxHeight: 140 }} className="rounded bg-white shadow" />
        </div>
      </div>
    </div>
  );
};

export default QuickCall; 