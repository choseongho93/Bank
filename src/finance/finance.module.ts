import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Module({})
export class FinanceModule {
    providers: [FinanceService]
}
