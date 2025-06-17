import React from "react";
import kiloba from "../../assets/kiloba.png";

const ContactForm = () => {
  return (
    <div
      id="contact-form"
      className="w-screen h-[1080px] flex flex-col items-center"
      style={{
        background:
          "conic-gradient(from 199.49deg at 30.47% 51.85%, #0D0573 0deg, #8B18A2 104.4deg, #2887E2 190.8deg, #0A1E78 282.6deg, #290B8E 360deg)",
      }}
    >
      <div className="w-screen flex flex-col items-center justify-center">
        <h2 className="text-[#00E5FF] font-montserrat font-bold text-[2.5vw] md:text-[2vw] leading-tight mb-[1vw] uppercase text-center">
          BẠN CÒN CÂU HỎI?
        </h2>
        <p className="font-montserrat font-medium text-[1.67vw] leading-[100%] tracking-[0%] text-center uppercase text-[#FFFF]">
          Hãy gửi thông tin để được liên hệ tư vấn
        </p>
      </div>
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-[2vw] py-[4vw] gap-[2vw]">
        {/* Left: Kiloba Image */}
        <div className="flex-1 flex items-end justify-center min-w-[320px]">
          <img
            src={kiloba}
            alt="Kiloba"
            className="w-[41.4vw] h-[35.4vw] absolute top-[358.4vw] left-[6.15vw]"
          />
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex flex-col items-start justify-center w-full max-w-[600px]">
          <form className="w-full flex flex-col gap-[1vw]">
            <div>
              <label className="block text-white font-montserrat font-semibold text-[1vw] mb-1 text-left">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full rounded-lg px-[1vw] py-[0.7vw] text-[1vw] font-montserrat outline-none bg-white bg-opacity-90"
              />
            </div>
            <div>
              <label className="block text-white font-montserrat font-semibold text-[1vw] mb-1 text-left">
                Email
              </label>
              <input
                type="email"
                placeholder="Nhập địa chỉ email"
                className="w-full rounded-lg px-[1vw] py-[0.7vw] text-[1vw] font-montserrat outline-none bg-white bg-opacity-90"
              />
            </div>
            <div>
              <label className="block text-white font-montserrat font-semibold text-[1vw] mb-1 text-left">
                Bạn cần hỗ trợ vấn đề gì?
              </label>
              <textarea
                placeholder="Nhập nội dung"
                rows={4}
                className="w-full rounded-lg px-[1vw] py-[0.7vw] text-[1vw] font-montserrat outline-none bg-white bg-opacity-90 resize-none"
              />
            </div>
            <div className="flex justify-end w-full mt-[1vw]">
              <button
                type="submit"
                className="px-[2vw] py-[0.7vw] rounded-lg font-montserrat font-semibold text-white text-[1vw] bg-gradient-to-r from-[#8B18A2] via-[#2887E2] to-[#FBB040] shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                Gửi thông tin
                <span className="inline-block text-lg">➔</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
