import { Module } from '@nestjs/common';
import { FinanceController } from './finance/finance.controller';
import { FinanceService } from './finance/finance.service';
import { FinanceModule } from './finance/finance.module';

@Module({
  imports: [FinanceModule],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class AppModule {}
