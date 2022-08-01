import { ChatFragment } from 'src/types/fragments';
import { UserConfigs } from '../translate.interface';

export class TranslateFragmentsDto {
  fragments: ChatFragment[];
  srcLang: string;
  config: UserConfigs;
}
