import { FunctionComponent } from "react";

export type AddProductPhotoType = {
  className?: string;
  add?: string;
};

const AddProductPhoto: FunctionComponent<AddProductPhotoType> = ({
  className = "",
  add,
}) => {
  return (
    <div
      className={`w-[117px] rounded-4xs bg-springgreen flex flex-row items-end justify-start pt-[100px] pb-[7px] pl-[18px] pr-0.5 box-border text-center text-mini text-black font-instrument-sans ${className}`}
    >
      <div className="h-[129px] w-[117px] relative rounded-4xs bg-springgreen hidden" />
      <img
        className="h-[22px] w-[19px] relative object-cover z-[2]"
        loading="lazy"
        alt=""
        src={add}
      />
      <div className="flex-1 relative tracking-[-0.08em] font-semibold z-[1]">
        Add Photo
      </div>
    </div>
  );
};

export default AddProductPhoto;
