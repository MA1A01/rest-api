import { Module } from '@nestjs/common';
import { PersonsModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [PersonsModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
