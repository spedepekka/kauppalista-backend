import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

/**
 * This module provides overall information about the system.
 */
@Module({
  controllers: [InfoController],
  providers: [InfoService]
})
export class InfoModule {}
