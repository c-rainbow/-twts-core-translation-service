import { ChatFragment } from './fragments';
import { Pronunciation } from './pronunciations';

export interface NameTranslationOutput {
  original: string; // Original display name
  translated?: string; // Translated display name. Undefined if not translated
  srcLang: string; // Source language
  destLang: string; // Target language
  pronunciation?: Pronunciation; // Pronunciation of the display name
}

export interface ChatTranslationOutput {
  original: ChatFragment[]; // Fragments of the original chat message.
  translated?: ChatFragment[]; // Translated chat message. Undefined if not translated
  srcLang: string; // Source language
  destLang: string; // Target language
  displayName?: NameTranslationOutput; // Translated display name, if translated
}

export interface TranslationResult {
  text: string;
  srcLang: string;
  targetLang: string;
}