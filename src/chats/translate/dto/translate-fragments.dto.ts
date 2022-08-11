import { ChatToken, UserConfigs } from "@twtts/shared";

export class TranslateFragmentsDto {
  tokens: ChatToken[];
  srcLang: string;
  configs: UserConfigs;
}
