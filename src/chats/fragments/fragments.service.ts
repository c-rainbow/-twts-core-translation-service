import { Injectable } from '@nestjs/common';
import { EmotesService } from '../../external/emotes/emotes.service';
import { ChatToken, ChatTokenizer, TwitchEmoteTags } from '@twtts/shared';

@Injectable()
export class FragmentsService {
  private _tokenizer: ChatTokenizer;

  constructor(private emotesService: EmotesService) {
    const manager = this.emotesService.getEmoteManager();
    this._tokenizer = new ChatTokenizer(manager);
  }

  async tokenize(
    channelId: string,
    message: string,
    twitchEmotes: TwitchEmoteTags,
  ): Promise<ChatToken[]> {
    return this._tokenizer.tokenize(channelId, message, twitchEmotes);
  }
}
