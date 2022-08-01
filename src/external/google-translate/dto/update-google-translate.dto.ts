import { PartialType } from '@nestjs/mapped-types';
import { CreateGoogleTranslateDto } from './create-google-translate.dto';

export class UpdateGoogleTranslateDto extends PartialType(CreateGoogleTranslateDto) {}
