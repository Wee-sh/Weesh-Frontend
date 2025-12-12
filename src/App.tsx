import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import Login from "./pages/Auth/Login";
import HomePage from "./pages/Home/HomePage";
import PostBox from "./pages/Post/PostBox";
import SettingPage from "./pages/Setting/SettingPage";
import { ToastProvider } from "./components/Toast/ToastProvider";
import RankingPage from "./pages/Ranking/RankingPage";
import KakaoCallback from "./pages/Auth/KakaoCallback";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

const ProtectedLayout = () => {
  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          {/* 공개 라우트 */}
          <Route path="/login" element={<Login />} />
          <Route path="/kakao/callback" element={<KakaoCallback />} />

          {/* 보호 라우트: 이 안의 모든 route는 로그인 필요 */}
          <Route
            element={
              <ProtectedRoute>
                <ProtectedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/tree/:userId" element={<HomePage />} />
            <Route path="/post-box" element={<PostBox />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/ranking" element={<RankingPage />} />
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
