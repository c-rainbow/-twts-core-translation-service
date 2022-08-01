import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LangDetectService } from './langdetect.service';
import { CreateLangDetectDto } from './dto/create-langdetect.dto';
import { UpdateLangDetectDto } from './dto/update-langdetect.dto';

@Controller('langdetect')
export class LangDetectController {
  constructor(private readonly langdetectService: LangDetectService) {}

  @Post()
  create(@Body() createLangDetectDto: CreateLangDetectDto) {
    return this.langdetectService.create(createLangDetectDto);
  }

  @Get()
  findAll() {
    return this.langdetectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langdetectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangDetectDto: UpdateLangDetectDto) {
    return this.langdetectService.update(+id, updateLangDetectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langdetectService.remove(+id);
  }
}
