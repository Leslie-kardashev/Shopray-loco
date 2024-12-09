import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  advertisingToolsetAreMargin?: CSSProperties["margin"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  advertisingToolsetAreMargin,
}) => {
  const advertisingToolsetAreStyle: CSSProperties = useMemo(() => {
    return {
      margin: advertisingToolsetAreMargin,
    };
  }, [advertisingToolsetAreMargin]);

  return (
    <div
      className={`flex flex-col items-start justify-start pt-[109px] px-0 pb-0 box-border max-w-full text-center text-mini text-black font-instrument-sans ${className}`}
    >
      <div className="bg-springgreen flex flex-row items-start justify-start py-2.5 pl-[588px] pr-[587px] box-border shrink-0 max-w-full mq900:pl-5 mq900:pr-5 mq900:box-border mq450:pl-[294px] mq450:pr-[293px] mq450:box-border">
        <div className="h-[35px] w-[1728px] relative bg-springgreen hidden max-w-full" />
        <div
          className="w-[553px] relative tracking-[-0.05em] leading-[15px] font-semibold flex items-center justify-center shrink-0 max-w-full z-[1]"
          style={advertisingToolsetAreStyle}
        >
          Advertising toolset are on the way! Let’s grow your business today.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
