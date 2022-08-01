import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PronunciationsService } from './pronunciations.service';
import { CreatePronunciationDto } from './dto/create-pronunciation.dto';
import { UpdatePronunciationDto } from './dto/update-pronunciation.dto';

@Controller('pronunciations')
export class PronunciationsController {
  constructor(private readonly pronunciationsService: PronunciationsService) {}

  @Post()
  create(@Body() createPronunciationDto: CreatePronunciationDto) {
    return this.pronunciationsService.create(createPronunciationDto);
  }

  @Get()
  findAll() {
    return this.pronunciationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pronunciationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePronunciationDto: UpdatePronunciationDto,
  ) {
    return this.pronunciationsService.update(+id, updatePronunciationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pronunciationsService.remove(+id);
  }
}
