import React from 'react';
import { failureIcon } from '../../../data';

export interface FailurePopupMobileProps {
  open: boolean;
  onClose: () => void;
  scale: number;
}

const FailurePopupMobile: React.FC<FailurePopupMobileProps> = ({ open, onClose, scale }) => {
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
        className="relative flex flex-col items-center bg-white shadow-lg text-center"
        style={{
          zIndex: 10,
          width: scaled(280),
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
          <img src={failureIcon} alt="failure" style={{
            width: scaled(50),
            height: scaled(50),
          }} />
        </div>

        <h2
          className="font-bold"
          style={{
            marginTop: scaled(16),
            fontSize: scaled(18),
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: '#333333',
            textAlign: 'center',
          }}
        >
          Thông báo
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
            width: scaled(240),
            textAlign: 'center',
            lineHeight: '1.3',
          }}
        >
          Gửi liên hệ thất bại, Network Error
        </p>

        <button
          onClick={onClose}
          className="text-white"
          style={{
            padding: `${scaled(8)}px ${scaled(20)}px`,
            backgroundColor: '#EA0000',
            borderRadius: scaled(4),
            fontSize: scaled(14),
            fontFamily: 'Montserrat',
            color: '#FFFFFF',
            textAlign: 'center',
            fontWeight: 500,
            border: 'none',
          }}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );

};

export default FailurePopupMobile; 