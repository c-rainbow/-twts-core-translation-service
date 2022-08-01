import { ChatFragment } from '../fragments/fragments.interface';
import { NameTranslationOutput } from '../../usernames/translate/translate.interface';

export interface UserConfigs {
  defaultTargetLang: string; // Default target language
  noTransLangs?: string[]; // No-translation languages
  preferredLangs?: {
    // User preference of source language -> target language mapping
    [srcLang: string]: string;
  };
}

export interface ChatTranslationOutput {
  original: ChatFragment[]; // Fragments of the original chat message.
  translated?: ChatFragment[]; // Translated chat message. Undefined if not translated
  srcLang: string; // Source language
  destLang: string; // Target language
  displayName?: NameTranslationOutput; // Translated display name, if translated
}
