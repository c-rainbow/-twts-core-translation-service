import { TwitchEmoteTags } from '../../../types/emotes';

export class MakeFragmentsDto {
  channelId: string;
  message: string;
  emoteTags: TwitchEmoteTags;
}
