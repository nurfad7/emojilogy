import { EMOJI_GROUP, EMOJI_QUOTES } from "@/constants/emoji";

export const getRandomGroup = (limit?: number): string[] => {
  let numberLimit = limit ? limit : 18;
  let randomNumber = Math.floor(Math.random() * numberLimit);
  return [EMOJI_GROUP[randomNumber], EMOJI_QUOTES[randomNumber]];
}