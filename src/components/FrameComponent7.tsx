import { FunctionComponent } from "react";
import GroupComponent3 from "./GroupComponent3";
import BrandFieldsContainer from "./BrandFieldsContainer";
import FrameComponent1 from "./FrameComponent1";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[76px] max-w-full text-center text-29xl text-white font-instrument-sans mq900:gap-[19px] mq450:gap-[38px] mq1275:flex-wrap ${className}`}
    >
      <div className="w-[1728px] flex flex-col items-end justify-start gap-20 shrink-0 max-w-full mq900:gap-5 mq450:gap-10">
        <GroupComponent3
          vector1="pending_65:539"
          shoprayTextDecoration="unset"
          shoprayMargin="0"
          starIcon="pending_65:540"
          cancelTextDecoration="unset"
          cancelMargin="0"
        />
        <div className="w-[1675px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[859px] flex flex-col items-start justify-start gap-2.5 max-w-full">
            <BrandFieldsContainer
              createBrandProfile="Create Brand Profile"
              info="pending_65:579"
              info1="pending_65:554"
              info2="pending_65:557"
              add="pending_65:560"
            />
            <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full text-mini text-silver mq450:flex-wrap">
              <div className="w-[349px] rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-2.5 pl-5 pr-3 box-border max-w-full gap-5">
                <div className="h-[46px] w-[349px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                <div className="w-[135px] flex flex-row items-start justify-start gap-[5px]">
                  <img
                    className="h-[27px] w-[27px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                  />
                  <div className="flex-1 relative tracking-[-0.08em] font-semibold whitespace-pre-wrap z-[1]">
                    Owner contact
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-[15px] h-[21px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2 text-black">
                <div className="self-stretch rounded-4xs bg-springgreen flex flex-row items-start justify-start py-3 pl-3 pr-2.5">
                  <div className="h-[46px] w-[122px] relative rounded-4xs bg-springgreen hidden" />
                  <img
                    className="h-[22px] w-[19px] relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="self-stretch relative tracking-[-0.08em] font-semibold inline-block min-w-[82px] z-[1]">
                      Add Contact
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-[13px] pl-4 pr-[15px] box-border min-w-[119px] max-w-full gap-5">
                <div className="h-[46px] w-[366px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                <div className="relative tracking-[-0.08em] font-semibold inline-block min-w-[104px] z-[1]">
                  Company Email
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-[15px] h-[21px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent1 advertisingToolsetAreMargin="unset" />
    </section>
  );
};

export default FrameComponent7;
