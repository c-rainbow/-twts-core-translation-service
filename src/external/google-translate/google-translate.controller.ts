import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoogleTranslateService } from './google-translate.service';
import { CreateGoogleTranslateDto } from './dto/create-google-translate.dto';
import { UpdateGoogleTranslateDto } from './dto/update-google-translate.dto';

@Controller('google-translate')
export class GoogleTranslateController {
  constructor(private readonly googleTranslateService: GoogleTranslateService) {}

  @Post()
  create(@Body() createGoogleTranslateDto: CreateGoogleTranslateDto) {
    return this.googleTranslateService.create(createGoogleTranslateDto);
  }

  @Get()
  findAll() {
    return this.googleTranslateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.googleTranslateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoogleTranslateDto: UpdateGoogleTranslateDto) {
    return this.googleTranslateService.update(+id, updateGoogleTranslateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.googleTranslateService.remove(+id);
  }
}
