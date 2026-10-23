import { Test, TestingModule } from '@nestjs/testing';
import { CashAccountsService } from './cash-accounts.service.js';

describe('CashAccountsService', () => {
  let service: CashAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashAccountsService],
    }).compile();

    service = module.get<CashAccountsService>(CashAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
