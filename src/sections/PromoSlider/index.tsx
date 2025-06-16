import React, { useState, useRef } from 'react';
import PromoSliderItem from './PromoSliderItem';
import tiepvondoisong from '../../assets/tiepvondoisong.jpg';
import xaydungsuachua from '../../assets/xaydungsuachua.png';
import tindungxanh from '../../assets/tindungxanh.png';
import trianhoivien from '../../assets/trianhoivien.png';
import phucvudoisong from '../../assets/phucvudoisong.png';

const images = [
  { src: tiepvondoisong, alt: 'Tiếp vốn đời sống' },
  { src: xaydungsuachua, alt: 'Xây dựng sửa chữa' },
  { src: tindungxanh, alt: 'Tín dụng xanh' },
  { src: trianhoivien, alt: 'Tri ân hội viên' },
  { src: phucvudoisong, alt: 'Phục vụ đời sống' },
];

const getSlidesToShow = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const PromoSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const trackRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite logic
  const total = images.length;
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  // Calculate visible slides (infinite)
  const getVisibleSlides = () => {
    let slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(images[(current + i) % total]);
    }
    return slides;
  };

  // Animation
  const transitionStyle = {
    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
    transform: `translateX(0)`
  };

  return (
    <div className="w-screen bg-[#fafafa] py-[2vw]">
      <div className="text-center mb-[2vw]">
        <h2 className="font-montserrat font-bold text-[2vw] text-[#2B3DB8] uppercase">Vô vàn ưu đãi mừng sinh nhật 30 năm</h2>
        <div className="font-montserrat text-[1.2vw] text-[#2887E2] mt-[0.5vw]">Vay vốn</div>
      </div>
      <div className="relative w-screen max-w-[1400px] mx-auto flex items-center">
        {/* Prev Button */}
        <button
          onClick={goPrev}
          className="absolute left-0 z-10 bg-white bg-opacity-80 rounded-full w-[2.5vw] h-[2.5vw] flex items-center justify-center shadow-md text-2xl hover:scale-110 transition-all"
        >
          &#60;
        </button>
        {/* Slider Items */}
        <div className="flex w-full gap-[2vw] overflow-hidden px-[3vw]">
          <div
            ref={trackRef}
            className="flex w-full gap-[2vw]"
            style={transitionStyle}
          >
            {getVisibleSlides().map((img, idx) => (
              <div key={img.src + current} className="flex-1 min-w-0">
                <PromoSliderItem image={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
        {/* Next Button */}
        <button
          onClick={goNext}
          className="absolute right-0 z-10 bg-white bg-opacity-80 rounded-full w-[2.5vw] h-[2.5vw] flex items-center justify-center shadow-md text-2xl hover:scale-110 transition-all"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default PromoSlider; 