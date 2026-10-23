import { Module } from '@nestjs/common';
import { CashAccountsController } from './cash-accounts.controller.js';
import { CashAccountsService } from './cash-accounts.service.js';

@Module({
  controllers: [CashAccountsController],
  providers: [CashAccountsService]
})
export class CashAccountsModule {}
