import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column('text')
  datanasc: Date;

  @Column({ length: 100 })
  period: string;

  @Column({ length: 100})
  curso: string;

  @Column()
  datacad: Date;
}
