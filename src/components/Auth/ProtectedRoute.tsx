import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      // access token 만료 → backend에서 자동 reissue 처리되도록 요청
      try {
        await api.get("/auth/check", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setAuthorized(true);
      } catch (e: any) {
        if (e.response?.status === 401) {
          // refresh 로 재발급하기
          try {
            const reissue = await api.post("/auth/reissue");
            localStorage.setItem("accessToken", reissue.data.accessToken);
            setAuthorized(true);
          } catch {
            setAuthorized(false);
          }
        } else {
          setAuthorized(false);
        }
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return null;

  if (!authorized)
    return <Navigate to="/login" replace state={{ from: location }} />;

  return <>{children}</>;
};

export default ProtectedRoute;
