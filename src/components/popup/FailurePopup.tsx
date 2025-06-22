import React from 'react';
import { failureIcon } from '../../data';

export interface FailurePopupProps {
  open: boolean;
  onClose: () => void;
  scale?: number;
}

const FailurePopup: React.FC<FailurePopupProps> = ({ open, onClose, scale = 1 }) => {
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
        className="relative flex flex-col items-center bg-white shadow-lg text-center"
        style={{
          zIndex: 10,
          width: scaled(498),
          borderRadius: scaled(20),
          height: scaled(280),
        }}
        onClick={(e) => e.stopPropagation()} // Ngăn event bubbling khi click vào popup content
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: scaled(66),
            height: scaled(66),
            marginTop: scaled(28),
          }}
        >
          <img src={failureIcon} alt="failure" style={{
            width: scaled(66),
            height: scaled(66),
          }} />
        </div>

        <h2
          className="font-bold"
          style={{
            marginTop: scaled(25),
            fontSize: scaled(24),
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: '#333333',
            width: scaled(135),
            textAlign: 'center',
            height: scaled(29),
          }}
        >
          Thông báo
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
            width: scaled(272),
            textAlign: 'center',
            height: scaled(20),
          }}
        >
          Gửi liên hệ thất bại, Network Error
        </p>

        <button
          onClick={onClose}
          className="text-white"
          style={{
            padding: `${scaled(12)}px ${scaled(14)}px`,
            backgroundColor: '#EA0000',
            borderRadius: scaled(5),
            fontSize: scaled(16),
            fontFamily: 'Montserrat',
            color: '#FFFFFF',
            width: scaled(93),
            textAlign: 'center',
            height: scaled(43),
            fontWeight: 400,
            border: 'none',
          }}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );

};

export default FailurePopup; 