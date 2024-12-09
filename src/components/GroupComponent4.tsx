import { FunctionComponent } from "react";

export type GroupComponent4Type = {
  className?: string;
  fruit?: string;
  shopCardActionIcon?: string;
  add?: string;
};

const GroupComponent4: FunctionComponent<GroupComponent4Type> = ({
  className = "",
  fruit,
  shopCardActionIcon,
  add,
}) => {
  return (
    <div
      className={`flex-[0.951] rounded-lg bg-gray-300 border-dimgray border-[1px] border-dashed box-border flex flex-col items-start justify-start pt-2.5 pb-[11px] pl-2.5 pr-[9px] gap-[5px] max-w-full text-left text-5xs text-white font-instrument-sans mq900:flex-1 ${className}`}
    >
      <div className="w-[351px] h-[263px] relative rounded-lg bg-gray-300 border-dimgray border-[1px] border-dashed box-border hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
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
      <div className="self-stretch flex flex-col items-start justify-start gap-[14.5px] max-w-full text-sm">
        <div className="self-stretch rounded-sm bg-darkslategray-200 flex flex-row items-start justify-start pt-2.5 pb-[13px] pl-[90px] pr-[85px] box-border max-w-full z-[1] mq900:pl-5 mq900:pr-5 mq900:box-border">
          <div className="h-10 w-[326px] relative rounded-sm bg-darkslategray-200 hidden max-w-full" />
          <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.05em] font-bold font-[inherit] z-[2]">{`Mr . Jackson Assin Fosu `}</h2>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          alt=""
          src={shopCardActionIcon}
        />
        <button className="cursor-pointer border-springgreen border-[1px] border-solid py-1.5 px-[95px] bg-[transparent] self-stretch rounded-6xs box-border flex flex-row items-end justify-center max-w-full z-[1] hover:bg-limegreen-200 hover:border-limegreen-100 hover:border-[1px] hover:border-solid hover:box-border mq900:pl-5 mq900:pr-5 mq900:box-border">
          <div className="h-[31px] w-[326px] relative rounded-6xs border-springgreen border-[1px] border-solid box-border hidden max-w-full" />
          <img
            className="h-3.5 w-[15px] relative object-cover z-[3]"
            alt=""
            src={add}
          />
          <b className="w-[119px] relative text-sm tracking-[-0.05em] flex font-instrument-sans text-springgreen text-left items-center shrink-0 z-[2]">
            Connect to Shop
          </b>
        </button>
      </div>
    </div>
  );
};

export default GroupComponent4;
