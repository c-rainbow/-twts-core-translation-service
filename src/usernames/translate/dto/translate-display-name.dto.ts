import { UserConfigs } from '../../../types/config';

export class TranslateNameDto {
  displayName: string;
  srcLang: string;
  config: UserConfigs;
}
