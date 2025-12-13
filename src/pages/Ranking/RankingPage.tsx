import { useNavigate } from "react-router-dom";
import arrow from "../../assets/Icon/arrow-left.svg";
import GiftBox from "../../components/post/GiftBox";
import GiftGrid from "../../components/post/GiftGrid";
import { useToast } from "../../components/toast/ToastProvider";

export interface RankUser {
  userId: number;
  nickname: string;
  sentCount: number;
  randomTemplate: number;
}

const RankingPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const ranking: RankUser[] = [
    { userId: 1, nickname: "박지민", sentCount: 100, randomTemplate: 5 },
    { userId: 2, nickname: "김소희", sentCount: 90, randomTemplate: 4 },
    { userId: 3, nickname: "손희찬", sentCount: 80, randomTemplate: 3 },
    { userId: 4, nickname: "오상진", sentCount: 70, randomTemplate: 2 },
    { userId: 5, nickname: "이성희", sentCount: 60, randomTemplate: 1 },
    { userId: 6, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 7, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 8, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 9, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 10, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 11, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 12, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 13, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 14, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 15, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 16, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 17, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 18, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 19, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 20, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
    { userId: 21, nickname: "이진경", sentCount: 50, randomTemplate: 5 },
  ];

  const first = ranking[0];
  const second = ranking[1];
  const third = ranking[2];
  const rest = ranking.slice(3);

  return (
    <div className="w-screen min-h-screen relative overflow-hidden bg-[#452F11] flex flex-col items-center px-4 pb-8">
      <div className="w-full flex justify-center items-center pt-11 relative pointer-events-none">
        <h1
          style={{
            textShadow:
              "-0.2px 0px #976621, 0px 0.2px #976621, 0.2px 0px #976621, 0px -0.2px #976621",
          }}
          className="text-2xl text-[#FBB75F]"
        >
          랭킹
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

      <div className="relative mt-[105px] w-[329px] h-[84px] flex flex-row bg-[#7D541E] border-2 border-[#2C1E0A]">
        <div className="absolute left-[-2px] bottom-[53px]">
          <GiftBox rankUser={second} type="topThree" />
        </div>

        <h1 className="absolute left-7 text-[32px] text-[#C9C9C9]  top-[25px]">
          #2
        </h1>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[69px]">
          <GiftBox rankUser={first} type="topThree" />
        </div>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-[32px] text-[#FFBC35] top-[18px]">
          #1
        </h1>

        <div className="absolute right-[-2px] bottom-[53px]">
          <GiftBox rankUser={third} type="topThree" />
        </div>

        <h1 className="absolute right-7 text-[32px] text-[#C78500] top-[25px]">
          #3
        </h1>
      </div>

      <div className="absolute top-[239px] h-[564px] z-10">
        <GiftGrid rankUser={rest} />
      </div>
    </div>
  );
};

export default RankingPage;
