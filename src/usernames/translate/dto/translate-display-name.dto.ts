import { UserConfigs, TranslateNameRequest } from '@twtts/shared';

export class TranslateNameDto implements TranslateNameRequest {
  displayName: string;
  configs: UserConfigs;
}
