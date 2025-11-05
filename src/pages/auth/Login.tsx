import weesh_letter from "../../assets/decoration/weesh-letter.png";
import KakaoOauthButton from "../../components/auth/KakaoOauthButton";
import insta_icon from "../../assets/Icon/insta_icon.svg";

const Login = () => {
  return (
    <div className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/background/weesh-login-bg.png')]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
      <div className="relative w-full h-screen flex flex-col items-center">
        <img src={weesh_letter} className="mt-[138px]" />
        <span className="w-10 h-[408px] bg-slate-300 break-all">
          트리? 입니다 ㅎㅎ ..
        </span>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-white mb-[38px]">
            Wee-sh You a Merry Christmas
          </h1>
          <KakaoOauthButton />
          <div className="w-full flex flex-col gap-[14px] pt-[14px] items-start border-t border-t-[#616161] mt-[25px]">
            <img src={insta_icon} className="w-5 h-5" />
            <span className="text-[10px] text-[#9D9D9D] font-pretendard">
              대덕소프트웨어 마이스터 고등학교 <br /> 또래상담부 - wee-sh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
