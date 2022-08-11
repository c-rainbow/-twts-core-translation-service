import { Injectable } from '@nestjs/common';
import {
  EmoteChecker,
  EmoteManager,
  IEmoteChecker,
  IEmoteManager,
  TwitchEmoteTags,
} from '@twtts/shared';

@Injectable()
export class EmotesService {
  private _manager: IEmoteManager;

  constructor() {
    this._manager = new EmoteManager();
  }

  getEmoteManager(): IEmoteManager {
    return this._manager;
  }

  getEmoteChecker(
    channelId: string,
    message: string,
    twitchEmotes: TwitchEmoteTags = {},
  ): IEmoteChecker {
    return new EmoteChecker(channelId, message, twitchEmotes, this._manager);
  }
}
