import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { GroceriesModule } from './groceries/groceries.module';

@Module({
  imports: [InfoModule, GroceriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
