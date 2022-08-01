import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FragmentsClassifierService } from './fragments-classifier.service';
import { CreateFragmentsClassifierDto } from './dto/create-fragments-classifier.dto';
import { UpdateFragmentsClassifierDto } from './dto/update-fragments-classifier.dto';

@Controller('fragments-classifier')
export class FragmentsClassifierController {
  constructor(private readonly fragmentsClassifierService: FragmentsClassifierService) {}

  @Post()
  create(@Body() createFragmentsClassifierDto: CreateFragmentsClassifierDto) {
    return this.fragmentsClassifierService.create(createFragmentsClassifierDto);
  }

  @Get()
  findAll() {
    return this.fragmentsClassifierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fragmentsClassifierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFragmentsClassifierDto: UpdateFragmentsClassifierDto) {
    return this.fragmentsClassifierService.update(+id, updateFragmentsClassifierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fragmentsClassifierService.remove(+id);
  }
}
