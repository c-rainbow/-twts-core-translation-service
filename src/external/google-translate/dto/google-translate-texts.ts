import { ChatFragment } from '../../../types/fragments';
import { UserConfigs } from '../../../types/config';

export class GoogleTranslateTextsDto {
  fragments: ChatFragment[];
  srcLang: string;
  config: UserConfigs;
}
