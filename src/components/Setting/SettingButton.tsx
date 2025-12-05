import React from "react";
import arrow_right from "../../assets/Icon/arrow-right.svg";

interface Prop {
  buttonName: string;
  buttonType: string;
  onClick: () => void;
}

const SettingButton = ({ buttonName, buttonType, onClick }: Prop) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-12 bg-[#FBB75F] border-2 border-[#976621] rounded-2xl px-3 flex justify-between items-center mb-[14px]"
    >
      <div className="text-xl text-[#452F11] flex flex-row gap-[6px] items-center">
        <h1 className="">{buttonName}</h1>
        {buttonType == "nameChange" && (
          <div className="flex flex-col text-[10px] leading-[11px]">
            (최대 1회한도, 실명으로 변경하기 위한 것이니,
            <br />
            다른 이유로는 변경을 지양해주세요! 또한 실명이 아닐 시 상품
            지급불가)
          </div>
        )}
      </div>
      <img src={arrow_right} />
    </div>
  );
};

export default SettingButton;
