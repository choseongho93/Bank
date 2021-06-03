import { Injectable } from '@nestjs/common';
import * as yahooStockPricesFetch from 'yahoo-stock-prices-fetch';

@Injectable()
export class FinanceService {
    
    getAll(): string {
        const data = yahooStockPricesFetch.getHistoricalPrices(0, 6, 2020, 0, 8, 2020, 'AAPL', '1d');
        return "sss"+data;
    }
}
