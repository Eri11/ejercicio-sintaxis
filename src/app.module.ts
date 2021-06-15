import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoController } from './medico/medico.controller';
import { EspecialidadController } from './especialidad/especialidad.controller';
import { PacienteController } from './paciente/paciente.controller';

@Module({
  imports: [],
  controllers: [AppController, MedicoController, EspecialidadController, PacienteController],
  providers: [AppService],
})
export class AppModule {}
