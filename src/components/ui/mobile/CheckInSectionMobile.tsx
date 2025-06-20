import bg2 from "../../../assets/bg2.png";
import { checkInStats } from "../../../screens/LandingPageDesktop/data";

const CheckInSectionMobile = () => (
  <div className="absolute w-[375px] h-[812px] top-[3248px]">
    <section
      className=" absolute h-[812px] w-[375px] object-cover"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    <div
      className="absolute z-10 [font-family:'Montserrat',Helvetica]  text-center tracking-[0] leading-[normal]"
      style={{
        height: "99px",
        width: "375px",
        top: "79px",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "100%",
        color: "#00E5FF",
      }}
    >
      CHỤP CHECK-IN
      <br />
      NHẬN QUÀ XINH
    </div>

    <div className="absolute [font-family:'Montserrat',Helvetica] text-center tracking-[0] leading-[normal]"
    style={{
      color:'white',
      fontSize:'12px',
      lineHeight:'100%',
      top:'135px',
      width:'375px',
      fontWeight:400,
      fontFamily:'Montserrat',
      letterSpacing:'0%',
      textAlign:'center',
    }}>
      TỚI KIENLONGBANK LÀ CÓ QUÀ!
    </div>

    <div className="absolute [font-family:'Montserrat',Helvetica] text-white text-center tracking-[0] leading-[normal]"
    style={{
      color:'white',
      fontSize:'10px',
      lineHeight:'100%',
      top:'161px',
      width:'349px',
      height:'66px',
      left:'13px',
      fontWeight:400,
    }}>
      Khách hàng sau khi giao dịch và nghe tư vấn, KienlongBank sẽ dành tặng 01
      phần quà theo sở thích khi Khách hàng chụp hình check-in và chia sẻ hình
      lên mạng xã hội để chế độ công khai để nhận quà.
    </div>
    <div
      className="absolute w-[375px] top-[252px]"
      style={{
        height: "485px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding:'0px 13px 0px 13px',
      }}
    >
      {checkInStats.map((gift, index) => (
        <div key={index} style={{ display: "flex", gap: "10px" }}>
          {index % 2 === 0 ? (
            <>
              <img
                className={`w-[185px] h-[155px]`}
                alt="Gift item"
                src={gift.img}
                style={{
                  borderRadius: "10px",
                }}
              />
              <div className="flex flex-col justify-center">
                <div
                  className={`
                 text-5xl 
                bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent tracking-[0] leading-[normal]`}
                style={{
                  fontSize: "48px",
                  lineHeight: "100%",
                  fontWeight: 700,  
                  width: "152px",
                  height: "53px",
                  textAlign: "left",
                  letterSpacing:'0%',
                }}
                >
                  {gift.count}
                </div>
                <div className={` w-[152px] `}
                style={{
                  fontSize:'14px',
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
                  className={`
                 text-5xl 
                bg-[linear-gradient(90deg,rgba(0,97,254,1)_0%,rgba(255,159,254,1)_41%,rgba(255,56,156,1)_77%,rgba(255,179,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent tracking-[0] leading-[normal]`}
                style={{
                  fontSize: "48px",
                  lineHeight: "100%",
                  fontWeight: 700,  
                  width: "152px",
                  height: "53px",
                  textAlign: "right",
                  letterSpacing:'0%',
                }}>
                  {gift.count}
                </div>
                <div className={` w-[152px] `}
                style={{
                  fontSize:'14px',
                  lineHeight:'100%',
                  fontWeight:700,
                  textAlign:'right',
                }}>{gift.title}</div>
              </div>
              <img
                className={`w-[185px] h-[155px]`}
                alt="Gift item"
                src={gift.img}
                style={{
                  borderRadius: "10px",
                }}
              />
            </>
          )}
        </div>
      ))}
    </div>
    {/* Check-in Gifts */}
  </div>
);

export default CheckInSectionMobile;
