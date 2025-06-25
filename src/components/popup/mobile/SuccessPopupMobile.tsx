import React from 'react';
import { successIcon } from '../../../data';

export interface SuccessPopupMobileProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const SuccessPopupMobile: React.FC<SuccessPopupMobileProps> = ({ open, onClose, scale = 1 }) => {
  if (!open) return null;

  const scaled = (value: number) => value * scale;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay trắng mờ, nhìn xuyên */}
      <div
        className="absolute inset-0 bg-white backdrop-blur-sm"
        style={{
          opacity: 0.8,
          pointerEvents: 'auto',
          zIndex: 0,
        }}
        onClick={onClose}
      />
  
      {/* Popup content */}
      <div
        className="relative flex flex-col items-center bg-white text-center"
        style={{
          zIndex: 10,
          width: scaled(300),
          borderRadius: scaled(16),
          height: scaled(200),
          margin: scaled(20),
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: scaled(50),
            height: scaled(50),
            marginTop: scaled(20),
          }}
        >
         <img src={successIcon} alt="success" style={{
          width: scaled(50),
          height: scaled(50),
         }} />
        </div>
  
        <h2
          className=""
          style={{
            marginTop: scaled(16),
            fontSize: scaled(18),
            fontFamily: 'Montserrat',
            width: scaled(260),
            fontWeight: 700,
            color: '#333333',
            textAlign: 'center',
            lineHeight: '1.2',
          }}
        >
          Cảm ơn Quý khách đã để lại thông tin!
        </h2>
  
        <p
          className=""
          style={{
            marginTop: scaled(8),
            marginBottom: scaled(16),
            fontSize: scaled(14),
            fontFamily: 'Montserrat',
            fontWeight: 400,
            color: '#333333',
            width: scaled(260),
            textAlign: 'center',
            lineHeight: '1.3',
          }}
        >
          KienlongBank sẽ liên hệ tư vấn và hỗ trợ Quý khách trong thời gian sớm nhất!
        </p>
  
        <button
          onClick={onClose}
          className="text-white"
          style={{
            padding: `${scaled(8)}px ${scaled(24)}px`,
            backgroundColor: '#007BFF',
            borderRadius: scaled(4),
            fontSize: scaled(14),
            fontFamily: 'Montserrat',
            fontWeight: 500,
            border: 'none',
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
  
};

export default SuccessPopupMobile; 