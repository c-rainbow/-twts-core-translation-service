export interface UserConfigs {
  defaultTargetLang: string; // Default target language
  noTransLangs?: string[]; // No-translation languages
  preferredLangs?: {
    // User preference of source language -> target language mapping
    [srcLang: string]: string;
  };
}
