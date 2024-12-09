import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BrandFieldsContainerType = {
  className?: string;
  createBrandProfile?: string;
  info?: string;
  info1?: string;
  info2?: string;
  add?: string;

  /** Style props */
  brandFieldRowGap?: CSSProperties["gap"];
  createBrandProfileMinWidth?: CSSProperties["minWidth"];
  brandOwnershipOptionsWidth?: CSSProperties["width"];
  brandOwnershipOptionsFlex?: CSSProperties["flex"];
  brandOwnershipOptionsMinWidth?: CSSProperties["minWidth"];
  legalCompanyNameContainerJustifyContent?: CSSProperties["justifyContent"];
  legalCompanyNameContainerGap?: CSSProperties["gap"];
  legalCompanyNameFlex?: CSSProperties["flex"];
  legalCompanyNameDisplay?: CSSProperties["display"];
  legalCompanyNameMinWidth?: CSSProperties["minWidth"];
};

const BrandFieldsContainer: FunctionComponent<BrandFieldsContainerType> = ({
  className = "",
  brandFieldRowGap,
  createBrandProfile,
  createBrandProfileMinWidth,
  brandOwnershipOptionsWidth,
  brandOwnershipOptionsFlex,
  brandOwnershipOptionsMinWidth,
  info,
  legalCompanyNameContainerJustifyContent,
  legalCompanyNameContainerGap,
  legalCompanyNameFlex,
  legalCompanyNameDisplay,
  legalCompanyNameMinWidth,
  info1,
  info2,
  add,
}) => {
  const brandFieldRowStyle: CSSProperties = useMemo(() => {
    return {
      gap: brandFieldRowGap,
    };
  }, [brandFieldRowGap]);

  const createBrandProfileStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: createBrandProfileMinWidth,
    };
  }, [createBrandProfileMinWidth]);

  const brandOwnershipOptionsStyle: CSSProperties = useMemo(() => {
    return {
      width: brandOwnershipOptionsWidth,
      flex: brandOwnershipOptionsFlex,
      minWidth: brandOwnershipOptionsMinWidth,
    };
  }, [
    brandOwnershipOptionsWidth,
    brandOwnershipOptionsFlex,
    brandOwnershipOptionsMinWidth,
  ]);

  const legalCompanyNameContainerStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: legalCompanyNameContainerJustifyContent,
      gap: legalCompanyNameContainerGap,
    };
  }, [legalCompanyNameContainerJustifyContent, legalCompanyNameContainerGap]);

  const legalCompanyNameStyle: CSSProperties = useMemo(() => {
    return {
      flex: legalCompanyNameFlex,
      display: legalCompanyNameDisplay,
      minWidth: legalCompanyNameMinWidth,
    };
  }, [legalCompanyNameFlex, legalCompanyNameDisplay, legalCompanyNameMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-center text-29xl text-white font-instrument-sans mq900:gap-5 ${className}`}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start gap-[53px] max-w-full mq900:gap-[26px] mq450:flex-wrap"
        style={brandFieldRowStyle}
      >
        <h1
          className="m-0 flex-1 relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] inline-block min-w-[279px] max-w-full mq900:text-10xl mq450:text-19xl"
          style={createBrandProfileStyle}
        >
          {createBrandProfile}
        </h1>
        <div
          className="w-[378px] rounded-2xs bg-gray-300 flex flex-row items-start justify-center py-0 pl-0 pr-2.5 box-border gap-[11px] max-w-full text-mini text-black mq900:flex-wrap mq900:pl-2.5 mq900:pt-2.5 mq900:pb-2.5 mq900:box-border"
          style={brandOwnershipOptionsStyle}
        >
          <div className="self-stretch w-[378px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
          <div className="flex-1 rounded-4xs bg-springgreen flex flex-row items-start justify-start pt-[9px] px-5 pb-[19px] box-border min-w-[120px] z-[1]">
            <div className="h-[46px] w-[184px] relative rounded-4xs bg-springgreen hidden" />
            <div className="flex-1 relative tracking-[-0.08em] font-semibold z-[2]">
              Ghanaian Owned
            </div>
          </div>
          <div className="w-[147px] flex flex-col items-start justify-start pt-[9px] pb-0 pl-0 pr-1 box-border text-silver">
            <div className="self-stretch relative tracking-[-0.08em] font-semibold z-[1]">
              Foreign Owned
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-[15px] h-[21px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src={info}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full text-mini text-silver mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border min-w-[286px] max-w-full">
          <div
            className="self-stretch rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-[13px] pl-5 pr-3.5 box-border max-w-full gap-5"
            style={legalCompanyNameContainerStyle}
          >
            <div className="h-[46px] w-[433px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
            <div
              className="relative tracking-[-0.08em] font-semibold z-[1]"
              style={legalCompanyNameStyle}
            >
              Legal Company Name
            </div>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-[15px] h-[21px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src={info1}
              />
            </div>
          </div>
        </div>
        <div className="w-72 rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-[13px] pl-1.5 pr-[9px] box-border gap-5">
          <div className="h-[46px] w-72 relative rounded-2xs bg-gray-300 hidden" />
          <div className="w-28 relative tracking-[-0.08em] font-semibold flex items-center justify-center shrink-0 z-[1]">
            Owner Name
          </div>
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-[15px] h-[21px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src={info2}
            />
          </div>
        </div>
        <div className="rounded-4xs bg-springgreen flex flex-row items-start justify-start py-3 pl-3 pr-[9px] text-black">
          <div className="h-[46px] w-[117px] relative rounded-4xs bg-springgreen hidden" />
          <img
            className="h-[22px] w-[19px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src={add}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="self-stretch relative tracking-[-0.08em] font-semibold inline-block min-w-[78px] z-[1]">
              Add Owner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFieldsContainer;
