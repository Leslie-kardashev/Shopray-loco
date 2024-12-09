import { FunctionComponent } from "react";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1543px] flex flex-col items-end justify-start gap-[121px] max-w-[107%] text-left text-xl text-silver font-instrument-sans lg:gap-[60px] mq450:gap-[15px] mq1275:gap-[30px] ${className}`}
    >
      <img
        className="w-[100px] h-[100px] relative object-cover"
        loading="lazy"
        alt=""
      />
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="w-[1156px] rounded-10xl bg-dimgray border-silver border-[1px] border-solid box-border flex flex-row items-start justify-between py-3.5 pl-[41px] pr-[23px] min-h-[65px] gap-5 max-w-full mq450:flex-wrap">
          <div className="h-[65px] w-[1156px] relative rounded-10xl bg-dimgray border-silver border-[1px] border-solid box-border hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <div className="relative tracking-[-0.05em] font-medium inline-block min-w-[83px] z-[1] mq450:text-base">
              Message
            </div>
          </div>
          <img
            className="h-[33px] w-[35px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
