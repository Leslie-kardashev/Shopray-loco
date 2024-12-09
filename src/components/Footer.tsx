import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[33px] pl-2.5 pr-3 box-border max-w-full text-left text-5xl text-white font-instrument-sans ${className}`}
    >
      <div className="flex-1 rounded-3xs bg-gray-500 flex flex-row items-start justify-between pt-[25px] pb-[22px] pl-[55px] pr-[21px] box-border relative max-w-full gap-5 mq1275:pl-[27px] mq1275:box-border mq1650:flex-wrap">
        <div className="h-[90px] w-[1706px] relative rounded-3xs bg-gray-500 hidden max-w-full z-[0]" />
        <img
          className="h-4 w-[24.3px] absolute !m-[0] bottom-[33.5px] left-[28px] rounded-8xs z-[1]"
          alt=""
          src="/vector-4-2.svg"
        />
        <div className="w-[260.2px] flex flex-row items-start justify-start relative text-center text-21xl">
          <h1 className="m-0 h-[37px] w-[137px] relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] flex items-center justify-center shrink-0 z-[1] mq900:text-13xl mq450:text-5xl">
            shopray
          </h1>
          <img
            className="h-[9px] w-[8.6px] absolute !m-[0] top-[8px] left-[-7px] rounded-12xs-2 object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/star-4-1.svg"
          />
        </div>
        <div className="w-[787px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center gap-[75px] max-w-full mq900:gap-[37px] mq900:flex-wrap mq450:gap-[19px]">
            <h1 className="m-0 h-[41px] relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] flex items-center min-w-[107px] z-[1] mq450:text-lgi">
              Use Cases
            </h1>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[394px] max-w-full [row-gap:20px] mq900:flex-wrap mq900:min-w-full">
              <h1 className="m-0 h-[41px] w-[164px] relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] whitespace-pre-wrap flex items-center shrink-0 z-[1] mq450:text-lgi">
                Contact Us
              </h1>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[158px]">
                <h1 className="m-0 w-[201px] h-[41px] relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] flex items-center shrink-0 z-[1] mq450:text-lgi">
                  Vendor Verification
                </h1>
              </div>
              <h1 className="m-0 h-[41px] w-[201px] relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] flex items-center shrink-0 z-[1] mq450:text-lgi">
                KYC policy
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[241px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] z-[1] mq450:text-lgi">
            Follow Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
