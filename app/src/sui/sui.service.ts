import { Injectable } from '@nestjs/common';
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';

const provider = new JsonRpcProvider(devnetConnection);

@Injectable()
export class SuiService {
    getLatestBlock(): any {
        return provider.getLatestCheckpointSequenceNumber()
    }
}
