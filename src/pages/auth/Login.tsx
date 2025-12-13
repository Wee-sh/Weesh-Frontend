import weesh_letter from "../../assets/decoration/weesh-letter.png";
import KakaoOauthButton from "../../components/auth/KakaoOauthButton";
import insta_icon from "../../assets/Icon/insta_icon.svg";
import tree from "../../assets/decoration/image-removebg-preview-51 1.png";
import tree_halo from "../../assets/decoration/Vector 3.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onKakaoLogin = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    if (accessToken && userId) {
      navigate(`/tree/${userId}`);
      return;
    }

    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    const kakaoURL =
      `https://kauth.kakao.com/oauth/authorize?` +
      `client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = kakaoURL;
  };

  return (
    <div className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/background/weesh-login-bg.png')]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
      <div className="relative w-full h-screen flex flex-col items-center">
        <img src={weesh_letter} className="mt-[138px]" />
        <div>
          <img
            src={tree_halo}
            className="absolute [filter:drop-shadow(0_0_29.7px_#606018)_blur(3.85px)]"
          />
          <img src={tree} className="relative h-[408px]" />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-white mb-[38px]">
            Wee-sh You a Merry Christmas
          </h1>
          <KakaoOauthButton onKakaoLogin={onKakaoLogin} />
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
