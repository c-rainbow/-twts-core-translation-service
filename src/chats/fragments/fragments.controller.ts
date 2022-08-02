import { Controller, Post, Body, Get } from '@nestjs/common';
import { FragmentsService } from './fragments.service';
import { MakeFragmentsDto } from './dto/make-fragments.dto';
import { ChatFragment } from '../../types/fragments';

@Controller('/chats/fragments')
export class FragmentsController {
  constructor(private readonly fragmentsService: FragmentsService) {}

  @Post()
  async makeFragments(@Body() dto: MakeFragmentsDto): Promise<ChatFragment[]> {
    return this.fragmentsService.makeFragments(dto.channelId, dto.message, dto.emoteTags);
  }

  @Get()
  async makeFragments2(): Promise<ChatFragment[]> {
    return this.fragmentsService.makeFragments('403883450', 'hello @hahaha Clap heheheh world https://www.google.com dd', {});
  }
}
