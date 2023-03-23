import { Injectable } from '@nestjs/common';
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';

const provider = new JsonRpcProvider(devnetConnection);

@Injectable()
export class SuiService {
    getSequenceNumber(): any {
        return provider.getLatestCheckpointSequenceNumber()
    }
}
