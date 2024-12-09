import { FunctionComponent } from "react";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[309px] pr-[286px] box-border max-w-full text-center text-mini text-black font-instrument-sans lg:pl-[154px] lg:pr-[143px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pl-[77px] mq1275:pr-[71px] mq1275:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[72px] max-w-[346%] mq900:gap-9 mq450:gap-[18px]">
        <div className="w-[2941px] flex flex-row items-start justify-end">
          <div className="w-[1728px] bg-springgreen flex flex-row items-start justify-start py-2.5 pl-[588px] pr-[587px] box-border max-w-full mq900:pl-[294px] mq900:pr-[293px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[35px] w-[1728px] relative bg-springgreen hidden max-w-full" />
            <div className="flex-1 relative tracking-[-0.05em] leading-[15px] font-semibold inline-block max-w-full z-[1]">
              Advertising toolset are on the way! Let’s grow your business
              today.
            </div>
          </div>
        </div>
        <div className="w-[546px] flex flex-col items-start justify-start gap-[31px] max-w-full text-left text-sm text-white mq1275:gap-[15px]">
          <div className="w-[520px] flex flex-row items-start justify-start py-0 px-[131px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pl-[65px] mq1275:pr-[65px] mq1275:box-border">
            <div className="flex-1 rounded-36xl bg-dimgray flex flex-row items-start justify-start py-2.5 px-[29px] gap-[19px]">
              <div className="h-10 w-[258px] relative rounded-36xl bg-dimgray hidden" />
              <img
                className="h-5 w-5 relative object-cover z-[1]"
                loading="lazy"
                alt=""
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <b className="relative tracking-[-0.05em] z-[1]">
                  Get Expert Consultancy
                </b>
              </div>
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-29xl tracking-[-0.05em] font-bold font-[inherit] mq900:text-19xl mq450:text-10xl">
            What Can I help you with
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
