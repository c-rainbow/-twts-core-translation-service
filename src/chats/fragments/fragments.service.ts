import { Injectable, NotImplementedException } from '@nestjs/common';
import { EmotesService } from 'src/external/emotes/emotes.service';
import { CreateFragmentDto } from './dto/create-fragment.dto';
import { UpdateFragmentDto } from './dto/update-fragment.dto';
import { ChatFragment } from './fragments.interface';

@Injectable()
export class FragmentsService {
  constructor(private emotesService: EmotesService) {
    
  }
  create(createFragmentDto: CreateFragmentDto): ChatFragment[] {
    throw new NotImplementedException('Not implemented yet');
  }
}
