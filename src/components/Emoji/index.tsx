import { FC, useRef, useContext, useEffect } from "react";
import EmojiContext from "@/context/EmojiContext";

const Emoji: FC = () => {
  const emojiContext = useContext(EmojiContext);
  const emojiRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(emojiRef.current) {
      emojiRef.current.innerHTML = emojiContext?.emoji ? emojiContext.emoji?.htmlCode : "";
    }
  }, [emojiContext?.emoji]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div id="emoji" className="text-[10rem] leading-none mb-20 cursor-pointer">
        <div ref={emojiRef}
          onClick={emojiContext?.reFetch}>
        </div>
      </div>
      <div className="text-dark-blue text-sm text-center px-[20%]">
        {emojiContext?.emoji.quotes}
      </div>
    </div>
  );
};

export default Emoji;