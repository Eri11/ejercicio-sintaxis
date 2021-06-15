import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';

@Controller('especialidad')
export class EspecialidadController {
    @Get()
    findAll(): string {
        return 'Devolver la lista de especialidades';
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `La id de la especialidad es ${params.id}`;
    }


    @Post()
    @HttpCode(201)
    create() {
        return 'Especialidad creada';
    }

    @Put(':id')
    update(@Param('id') id: number): string {
        return `Especialiadad ${id} actualizada`;
    }

    @Delete(':id')
    remove(@Param('id') id: number): string {
        return `Especialidad ${id} eliminada`;
    }
}


