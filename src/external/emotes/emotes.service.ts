import { Injectable } from '@nestjs/common';
import { ChatFragment } from '../../types/fragments';
import { TwitchEmoteTags } from '../../types/emotes';
import { EmoteParser } from './libs/parser';

@Injectable()
export class EmotesService {
  private _parser: EmoteParser;

  constructor() {
    this._parser = new EmoteParser();
  }

  async parse(
    channelId: string,
    message: string,
    emoteTags: TwitchEmoteTags = {},
  ): Promise<ChatFragment[]> {
    return this._parser.parse(channelId, message, emoteTags);
  }
}
