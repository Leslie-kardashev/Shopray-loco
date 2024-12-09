import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onUserTypeOptionBackgroundClick = useCallback(() => {
    navigate("/brand-auth-complete");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/seller-auth-complete");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[25px] pr-5 box-border max-w-full text-center text-21xl text-white font-instrument-sans ${className}`}
    >
      <div className="w-[541px] flex flex-col items-end justify-start gap-[71px] max-w-full mq900:gap-[18px] mq450:gap-[35px]">
        <div className="w-[486px] flex flex-row items-start justify-end py-0 pl-7 pr-[29px] box-border max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] inline-block max-w-full mq900:text-5xl mq450:text-13xl">
            Create Account
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[21px] max-w-full text-5xl">
          <div className="self-stretch flex flex-row items-end justify-between gap-5">
            <div className="w-[221px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
              <div className="self-stretch relative tracking-[-0.08em] font-semibold mq900:text-lgi">{`Register as `}</div>
            </div>
            <img
              className="h-5 w-[26px] relative object-cover"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-[486px] flex flex-row items-start justify-end py-0 px-1 box-border max-w-full text-left">
            <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
              <div className="self-stretch flex flex-row items-end justify-between pt-[27px] pb-7 pl-[19px] pr-[22px] relative gap-5">
                <div
                  className="h-full w-full absolute !m-[0] top-[0px] right-[-4px] bottom-[-4px] left-[0px] rounded-sm bg-darkslategray-300 border-springgreen border-[2px] border-dashed box-border cursor-pointer"
                  onClick={onUserTypeOptionBackgroundClick}
                />
                <div className="w-[191px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <div className="self-stretch relative tracking-[-0.08em] font-semibold z-[1] mq900:text-lgi">
                    Brand / Supplier
                  </div>
                </div>
                <img
                  className="h-[31px] w-7 relative object-cover z-[1]"
                  alt=""
                />
              </div>
              <div className="self-stretch flex flex-row items-end justify-between pt-[27px] pb-7 pl-[19px] pr-[22px] relative gap-5">
                <div
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm bg-darkslategray-300 cursor-pointer"
                  onClick={onRectangleClick}
                />
                <input
                  className="w-[246px] [border:none] [outline:none] bg-[transparent] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border font-instrument-sans font-semibold text-5xl text-white"
                  placeholder="Retail  / Wholesale Shop "
                  type="text"
                />
                <img
                  className="h-[31px] w-7 relative object-cover z-[1]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
