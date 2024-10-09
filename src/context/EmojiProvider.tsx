import { useEffect, useState } from "react";
import EmojiContext, { EmojiContextType } from "./EmojiContext";
import { Emoji } from "@/types/Respon";
import { getRandomGroup } from "@/utils/random";

const emojiError: Emoji = {
  name: "error",
  htmlCode: "Can't get emoji",
  quotes: "",
}

export const EmojiProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [emoji, setEmoji] = useState<Emoji>(emojiError);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    reFetch();
  }, []);
  
  const reFetch = async () => {
    setLoading(true);
    try {
      let group = getRandomGroup();
      const res = await fetch(`https://emojihub-1001447344924.asia-southeast2.run.app/api/random/group/${group[0]}`);
      if (!res.ok) {
        throw new Error ("Failed to fetch emoji");
      }
      let data = await res.json();
      if(data.htmlCode.length > 0){
        data.htmlCode = data.htmlCode[0]
      }
      data.quotes = group[1];
      setEmoji(await data as Emoji);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const value: EmojiContextType = {
    emoji,
    loading,
    error,
    reFetch,
  };

  return <EmojiContext.Provider value={value}>{children}</EmojiContext.Provider>;
};