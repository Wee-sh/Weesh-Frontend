import { useEffect, useState } from "react";
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
import first_place from "../../assets/Icon/first-place.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import WritePostModal from "../../components/Modal/WritePostModal";
import { useToast } from "../../components/Toast/ToastProvider";
import { useMyTree } from "../../hooks/useMyTree";

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
  const location = useLocation();
  const { showToast, hideAllToasts } = useToast();
  const { data, isLoading, error } = useMyTree();

  const [gift, setGift] = useState(0);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  if (isLoading)
    return <div className="flex items-center justify-center min-h-screen text-white">로딩 중...</div>;

  if (error) {
    const isAuthError = (error as any)?.response?.status === 401;
    if (isAuthError) {
      localStorage.clear();
      window.location.href = "/login";
      return null;
    }
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        데이터를 불러오지 못했습니다.
      </div>
    );
  }

  const currentUserId = "myUserId";
  const isMyTree = !userId || userId === currentUserId;
  const currentTree = trees.find((tree) => tree.id === gift);

  const now = new Date();
  const unlockTime = new Date("2025-12-24T20:30:00");
  const isUnlocked = now >= unlockTime;

  useEffect(() => {
    if (location.pathname !== "/") {
      hideAllToasts("carousel");
    }
  }, [location.pathname, hideAllToasts]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const messages = isUnlocked
      ? [
          "랭킹 보러가기가 열렸어요! 가장 많이 선물을 보낸 사람은 누구일까요?",
          "실명이 아닐 경우 상품 지급이 어려우니, 설정에서 꼭 실명으로 변경해주세요",
        ]
      : [
          "실명이 아닐 경우 상품 지급이 어려우니, 설정에서 꼭 실명으로 변경해주세요",
        ];

    showToast({
      message: messages,
      persist: true,
      carouselSpeed: 0.8,
      top: "88px",
      type: "carousel",
    });
  }, [location.pathname, showToast, isUnlocked]);

  const handlePostClick = () => {
    if (isMyTree) {
      navigate("/post-box");
    } else if (isUnlocked) {
      showToast({
        message: "덕담 작성 기간이 끝났습니다!",
        duration: 2000,
        top: "88px",
      });
    } else {
      setIsWriteModalOpen(true);
    }
  };

  return (
    <div className="w-screen min-h-screen relative bg-cover bg-center bg-no-repeat bg-[url('/src/assets/background/weesh-home-bg.png')]">
      <div className="w-full flex justify-center items-center pt-11 relative">
        <div className="flex flex-row gap-2 absolute left-4">
          {isMyTree && (
            <div
              onClick={() =>
                showToast({
                  message: "링크가 복사되었습니다!",
                  duration: 2000,
                  top: "138px",
                })
              }
              className="flex flex-col items-center text-xs text-white pointer-events-auto"
            >
              <img src={copy_link} />내 트리 공유
            </div>
          )}

          {isUnlocked && (
            <div
              onClick={() => {
                navigate("/ranking");
                showToast({
                  message:
                    "상위 3명은 5층 위클래스 상담실에서 상품을 받아가세요!",
                  persist: true,
                  top: "88px",
                  type: "normal",
                });
              }}
              className="flex flex-col items-center gap-[2px] text-xs text-[#F9BD00] pointer-events-auto"
            >
              <img src={first_place} />
              순위 보기
            </div>
          )}
        </div>

        <h1
          style={{
            textShadow:
              "-1px 0px #E63A1F, 0px 1px #E63A1F, 1px 0px #E63A1F, 0px -1px #E63A1F",
          }}
          className="text-2xl text-[#62B01B]"
        >
          {isMyTree ? data.nickName : userId}의 트리
        </h1>

        {isMyTree && (
          <img
            src={setting_cookie}
            className="absolute right-4 pointer-events-auto"
            onClick={() => {
              navigate("/setting");
            }}
          />
        )}
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
                  {data.starCount}
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
