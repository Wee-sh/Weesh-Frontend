import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import ModalToggle from "./ModalToggle";

interface Props {
  userId?: string;
  onSubmit: (newContent: string, isAnon: boolean) => void;
}

const WritePostModal = ({ userId, onSubmit }: Props) => {
  const [content, setContent] = useState("");
  const [anon, setAnon] = useState(true);

  return (
    <div className="w-[360px] h-[640px] bg-[#FDD293] border-[3px] border-[#976621] rounded-2xl py-5 px-4">
      <div className="w-fit h-[38px] mb-[10px] flex items-start text-xl pb-6 bg-repeat-x bg-bottom bg-[url('/src/assets/decoration/scribble.svg')]">
        TO. {userId}에게
      </div>

      <textarea
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-[420px] rounded-xl pt-3 pl-4 bg-[#DDB276] outline-none border-none text-[16px] resize-none"
      />

      <SubmitButton
        buttonTitle="보내기"
        onHandle={() => onSubmit(content, anon)}
      />

      <div className="w-full flex flex-row justify-end items-center gap-2 mt-3">
        <span className="text-[18px]">익명 {anon ? "on" : "off"}</span>
        <ModalToggle value={anon} onChange={(v) => setAnon(v)} />
      </div>
    </div>
  );
};

export default WritePostModal;
