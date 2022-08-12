import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';
import { Repository } from 'typeorm';
import { PersonSchema } from 'src/schemas/person.schemas';

@Controller('/person')
export class personControllers {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) {}
  @Post()
  public async create(
    @Body() body: PersonSchema,
  ): Promise<{ data: PersonModel }> {
    const personCreated = await this.model.save(body);
    return { data: 'Create' };
  }
  @Get()
  public async getAll(): Promise<{ data: PersonModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }
  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PersonSchema,
  ): Promise<{ data: PersonModel }> {
    const person = await this.model.findOne({ where: { id } });

    if (!person) {
      throw new NotFoundException(`Nao achei a pessoa com o id ${id}`);
    }

    await this.model.update({ id }, body);
    return { data: await this.model.findOne({ where: { id } }) };
  }
  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: string }> {
    const person = await this.model.findOne({ where: { id } });

    if (!person) {
      throw new NotFoundException(`Nao achei a pessoa com o id ${id}`);
    }
    await this.model.delete(id);
    return { data: `A pessoa com o id ${id} foi deletada com sucesso!!` };
  }
}
