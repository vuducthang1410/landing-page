import React, { useEffect } from "react";

interface MobileMenuPopupProps {
  open: boolean;
  onClose: () => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  homeRef: React.RefObject<HTMLDivElement | null>;
  prizeRef: React.RefObject<HTMLDivElement | null>;
  comboRef: React.RefObject<HTMLDivElement | null>;
  checkinRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  scaled: (value: number) => number;
}

const MobileMenuPopup: React.FC<MobileMenuPopupProps> = ({
  open,
  onClose,
  scrollToSection,
  homeRef,
  prizeRef,
  comboRef,
  checkinRef,
  contactRef,
  scaled,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-100"
      style={{
        width: scaled(375),
        height: scaled(812),
        left: 0,
        top: 0,
      }}
      onClick={onClose}
    >
      <nav
        className="flex flex-col items-center justify-center "
        style={{ fontFamily: "Montserrat, Helvetica", fontWeight: 500, fontSize: scaled(20), gap: scaled(52) }}
        onClick={e => e.stopPropagation()}
      >
        <button style={{ background: 'none', border: 'none', color: '#333333' }} onClick={() => scrollToSection(homeRef)}>Trang chủ</button>
        <button style={{ background: 'none', border: 'none', color: '#333333' }} onClick={() => scrollToSection(prizeRef)}>Quay số trúng thưởng</button>
        <button style={{ background: 'none', border: 'none', color: '#333333' }} onClick={() => scrollToSection(comboRef)}>Combo ưu đãi</button>
        <button style={{ background: 'none', border: 'none', color: '#333333' }} onClick={() => scrollToSection(checkinRef)}>Check in</button>
        <button style={{ background: 'none', border: 'none', color: '#333333' }} onClick={() => scrollToSection(contactRef)}>Liên hệ</button>
      </nav>
    </div>
  );
};

export default MobileMenuPopup; 