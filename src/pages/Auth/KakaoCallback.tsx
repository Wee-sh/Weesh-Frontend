import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useKakaoLogin } from "../../api/auth";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const code = params.get("code");

  const kakaoLogin = useKakaoLogin();

  useEffect(() => {
    if (!code) {
      navigate("/login");
      return;
    }

    window.history.replaceState({}, "", window.location.pathname);

    kakaoLogin.mutate(code, {
      onSuccess: (data) => {
        localStorage.setItem("accessToken", data.token.accessToken);
        localStorage.setItem("refreshToken", data.token.refreshToken);
        localStorage.setItem("nickname", data.nickname);
        localStorage.setItem("userId", data.userId.toString());

        navigate(`/tree/${data.userId}`, { replace: true });
      },
      onError: () => navigate("/login"),
    });
  }, []);

  return (
    <div className="w-screen min-h-screen flex justify-center items-center text-xl text-white bg-cover bg-center bg-no-repeat bg-[url('/src/assets/background/weesh-login-bg.png')]">
      카카오 로그인 처리 중...
    </div>
  );
};

export default KakaoCallback;
