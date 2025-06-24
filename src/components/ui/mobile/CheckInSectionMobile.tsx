import { bgCheckInMobile, checkInStats } from "../../../data";

interface CheckInSectionMobileProps {
  scaled: (value: number) => number;
}

const CheckInSectionMobile: React.FC<CheckInSectionMobileProps> = ({ scaled }) => (
  <div
    style={{ width: scaled(375), height: scaled(812), position: 'absolute', top: scaled(3248) }}
  >
    <section
      style={{
        width: scaled(375),
        height: scaled(812),
        background: `url(${bgCheckInMobile}) no-repeat center center`,
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div
        className="absolute z-10 [font-family:'Montserrat',Helvetica]  text-center tracking-[0] leading-[normal]"
        style={{
          height: scaled(99),
          width: scaled(375),
          top: scaled(79),
          fontWeight: 700,
          fontSize: scaled(20),
          lineHeight: "130%",
          color: "#00E5FF",
          zIndex: 1,
        }}
      >
        CHỤP CHECK-IN
        <br />
        NHẬN QUÀ XINH
      </div>

      <div className="absolute [font-family:'Montserrat',Helvetica] text-center tracking-[0] leading-[normal]"
      style={{
        color:'white',
        fontSize: scaled(12),
        lineHeight:'100%',
        top: scaled(135),
        width: scaled(375),
        fontWeight:400,
        fontFamily:'Montserrat',
        letterSpacing:'0%',
        textAlign:'center',
        marginTop: scaled(10),
      }}>
        TỚI KIENLONGBANK LÀ CÓ QUÀ!
      </div>

      <div className="absolute [font-family:'Montserrat',Helvetica] text-white text-center tracking-[0] leading-[normal]"
      style={{
        color:'white',
        fontSize: scaled(10),
        lineHeight:'100%',
        top: scaled(175),
        width: scaled(349),
        height: scaled(66),
        left: scaled(13),
        fontWeight:400,
      }}>
        Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành tặng 01
        phần quà theo sở thích khi Khách hàng chụp hình check-in và chia sẻ hình
        lên mạng xã hội để chế độ công khai để nhận quà.
      </div>
      <div
        className="absolute"
        style={{
          top: scaled(252),
          width: scaled(375),
          height: scaled(485),
          display: "flex",
          flexDirection: "column",
          gap: scaled(10),
          padding:`0 ${scaled(13)}px`,
        }}
      >
        {checkInStats.map((gift, index) => (
          <div key={index} style={{ display: "flex", gap: scaled(10) }}>
            {index % 2 === 0 ? (
              <>
                <img
                  alt="Gift item"
                  src={gift.img}
                  style={{
                    width: scaled(185),
                    height: scaled(155),
                    borderRadius: scaled(10),
                  }}
                />
                <div className="flex flex-col justify-center">
                  <div
                    className="bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent tracking-[0] leading-[normal]"
                    style={{
                      fontSize: scaled(48),
                      lineHeight: "100%",
                      fontWeight: 700,  
                      width: scaled(152),
                      height: scaled(53),
                      textAlign: "left",
                      letterSpacing:'0%',
                    }}
                  >
                    {gift.count}
                  </div>
                  <div
                    style={{
                      width: scaled(152),
                      fontSize: scaled(14),
                      lineHeight:'100%',
                      fontWeight:700,
                      textAlign:'left',
                      color:'white',
                      fontFamily:'Montserrat',
                      letterSpacing:'0%',
                    }}
                  >{gift.title}</div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center">
                  <div
                    className="bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent tracking-[0] leading-[normal]"
                    style={{
                      fontSize: scaled(48),
                      lineHeight: "100%",
                      fontWeight: 700,  
                      width: scaled(152),
                      height: scaled(53),
                      textAlign: "right",
                      letterSpacing:'0%',
                    }}>
                    {gift.count}
                  </div>
                  <div
                    style={{
                      width: scaled(152),
                      fontSize: scaled(14),
                      lineHeight:'100%',
                      fontWeight:700,
                      textAlign:'right',
                      color:'white',
                      fontFamily:'Montserrat',
                      letterSpacing:'0%',
                    }}>{gift.title}</div>
                </div>
                <img
                  alt="Gift item"
                  src={gift.img}
                  style={{
                    width: scaled(185),
                    height: scaled(155),
                    borderRadius: scaled(10),
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>
      {/* Check-in Gifts */}
    </section>
  </div>
);

export default CheckInSectionMobile;
