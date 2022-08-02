import { Injectable, NotImplementedException } from '@nestjs/common';
import { EmotesService } from '../../external/emotes/emotes.service';
import { ChatFragment } from '../../types/fragments';
import { MakeFragmentsDto } from './dto/make-fragments.dto';
import { TwitchEmoteTags } from '../../types/emotes';

const URL_EXPRESSION =
  /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;

function isLink(word: string): boolean {
  return URL_EXPRESSION.test(word);
}

function flushBuffer(fragments: ChatFragment[], buffer: string[]) {
  if (buffer.length === 0) {
    return;
  }
  const text = buffer.join(' ');
  buffer.length = 0;
  fragments.push({
    type: 'text',
    text,
  });
}

@Injectable()
export class FragmentsService {
  constructor(private emotesService: EmotesService) {}

  async makeFragments(channelId: string, message: string, emoteTags: TwitchEmoteTags): Promise<ChatFragment[]> {
    const emoteChecker = this.emotesService.getEmoteChecker(channelId, message, emoteTags || {});

    const words = message
      .split(' ')
      .map((word) => word.trim())
      .filter((word) => word != '');
    const fragments: ChatFragment[] = [];
    const buffer: string[] = [];
    for (const word of words) {
      // 1. Check if the word is an emote
      const emote = await emoteChecker.getEmote(word);
      if (emote) {
        flushBuffer(fragments, buffer);
        fragments.push({
          type: 'emote',
          text: word,
          emote,
        });
        continue;
      }

      // 2. Check if the word is a link
      if (isLink(word)) {
        flushBuffer(fragments, buffer);
        fragments.push({
          type: 'link',
          text: word,
        });
        continue;
      }

      // 3. Check if the word is a mention
      if (word.startsWith('@')) {
        flushBuffer(fragments, buffer);
        fragments.push({
          type: 'mention',
          text: word,
        });
        continue;
      }

      // TODO: Check for special cases, like numbers and special characters
      buffer.push(word);
    }
    flushBuffer(fragments, buffer);

    return fragments;
  }
}
