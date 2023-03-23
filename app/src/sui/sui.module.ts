import { Module } from '@nestjs/common';
import { SuiController } from './sui.controller';

@Module({
  controllers: [SuiController]
})
export class SuiModule {}
