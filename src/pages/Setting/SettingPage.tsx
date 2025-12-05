import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow_left from "../../assets/Icon/arrow-left.svg";
import SettingButton from "../../components/Setting/SettingButton";
import Modal from "../../components/Modal/Modal";
import NameChangeModalContent from "../../components/Modal/NameChangeModal";

const SettingPage = () => {
  const navigate = useNavigate();
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);

  const handleNameChange = (newName: string) => {
    console.log("새 이름:", newName);
    setIsNameModalOpen(false);
  };

  return (
    <div className="w-screen min-h-screen bg-[#452F11] flex flex-col items-center px-4 pb-8">
      <div className="w-full flex justify-center items-center pt-11 relative pointer-events-none mb-3">
        <h1
          style={{
            textShadow:
              "-0.2px 0px #976621, 0px 0.2px #976621, 0.2px 0px #976621, 0px -0.2px #976621",
          }}
          className="text-2xl text-[#FBB75F]"
        >
          설정
        </h1>

        <img
          onClick={() => navigate("/")}
          src={arrow_left}
          className="absolute left-4 cursor-pointer pointer-events-auto"
        />
      </div>

      <SettingButton
        buttonName="로그아웃"
        buttonType="logout"
        onClick={() => navigate("/")}
      />
      <SettingButton
        buttonName="닉네임 변경"
        buttonType="nameChange"
        onClick={() => setIsNameModalOpen(true)}
      />

      <Modal isOpen={isNameModalOpen} onClose={() => setIsNameModalOpen(false)}>
        <NameChangeModalContent onConfirm={handleNameChange} />
      </Modal>
    </div>
  );
};

export default SettingPage;
