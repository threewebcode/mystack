import { Controller, Get } from '@nestjs/common';
import { SuiService } from './sui.service';

@Controller('sui')
export class SuiController {
    constructor(private suiService: SuiService){}

    @Get("block/latest")
    getLatestBlock(): any {
        return this.suiService.getLatestBlock()
    }
}
