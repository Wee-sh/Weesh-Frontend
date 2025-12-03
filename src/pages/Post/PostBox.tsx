import React from "react";
import arrow from "../../assets/Icon/arrow.svg";

const PostBox = () => {
  return (
    <div className="w-screen min-h-screen bg-[#452F11] ">
      <div className="w-full flex justify-center items-center pt-11 relative">
        <h1
          style={{
            textShadow:
              "-1px 0px #976621, 0px 1px #976621, 1px 0px #976621, 0px -1px #976621",
          }}
          className="text-2xl text-[#FBB75F]"
        >
          {"김소희"}의 트리
        </h1>

        <img src={arrow} className="absolute left-4" />
      </div>

      <div></div>
    </div>
  );
};

export default PostBox;
