import { Test, TestingModule } from '@nestjs/testing';
import { CashAccountsController } from './cash-accounts.controller.js';

describe('CashAccountsController', () => {
  let controller: CashAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashAccountsController],
    }).compile();

    controller = module.get<CashAccountsController>(CashAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
