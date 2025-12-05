import giftBox from "../../assets/decoration/giftbox/gift-img.svg";
import type { Message } from "../../pages/Post/PostBox";

interface Props {
  messages: Message[];
  type: "sent" | "received";
}

const GiftGrid = ({ messages, type }: Props) => {
  return (
    <div className="w-full h-[674px] bg-[#FBB75F] mt-4 rounded-2xl border-2 border-[#976621] p-3 overflow-y-auto">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-[18px] justify-items-center">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col items-center relative">
            <div className="w-[90px] h-[90px] bg-[#FFD9A0] rounded-[4.5px] border-[1.5px] border-[#976621] flex items-center justify-center">
              <div className="w-[77px] h-[77px] bg-[#E8BF82] border-[0.75px] border-[#D8A763] rounded-[3px] flex justify-center items-center">
                <img src={giftBox} alt="gift" className="w-16 h-16" />
              </div>
            </div>
            <div className="text-xs text-[#3E2A0E] absolute bg-white rounded-full px-2 py-[6px] border border-[#3E2A0E] right-[-10px] bottom-[-10px]">
              {type === "received"
                ? `from.${message.fromUserName}`
                : `TO.${message.toUserName}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftGrid;
