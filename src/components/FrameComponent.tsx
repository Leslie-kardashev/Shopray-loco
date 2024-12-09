import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  fruit?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  fruit,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1.5 text-left text-5xs text-white font-instrument-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
        <img
          className="h-[115px] w-[110px] relative rounded-6xs object-cover z-[1]"
          loading="lazy"
          alt=""
          src={fruit}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-base">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.05em] font-bold font-[inherit] z-[1]">
              By His Grace SuperMarket
            </h1>
          </div>
          <div className="w-[162px] flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border text-2xs">
            <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.05em] font-semibold font-[inherit] z-[1]">
              GraceJohn Enterprise LTD
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-center">
            <div className="flex-1 flex flex-row items-start justify-start gap-[3px]">
              <div className="rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[3px] pb-1 pl-[3px] pr-px z-[1] text-left">
                <div className="h-[15px] w-[68px] relative rounded-sm bg-darkslategray-200 hidden" />
                <div className="relative tracking-[-0.05em] font-semibold inline-block min-w-[64px] z-[2]">{`Active Since 2002 `}</div>
              </div>
              <div className="flex-1 rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[3px] pb-1 pl-[3px] pr-px z-[1]">
                <div className="h-[15px] w-[68px] relative rounded-sm bg-darkslategray-200 hidden" />
                <div className="flex-1 relative tracking-[-0.05em] font-semibold z-[2]">
                  Wholesale
                </div>
              </div>
              <div className="flex-1 rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[3px] pb-1 pl-[3px] pr-px z-[1]">
                <div className="h-[15px] w-[68px] relative rounded-sm bg-darkslategray-200 hidden" />
                <div className="flex-1 relative tracking-[-0.05em] font-semibold z-[2]">
                  Retail
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-center">
            <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
              <div className="w-[68px] rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[3px] pb-1 pl-[3px] pr-px box-border z-[1]">
                <div className="h-[15px] w-[68px] relative rounded-sm bg-darkslategray-200 hidden" />
                <div className="flex-1 relative tracking-[-0.05em] font-semibold z-[2]">{`Food & Drinks`}</div>
              </div>
              <div className="self-stretch rounded-sm bg-darkslategray-400 flex flex-col items-start justify-start pt-1.5 px-[3px] pb-[7px] z-[1] text-6xs text-gray-100">
                <div className="w-[210px] h-[30px] relative rounded-sm bg-darkslategray-400 hidden" />
                <div className="w-8 relative tracking-[-0.05em] font-medium flex items-center justify-center z-[2]">
                  Location
                </div>
                <div className="w-[156px] relative text-5xs tracking-[-0.05em] font-semibold text-white whitespace-pre-wrap flex items-center justify-center z-[3]">
                  KUMASI, KNUST AYEDUASE : AS-100-4589
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="m-0 relative text-2xs tracking-[-0.05em] font-bold font-[inherit] inline-block min-w-[46px] z-[1]">
        Owner(s)
      </h3>
    </div>
  );
};

export default FrameComponent;
