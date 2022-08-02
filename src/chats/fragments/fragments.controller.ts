import { Controller, Post, Body } from '@nestjs/common';
import { FragmentsService } from './fragments.service';
import { MakeFragmentsDto } from './dto/make-fragments.dto';
import { ChatFragment } from '../../types/fragments';

@Controller('/chats/fragments')
export class FragmentsController {
  constructor(private readonly fragmentsService: FragmentsService) {}

  @Post()
  async makeFragments(@Body() dto: MakeFragmentsDto): Promise<ChatFragment[]> {
    return this.fragmentsService.makeFragments(dto);
  }
}
