import { Emote, TwitchEmote } from '../../../types/emotes';
import { EmoteManager } from './manager';

// Checks if a word is an emote in a chat message.
export class EmoteChecker {
  private _channelId: string;
  private _twitchEmotes: Map<string, TwitchEmote>;
  private _manager: EmoteManager;

  constructor(
    channelId: string,
    twitchEmotes: Map<string, TwitchEmote>,
    manager: EmoteManager,
  ) {
    this._channelId = channelId;
    this._twitchEmotes = twitchEmotes;
    this._manager = manager;
  }

  async getEmote(word: string): Promise<Emote | undefined> {
    // First, check if the word is a valid Twitch emote in chat
    const twitchEmote = this._twitchEmotes.get(word);
    if (twitchEmote) {
      return twitchEmote;
    }

    return this._manager.getEmote(this._channelId, word);
  }
}
