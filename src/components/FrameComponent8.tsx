import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onShopIconClick = useCallback(() => {
    navigate("/brand-dashboad");
  }, [navigate]);

  const onAddIconClick = useCallback(() => {
    navigate("/connect-shops");
  }, [navigate]);

  return (
    <div
      className={`rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-gray-300 flex flex-col items-end justify-start pt-9 pb-[45px] pl-[21px] pr-[26px] gap-[33px] z-[2] mq900:hidden mq900:pt-[23px] mq900:pb-[29px] mq900:box-border mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="w-[83px] h-[1117px] relative rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-gray-300 hidden" />
      <div className="w-[29.4px] h-11 relative">
        <img
          className="absolute top-[7.5px] left-[0px] rounded-8xs w-[24.3px] h-4 z-[3]"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[20.8px] rounded-12xs-2 w-[8.6px] h-[9px] object-contain z-[4]"
          loading="lazy"
          alt=""
        />
      </div>
      <img
        className="w-9 h-[33px] relative object-cover cursor-pointer z-[3]"
        loading="lazy"
        alt=""
        onClick={onShopIconClick}
      />
      <div className="flex flex-row items-start justify-end pt-0 pb-[737px] pl-1 pr-[5px] mq900:pb-[479px] mq900:box-border mq450:pb-[311px] mq450:box-border">
        <div className="flex flex-col items-end justify-start gap-[42px]">
          <div className="w-[22px] h-[27px] relative">
            <div className="absolute top-[24px] left-[1px] bg-springgreen w-[19px] h-[3px] z-[3]" />
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
              <img
                className="h-6 w-[22px] relative object-cover z-[4]"
                loading="lazy"
                alt=""
              />
              <img
                className="h-[21px] w-[26px] absolute !m-[0] bottom-[1px] left-[calc(50%_-_13px)] object-cover z-[5]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 pl-0 pr-0.5">
            <img
              className="h-[27px] w-[25px] relative object-cover cursor-pointer z-[3]"
              loading="lazy"
              alt=""
              onClick={onAddIconClick}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 pl-[7px] pr-px">
        <img
          className="h-[27px] w-7 relative object-cover z-[3]"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default FrameComponent8;
