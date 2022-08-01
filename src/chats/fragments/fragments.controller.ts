import { Controller, Post, Body } from '@nestjs/common';
import { FragmentsService } from './fragments.service';
import { MakeFragmentsDto as MakeFragmentsDto } from './dto/make-fragments.dto';
import { ChatFragment } from 'src/types/fragments';

@Controller('/chats/fragments')
export class FragmentsController {
  constructor(private readonly fragmentsService: FragmentsService) {}

  @Post()
  makeFragments(@Body() makeFragmentsDto: MakeFragmentsDto): ChatFragment[] {
    return this.fragmentsService.makeFragments(makeFragmentsDto);
  }
}
