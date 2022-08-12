import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 120 })
  name: string;
  @Column('date')
  datanasc: Date;
  @Column({ length: 120 })
  period: string;
  @Column({ length: 120 })
  curso: string;
  @Column('date')
  datacad: Date;
}
