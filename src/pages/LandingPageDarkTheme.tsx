import { FunctionComponent } from "react";
import DarkTheme from "../components/DarkTheme";
import MainContent from "../components/MainContent";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Footer from "../components/Footer";

const LandingPageDarkTheme: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-600 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-0.5 leading-[normal] tracking-[normal] text-left text-sm text-white font-instrument-sans">
      <div className="w-1.5 h-3.5 relative overflow-hidden shrink-0 hidden z-[0]" />
      <DarkTheme />
      <MainContent />
      <FrameComponent4 />
      <img
        className="w-[917px] h-[539px] absolute !m-[0] top-[408px] left-[-263px] object-contain z-[1]"
        alt=""
        src="/image@2x.png"
      />
      <div className="w-[917px] h-[539px] !m-[0] absolute top-[402px] left-[1075px] flex flex-row items-start justify-start max-w-full">
        <div className="h-[539px] w-[1375px] absolute !m-[0] bottom-[-6px] left-[-887px]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[917px] object-contain z-[2]"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[458px] max-h-full w-[917px] object-contain z-[3]"
            alt=""
            src="/image@2x.png"
          />
        </div>
        <img
          className="h-[539px] flex-1 relative max-w-full overflow-hidden object-contain z-[4]"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <FrameComponent5 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[47px] box-border max-w-full text-left text-[96px] text-black font-instrument-sans mq900:pb-[31px] mq900:box-border">
        <div className="flex-1 bg-springgreen flex flex-col items-start justify-start pt-[132px] pb-[106px] pl-[162px] pr-[90px] box-border gap-[65px] max-w-full mq900:gap-8 mq900:pt-[86px] mq900:pb-[69px] mq900:pl-[81px] mq900:pr-[45px] mq900:box-border mq450:gap-4 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="w-[1728px] h-[683px] relative bg-springgreen hidden max-w-full" />
          <h1 className="m-0 w-[1344px] relative text-inherit tracking-[-0.05em] flex italic font-semibold font-[inherit] items-center max-w-full z-[1] mq900:text-29xl mq450:text-10xl">
            “The only tool enterprenuers need to accelerate their business”
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end text-5xl">
            <h1 className="m-0 relative text-inherit tracking-[-0.05em] z-[1] font-[inherit] mq450:text-lgi">
              <i className="font-semibold">{`“ Leslie Owusu-Mensah - `}</i>
              <b className="whitespace-pre-wrap">deltascale CEO ”</b>
            </h1>
          </div>
        </div>
      </section>
      <Footer />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-[30px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
          <div className="h-[17px] w-[109px] relative">
            <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[-0.05em] leading-[14px] inline-block w-[110px] h-3.5 min-w-[110px] font-[inherit]">
              <span className="font-medium">{`built by `}</span>
              <b>deltascale</b>
            </h2>
            <div className="absolute top-[16px] left-[46px] bg-springgreen w-[57px] h-px" />
          </div>
          <div className="w-[165px] flex flex-row items-start justify-start">
            <h2 className="m-0 w-[166px] relative text-inherit tracking-[-0.05em] font-medium font-[inherit] whitespace-pre-wrap inline-block shrink-0">
              Copyright Shopray 2024
            </h2>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 ml-[-54px]">
              <img
                className="w-3 h-3.5 relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/copyright@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageDarkTheme;
