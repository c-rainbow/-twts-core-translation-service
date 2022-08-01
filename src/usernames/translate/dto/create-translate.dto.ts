import { UserConfigs } from '../../../chats/translate/translate.interface';
export class TranslateNameDto {
  displayName: string;
  srcLang: string;
  config: UserConfigs;
}
