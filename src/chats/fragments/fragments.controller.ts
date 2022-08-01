import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FragmentsService } from './fragments.service';
import { CreateFragmentDto } from './dto/create-fragment.dto';
import { ChatFragment } from './fragments.interface';

@Controller('/chats/fragments')
export class FragmentsController {
  constructor(private readonly fragmentsService: FragmentsService) {}

  @Post()
  create(@Body() createFragmentDto: CreateFragmentDto): ChatFragment[] {
    return this.fragmentsService.create(createFragmentDto);
  }
}
