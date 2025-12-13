import React from "react";

interface Props {
  buttonTitle: string;
  onHandle: () => void;
}

const SubmitButton = ({ buttonTitle, onHandle }: Props) => {
  return (
    <button
      onClick={onHandle}
      className="w-full bg-[#3E2A0E] text-white py-3 rounded-xl text-xs mt-[10px]"
    >
      {buttonTitle}
    </button>
  );
};

export default SubmitButton;
