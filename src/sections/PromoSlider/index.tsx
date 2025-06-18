import React, { useState, useRef, useEffect } from 'react';
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
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [groupIndex, setGroupIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const totalSlides = images.length;
  const totalGroups = Math.ceil(totalSlides / slidesToShow);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [offsetPx, setOffsetPx] = useState(0);

  // Cập nhật slidesToShow khi resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tính offset khi groupIndex hoặc slidesToShow thay đổi
  useEffect(() => {
    if (!slideRef.current || !trackRef.current) return;
    const gapPx = parseFloat(getComputedStyle(trackRef.current).gap || '0');
    const slideWidth = slideRef.current.offsetWidth;
    const groupWidth = slideWidth * slidesToShow + gapPx * (slidesToShow - 1);
    setOffsetPx(-groupIndex * groupWidth);
  }, [groupIndex, slidesToShow]);

  const goNext = () => {
    setGroupIndex((prev) => Math.min(prev + 1, totalGroups - 1));
  };

  const goPrev = () => {
    setGroupIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
    setTranslateX(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setTranslateX(currentX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging || !slideRef.current || !trackRef.current) return;
    setIsDragging(false);

    const gapPx = parseFloat(getComputedStyle(trackRef.current).gap || '0');
    const slideWidth = slideRef.current.offsetWidth;
    const groupWidth = slideWidth * slidesToShow + gapPx * (slidesToShow - 1);

    if (translateX > groupWidth / 3) {
      goPrev();
    } else if (translateX < -groupWidth / 3) {
      goNext();
    }

    setTranslateX(0);
  };

  const transitionStyle = {
    transition: isDragging ? 'none' : 'transform 0.5s ease-out',
    transform: `translateX(${offsetPx + translateX}px)`,
  };

  return (
    <div className="w-screen h-[56.25vw] bg-[#fafafa] py-[2vw] select-none">
      <div className="text-center mb-[2vw]">
        <h2 className="font-montserrat font-bold text-[2vw] text-[#2B3DB8] uppercase">
          Vô vàn ưu đãi mừng sinh nhật 30 năm
        </h2>
        <div className="font-montserrat text-[1.2vw] text-[#2887E2] mt-[0.5vw]">Vay vốn</div>
      </div>

      <div className="w-screen h-[80%] relative flex items-center justify-center">
        <div className="relative w-[90%] h-full flex items-center justify-center">
          <button
            onClick={goPrev}
            className="absolute left-0 z-10 bg-white bg-opacity-80 rounded-full w-[3vw] h-[3vw] flex items-center justify-center shadow-md text-2xl hover:scale-110 transition-all"
          >
            &#60;
          </button>

          <div className="w-[86%] overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-[2vw] cursor-grab"
              style={transitionStyle}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={() => { if (isDragging) handleDragEnd(); }}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {images.map((img, idx) => (
                <div
                  key={img.src + idx}
                  ref={idx === 0 ? slideRef : null}
                  style={{ flex: `0 0 calc((100% - ${(slidesToShow - 1) * 2}vw) / ${slidesToShow})` }}
                  className="aspect-w-1 aspect-h-1"
                >
                  <div className="bg-white rounded-[2vw] shadow-lg overflow-hidden flex flex-col items-center justify-between w-full h-full">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goNext}
            className="absolute right-0 z-10 bg-white bg-opacity-80 rounded-full w-[3vw] h-[3vw] flex items-center justify-center shadow-md text-2xl hover:scale-110 transition-all"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
