import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
  group34?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  group34,
}) => {
  return (
    <div
      className={`h-[1117px] w-[83px] relative shrink-0 text-center text-xs text-darkslategray-300 font-instrument-sans ${className}`}
    >
      <div className="absolute top-[286px] left-[43px] rounded-10xs bg-springgreen w-[22px] h-[13px]" />
      <b className="absolute top-[288px] left-[47px] tracking-[-0.05em] flex items-center justify-center w-4 h-[15px] min-w-[16px] z-[1]">
        2
      </b>
      <img
        className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
        loading="lazy"
        alt=""
        src={group34}
      />
    </div>
  );
};

export default FrameComponent2;
