import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type DarkThemeType = {
  className?: string;
};

const DarkTheme: FunctionComponent<DarkThemeType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignInButtonClick = useCallback(() => {
    navigate("/landing-page-user-auth-complete");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/brand-dashboad");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start pt-0 pb-[66px] px-0 box-border gap-[76px] max-w-full text-center text-21xl text-white font-instrument-sans mq900:gap-[38px] mq450:gap-[19px] mq1650:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[17px] box-border top-[0] z-[99] sticky max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start shrink-0 max-w-full">
          <div className="self-stretch bg-gray-600 flex flex-row items-start justify-between py-0 pl-[37px] pr-[66px] box-border max-w-full gap-5 z-[2] mq900:pr-[33px] mq900:box-border">
            <div className="self-stretch w-[1728px] relative bg-gray-600 hidden max-w-full" />
            <div className="w-[194px] bg-gray-600 flex flex-row items-end justify-start pt-[25px] px-[13px] pb-[30px] box-border gap-[3.5px] z-[1]">
              <div className="h-[92px] w-[194px] relative bg-gray-600 hidden" />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.5px]">
                <img
                  className="w-[24.3px] h-4 relative rounded-8xs z-[1]"
                  alt=""
                  src="/logo-star.svg"
                />
              </div>
              <div className="w-[136px] flex flex-row items-start justify-start relative">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.08em] leading-[37px] font-semibold font-[inherit] z-[1] mq900:text-13xl mq900:leading-[30px] mq450:text-5xl mq450:leading-[22px]">
                  shopray
                </h1>
                <img
                  className="h-[9px] w-[8.6px] absolute !m-[0] top-[8px] left-[-7px] rounded-12xs-2 object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
              </div>
            </div>
            <div className="w-[282px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border text-mini text-black">
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
                <div className="h-[46px] flex-1 relative">
                  <div
                    className="absolute top-[0px] left-[0px] rounded-6xl bg-springgreen w-full h-full cursor-pointer z-[1]"
                    onClick={onSignInButtonClick}
                  />
                  <h2 className="m-0 absolute top-[14px] left-[21px] text-inherit tracking-[-0.05em] font-semibold font-[inherit] flex items-center justify-center w-[117px] h-[19px] z-[2]">
                    Create Account
                  </h2>
                </div>
                <div className="h-[46px] w-[110px] relative text-white">
                  <div
                    className="absolute top-[0px] left-[0px] rounded-6xl bg-gray-600 border-gainsboro border-[0.6px] border-solid box-border w-full h-full cursor-pointer z-[1]"
                    onClick={onRectangleClick}
                  />
                  <h2 className="m-0 absolute top-[14px] left-[20px] text-inherit tracking-[-0.05em] font-semibold font-[inherit] flex items-center justify-center w-[72px] h-[19px] z-[2]">
                    Sign In
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <header className="bg-springgreen flex flex-row items-start justify-start py-2.5 px-[588px] box-border max-w-full z-[1] text-center text-mini text-black font-instrument-sans mq900:pl-[294px] mq900:pr-[294px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1650:hidden">
            <div className="h-[35px] w-[1728px] relative bg-springgreen hidden max-w-full" />
            <h2 className="m-0 w-[553px] relative text-inherit tracking-[-0.05em] leading-[15px] font-semibold font-[inherit] flex items-center justify-center shrink-0 max-w-full z-[1]">
              Advertising toolset are on the way! Let’s grow your business
              today.
            </h2>
          </header>
        </div>
      </div>
      <div className="w-[1728px] bg-springgreen flex flex-row items-start justify-start py-2.5 pl-[588px] pr-[587px] box-border shrink-0 max-w-full text-mini text-black mq900:pl-[294px] mq900:pr-[293px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[35px] w-[1728px] relative bg-springgreen hidden max-w-full" />
        <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.05em] leading-[15px] font-semibold font-[inherit] inline-block max-w-full z-[1]">
          Advertising toolset are on the way! Let’s grow your business today.
        </h2>
      </div>
    </section>
  );
};

export default DarkTheme;
