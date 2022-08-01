import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FragmentsTranslatorService } from './fragments-translator.service';
import { CreateFragmentsTranslatorDto } from './dto/create-fragments-translator.dto';
import { UpdateFragmentsTranslatorDto } from './dto/update-fragments-translator.dto';

@Controller('fragments-translator')
export class FragmentsTranslatorController {
  constructor(private readonly fragmentsTranslatorService: FragmentsTranslatorService) {}

  @Post()
  create(@Body() createFragmentsTranslatorDto: CreateFragmentsTranslatorDto) {
    return this.fragmentsTranslatorService.create(createFragmentsTranslatorDto);
  }

  @Get()
  findAll() {
    return this.fragmentsTranslatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fragmentsTranslatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFragmentsTranslatorDto: UpdateFragmentsTranslatorDto) {
    return this.fragmentsTranslatorService.update(+id, updateFragmentsTranslatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fragmentsTranslatorService.remove(+id);
  }
}
