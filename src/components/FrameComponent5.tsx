import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[1132px] relative text-left text-sm text-white font-instrument-sans ${className}`}
    >
      <GroupComponent
        sellerIcon="/seller-icon.svg"
        connectWithVerifiedSellers="Connect with verified sellers nationwide, locate various product offerings and pick one that suits your need."
      />
      <GroupComponent
        groupDivLeft="845px"
        groupDivWidth="566px"
        sellerIcon="/vector-9.svg"
        sellerIconWidth="560.8px"
        connectWithVerifiedSellers="Boost your sales with our powerful customer leads tool, seamlessly connect with ready customers anytime."
      />
      <div className="absolute top-[0px] left-[-375px] w-[2689px] h-[1007.7px] z-[3] text-29xl">
        <img
          className="absolute top-[682px] left-[627px] rounded-2xs w-[1164.5px] h-[3px]"
          alt=""
          src="/vector-5.svg"
        />
        <div className="absolute top-[662px] left-[1057px] rounded-20xl bg-gray-600 w-[304px] h-10 z-[1] text-center text-base text-gray-200">
          <div className="absolute top-[0px] left-[0px] rounded-20xl bg-gray-600 w-full h-full hidden" />
          <h1 className="m-0 absolute top-[5px] left-[10px] text-inherit tracking-[-0.05em] font-semibold font-[inherit] flex items-center justify-center w-[286px] h-[30px] z-[1]">
            What can we help you with today!
          </h1>
        </div>
        <h1 className="m-0 absolute top-[917px] left-[637px] text-xl tracking-[-0.05em] font-semibold font-[inherit] flex items-center w-[188px] h-[25px] z-[2] mq450:text-base">{`Find Retail Shop `}</h1>
        <h1 className="m-0 absolute top-[917px] left-[1232px] text-xl tracking-[-0.05em] font-semibold font-[inherit] flex items-center w-[239px] h-[25px] z-[2] mq450:text-base">{`Get Expert Consultancy `}</h1>
        <h1 className="m-0 absolute top-[158px] left-[465px] text-inherit tracking-[-0.05em] font-bold font-[inherit] inline-block w-[482px] h-[130px] mq900:text-19xl mq450:text-10xl">
          60k verified Retail Shops Nationwide
        </h1>
        <b className="absolute top-[158px] left-[923px] tracking-[-0.05em] inline-block w-[304px] h-[130px] z-[1] mq900:text-19xl mq450:text-10xl">{`1000 active user `}</b>
        <h1 className="m-0 absolute top-[158px] left-[1270px] text-inherit tracking-[-0.05em] font-bold font-[inherit] inline-block w-[305px] h-[118px] mq900:text-19xl mq450:text-10xl">{`300 product categories `}</h1>
        <h1 className="m-0 absolute top-[158px] left-[1617px] text-inherit tracking-[-0.05em] font-bold font-[inherit] inline-block w-[429px] h-[118px] mq900:text-19xl mq450:text-10xl">
          100 Expert Business consultant
        </h1>
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[1176px] object-contain"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[521px] max-h-full w-[1176px] object-contain z-[1]"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[995px] max-h-full w-[1176px] object-contain z-[2]"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[1513px] max-h-full w-[1176px] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent5;
