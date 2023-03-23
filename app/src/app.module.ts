import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuiModule } from './sui/sui.module';

@Module({
  imports: [SuiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
