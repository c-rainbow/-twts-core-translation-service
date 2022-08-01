import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PapagoTranslateService } from './papago-translate.service';
import { CreatePapagoTranslateDto } from './dto/create-papago-translate.dto';
import { UpdatePapagoTranslateDto } from './dto/update-papago-translate.dto';

@Controller('papago-translate')
export class PapagoTranslateController {
  constructor(private readonly papagoTranslateService: PapagoTranslateService) {}

  @Post()
  create(@Body() createPapagoTranslateDto: CreatePapagoTranslateDto) {
    return this.papagoTranslateService.create(createPapagoTranslateDto);
  }

  @Get()
  findAll() {
    return this.papagoTranslateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.papagoTranslateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePapagoTranslateDto: UpdatePapagoTranslateDto) {
    return this.papagoTranslateService.update(+id, updatePapagoTranslateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.papagoTranslateService.remove(+id);
  }
}
