import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NameLanguageDetectorService } from './name-language-detector.service';
import { CreateNameLanguageDetectorDto } from './dto/create-name-language-detector.dto';
import { UpdateNameLanguageDetectorDto } from './dto/update-name-language-detector.dto';

@Controller('name-language-detector')
export class NameLanguageDetectorController {
  constructor(private readonly nameLanguageDetectorService: NameLanguageDetectorService) {}

  @Post()
  create(@Body() createNameLanguageDetectorDto: CreateNameLanguageDetectorDto) {
    return this.nameLanguageDetectorService.create(createNameLanguageDetectorDto);
  }

  @Get()
  findAll() {
    return this.nameLanguageDetectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nameLanguageDetectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNameLanguageDetectorDto: UpdateNameLanguageDetectorDto) {
    return this.nameLanguageDetectorService.update(+id, updateNameLanguageDetectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nameLanguageDetectorService.remove(+id);
  }
}
