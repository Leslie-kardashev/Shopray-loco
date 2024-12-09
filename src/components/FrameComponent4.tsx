import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[177px] pr-44 box-border max-w-full text-left text-13xl text-white font-instrument-sans mq900:pl-[88px] mq900:pr-[88px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="h-[914px] flex-1 relative rounded-md bg-gray-400 max-w-full z-[5] mq450:h-auto mq450:min-h-[914]">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-400 w-full h-full hidden" />
        <h1 className="m-0 absolute top-[36px] left-[140px] text-inherit tracking-[-0.05em] font-bold font-[inherit] inline-block w-[216px] h-10 z-[1] mq900:text-7xl mq450:text-lgi">
          Retail Shops
        </h1>
        <div className="absolute top-[42px] left-[1058px] rounded-10xs bg-gray-300 w-[280px] flex flex-row items-start justify-between pt-2 pb-[7px] pl-[15px] pr-[19px] box-border gap-5 z-[1] text-xs text-gray-700">
          <div className="h-[31px] w-[280px] relative rounded-10xs bg-gray-300 hidden" />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <h3 className="m-0 w-12 relative text-inherit tracking-[-0.05em] font-medium font-[inherit] inline-block z-[2]">{`Search `}</h3>
          </div>
          <img
            className="h-4 w-3.5 relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/search@2x.png"
          />
        </div>
        <GroupComponent1
          fruit="/fruit@2x.png"
          profileIcon="/profile-icon.svg"
        />
        <GroupComponent1
          groupDivTop="143px"
          groupDivLeft="512px"
          fruit="/fruit-1@2x.png"
          profileIcon="/profile-icon.svg"
        />
        <GroupComponent1
          groupDivTop="143px"
          groupDivLeft="867px"
          fruit="/fruit-2@2x.png"
          profileIcon="/profile-icon.svg"
        />
        <GroupComponent1
          groupDivTop="411px"
          groupDivLeft="157px"
          fruit="/fruit-3@2x.png"
          profileIcon="/profile-icon.svg"
        />
        <GroupComponent1
          groupDivTop="411px"
          groupDivLeft="512px"
          fruit="/fruit-4@2x.png"
          profileIcon="/profile-icon.svg"
        />
        <GroupComponent1
          groupDivTop="411px"
          groupDivLeft="867px"
          fruit="/fruit-5@2x.png"
          profileIcon="/profile-icon.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-gray-300 w-[83px] z-[1]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-gray-300 w-full h-full hidden" />
            <img
              className="absolute top-[43.5px] left-[27.2px] rounded-8xs w-[24.3px] h-4 z-[2]"
              alt=""
              src="/logo-star.svg"
            />
            <img
              className="absolute top-[36px] left-[48px] rounded-12xs-2 w-[8.6px] h-[9px] object-contain z-[3]"
              loading="lazy"
              alt=""
              src="/star-1.svg"
            />
            <div className="absolute top-[108px] left-[21px] w-[37px] h-[41px] bg-[url('/public/shop@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                alt=""
                src="/shop@2x.png"
              />
              <div className="absolute top-[35px] left-[9px] bg-springgreen w-[19px] h-[3px] z-[3]" />
            </div>
            <img
              className="absolute top-[179px] left-[30px] w-[22px] h-6 object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/consultation@2x.png"
            />
            <img
              className="absolute top-[848px] left-[25px] w-7 h-[27px] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/settings@2x.png"
            />
            <img
              className="absolute top-[228px] left-[27px] w-[25px] h-[27px] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/add-6@2x.png"
            />
          </div>
          <img
            className="absolute top-[865px] left-[0px] w-[1375px] h-[45px] z-[3]"
            alt=""
            src="/rectangle-26.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
