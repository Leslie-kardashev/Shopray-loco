import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import GroupComponent5 from "../components/GroupComponent5";
import FrameComponent1 from "../components/FrameComponent1";

const ConnectShops: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-row items-start justify-start gap-[210px] leading-[normal] tracking-[normal] mq900:gap-[52px] mq1275:gap-[105px]">
      <div className="h-3.5 w-1.5 relative overflow-hidden shrink-0 hidden" />
      <section className="w-[1104px] flex flex-row items-start justify-start py-0 pl-0 pr-[338px] box-border gap-[91px] shrink-0 max-w-full text-left text-13xl text-white font-instrument-sans mq900:pl-5 mq900:pr-5 mq900:box-border mq450:gap-[23px] mq450:pr-[84px] mq450:box-border mq1650:gap-[45px] mq1650:pr-[169px] mq1650:box-border">
        <FrameComponent2 group34="pending_65:1869" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-[calc(100%_-_174px)] mq900:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[53px] max-w-full mq450:gap-[26px]">
            <h1 className="m-0 w-[255px] relative text-inherit tracking-[-0.05em] font-bold font-[inherit] inline-block mq900:text-lgi mq1275:text-7xl">
              You Connections
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
              <GroupComponent5
                fruit="pending_65:1501"
                vector10="pending_65:1519"
                googleMaps="pending_65:1885"
              />
              <GroupComponent5
                fruit="pending_65:1889"
                vector10="pending_65:1907"
                googleMaps="pending_65:1911"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0">
        <div className="self-stretch flex-1 rounded-10xs bg-gray-300 flex flex-row items-start justify-start pt-2 pb-[7px] pl-[15px] pr-[19px] gap-[185px] shrink-0 mq900:gap-[92px]">
          <div className="h-[31px] w-[280px] relative rounded-10xs bg-gray-300 hidden" />
          <input
            className="w-[47px] [border:none] [outline:none] bg-[transparent] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-instrument-sans font-medium text-xs text-gray-700"
            placeholder="Search "
            type="text"
          />
          <img className="h-4 w-3.5 relative object-cover z-[1]" alt="" />
        </div>
      </div>
      <FrameComponent1 advertisingToolsetAreMargin="0" />
    </div>
  );
};

export default ConnectShops;
