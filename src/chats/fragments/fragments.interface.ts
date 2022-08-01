import { Emote } from '../../external/emotes/emotes.interface';
import { Pronunciation } from '../../pronunciations/pronunciations.interface';

export interface ChatFragment {
  type: string; // Type of the fragment
  text: string; // Text of the fragment
  emote?: Emote; // If emote, emote detail.
  pronunciation?: Pronunciation; // Pronunciation of the fragment, if applicable
}
