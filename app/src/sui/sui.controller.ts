import { Controller, Get } from '@nestjs/common';
import { SuiService } from './sui.service';

@Controller('sui')
export class SuiController {
    constructor(private suiService: SuiService){}

    @Get("sequence")
    getSequenceNumber(): any {
        return this.suiService.getSequenceNumber()
    }
}
