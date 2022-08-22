import { Test, TestingModule } from '@nestjs/testing';
import { ignoreElements } from 'rxjs';
import { NameLangDetectService } from './langdetect.service';

describe('NameLangDetectService', () => {
  let service: NameLangDetectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NameLangDetectService],
    }).compile();

    service = module.get<NameLangDetectService>(NameLangDetectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should correctly identify Korean display names as Korean', () => {
    expect(service.isKorean('영감1')).toBe(true);
    expect(service.isKorean('만공자')).toBe(true);
    expect(service.isKorean('uniquekey707')).toBe(false);
    expect(service.isKorean('wildwestrom')).toBe(false);
  });

  it('Should correctly identify Chinese-looking display names as Chinese', () => {
    expect(service.isChinese('你的声音真好听')).toBe(true);
    expect(service.isChinese('看在眼里记在心里')).toBe(true);
    expect(service.isChinese('一')).toBe(true);
    expect(service.isChinese('届いてくれるといいな')).toBe(false);
    expect(service.isChinese('c_rainbow')).toBe(false);
    
  });

  it('Should correctly identify Japanese-looking display names as Japanese', () => {
    

    // Display name with Japanese characters are Japanese
    expect(service.isJapanese('届いてくれるといいな')).toBe(true);
    
    // Display name with only Chinese characters may be Japanese.
    expect(service.isJapanese('一')).toBe(true);

    // For now, simplified Chinese characters are Japanese-looking.
    // TODO: Fix this.
    expect(service.isJapanese('你的声音真好听')).toBe(true);
    expect(service.isJapanese('看在眼里记在心里')).toBe(true);

    // Non-japanese usernames
    expect(service.isJapanese('안녕하세요')).toBe(false);
    expect(service.isJapanese('c_rainbow')).toBe(false);
  });
});
