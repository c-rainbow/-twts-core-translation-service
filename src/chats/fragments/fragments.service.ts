import { Injectable, NotImplementedException } from '@nestjs/common';
import { EmotesService } from '../../external/emotes/emotes.service';
import { ChatFragment } from '../../types/fragments';
import { MakeFragmentsDto } from './dto/make-fragments.dto';


const URL_EXPRESSION = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;

function isLink(word: string): boolean {
  return URL_EXPRESSION.test(word);
} 


function flushBuffer(buffer: string[]): ChatFragment {
  const text = buffer.join(' ');
  buffer.length = 0;
  return {
    type: 'text',
    text,
  };
}


@Injectable()
export class FragmentsService {
  constructor(private emotesService: EmotesService) {}

  async makeFragments(dto: MakeFragmentsDto): Promise<ChatFragment[]> {
    const emoteChecker = this.emotesService.getEmoteChecker(
      dto.channelId, dto.message, dto.emoteTags);
    
    const words = dto.message.split(' ').filter(word => word != '').map(word => word.trim());
    const fragments: ChatFragment[] = [];
    const buffer: string[] = [];
    for (const word of words) {
      // 1. Check if the word is an emote
      const emote = await emoteChecker.getEmote(word);
      if (emote) {
        fragments.push(flushBuffer(buffer));
        fragments.push({
          type: 'emote',
          text: word,
          emote,
        });
        continue;
      }

      // 2. Check if the word is a link
      if (isLink(word)) {
        fragments.push(flushBuffer(buffer));
        fragments.push({
          type: 'link',
          text: word,
        });
        continue;
      }

      // 3. Check if the word is a mention
      if (word.startsWith('@')) {
        fragments.push(flushBuffer(buffer));
        fragments.push({
          type: 'mention',
          text: word,
        });
        continue;
      }

      // TODO: Check for special cases, like numbers and special characters
      buffer.push(word);
    }
    fragments.push(flushBuffer(buffer));

    return fragments;
  }
}
