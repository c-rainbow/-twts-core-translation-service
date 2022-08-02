import { Injectable } from '@nestjs/common';
import { TwitchEmoteTags } from '../../types/emotes';
import { populateTwitchEmotesFromTags } from './libs/parser';
import { EmoteChecker } from './libs/checker';
import { EmoteManager } from './libs/manager';

@Injectable()
export class EmotesService {
  private _manager: EmoteManager;

  constructor() {
    this._manager = new EmoteManager();
  }

  getEmoteChecker(
    channelId: string,
    message: string,
    emoteTags: TwitchEmoteTags = {},
  ): EmoteChecker {
    const twitchEmotes = populateTwitchEmotesFromTags(message, emoteTags);
    return new EmoteChecker(channelId, twitchEmotes, this._manager);
  }
}
