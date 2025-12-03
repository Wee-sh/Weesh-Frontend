import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import HomePage from "./pages/Home/HomePage";
import PostBox from "./pages/Post/PostBox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/post-box" element={<PostBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
