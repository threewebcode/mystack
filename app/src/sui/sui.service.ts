import { Injectable } from '@nestjs/common';

@Injectable()
export class SuiService {
    getLatestBlock(): any {
        return "block"
    }
}
