import giftBox from "../../assets/decoration/giftbox/gift-img.svg";
import type { RankUser } from "../../pages/Ranking/RankingPage";

interface Props {
  rankUser: RankUser;
  type: "topThree" | "rank";
}

const GiftBox = ({ type, rankUser }: Props) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-[90px] h-[90px] relative rounded-[4.5px] border-[1.5px] flex items-center justify-center bg-[#FFD9A0] border-[#976621]">
        <div className="w-[77px] h-[77px] bg-[#E8BF82] border-[0.75px] border-[#D8A763] rounded-[3px] flex justify-center items-center">
          <img src={giftBox} alt="gift" className="w-16 h-16" />
        </div>
      </div>
      <div className="text-xs text-[#3E2A0E] absolute bg-white rounded-full px-2 py-[6px] border border-[#3E2A0E] right-[-10px] bottom-[-10px]">
        {type === "topThree"
          ? `${rankUser.nickname}`
          : `${rankUser.userId}.${rankUser.nickname}`}
      </div>
    </div>
  );
};

export default GiftBox;
