import { Test, TestingModule } from '@nestjs/testing';
import { SessoesService } from './sessoes.service';

describe('SessoesService', () => {
  let service: SessoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessoesService],
    }).compile();

    service = module.get<SessoesService>(SessoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
