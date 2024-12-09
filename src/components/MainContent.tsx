import { FunctionComponent } from "react";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[396px] box-border max-w-full text-center text-mini text-white font-instrument-sans mq900:pb-[257px] mq900:box-border ${className}`}
    >
      <div className="w-[1296px] flex flex-col items-end justify-start gap-[19px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="w-[1276px] flex flex-row items-start justify-start py-0 px-[518px] box-border max-w-full mq900:pl-[129px] mq900:pr-[129px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pl-[259px] mq1275:pr-[259px] mq1275:box-border">
            <div className="flex-1 rounded-15xl bg-darkslategray-300 flex flex-row items-start justify-start pt-1.5 px-[22px] pb-[5px] gap-4">
              <div className="h-[46px] w-60 relative rounded-15xl bg-darkslategray-300 hidden" />
              <img
                className="h-[35px] w-[26px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/sparkling@2x.png"
              />
              <div className="w-[145px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.05em] font-semibold font-[inherit] z-[1]">
                  Commerce Redefined
                </h2>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-71xl">
            <h1 className="m-0 h-[125px] flex-1 relative text-inherit tracking-[-0.05em] font-semibold font-[inherit] flex items-center justify-center max-w-full mq900:text-26xl mq450:text-8xl">
              Optimized toolset for commerce
            </h1>
            <img
              className="h-11 w-[375.5px] absolute !m-[0] right-[58.5px] bottom-[-1px] rounded-2xs z-[1]"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-24 box-border max-w-full text-5xl mq900:pl-6 mq900:pr-6 mq900:box-border mq1275:pl-12 mq1275:pr-12 mq1275:box-border">
          <h1 className="m-0 h-[34px] flex-1 relative text-inherit tracking-[-0.05em] font-medium font-[inherit] flex items-center justify-center max-w-full mq450:text-lgi">
            Connect with stores, sell smarter, and deliver effortlessly. With
            Shopray, linking buyers, sellers, local brands and reliable delivery
            is just the beginning.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
