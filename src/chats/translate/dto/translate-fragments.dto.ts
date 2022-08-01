import { ChatFragment } from '../../fragments/fragments.interface';
import { UserConfigs } from '../translate.interface';

export class TranslateFragmentsDto {
  fragments: ChatFragment[];
  srcLang: string;
  config: UserConfigs;
}
