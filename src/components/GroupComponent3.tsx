import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponent3Type = {
  className?: string;
  vector1?: string;
  starIcon?: string;

  /** Style props */
  shoprayTextDecoration?: CSSProperties["textDecoration"];
  shoprayMargin?: CSSProperties["margin"];
  cancelTextDecoration?: CSSProperties["textDecoration"];
  cancelMargin?: CSSProperties["margin"];
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
  vector1,
  shoprayTextDecoration,
  shoprayMargin,
  starIcon,
  cancelTextDecoration,
  cancelMargin,
}) => {
  const shoprayStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: shoprayTextDecoration,
      margin: shoprayMargin,
    };
  }, [shoprayTextDecoration, shoprayMargin]);

  const cancelStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: cancelTextDecoration,
      margin: cancelMargin,
    };
  }, [cancelTextDecoration, cancelMargin]);

  return (
    <header
      className={`self-stretch bg-gray-600 flex flex-row items-start justify-between py-0 pl-[37px] pr-12 box-border top-[0] z-[99] sticky max-w-full gap-5 text-center text-21xl text-white font-instrument-sans mq450:pr-6 mq450:box-border ${className}`}
    >
      <div className="self-stretch w-[1728px] relative bg-gray-600 hidden max-w-full" />
      <div className="w-[194px] bg-gray-600 flex flex-row items-end justify-start pt-[25px] px-[13px] pb-[30px] box-border gap-[3.5px] z-[1]">
        <div className="h-[92px] w-[194px] relative bg-gray-600 hidden" />
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.5px]">
          <img
            className="w-[24.3px] h-4 relative rounded-8xs z-[1]"
            alt=""
            src={vector1}
          />
        </div>
        <div className="w-[136px] flex flex-row items-start justify-start relative">
          <a
            className="[text-decoration:none] flex-1 relative tracking-[-0.08em] leading-[37px] font-semibold text-[inherit] z-[1]"
            style={shoprayStyle}
          >
            shopray
          </a>
          <img
            className="h-[9px] w-[8.6px] absolute !m-[0] top-[8px] left-[-7px] rounded-12xs-2 object-contain z-[2]"
            loading="lazy"
            alt=""
            src={starIcon}
          />
        </div>
      </div>
      <div className="w-[197px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border text-5xl text-red-100">
        <div className="self-stretch rounded-md bg-red-200 flex flex-row items-start justify-start pt-[9px] pb-0 pl-8 pr-[31px] z-[2]">
          <div className="h-[39px] w-[197px] relative rounded-md bg-red-200 hidden" />
          <a
            className="[text-decoration:none] flex-1 relative tracking-[-0.08em] font-semibold text-[inherit] z-[3]"
            style={cancelStyle}
          >
            cancel
          </a>
        </div>
      </div>
    </header>
  );
};

export default GroupComponent3;
