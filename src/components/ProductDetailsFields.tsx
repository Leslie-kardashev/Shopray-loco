import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ProductDetailsFieldsType = {
  className?: string;
  productPhotos?: string;
  info?: string;
  add?: string;
  add1?: string;
  add2?: string;
  info1?: string;
  add3?: string;
  add4?: string;
  add5?: string;

  /** Style props */
  productPhotosInputContainerWidth?: CSSProperties["width"];
  productPhotosDisplay?: CSSProperties["display"];
  productPhotosMinWidth?: CSSProperties["minWidth"];
};

const ProductDetailsFields: FunctionComponent<ProductDetailsFieldsType> = ({
  className = "",
  productPhotosInputContainerWidth,
  productPhotos,
  productPhotosDisplay,
  productPhotosMinWidth,
  info,
  add,
  add1,
  add2,
  info1,
  add3,
  add4,
  add5,
}) => {
  const productPhotosInputContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: productPhotosInputContainerWidth,
    };
  }, [productPhotosInputContainerWidth]);

  const productPhotosStyle: CSSProperties = useMemo(() => {
    return {
      display: productPhotosDisplay,
      minWidth: productPhotosMinWidth,
    };
  }, [productPhotosDisplay, productPhotosMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[22px] text-center text-mini text-white font-instrument-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-start gap-[13px] mq900:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[100px]">
          <div
            className="flex flex-row items-end justify-start gap-3"
            style={productPhotosInputContainerStyle}
          >
            <div
              className="flex-1 relative tracking-[-0.08em] font-semibold inline-block min-w-[102px]"
              style={productPhotosStyle}
            >
              {productPhotos}
            </div>
            <img
              className="h-[21px] w-[15px] relative object-cover"
              loading="lazy"
              alt=""
              src={info}
            />
          </div>
          <div className="self-stretch rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px]">
            <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
            <img
              className="h-[39px] w-[34px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src={add}
            />
          </div>
        </div>
        <div className="flex-[0.2556] rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px] box-border min-w-[34px] mq900:flex-1">
          <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
          <img
            className="h-[39px] w-[34px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={add1}
          />
        </div>
        <div className="flex-[0.2556] rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px] box-border min-w-[34px] mq900:flex-1">
          <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
          <img
            className="h-[39px] w-[34px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={add2}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-center gap-[3px] mq900:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[107px]">
          <div className="self-stretch flex flex-row items-end justify-start gap-1">
            <div className="flex-1 relative tracking-[-0.08em] font-semibold">
              Owner Ghana Card
            </div>
            <img
              className="h-[21px] w-[15px] relative object-cover"
              alt=""
              src={info1}
            />
          </div>
          <div className="rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px]">
            <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
            <img
              className="h-[39px] w-[34px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src={add3}
            />
          </div>
        </div>
        <div className="flex-[0.9301] flex flex-col items-start justify-start py-0 pl-0 pr-2.5 box-border min-w-[107px] mq900:flex-1">
          <div className="self-stretch rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px]">
            <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
            <img
              className="h-[39px] w-[34px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src={add4}
            />
          </div>
        </div>
        <div className="flex-[0.2556] rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px] box-border min-w-[34px] mq900:flex-1">
          <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
          <img
            className="h-[39px] w-[34px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={add5}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsFields;
