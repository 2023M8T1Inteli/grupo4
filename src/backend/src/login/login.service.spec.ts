import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';

// código teste
describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginService],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('deve ser definida', () => {
    expect(service).toBeDefined();
  });

  it('as credenciais devem ser corretas', async () => {
    const mockUser = {
      email: 'terapeuta@gmail.com',
      senha: 'euTerapeuta@1990',
    };

    const validatedUser = await service.validateTerapeuta(mockUser.email, 'senha-correta');

    expect(validatedUser).toBeDefined();
    expect(validatedUser.email).toBe(mockUser.email);
  });

  it('credenciais incorretas', async () => {
    const mockUser = {
      email: 'terapeuta@gmail.com',
      senha: 'euTerapeuta@1990',
    };

    const validatedUser = await service.validateTerapeuta(mockUser.email, 'senha-incorreta');

    expect(validatedUser).toBeNull();
  });
});
