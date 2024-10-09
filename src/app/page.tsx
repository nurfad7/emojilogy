"use client"
import { EmojiProvider } from "@/context/EmojiProvider";
import Emoji from "@/components/Emoji";

export default function Home() {
  return (
    <EmojiProvider>
      <div className="w-[100%-2.5rem] h-full mx-5 mt-2 mb-5 bg-yellow-body flex flex-col justify-center items-center">
        <div className="text-center text-light-blue text-[2.5rem] wr font-medium leading-none mb-10">
          What&apos;s Your<br/><span className="text-dark-blue">emoji</span>&nbsp;today?
        </div>
        <div className="text-sm text-dark-blue text-center mb-5">Click it!</div>
        <Emoji />
      </div>
    </EmojiProvider>
  );
}
