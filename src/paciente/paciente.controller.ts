import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';

@Controller('paciente')
export class PacienteController {

    @Get()
    findAll(): string {
        return 'Devolver la lista de pacientes';
    }

    @Get(':id')
    findOne(@Param() params): string{
        console.log(params.id);
        return `La id del paciente es ${params.id}`;
    }

    @Post()
    @HttpCode(201)
    create() {
        return 'Paciente creado';
    }

    @Put(':id')
    update(@Param('id') id:number):string {
        return `Paciente con id# ${id} actualizado`;
    }

    @Delete(':id')
    remove (@Param('id') id:number): string {
        return `El paciente con id# ${id} ha sido eliminado`;
    }

}
