import { Test, TestingModule } from '@nestjs/testing';
import { SessoesController } from './sessoes.controller';
import { SessoesService } from './sessoes.service';

describe('SessoesController', () => {
  let controller: SessoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessoesController],
      providers: [SessoesService],
    }).compile();

    controller = module.get<SessoesController>(SessoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
