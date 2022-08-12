import { Module } from '@nestjs/common';
import { personControllers } from 'src/controllers/person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model'
@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [personControllers],
})
export class PersonsModule {}
