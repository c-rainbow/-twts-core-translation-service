import { Emote } from './emotes';
import { Pronunciation } from './pronunciations';


export type ChatFragmentType = 'text' | 'emote' | 'link' | 'mention' | 'number' | 'special_characters';


export interface ChatFragment {
  type: ChatFragmentType; // Type of the fragment
  text: string; // Text of the fragment
  emote?: Emote; // If emote, emote detail.
  pronunciation?: Pronunciation; // Pronunciation of the fragment, if applicable
}
