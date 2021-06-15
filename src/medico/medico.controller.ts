import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('medico')
export class MedicoController {
  //Codigo para atender las peticiones
  @Get()
  findAll(): string {
    return 'Devolver lista de medicos';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `La identificacion del medico es ${params.id}`;
  }

  @Post()
  @HttpCode(201)
  create() {
    return 'Agregando medico a la lista...';
  }

  @Put(':id')
  update(@Param('id') id: number): string {
    return `Actualizando informacion de medico # ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return `Eliminando a medico # ${id} de la lista...`;
  }
}
