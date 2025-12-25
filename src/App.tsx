import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import HomePage from "./pages/Home/HomePage";
import PostBox from "./pages/Post/PostBox";
import SettingPage from "./pages/Setting/SettingPage";
import { ToastProvider } from "./components/Toast/ToastProvider";
import RankingPage from "./pages/Ranking/RankingPage";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tree/:userId" element={<HomePage />} />
          <Route path="/post-box" element={<PostBox />} />
          {/*<Route path="/write-message/:userId" element={<WriteMessage />} /> */}
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
