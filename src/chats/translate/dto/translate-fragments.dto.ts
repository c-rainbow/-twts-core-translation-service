import { UserConfigs } from '../../../types/config';
import { ChatFragment } from '../../../types/fragments';

export class TranslateFragmentsDto {
  fragments: ChatFragment[];
  srcLang: string;
  config: UserConfigs;
}
