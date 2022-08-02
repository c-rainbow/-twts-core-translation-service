import { Injectable, NotImplementedException } from '@nestjs/common';
import { EmotesService } from '../../external/emotes/emotes.service';
import { ChatFragment } from '../../types/fragments';
import { MakeFragmentsDto } from './dto/make-fragments.dto';

@Injectable()
export class FragmentsService {
  constructor(private emotesService: EmotesService) {}

  async makeFragments(dto: MakeFragmentsDto): Promise<ChatFragment[]> {
    return this.emotesService.parse(
      dto.channelId,
      dto.message,
      dto.emoteTags || {},
    );
  }
}
