import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import HomePage from "./pages/Home/HomePage";
import PostBox from "./pages/Post/PostBox";
import SettingPage from "./pages/Setting/SettingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tree/:userId" element={<HomePage />} />
        <Route path="/post-box" element={<PostBox />} />
        {/*<Route path="/write-message/:userId" element={<WriteMessage />} /> */}
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
