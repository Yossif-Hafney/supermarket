import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { SuppliersModule } from './suppliers/suppliers.module.js';
import { PurchasesModule } from './purchases/purchases.module.js';
import { SupplierPaymentsModule } from './supplier-payments/supplier-payments.module.js';
import { StockModule } from './stock/stock.module.js';
import { SalesModule } from './sales/sales.module.js';
import { ExpensesModule } from './expenses/expenses.module.js';
import { CashAccountsModule } from './cash-accounts/cash-accounts.module.js';
import { DashboardModule } from './dashboard/dashboard.module.js';
import { ReportsModule } from './reports/reports.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'supermarket-api',
    }),
    ProductsModule,
    CategoriesModule,
    SuppliersModule,
    PurchasesModule,
    SupplierPaymentsModule,
    StockModule,
    SalesModule,
    ExpensesModule,
    CashAccountsModule,
    DashboardModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
