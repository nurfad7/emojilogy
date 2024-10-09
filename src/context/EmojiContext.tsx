import { createContext } from 'react';
import { Emoji } from '@/types/Respon';

export interface EmojiContextType {
  emoji: Emoji;
  loading: boolean;
  error: unknown;
  reFetch: () => void;
}

const EmojiContext = createContext<EmojiContextType | undefined>(undefined);

export default EmojiContext;