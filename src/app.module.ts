import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoController } from './medico/medico.controller';

@Module({
  imports: [],
  controllers: [AppController, MedicoController],
  providers: [AppService],
})
export class AppModule {}
