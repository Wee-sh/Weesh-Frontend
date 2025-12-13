import React, { useEffect, useState } from "react";
import arrow from "../../assets/Icon/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../../components/post/ToggleSwitch";
import GiftGrid from "../../components/post/GiftGrid";
import Modal from "../../components/modal/Modal";
import PostModal from "../../components/modal/PostModal";
import { useToast } from "../../components/toast/ToastProvider";

export interface Message {
  id: number;
  fromUserName: string;
  toUserName: string;
  content: string;
  giftTemplate: number;
  createdAt: string;
}

const PostBox = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const toastShownRef = React.useRef(false);

  const [selected, setSelected] = useState<"sent" | "received">("sent");
  const [messages, setMessages] = useState<Message[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const unlockTime = new Date("2025-12-24T20:30:00");
  const isUnlocked = new Date() >= unlockTime;

  const receivedMessages: Message[] = [
    {
      id: 6,
      fromUserName: "익명의오리",
      toUserName: "소희",
      content:
        "너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.",
      giftTemplate: 5,
      createdAt: "2025-12-03T19:09:36.933692",
    },
    {
      id: 7,
      fromUserName: "고구마볶음",
      toUserName: "소희",
      content: "이얍",
      giftTemplate: 2,
      createdAt: "2025-12-03T19:09:38.591206",
    },
    {
      id: 8,
      fromUserName: "소리의냄새",
      toUserName: "소희",
      content: "얍얍",
      giftTemplate: 5,
      createdAt: "2025-12-03T19:09:40.553474",
    },
    {
      id: 9,
      fromUserName: "김소희",
      toUserName: "소희",
      content: "야아압",
      giftTemplate: 4,
      createdAt: "2025-12-03T19:09:40.938265",
    },
  ];

  const sentMessages: Message[] = [
    {
      id: 10,
      fromUserName: "소희",
      toUserName: "김치볶음밥",
      content: "메리크리스마스!",
      giftTemplate: 3,
      createdAt: "2025-12-03T20:10:36.933692",
    },
    {
      id: 11,
      fromUserName: "소희",
      toUserName: "회망찬하루",
      content: "좋은 하루 보내세요",
      giftTemplate: 1,
      createdAt: "2025-12-03T20:11:38.591206",
    },
    {
      id: 12,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 13,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 14,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 15,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 16,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 17,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 18,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 19,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 20,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 21,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 22,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
    {
      id: 23,
      fromUserName: "소희",
      toUserName: "박지민",
      content: "새해 복 많이 받으세요",
      giftTemplate: 4,
      createdAt: "2025-12-03T20:12:40.553474",
    },
  ];

  useEffect(() => {
    if (selected === "received") {
      setMessages(receivedMessages);
    } else {
      setMessages(sentMessages);
    }
  }, [selected]);

  useEffect(() => {
    if (selected === "received" && !isUnlocked && !toastShownRef.current) {
      toastShownRef.current = true; // 다시 실행되지 않도록 막기
      toast.showToast({
        message: "받은 편지는 12월 24일 오후 8시 30분 부터 확인 가능해요!",
        persist: true,
        top: "138px",
        type: "normal", // 일반 토스트
      });
    }

    if (selected === "sent") {
      toastShownRef.current = false;
      toast.hideAllToasts("normal"); // 일반 토스트만 제거
    }
  }, [selected, isUnlocked]);

  const handleClickMessage = (msg: Message) => {
    if (selected === "received" && !isUnlocked) return; // 클릭 막기
    setSelectedMessage(msg);
    setOpenModal(true);
  };

  return (
    <div className="w-screen min-h-screen bg-[#452F11] flex flex-col items-center px-4 pb-8">
      <div className="w-full flex justify-center items-center pt-11 relative pointer-events-none mb-[6px]">
        <h1
          style={{
            textShadow:
              "-0.2px 0px #976621, 0px 0.2px #976621, 0.2px 0px #976621, 0px -0.2px #976621",
          }}
          className="text-2xl text-[#FBB75F]"
        >
          {messages.length}개
        </h1>

        <img
          onClick={() => {
            navigate(-1);
            toast.hideAllToasts("normal");
          }}
          src={arrow}
          className="absolute left-4 cursor-pointer pointer-events-auto"
        />
      </div>

      <ToggleSwitch selected={selected} onToggle={setSelected} />

      <div className="w-full h-[674px]">
        <GiftGrid
          messages={messages}
          type={selected}
          locked={selected === "received" && !isUnlocked}
          onClickMessage={handleClickMessage}
        />
      </div>

      {openModal && selectedMessage && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <PostModal
            fromUserName={selectedMessage.fromUserName}
            toUserName={selectedMessage.toUserName}
            time={selectedMessage.createdAt}
            content={selectedMessage.content}
          />
        </Modal>
      )}
    </div>
  );
};

export default PostBox;
