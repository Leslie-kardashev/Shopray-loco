import { FunctionComponent } from "react";
import GroupComponent3 from "../components/GroupComponent3";
import BrandFieldsContainer from "../components/BrandFieldsContainer";
import ProductDetailsFields from "../components/ProductDetailsFields";
import AddProductPhoto from "../components/AddProductPhoto";
import FrameComponent1 from "../components/FrameComponent1";

const SellerAuthComplete: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-600 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[29px] box-border gap-[133px] leading-[normal] tracking-[normal] text-left text-sm text-white font-instrument-sans mq900:gap-[33px] mq450:gap-[66px]">
      <div className="w-1.5 h-3.5 relative overflow-hidden shrink-0 hidden" />
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[76px] max-w-full mq900:gap-[19px] mq450:gap-[38px] mq1650:flex-wrap">
        <section className="w-[1728px] flex flex-col items-end justify-start gap-20 shrink-0 max-w-full text-center text-mini text-silver font-instrument-sans mq900:gap-5 mq450:gap-10">
          <GroupComponent3
            vector1="pending_65:657"
            shoprayTextDecoration="unset"
            shoprayMargin="0"
            starIcon="pending_65:658"
            cancelTextDecoration="unset"
            cancelMargin="0"
          />
          <div className="w-[1654px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[880px] flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="w-[863px] flex flex-col items-start justify-start gap-[9px] max-w-full">
                <BrandFieldsContainer
                  brandFieldRowGap="105px"
                  createBrandProfile="Create Seller Profile"
                  createBrandProfileMinWidth="245px"
                  brandOwnershipOptionsWidth="unset"
                  brandOwnershipOptionsFlex="0.9735"
                  brandOwnershipOptionsMinWidth="246px"
                  info="pending_65:683"
                  legalCompanyNameContainerJustifyContent="flex-start"
                  legalCompanyNameContainerGap="241px"
                  legalCompanyNameFlex="1"
                  legalCompanyNameDisplay="inline-block"
                  legalCompanyNameMinWidth="93px"
                  info1="pending_65:677"
                  info2="pending_65:684"
                  add="pending_65:694"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full mq450:flex-wrap">
                    <div className="w-[349px] rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-2.5 pl-5 pr-3 box-border max-w-full gap-5">
                      <div className="h-[46px] w-[349px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                      <div className="w-[135px] flex flex-row items-start justify-start gap-[5px]">
                        <img
                          className="h-[27px] w-[27px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                        />
                        <div className="flex-1 relative tracking-[-0.08em] font-semibold whitespace-pre-wrap z-[1]">
                          Owner contact
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-[15px] h-[21px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2 text-black">
                      <div className="self-stretch rounded-4xs bg-springgreen flex flex-row items-start justify-start py-3 pl-3 pr-2.5">
                        <div className="h-[46px] w-[122px] relative rounded-4xs bg-springgreen hidden" />
                        <img
                          className="h-[22px] w-[19px] relative object-cover z-[2]"
                          loading="lazy"
                          alt=""
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="self-stretch relative tracking-[-0.08em] font-semibold inline-block min-w-[82px] z-[1]">
                            Add Contact
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xs bg-gray-300 flex flex-row items-start justify-between pt-[9px] pb-[13px] pl-4 pr-[15px] box-border min-w-[142px] max-w-full gap-5">
                      <div className="h-[46px] w-[366px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                      <div className="w-[127px] relative tracking-[-0.08em] font-semibold flex items-center justify-center shrink-0 z-[1]">
                        Shop Casual Name
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-[15px] h-[21px] relative object-cover z-[1]"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-72 rounded-2xs bg-gray-300 flex flex-row items-start justify-start pt-1.5 pb-[7px] pl-4 pr-[9px] box-border gap-[19px]">
                    <div className="h-[46px] w-72 relative rounded-2xs bg-gray-300 hidden" />
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                        <div className="flex-1 relative tracking-[-0.08em] font-semibold inline-block min-w-[81px] z-[1]">
                          Active Since
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
                    <div className="flex-1 rounded-md bg-springgreen flex flex-row items-start justify-start pt-[7px] px-[27px] pb-1.5 z-[1] text-black">
                      <div className="h-[33px] w-36 relative rounded-md bg-springgreen hidden" />
                      <div className="flex-1 relative tracking-[-0.08em] font-semibold z-[2]">
                        Year
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-center gap-0.5 max-w-full text-white mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border gap-[33px] min-w-[283px] max-w-full text-silver mq900:gap-4">
                    <div className="self-stretch rounded-2xs bg-gray-300 flex flex-row items-start justify-between py-0 pl-5 pr-0 box-border max-w-full gap-5 mq900:flex-wrap mq900:pr-5 mq900:pb-5 mq900:box-border">
                      <div className="self-stretch w-[433px] relative rounded-2xs bg-gray-300 hidden max-w-full" />
                      <div className="w-[113px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                        <div className="self-stretch relative tracking-[-0.08em] font-semibold z-[1]">
                          What do you Sell
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
                    <ProductDetailsFields
                      productPhotosInputContainerWidth="128px"
                      productPhotos="Shop  Photos"
                      productPhotosDisplay="unset"
                      productPhotosMinWidth="unset"
                      info="pending_65:680"
                      add="pending_65:715"
                      add1="pending_65:717"
                      add2="pending_65:719"
                      info1="pending_65:681"
                      add3="pending_65:716"
                      add4="pending_65:718"
                      add5="pending_65:720"
                    />
                  </div>
                  <div className="flex flex-col items-end justify-start gap-[77px]">
                    <div className="w-[121px] rounded-10xs bg-darkslategray-200 flex flex-row items-start justify-start py-2 pl-[17px] pr-4 box-border">
                      <div className="h-[33px] w-[121px] relative rounded-10xs bg-darkslategray-200 hidden" />
                      <div className="flex-1 relative tracking-[-0.08em] font-semibold z-[1]">
                        Yogurt
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[11px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[52px]">
                        <div className="self-stretch rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px]">
                          <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
                          <img
                            className="h-[39px] w-[34px] relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <AddProductPhoto add="pending_65:695" />
                      </div>
                    </div>
                  </div>
                  <div className="h-[420px] flex flex-col items-start justify-start py-0 pl-0 pr-[11px] box-border">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[77px]">
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[7px] pr-[5px]">
                        <div className="flex-1 rounded-10xs bg-darkslategray-200 flex flex-row items-start justify-start py-2 pl-[17px] pr-4">
                          <div className="h-[33px] w-[121px] relative rounded-10xs bg-darkslategray-200 hidden" />
                          <div className="flex-1 relative tracking-[-0.08em] font-semibold z-[1]">
                            Saasuges
                          </div>
                        </div>
                      </div>
                      <div className="rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[51px] pr-12">
                        <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
                        <img
                          className="h-[39px] w-[34px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[310px] flex flex-col items-start justify-start">
                    <div className="rounded-10xs bg-gray-300 flex flex-row items-start justify-start py-[45px] pl-[50px] pr-[49px]">
                      <div className="h-[129px] w-[133px] relative rounded-10xs bg-gray-300 hidden" />
                      <img
                        className="h-[39px] w-[34px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-6xs bg-springgreen flex flex-row items-start justify-start py-3 pl-[368px] pr-[341px] box-border max-w-full text-5xl text-black mq900:pl-5 mq900:pr-5 mq900:box-border mq1275:pl-[184px] mq1275:pr-[170px] mq1275:box-border">
                <div className="h-[52px] w-[880px] relative rounded-6xs bg-springgreen hidden max-w-full" />
                <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.08em] font-semibold font-[inherit] z-[1] mq900:text-lgi">
                  Validate Seller
                </h2>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent1 advertisingToolsetAreMargin="unset" />
      </main>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[30px] pr-[29px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq900:flex-wrap">
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

export default SellerAuthComplete;
