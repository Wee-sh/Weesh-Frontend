import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import KakaoCallback from "./pages/auth/KakaoCallback";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./pages/home/HomePage";
import PostBox from "./pages/post/PostBox";
import SettingPage from "./pages/setting/SettingPage";
import { ToastProvider } from "./components/toast/ToastProvider";
import RankingPage from "./pages/ranking/RankingPage";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/kakao/callback" element={<KakaoCallback />} />

          <Route element={<ProtectedRoute />}>
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
