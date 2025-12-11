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
      navigate("/login?error=no_code");
      return;
    }

    kakaoLogin.mutate(code, {
      onSuccess: (data) => {
        localStorage.setItem("accessToken", data.accessToken);
        navigate(`/tree/${data.userId}`);
      },
      onError: () => navigate("/login?error=login_failed"),
    });
  }, []);
  return (
    <div className="w-screen min-h-screen flex justify-center items-center text-xl text-white bg-cover bg-center bg-no-repeat bg-[url('/src/assets/background/weesh-login-bg.png')]">
      카카오 로그인 처리 중...
    </div>
  );
};

export default KakaoCallback;
