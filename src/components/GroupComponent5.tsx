import { FunctionComponent } from "react";

export type GroupComponent5Type = {
  className?: string;
  fruit?: string;
  vector10?: string;
  googleMaps?: string;
};

const GroupComponent5: FunctionComponent<GroupComponent5Type> = ({
  className = "",
  fruit,
  vector10,
  googleMaps,
}) => {
  return (
    <div
      className={`self-stretch rounded-lg bg-gray-300 border-dimgray border-[1px] border-dashed box-border flex flex-row items-start justify-start pt-2.5 px-2.5 pb-2 gap-[13.8px] max-w-full text-left text-5xl text-white font-instrument-sans mq450:flex-wrap ${className}`}
    >
      <div className="h-[263px] w-[592px] relative rounded-lg bg-gray-300 border-dimgray border-[1px] border-dashed box-border hidden max-w-full" />
      <img
        className="h-[241px] w-[211px] relative rounded-6xs object-cover z-[1]"
        loading="lazy"
        alt=""
        src={fruit}
      />
      <div className="h-[239.5px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
        <img
          className="w-[0.4px] flex-1 relative max-h-full object-contain z-[1]"
          loading="lazy"
          alt=""
          src={vector10}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[12.5px] min-w-[214px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[7.5px]">
          <h1 className="m-0 w-[283px] relative text-inherit tracking-[-0.05em] font-bold font-[inherit] flex items-center z-[1] mq900:text-lgi">
            By His Grace SuperMarket
          </h1>
          <h2 className="m-0 relative text-sm tracking-[-0.05em] font-semibold font-[inherit] z-[1]">
            GraceJohn Enterprise LTD
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.3px] text-center text-5xs mq900:flex-wrap">
            <div className="rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[5px] pb-1.5 pl-[7px] pr-[5px] z-[1] text-left">
              <div className="h-[23px] w-[79px] relative rounded-sm bg-darkslategray-200 hidden" />
              <div className="relative tracking-[-0.05em] font-semibold inline-block min-w-[67px] z-[2]">{`Active Since 2002 `}</div>
            </div>
            <div className="flex-1 rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[5px] pb-1.5 pl-[3px] pr-px box-border min-w-[51px] z-[1]">
              <div className="h-[23px] w-[79px] relative rounded-sm bg-darkslategray-200 hidden" />
              <div className="flex-1 relative tracking-[-0.05em] font-semibold z-[2]">
                Wholesale
              </div>
            </div>
            <div className="flex-1 rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[5px] pb-1.5 pl-[3px] pr-px box-border min-w-[51px] z-[1]">
              <div className="h-[23px] w-[79px] relative rounded-sm bg-darkslategray-200 hidden" />
              <div className="flex-1 relative tracking-[-0.05em] font-semibold z-[2]">
                Retail
              </div>
            </div>
            <div className="flex-1 rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-[5px] pb-1.5 pl-1 pr-px box-border min-w-[51px] z-[1]">
              <div className="h-[23px] w-[79px] relative rounded-sm bg-darkslategray-200 hidden" />
              <div className="flex-1 relative tracking-[-0.05em] font-semibold z-[2]">{`Food & Drinks`}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4.5px] max-w-full text-6xs">
          <div className="self-stretch flex flex-row items-start justify-start gap-1 text-center text-gray-100 mq900:flex-wrap">
            <div className="flex-1 rounded-sm bg-darkslategray-400 flex flex-col items-start justify-start pt-1.5 px-[3px] pb-[7px] box-border min-w-[136px] z-[1]">
              <div className="w-[210px] h-[30px] relative rounded-sm bg-darkslategray-400 hidden" />
              <div className="w-8 relative tracking-[-0.05em] font-medium flex items-center justify-center z-[2]">
                Location
              </div>
              <div className="w-[156px] relative text-5xs tracking-[-0.05em] font-semibold text-white whitespace-pre-wrap flex items-center justify-center z-[3]">
                KUMASI, KNUST AYEDUASE : AS-100-4589
              </div>
            </div>
            <div className="w-[115px] rounded-sm bg-springgreen flex flex-row items-start justify-start py-1 pl-4 pr-[11px] box-border gap-px z-[1] text-2xs text-black">
              <div className="h-[30px] w-[115px] relative rounded-sm bg-springgreen hidden" />
              <img
                className="h-[22px] w-[23px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src={googleMaps}
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.05em] font-semibold font-[inherit] whitespace-pre-wrap z-[2]">{`point at  `}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0.5 text-2xs">
            <h3 className="m-0 relative text-inherit tracking-[-0.05em] font-bold font-[inherit] inline-block min-w-[46px] z-[1]">
              Owner(s)
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full text-sm">
            <div className="flex-1 rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-2.5 pb-[13px] pl-[90px] pr-[85px] box-border max-w-full z-[1] mq900:pl-5 mq900:pr-5 mq900:box-border">
              <div className="h-10 w-[326px] relative rounded-sm bg-darkslategray-200 hidden max-w-full" />
              <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.05em] font-bold font-[inherit] z-[2]">{`Mr . Jackson Assin Fosu `}</h2>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-6xs border-springgreen border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[5px] pb-[7px] pl-[127px] pr-[119px] max-w-full z-[1] text-sm text-springgreen mq900:pl-5 mq900:pr-5 mq900:box-border">
          <div className="h-[31px] w-[326px] relative rounded-6xs border-springgreen border-[1px] border-solid box-border hidden max-w-full" />
          <b className="relative tracking-[-0.05em] inline-block min-w-[78px] z-[2]">
            024587630
          </b>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent5;
