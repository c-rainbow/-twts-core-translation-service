import { Pronunciation } from '../../pronunciations/pronunciations.interface';

export interface NameTranslationOutput {
  original: string; // Original display name
  translated: string; // Translated display name
  srcLang: string; // Source language
  destLang: string; // Target language
  pronunciation?: Pronunciation; // Pronunciation of the display name
}
