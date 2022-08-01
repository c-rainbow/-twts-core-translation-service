import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NameTranslatorService } from './name-translator.service';
import { CreateNameTranslatorDto } from './dto/create-name-translator.dto';
import { UpdateNameTranslatorDto } from './dto/update-name-translator.dto';
@Controller('translate/display-name')
export class NameTranslatorController {
  constructor(private readonly nameTranslatorService: NameTranslatorService) {}

  @Post()
  create(@Body() createNameTranslatorDto: CreateNameTranslatorDto) {
    return this.nameTranslatorService.create(createNameTranslatorDto);
  }

  @Get()
  findAll() {
    return this.nameTranslatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nameTranslatorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNameTranslatorDto: UpdateNameTranslatorDto,
  ) {
    return this.nameTranslatorService.update(+id, updateNameTranslatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nameTranslatorService.remove(+id);
  }
}
