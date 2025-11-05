import kakao_icon from "../../assets/Icon/kakao-icon.svg";

const KakaoOauthButton = () => {
  return (
    <button className="w-[345px] h-[58px] bg-[#FBE300] active:brightness-[0.8] rounded-xl flex justify-center items-center">
      <div className="flex flex-row gap-8 items-center">
        <img src={kakao_icon} className="w-[26px] h-6" />
        <p className="font-pretendard text-[#3B1E1E]">카카오로 로그인하기</p>
      </div>
    </button>
  );
};

export default KakaoOauthButton;
