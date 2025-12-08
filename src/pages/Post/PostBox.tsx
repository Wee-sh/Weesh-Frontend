import React, { useEffect, useState } from "react";
import arrow from "../../assets/Icon/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../../components/Post/ToggleSwitch";
import GiftGrid from "../../components/Post/GiftGrid";
import Modal from "../../components/Modal/Modal";
import PostModal from "../../components/Modal/PostModal";

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
  const [selected, setSelected] = useState<"sent" | "received">("sent");
  const [messages, setMessages] = useState<Message[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const receivedMessages: Message[] = [
    {
      id: 6,
      fromUserName: "익명의오리",
      toUserName: "소희",
      content:
        "너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.너는 정말 디자이너 같아. 디자인을 하는구나.",
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
  ];

  useEffect(() => {
    if (selected === "received") {
      setMessages(receivedMessages);
    } else {
      setMessages(sentMessages);
    }
  }, [selected]);

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
          {32}개
        </h1>

        <img
          onClick={() => navigate(-1)}
          src={arrow}
          className="absolute left-4 cursor-pointer pointer-events-auto"
        />
      </div>

      <ToggleSwitch selected={selected} onToggle={setSelected} />

      <GiftGrid
        messages={messages}
        type={selected}
        onClickMessage={(msg) => {
          setSelectedMessage(msg);
          setOpenModal(true);
        }}
      />

      {openModal && selectedMessage && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <PostModal
            fromUserName={selectedMessage.fromUserName}
            toUserName={selectedMessage.toUserName}
            content={selectedMessage.content}
          />
        </Modal>
      )}
    </div>
  );
};

export default PostBox;
