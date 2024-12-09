import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  sellerIcon?: string;
  connectWithVerifiedSellers?: string;

  /** Style props */
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth?: CSSProperties["width"];
  sellerIconWidth?: CSSProperties["width"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  groupDivLeft,
  groupDivWidth,
  sellerIcon,
  sellerIconWidth,
  connectWithVerifiedSellers,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: groupDivLeft,
      width: groupDivWidth,
    };
  }, [groupDivLeft, groupDivWidth]);

  const sellerIconStyle: CSSProperties = useMemo(() => {
    return {
      width: sellerIconWidth,
    };
  }, [sellerIconWidth]);

  return (
    <div
      className={`absolute top-[720px] left-[252px] rounded-lg bg-gray-600 border-darkslategray-300 border-[1px] border-solid box-border w-[570.9px] h-[339px] text-left text-sm text-white font-instrument-sans ${className}`}
      style={groupDiv2Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gray-600 border-darkslategray-300 border-[1px] border-solid box-border w-full h-full hidden" />
      <img
        className="absolute top-[237px] left-[2.1px] w-[565.7px] h-[3px] z-[1]"
        alt=""
        src={sellerIcon}
        style={sellerIconStyle}
      />
      <h2 className="m-0 absolute top-[255px] left-[10px] text-inherit tracking-[-0.05em] font-medium font-[inherit] inline-block w-[249px] h-[66px] z-[2]">
        {connectWithVerifiedSellers}
      </h2>
    </div>
  );
};

export default GroupComponent;
