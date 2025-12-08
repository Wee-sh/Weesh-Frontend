import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import ModalToggle from "./ModalToggle";

interface Props {
  fromUserName: string;
  toUserName: string;
  content: string;
}

const PostModal = ({ fromUserName, toUserName, content }: Props) => {
  return (
    <div className="w-[360px] h-[640px] bg-[#FDD293] border-[3px] border-[#976621] rounded-2xl py-5 px-4">
      <div className="w-fit h-[38px] mb-[10px] flex items-start text-xl pb-6 bg-repeat-x bg-bottom bg-[url('/src/assets/decoration/scribble.svg')]">
        TO. {toUserName}에게
      </div>

      <div className="w-full h-[378px] text-xl text-[#3E2A0E] leading-[41px] mt-4 bg-no-repeat bg-[url('/src/assets/decoration/scribble.svg')]">
        {content}
      </div>

      <div className="w-full flex flex-col items-end">
        <div className="w-fit h-[38px] mb-[10px] flex items-start text-xl pb-6 bg-repeat-x bg-bottom bg-[url('/src/assets/decoration/scribble.svg')]">
          from. {fromUserName}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
