import { useState } from "react";
import SubmitButton from "./SubmitButton";

interface Props {
  currentName?: string;
  onConfirm: (newName: string) => void;
}

const NameChangeModalContent = ({ currentName = "", onConfirm }: Props) => {
  const [name, setName] = useState(currentName);

  return (
    <div className="w-[360px] bg-[#FDD293] border-[3px] border-[#976621] rounded-2xl py-5 px-4">
      <h2 className="text-xl text-black mb-[10px] leading-[22px]">이름 변경</h2>

      <div className="w-full h-[58px] bg-[#DDB276] rounded-xl py-3 relative">
        {!name && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-3">
            <p className="text-[#856333] leading-[18px] text-sm text-left">
              꼭 본인의 실명으로만 변경해주세요. <br />
              현재 본인의 실명일 경우 변경 안해도 됩니다!
            </p>
          </div>
        )}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-full bg-transparent text-center text-3xl text-black outline-none"
        />
      </div>

      {name && (
        <SubmitButton onHandle={() => onConfirm(name)} buttonTitle="변경" />
      )}
    </div>
  );
};

export default NameChangeModalContent;
