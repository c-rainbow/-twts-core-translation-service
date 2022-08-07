import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PronunciationsModule } from './pronunciations/pronunciations.module';
import { EmotesModule } from './external/emotes/emotes.module';
import { GoogleTranslateModule } from './external/google-translate/google-translate.module';
import { NameTranslateModule } from './usernames/translate/translate.module';
import { NameLangDetectModule } from './usernames/langdetect/langdetect.module';
import { ChatFragmentsModule } from './chats/fragments/fragments.module';
import { ChatLangDetectModule } from './chats/langdetect/langdetect.module';
import { ChatTranslateModule } from './chats/translate/translate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Modules for external services
    EmotesModule,
    GoogleTranslateModule,

    // Pronunciation related modules
    PronunciationsModule,

    // Display name related modules
    NameLangDetectModule,
    NameTranslateModule,

    // Chat message related modules
    ChatFragmentsModule,
    ChatLangDetectModule,
    ChatTranslateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
