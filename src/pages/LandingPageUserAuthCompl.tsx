import { FunctionComponent } from "react";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent1 from "../components/FrameComponent1";

const LandingPageUserAuthCompl: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-600 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[29px] box-border gap-[565px] leading-[normal] tracking-[normal] text-left text-sm text-white font-instrument-sans mq900:gap-[141px] mq450:gap-[282px]">
      <div className="w-1.5 h-3.5 relative overflow-hidden shrink-0 hidden" />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[76px] max-w-full mq900:gap-[19px] mq450:gap-[38px] mq1275:flex-wrap">
        <div className="w-[1728px] flex flex-col items-end justify-start gap-[52px] shrink-0 max-w-full mq900:gap-[26px]">
          <GroupComponent3 vector1="pending_65:503" starIcon="pending_65:504" />
          <FrameComponent6 />
        </div>
        <FrameComponent1 />
      </section>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[30px] pr-[29px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq900:flex-wrap">
          <div className="h-[17px] w-[109px] relative">
            <div className="absolute top-[0px] left-[0px] tracking-[-0.05em] leading-[14px] inline-block w-[110px] h-3.5 min-w-[110px]">
              <span className="font-medium">{`built by `}</span>
              <b>deltascale</b>
            </div>
            <div className="absolute top-[16px] left-[46px] bg-springgreen w-[57px] h-px z-[1]" />
          </div>
          <div className="w-[165px] flex flex-row items-start justify-start">
            <div className="w-[166px] relative tracking-[-0.05em] font-medium whitespace-pre-wrap inline-block shrink-0">
              Copyright Shopray 2024
            </div>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 ml-[-54px]">
              <img
                className="w-3 h-3.5 relative object-cover z-[1]"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageUserAuthCompl;
