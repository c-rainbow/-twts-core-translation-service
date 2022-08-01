import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmotesService } from './emotes.service';
import { CreateEmoteDto } from './dto/create-emote.dto';
import { UpdateEmoteDto } from './dto/update-emote.dto';

@Controller('emotes')
export class EmotesController {
  constructor(private readonly emotesService: EmotesService) {}

  @Post()
  create(@Body() createEmoteDto: CreateEmoteDto) {
    return this.emotesService.create(createEmoteDto);
  }

  @Get()
  findAll() {
    return this.emotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emotesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmoteDto: UpdateEmoteDto) {
    return this.emotesService.update(+id, updateEmoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emotesService.remove(+id);
  }
}
