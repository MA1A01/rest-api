import { Module } from '@nestjs/common';
import { PersonsModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PersonsModule, TypeOrmModule.forRoot(), UsuarioModule],
})
export class AppModule {}
