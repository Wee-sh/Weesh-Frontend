import { useState } from "react";
import setting_cookie from "../../assets/Icon/setting-cookie.svg";
import post from "../../assets/decoration/post.svg";
import tree_0 from "../../assets/decoration/trees/tree_0.png";
import tree_1 from "../../assets/decoration/trees/tree_1.png";
import tree_2 from "../../assets/decoration/trees/tree_2.png";
import tree_3 from "../../assets/decoration/trees/tree_3.png";
import tree_4 from "../../assets/decoration/trees/tree_4.png";
import tree_5 from "../../assets/decoration/trees/tree_5.png";
import copy_link from "../../assets/Icon/copy_link.svg";
import star from "../../assets/decoration/star.svg";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import WritePostModal from "../../components/Modal/WritePostModal";
import { useToast } from "../../components/Toast/ToastProvider";

const trees = [
  { id: 0, url: tree_0 },
  { id: 1, url: tree_1 },
  { id: 2, url: tree_2 },
  { id: 3, url: tree_3 },
  { id: 4, url: tree_4 },
  { id: 5, url: tree_5 },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [gift, setGift] = useState(0);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const { showToast } = useToast();

  const currentUserId = "myUserId";
  const isMyTree = !userId || userId === currentUserId;

  const currentTree = trees.find((tree) => tree.id === gift);

  const handlePostClick = () => {
    if (isMyTree) {
      navigate("/post-box");
    } else {
      setIsWriteModalOpen(true);
    }
  };

  return (
    <div className="w-screen min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('/src/assets/background/weesh-home-bg.png')]">
      <div className="w-full flex justify-center items-center pt-11 relative">
        <div
          onClick={() =>
            showToast({
              message: "링크가 복사되었습니다!",
              duration: 2000,
            })
          }
          className="flex flex-col items-center text-xs text-white absolute left-4 pointer-events-auto"
        >
          <img src={copy_link} />내 트리 공유
        </div>

        <h1
          style={{
            textShadow:
              "-1px 0px #E63A1F, 0px 1px #E63A1F, 1px 0px #E63A1F, 0px -1px #E63A1F",
          }}
          className="text-2xl text-[#62B01B]"
        >
          {isMyTree ? "김소희" : userId}의 트리
        </h1>

        <img
          src={setting_cookie}
          className="absolute right-4 pointer-events-auto"
          onClick={() => navigate("/setting")}
        />
      </div>

      <div className="w-full h-[25%] absolute bottom-0 pointer-events-none">
        <div className="w-full h-full flex justify-center relative bg-cover bg-center bg-no-repeat bg-[url('/src/assets/decoration/snow.svg')]">
          {currentTree && (
            <div className="absolute bottom-[130px] w-[393px] flex justify-center">
              <div
                className="absolute top-5 right-[144px] w-[116px] h-[126px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: `url(${star})` }}
              >
                <span
                  style={{
                    textShadow:
                      "-2px 0px #E0B81A, 0px 2px #E0B81A, 2px 0px #E0B81A, 0px -2px #E0B81A",
                  }}
                  className="text-xl text-white"
                >
                  {100}
                </span>
              </div>
              <img src={currentTree.url} className="w-full" />
            </div>
          )}
          <p
            onClick={() => navigate("/")}
            className="absolute bottom-[62px] text-xl text-[#454545] pointer-events-auto"
          >
            {isMyTree ? "" : "내 트리로 돌아가기"}
          </p>
          <img
            onClick={handlePostClick}
            src={post}
            className="z-50 w-16 h-14 absolute right-4 bottom-14 cursor-pointer pointer-events-auto"
          />
        </div>
      </div>

      <Modal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
      >
        <WritePostModal
          userId={"홍길동"}
          onSubmit={(content, isAnon) => {
            console.log("내용:", content);
            console.log("익명?", isAnon);
            setIsWriteModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default HomePage;
