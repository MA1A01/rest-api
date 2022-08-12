import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from '../database/database.module';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';


@Module({
  imports: [DatabaseModule],
  providers: [...usuarioProviders, UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
