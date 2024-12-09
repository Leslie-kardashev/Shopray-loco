import { FunctionComponent, useCallback } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import ProductDetailsFields from "../components/ProductDetailsFields";
import AddProductPhoto from "../components/AddProductPhoto";
import { useNavigate } from "react-router-dom";

const BrandAuthComplete: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLaunchButtonClick = useCallback(() => {
    navigate("/brand-dashboad");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-600 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[29px] box-border gap-[63.5px] leading-[normal] tracking-[normal] text-left text-sm text-white font-instrument-sans mq900:gap-4 mq450:gap-8">
      <div className="w-1.5 h-3.5 relative overflow-hidden shrink-0 hidden" />
      <FrameComponent7 />
      <section className="w-[1654px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-mini text-silver font-instrument-sans">
        <div className="w-[880px] flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[5px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[33px] min-w-[281px] max-w-full mq900:gap-4">
              <div className="self-stretch rounded-2xs bg-gray-300 flex flex-row items-start justify-between py-0 pl-5 pr-0 box-border max-w-full gap-5 mq900:flex-wrap mq900:pr-5 mq900:pb-5 mq900:box-border">
                <div className="self-stretch w-[433px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                <div className="w-[76px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                  <div className="self-stretch relative tracking-[-0.08em] font-semibold z-[1]">
                    Product
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-3.5 text-black">
                  <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                    <img
                      className="w-[15px] h-[21px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 rounded-4xs bg-springgreen flex flex-row items-start justify-start p-3 z-[1]">
                    <div className="h-[46px] w-[125px] relative rounded-4xs bg-springgreen hidden" />
                    <img
                      className="h-[22px] w-[19px] relative object-cover z-[3]"
                      loading="lazy"
                      alt=""
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="self-stretch relative tracking-[-0.08em] font-semibold inline-block min-w-[82px] z-[2]">
                        Add Product
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
                <ProductDetailsFields
                  productPhotos="Product Photos"
                  info="pending_65:614"
                  add="pending_65:604"
                  add1="pending_65:605"
                  add2="pending_65:607"
                  info1="pending_65:619"
                  add3="pending_65:624"
                  add4="pending_65:625"
                  add5="pending_65:626"
                />
                <div className="self-stretch rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-[13px] pl-5 pr-3.5 box-border max-w-full gap-5">
                  <div className="h-[46px] w-[433px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                  <div className="w-[211px] relative tracking-[-0.08em] font-semibold flex items-center justify-center shrink-0 z-[1]">
                    Company Website ( Optional )
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-[15px] h-[21px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[77px] min-w-[287px] max-w-full text-white mq900:gap-[38px]">
              <div className="w-[297px] flex flex-row items-start justify-start py-0 px-[23px] box-border">
                <div className="flex-1 flex flex-row items-start justify-start gap-[9px] mq450:flex-1">
                  <div className="flex-1 rounded-10xs bg-darkslategray-200 flex flex-row items-start justify-start py-2 pl-[17px] pr-4">
                    <div className="h-[33px] w-[121px] relative rounded-10xs bg-darkslategray-200 hidden" />
                    <div className="flex-1 relative tracking-[-0.08em] font-semibold z-[1]">
                      Yogurt
                    </div>
                  </div>
                  <div className="flex-1 rounded-10xs bg-darkslategray-200 flex flex-row items-start justify-start py-2 pl-[17px] pr-4">
                    <div className="h-[33px] w-[121px] relative rounded-10xs bg-darkslategray-200 hidden" />
                    <div className="flex-1 relative tracking-[-0.08em] font-semibold z-[1]">
                      Saasuges
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-silver">
                <div className="flex flex-col items-start justify-start gap-[52px] max-w-full mq900:gap-[26px]">
                  <div className="flex flex-row items-start justify-start gap-[13px] mq900:flex-wrap">
                    <div className="rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px]">
                      <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
                      <img
                        className="h-[39px] w-[34px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[51px] pr-12">
                      <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
                      <img
                        className="h-[39px] w-[34px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px]">
                      <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
                      <img
                        className="h-[39px] w-[34px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <AddProductPhoto add="pending_65:629" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-0 box-border max-w-full">
                  <div className="flex-1 rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-[13px] pl-5 pr-3.5 box-border max-w-full gap-5">
                    <div className="h-[46px] w-[433px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                    <div className="relative tracking-[-0.08em] font-semibold inline-block min-w-[112px] z-[1]">
                      Instagram Profile
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-[15px] h-[21px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[52px] relative text-5xl text-black">
            <div
              className="absolute top-[0px] left-[0px] rounded-6xs bg-springgreen w-full h-full cursor-pointer"
              onClick={onLaunchButtonClick}
            />
            <h2 className="m-0 absolute top-[12px] left-[368px] text-inherit tracking-[-0.08em] font-semibold font-[inherit] flex items-center justify-center w-[171px] h-7 z-[1] mq900:text-lgi">
              Launch Profile
            </h2>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[30px] pr-[29px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq900:flex-wrap mq900:justify-center">
          <div className="h-[17px] w-[109px] relative">
            <div className="absolute top-[0px] left-[0px] tracking-[-0.05em] leading-[14px] inline-block w-[110px] h-3.5 min-w-[110px]">
              <span className="font-medium">{`built by `}</span>
              <b>deltascale</b>
            </div>
            <div className="absolute top-[16px] left-[46px] bg-springgreen w-[57px] h-px z-[1]" />
          </div>
          <div className="w-[165px] flex flex-row items-start justify-start">
            <div className="w-[166px] relative tracking-[-0.05em] font-medium whitespace-pre-wrap inline-block shrink-0">
              Copyright Shopray 2024
            </div>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 ml-[-54px]">
              <img
                className="w-3 h-3.5 relative object-cover z-[1]"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAuthComplete;
