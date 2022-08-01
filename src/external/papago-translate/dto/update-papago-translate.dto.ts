import { PartialType } from '@nestjs/mapped-types';
import { CreatePapagoTranslateDto } from './create-papago-translate.dto';

export class UpdatePapagoTranslateDto extends PartialType(CreatePapagoTranslateDto) {}
