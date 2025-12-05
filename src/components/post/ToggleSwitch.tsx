import { useState } from "react";

interface Props {
  selected: "sent" | "received";
  onToggle: (value: "sent" | "received") => void;
}

const ToggleSwitch = ({ selected, onToggle }: Props) => {
  return (
    <div className="relative h-[48px] bg-[#FBB75F] rounded-2xl border-2 border-[#976621] p-[6px] flex items-center">
      <div
        className={`absolute w-[172px] h-[40px] bg-[#FFD9A0] rounded-2xl border border-[#976621] transition-all duration-300 ease-in-out ${
          selected === "sent" ? "left-1" : "left-[185px]"
        }`}
      />

      <button
        onClick={() => onToggle("sent")}
        className={`relative z-10 w-[172px] h-[40px] rounded-full transition-colors duration-300 ${
          selected === "sent" ? "text-[#976621]" : "text-[#FFD9A0]"
        }`}
      >
        <span className="text-xl font-medium">내가 보낸 선물</span>
      </button>

      <div className="w-[4px]" />

      <button
        onClick={() => onToggle("received")}
        className={`relative z-10 w-[172px] h-[40px] rounded-full transition-colors duration-300 ${
          selected === "received" ? "text-[#976621]" : "text-[#FFD9A0]"
        }`}
      >
        <span className="text-xl font-medium">내가 받은 선물</span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
