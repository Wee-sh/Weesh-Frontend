import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import HomePage from "./pages/Home/HomePage";
import PostBox from "./pages/Post/PostBox";
import SettingPage from "./pages/Setting/SettingPage";
import { ToastProvider } from "./components/Toast/ToastProvider";
import RankingPage from "./pages/Ranking/RankingPage";
import KakaoCallback from "./pages/Auth/KakaoCallback";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tree/:userId" element={<HomePage />} />
          <Route path="/post-box" element={<PostBox />} />
          {/*<Route path="/write-message/:userId" element={<WriteMessage />} /> */}
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/kakao/callback" element={<KakaoCallback />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
