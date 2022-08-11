import { UserConfigs, TranslateNameRequest } from '@twtts/shared';

export class TranslateNameDto implements TranslateNameRequest {
  displayName: string;
  srcLang: string;
  configs: UserConfigs;
}
