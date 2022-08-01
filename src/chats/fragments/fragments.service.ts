import { Injectable, NotImplementedException } from '@nestjs/common';
import { EmotesService } from 'src/external/emotes/emotes.service';
import { MakeFragmentsDto } from './dto/make-fragments.dto';
import { ChatFragment } from './fragments.interface';

@Injectable()
export class FragmentsService {
  constructor(private emotesService: EmotesService) {}
  makeFragments(makeFragmentDto: MakeFragmentsDto): ChatFragment[] {
    throw new NotImplementedException('Not implemented yet');
  }
}
