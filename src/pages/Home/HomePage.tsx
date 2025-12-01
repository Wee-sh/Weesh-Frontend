import { useState } from "react";
import setting_cookie from "../../assets/Icon/setting-cookie.svg";
import post from "../../assets/decoration/post.svg";

const HomePage = () => {
  const [gift, setGift] = useState(0);

  const handleGift = () => {
    setGift(gift + 1);
  };

  return (
    <div className="w-screen min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('src/assets/background/weesh-home-bg.png')]">
      <div className="w-full flex justify-center items-center pt-11 relative">
        <h1
          style={{
            textShadow:
              "-1px 0px #E63A1F, 0px 1px #E63A1F, 1px 0px #E63A1F, 0px -1px #E63A1F",
          }}
          className="text-2xl text-[#62B01B]"
        >
          {"김소희"}의 트리
        </h1>

        <img src={setting_cookie} className="absolute right-4" />
      </div>

      <div className="w-full h-[25%] absolute bottom-0">
        <div
          onClick={handleGift}
          className="w-full h-full  flex justify-center relative bg-cover bg-center bg-no-repeat bg-[url('src/assets/decoration/snow.svg')]"
        >
          <img src="" className="absolute bottom-0" />
          <img src={post} className="w-16 h-14 absolute right-4 bottom-14" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
