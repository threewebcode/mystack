import { Module } from '@nestjs/common';
import { SuiController } from './sui.controller';
import { SuiService } from './sui.service';

@Module({
  controllers: [SuiController],
  providers: [SuiService]
})
export class SuiModule {}
