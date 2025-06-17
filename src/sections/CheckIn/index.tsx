import React from 'react';
import bg3 from '../../assets/bg3.png';
import kiloba from '../../assets/kiloba.png';
// import cocsu from '../../assets/cocsu.png'; // Uncomment if available
// import hopinochi from '../../assets/hopinochi.png'; // Uncomment if available

const rewards = [
  {
    id: 1,
    image: kiloba,
    number: '6000',
    label: 'Kiloba Dễ Thương',
  },
  {
    id: 2,
    image: '', // cocsu,
    number: '7000',
    label: 'Cốc Sứ',
  },
  {
    id: 3,
    image: '', // hopinochi,
    number: '7000',
    label: 'Hộp Inochi',
  },
];

const CheckIn = () => {
  return (
    <div id="check-in" className="w-screen" style={{ position: 'relative', width: '100vw', height: '56.25vw', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '56.25vw',
          backgroundImage: `url(${bg3})`,
          backgroundSize: '150%',
          backgroundPosition: '70% 70%',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-start w-full" style={{paddingTop: '4vw'}}>
        <h2 className="font-montserrat font-bold text-[2.6vw] text-[#00e0ff] uppercase text-center mb-[1vw] tracking-wide">
          Chụp check-in - nhận quà xinh
        </h2>
        <div className="font-montserrat text-white text-[1.4vw] font-semibold text-center mb-[0.7vw] uppercase">
          Tới Kienlongbank là có quà!
        </div>
        <div className="font-montserrat text-white text-[1vw] text-center max-w-[50vw] mb-[3vw] opacity-80">
          Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành tặng 01 phần quà theo sở thích khi khách hàng chụp hình check-in và chia sẻ hình lên mạng xã hội để chế độ công khai để nhận quà.
        </div>
        <div className="flex flex-row justify-center items-end gap-[3vw] w-full mb-[2vw]">
          {rewards.map((reward, idx) => (
            <div key={reward.id} className="flex flex-col items-center">
              <div
                className="bg-white bg-opacity-80 rounded-[1vw] flex items-center justify-center"
                style={{ width: '15vw', height: '15vw' }}
              >
                {reward.image ? (
                  <img src={reward.image} alt={reward.label} className="w-[10vw] h-[10vw] object-contain" />
                ) : (
                  <div className="w-[10vw] h-[10vw] bg-gray-300 rounded-[0.7vw]" />
                )}
              </div>
              <div
                className="font-montserrat font-bold text-[2.8vw] mt-[1vw] mb-[0.3vw] text-center"
                style={{
                  background: 'linear-gradient(90deg, #6ad0ff 0%, #ff6ad0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {reward.number}
              </div>
              <div className="font-montserrat text-white text-[1.1vw] font-semibold text-center">
                {reward.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckIn; 