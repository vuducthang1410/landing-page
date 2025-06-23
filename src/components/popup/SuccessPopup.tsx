import React from 'react';
import { successIcon } from '../../data';

export interface SuccessPopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ open, onClose, scale = 1 }) => {
  if (!open) return null;

  const scaled = (value: number) => value * scale;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay trắng mờ, nhìn xuyên */}
      <div
        className="absolute inset-0 bg-white backdrop-blur-sm"
        style={{
          opacity: 0.8,
          pointerEvents: 'auto', // Để ngăn người dùng tương tác với background
          zIndex: 0,
        }}
        onClick={onClose} // Cho phép click overlay để đóng popup
      />
  
      {/* Popup content */}
      <div
        className="relative flex flex-col items-center bg-white text-center"
        style={{
          zIndex: 10,
          width: scaled(714),
          borderRadius: scaled(20),
          height: scaled(280),
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: scaled(66),
            height: scaled(66),
            marginTop: scaled(28),
          }}
        >
         <img src={successIcon} alt="success" style={{
          width: scaled(66),
          height: scaled(66),
         }} />
        </div>
  
        <h2
          className=""
          style={{
            marginTop: scaled(25),
            fontSize: scaled(24),
            fontFamily: 'Montserrat',
            width: scaled(484),
            height: scaled(29),
            fontWeight: 700,
            color: '#333333',
            textAlign: 'center',
          }}
        >
          Cảm ơn Quý khách đã để lại thông tin!
        </h2>
  
        <p
          className=""
          style={{
            marginTop: scaled(10),
            marginBottom: scaled(21),
            fontSize: scaled(16),
            fontFamily: 'Montserrat',
            fontWeight: 400,
            color: '#333333',
            width: scaled(623),
            height: scaled(20),
            textAlign: 'center',
            border: 'none',
          }}
        >
          KienlongBank sẽ liên hệ tư vấn và hỗ trợ Quý khách trong thời gian sớm nhất!
        </p>
  
        <button
          onClick={onClose}
          className="text-white"
          style={{
            padding: `${scaled(11.5)}px ${scaled(34.5)}px`,
            backgroundColor: '#007BFF',
            borderRadius: scaled(5),
            fontSize: scaled(16),
            fontFamily: 'Montserrat',
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
  
};

export default SuccessPopup; 